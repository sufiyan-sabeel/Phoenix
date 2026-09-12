import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { ChatArea } from './ChatArea';
import { MemoryPanel } from './MemoryPanel';
import { MCPPanel } from './MCPPanel';
import { SettingsPanel } from './SettingsPanel';
import { Menu, X } from 'lucide-react';

interface Props {
  phoenix: ReturnType<typeof import('../hooks/usePhoenix').usePhoenix>;
}

export function ChatApp({ phoenix }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [rightPanel, setRightPanel] = useState<'none' | 'memory' | 'mcp' | 'settings'>('none');

  return (
    <div className="h-screen flex overflow-hidden">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <div className={`fixed lg:static inset-y-0 left-0 z-50 w-72 transform transition-transform duration-200 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <Sidebar
          phoenix={phoenix}
          onClose={() => setSidebarOpen(false)}
          onPanel={(p) => { setRightPanel(p); setSidebarOpen(false); }}
        />
      </div>

      {/* Main chat */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-12 border-b border-phoenix-border bg-phoenix-surface/80 backdrop-blur-xl flex items-center justify-between px-4 shrink-0">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-phoenix-muted hover:text-phoenix-text transition-colors">
              <Menu size={20} />
            </button>
            <div className="flex items-center gap-2">
              <span className="font-display font-semibold text-sm">PHOENIX</span>
              <span className="flex items-center gap-1.5 text-xs">
                <span className={`w-1.5 h-1.5 rounded-full ${phoenix.connectionState === 'connected' ? 'bg-phoenix-success animate-pulse-dot' : 'bg-phoenix-error'}`} />
                <span className="text-phoenix-muted font-code">
                  {phoenix.connectionState === 'connected' ? 'Connected' : 'Offline'}
                </span>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {phoenix.serverStatus && (
              <span className="text-xs text-phoenix-muted font-code hidden sm:block mr-2">
                {phoenix.serverStatus.provider}/{phoenix.serverStatus.model}
              </span>
            )}
            <button onClick={() => setRightPanel(rightPanel === 'memory' ? 'none' : 'memory')} className={`p-1.5 rounded-lg text-xs transition-colors ${rightPanel === 'memory' ? 'bg-phoenix-ember/10 text-phoenix-ember' : 'text-phoenix-muted hover:text-phoenix-text hover:bg-phoenix-elevated'}`} title="Memory">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/><path d="M12 6v6l4 2"/></svg>
            </button>
            <button onClick={() => setRightPanel(rightPanel === 'mcp' ? 'none' : 'mcp')} className={`p-1.5 rounded-lg text-xs transition-colors ${rightPanel === 'mcp' ? 'bg-phoenix-ember/10 text-phoenix-ember' : 'text-phoenix-muted hover:text-phoenix-text hover:bg-phoenix-elevated'}`} title="MCP">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v4m0 14v4m-9.5-11H7m10 0h4.5M4.2 4.2l2.8 2.8m10 10 2.8 2.8M4.2 19.8l2.8-2.8m10-10 2.8-2.8"/></svg>
            </button>
            <button onClick={() => setRightPanel(rightPanel === 'settings' ? 'none' : 'settings')} className={`p-1.5 rounded-lg text-xs transition-colors ${rightPanel === 'settings' ? 'bg-phoenix-ember/10 text-phoenix-ember' : 'text-phoenix-muted hover:text-phoenix-text hover:bg-phoenix-elevated'}`} title="Settings">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            </button>
          </div>
        </header>

        {/* Content area */}
        <div className="flex-1 flex min-h-0">
          <ChatArea phoenix={phoenix} />
          
          {/* Right panels */}
          {rightPanel !== 'none' && (
            <div className="w-80 border-l border-phoenix-border bg-phoenix-surface hidden md:block overflow-y-auto">
              <div className="flex items-center justify-between p-3 border-b border-phoenix-border">
                <span className="font-display font-semibold text-sm capitalize">{rightPanel}</span>
                <button onClick={() => setRightPanel('none')} className="text-phoenix-muted hover:text-phoenix-text"><X size={16} /></button>
              </div>
              {rightPanel === 'memory' && <MemoryPanel />}
              {rightPanel === 'mcp' && <MCPPanel phoenix={phoenix} />}
              {rightPanel === 'settings' && <SettingsPanel phoenix={phoenix} />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
