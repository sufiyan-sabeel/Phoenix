import { useState } from 'react';
import { Plus, Search, MessageSquare, Trash2, X, MemoryStick, Plug, Settings, Power } from 'lucide-react';

interface Props {
  phoenix: ReturnType<typeof import('../hooks/usePhoenix').usePhoenix>;
  onClose: () => void;
  onPanel: (panel: 'memory' | 'mcp' | 'settings') => void;
}

export function Sidebar({ phoenix, onClose, onPanel }: Props) {
  const [search, setSearch] = useState('');

  const filtered = phoenix.conversations.filter(c =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="h-full flex flex-col bg-phoenix-surface border-r border-phoenix-border">
      {/* Header */}
      <div className="p-3 border-b border-phoenix-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5" viewBox="0 0 100 100" fill="none">
            <rect width="100" height="100" rx="20" fill="#08090B"/>
            <path d="M50 12 C60 26 72 38 72 52 C72 66 62 76 50 76 C38 76 28 66 28 52 C28 38 40 26 50 12Z" fill="#FF6A00"/>
            <circle cx="50" cy="52" r="5" fill="#fff"/>
          </svg>
          <span className="font-display font-semibold text-sm">PHOENIX</span>
        </div>
        <button onClick={onClose} className="lg:hidden text-phoenix-muted hover:text-phoenix-text"><X size={18} /></button>
      </div>

      {/* New Chat */}
      <div className="p-3">
        <button onClick={() => { phoenix.newChat(); onClose(); }} className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-phoenix-ember/10 text-phoenix-ember hover:bg-phoenix-ember/20 transition-colors text-sm font-medium">
          <Plus size={16} /> New Chat
        </button>
      </div>

      {/* Search */}
      <div className="px-3 pb-2">
        <div className="relative">
          <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-phoenix-muted" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search chats..."
            className="w-full bg-phoenix-bg border border-phoenix-border rounded-lg pl-8 pr-3 py-1.5 text-xs text-phoenix-text placeholder:text-phoenix-muted/50 focus:outline-none focus:border-phoenix-ember/50"
          />
        </div>
      </div>

      {/* Chat list */}
      <div className="flex-1 overflow-y-auto px-2 space-y-0.5">
        {filtered.map(conv => (
          <div
            key={conv.id}
            onClick={() => { phoenix.selectChat(conv.id); onClose(); }}
            className={`group flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-colors ${phoenix.activeId === conv.id ? 'bg-phoenix-elevated text-phoenix-text' : 'text-phoenix-muted hover:bg-phoenix-elevated/50 hover:text-phoenix-text'}`}
          >
            <MessageSquare size={14} className="shrink-0" />
            <span className="text-sm truncate flex-1">{conv.title || 'New Chat'}</span>
            <button
              onClick={e => { e.stopPropagation(); phoenix.deleteChat(conv.id); }}
              className="opacity-0 group-hover:opacity-100 text-phoenix-muted hover:text-phoenix-error transition-all"
            >
              <Trash2 size={12} />
            </button>
          </div>
        ))}
      </div>

      {/* Bottom nav */}
      <div className="border-t border-phoenix-border p-2 space-y-0.5">
        <button onClick={() => onPanel('memory')} className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-phoenix-muted hover:bg-phoenix-elevated hover:text-phoenix-text text-sm transition-colors">
          <MemoryStick size={16} /> Memory
        </button>
        <button onClick={() => onPanel('mcp')} className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-phoenix-muted hover:bg-phoenix-elevated hover:text-phoenix-text text-sm transition-colors">
          <Plug size={16} /> MCP Connectors
        </button>
        <button onClick={() => onPanel('settings')} className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-phoenix-muted hover:bg-phoenix-elevated hover:text-phoenix-text text-sm transition-colors">
          <Settings size={16} /> Settings
        </button>
      </div>

      {/* Server status */}
      <div className="border-t border-phoenix-border p-3">
        <div className="flex items-center gap-2">
          <Power size={12} className={phoenix.connectionState === 'connected' ? 'text-phoenix-success' : 'text-phoenix-error'} />
          <span className="text-xs text-phoenix-muted font-code">
            {phoenix.connectionState === 'connected' ? 'Server Connected' : 'Server Offline'}
          </span>
        </div>
      </div>
    </div>
  );
}
