import { Search, Pin, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';

export function MemoryPanel() {
  const [search, setSearch] = useState('');
  const memories = [
    { id: 1, title: 'User Preferences', category: 'preference', pinned: true },
    { id: 2, title: 'Project Context', category: 'project', pinned: true },
    { id: 3, title: 'Important Instructions', category: 'system', pinned: false },
  ];

  return (
    <div className="p-3 space-y-3">
      <div className="relative">
        <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-phoenix-muted" />
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search memory..."
          className="w-full bg-phoenix-bg border border-phoenix-border rounded-lg pl-8 pr-3 py-1.5 text-xs text-phoenix-text placeholder:text-phoenix-muted/50 focus:outline-none focus:border-phoenix-ember/50"
        />
      </div>
      <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-phoenix-ember/10 text-phoenix-ember text-xs hover:bg-phoenix-ember/20 transition-colors">
        <Plus size={14} /> New Memory
      </button>
      <div className="space-y-1">
        {memories.filter(m => m.title.toLowerCase().includes(search.toLowerCase())).map(m => (
          <div key={m.id} className="group flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-phoenix-elevated cursor-pointer transition-colors">
            {m.pinned && <Pin size={10} className="text-phoenix-gold shrink-0" />}
            <div className="flex-1 min-w-0">
              <div className="text-xs text-phoenix-text truncate">{m.title}</div>
              <div className="text-[10px] text-phoenix-muted capitalize">{m.category}</div>
            </div>
            <button className="opacity-0 group-hover:opacity-100 text-phoenix-muted hover:text-phoenix-error"><Trash2 size={10} /></button>
          </div>
        ))}
      </div>
      <p className="text-[10px] text-phoenix-muted/50 text-center">Memory data from PHOENIX server</p>
    </div>
  );
}
