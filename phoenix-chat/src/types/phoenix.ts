export interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface Conversation {
  id: string;
  title: string;
  messages: Message[];
  createdAt?: string;
  updatedAt?: string;
}

export interface ServerStatus {
  provider: string;
  model: string;
  telegram_enabled: boolean;
  telegram_status: string;
  os_type: string;
  os_name: string;
}

export interface MCPConnection {
  name: string;
  transport: 'sse' | 'stdio';
  url?: string;
  status: 'connected' | 'offline';
  tools: MCPTool[];
  headers?: Record<string, string>;
}

export interface MCPTool {
  name: string;
  description: string;
  inputSchema?: Record<string, unknown>;
}

export interface UploadResult {
  status: string;
  filename: string;
  size_kb: number;
  path: string;
}

export type ConnectionState = 'connecting' | 'connected' | 'disconnected' | 'error';

export interface ChatState {
  conversations: Conversation[];
  activeConversationId: string | null;
  messages: Message[];
  isLoading: boolean;
  isStreaming: boolean;
  serverStatus: ServerStatus | null;
  connectionState: ConnectionState;
  serverUrl: string;
}
