import type { Message, Conversation, ServerStatus, MCPConnection, UploadResult } from '../types/phoenix';

export class PhoenixAPI {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl.replace(/\/$/, '');
  }

  async checkStatus(): Promise<ServerStatus> {
    const res = await fetch(`${this.baseUrl}/api/status`);
    if (!res.ok) throw new Error('Server unavailable');
    return res.json();
  }

  async *chatStream(messages: Message[], isVoice = false): AsyncGenerator<string> {
    const res = await fetch(`${this.baseUrl}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages, is_voice: isVoice }),
    });
    if (!res.ok) throw new Error('Chat request failed');
    const reader = res.body!.getReader();
    const decoder = new TextDecoder();
    let buffer = '';
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() || '';
      for (const line of lines) {
        if (line.startsWith('data: ')) {
          yield line.slice(6);
        } else if (line.trim()) {
          yield line;
        }
      }
    }
  }

  async loadHistory(): Promise<Conversation[]> {
    const res = await fetch(`${this.baseUrl}/api/history/load`);
    if (!res.ok) throw new Error('Failed to load history');
    return res.json();
  }

  async syncHistory(conversations: Conversation[]): Promise<void> {
    await fetch(`${this.baseUrl}/api/history/sync`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(conversations),
    });
  }

  async uploadFile(file: File): Promise<UploadResult> {
    const form = new FormData();
    form.append('file', file);
    const res = await fetch(`${this.baseUrl}/api/upload`, { method: 'POST', body: form });
    if (!res.ok) throw new Error('Upload failed');
    return res.json();
  }

  async listMCP(): Promise<MCPConnection[]> {
    const res = await fetch(`${this.baseUrl}/api/mcp/list`);
    if (!res.ok) throw new Error('Failed to list MCP');
    return res.json();
  }

  async addMCP(data: { name: string; transport: string; url?: string; command?: string; headers?: Record<string, string> }): Promise<{ status: string; tools_count: number }> {
    const res = await fetch(`${this.baseUrl}/api/mcp/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Failed to add MCP');
    return res.json();
  }

  async removeMCP(name: string): Promise<void> {
    await fetch(`${this.baseUrl}/api/mcp/remove`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    });
  }

  async voiceTrigger(text?: string, speakOnDevice = false): Promise<{ response?: string; status?: string }> {
    const res = await fetch(`${this.baseUrl}/api/voice/trigger`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, speak_on_device: speakOnDevice }),
    });
    if (!res.ok) throw new Error('Voice trigger failed');
    return res.json();
  }

  async voiceSpeak(text: string): Promise<void> {
    await fetch(`${this.baseUrl}/api/voice/speak`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });
  }

  async voiceStop(): Promise<void> {
    await fetch(`${this.baseUrl}/api/voice/stop`);
  }

  getVoiceAudioUrl(text: string): string {
    return `${this.baseUrl}/api/voice/audio?text=${encodeURIComponent(text)}`;
  }
}
