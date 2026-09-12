import { useState, useCallback, useRef, useEffect } from 'react';
import type { Message, Conversation, ServerStatus, ConnectionState, MCPConnection } from '../types/phoenix';
import { PhoenixAPI } from '../services/phoenix-api';

const STORAGE_KEY = 'phoenix_server_url';
const HISTORY_KEY = 'phoenix_local_history';

export function usePhoenix() {
  const [serverUrl, setServerUrl] = useState(() => localStorage.getItem(STORAGE_KEY) || 'http://127.0.0.1:5000');
  const [connectionState, setConnectionState] = useState<ConnectionState>('disconnected');
  const [serverStatus, setServerStatus] = useState<ServerStatus | null>(null);
  const [conversations, setConversations] = useState<Conversation[]>(() => {
    try { return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]'); } catch { return []; }
  });
  const [activeId, setActiveId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [mcpConnections, setMcpConnections] = useState<MCPConnection[]>([]);
  const abortRef = useRef<AbortController | null>(null);
  const apiRef = useRef<PhoenixAPI>(new PhoenixAPI(serverUrl));

  useEffect(() => {
    apiRef.current = new PhoenixAPI(serverUrl);
    localStorage.setItem(STORAGE_KEY, serverUrl);
  }, [serverUrl]);

  useEffect(() => {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(conversations));
  }, [conversations]);

  const testConnection = useCallback(async () => {
    setConnectionState('connecting');
    try {
      const status = await apiRef.current.checkStatus();
      setServerStatus(status);
      setConnectionState('connected');
      return true;
    } catch {
      setConnectionState('disconnected');
      setServerStatus(null);
      return false;
    }
  }, []);

  const loadHistory = useCallback(async () => {
    try {
      const history = await apiRef.current.loadHistory();
      if (history.length > 0) {
        setConversations(prev => {
          const merged = [...prev];
          for (const conv of history) {
            if (!merged.find(m => m.id === conv.id)) merged.push(conv);
          }
          return merged;
        });
      }
    } catch {}
  }, []);

  const syncHistory = useCallback(async () => {
    try { await apiRef.current.syncHistory(conversations); } catch {}
  }, [conversations]);

  const newChat = useCallback(() => {
    const id = `chat-${Date.now()}`;
    const conv: Conversation = { id, title: 'New Chat', messages: [], createdAt: new Date().toISOString() };
    setConversations(prev => [conv, ...prev]);
    setActiveId(id);
    setMessages([]);
  }, []);

  const selectChat = useCallback((id: string) => {
    setActiveId(id);
    const conv = conversations.find(c => c.id === id);
    setMessages(conv?.messages || []);
  }, [conversations]);

  const deleteChat = useCallback((id: string) => {
    setConversations(prev => prev.filter(c => c.id !== id));
    if (activeId === id) { setActiveId(null); setMessages([]); }
  }, [activeId]);

  const sendMessage = useCallback(async (content: string, files?: { name: string; path: string }[]) => {
    let userMsg: Message = { role: 'user', content };
    if (files?.length) {
      const fileRefs = files.map(f => `[File: ${f.name}]`).join(' ');
      userMsg = { role: 'user', content: `${fileRefs}\n\n${content}` };
    }
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setIsLoading(true);
    setIsStreaming(true);

    // Update conversation
    if (activeId) {
      setConversations(prev => prev.map(c =>
        c.id === activeId ? { ...c, messages: newMessages, title: newMessages.length === 1 ? content.slice(0, 50) : c.title } : c
      ));
    }

    let assistantContent = '';
    try {
      const stream = apiRef.current.chatStream(newMessages);
      for await (const chunk of stream) {
        assistantContent += chunk;
        setMessages([...newMessages, { role: 'assistant', content: assistantContent }]);
      }
    } catch (err: any) {
      assistantContent = `Error: ${err.message || 'Failed to get response'}`;
      setMessages([...newMessages, { role: 'assistant', content: assistantContent }]);
    } finally {
      setIsLoading(false);
      setIsStreaming(false);
      abortRef.current = null;
    }

    // Update conversation with final messages
    const finalMessages = [...newMessages, { role: 'assistant' as const, content: assistantContent }];
    if (activeId) {
      setConversations(prev => prev.map(c =>
        c.id === activeId ? { ...c, messages: finalMessages } : c
      ));
    }
  }, [messages, activeId]);

  const stopStreaming = useCallback(() => {
    abortRef.current?.abort();
    setIsLoading(false);
    setIsStreaming(false);
  }, []);

  const loadMCP = useCallback(async () => {
    try { setMcpConnections(await apiRef.current.listMCP()); } catch {}
  }, []);

  const uploadFile = useCallback(async (file: File) => {
    return apiRef.current.uploadFile(file);
  }, []);

  return {
    serverUrl, setServerUrl,
    connectionState, serverStatus,
    conversations, activeId, messages,
    isLoading, isStreaming,
    mcpConnections,
    testConnection, loadHistory, syncHistory,
    newChat, selectChat, deleteChat,
    sendMessage, stopStreaming,
    loadMCP, uploadFile,
    setActiveId, setMessages,
  };
}
