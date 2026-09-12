import { useRef, useEffect } from 'react';
import { ChatMessage } from './ChatMessage';
import { ChatComposer } from './ChatComposer';
import { MessageSquare, Code, Bug, FolderOpen, Wrench, Plug, Zap } from 'lucide-react';

interface Props {
  phoenix: ReturnType<typeof import('../hooks/usePhoenix').usePhoenix>;
}

const shortcuts = [
  { icon: Code, label: 'Code', prompt: 'Help me write code for ' },
  { icon: Bug, label: 'Debug', prompt: 'Debug this error: ' },
  { icon: FolderOpen, label: 'Analyze Files', prompt: 'Analyze the files in my project: ' },
  { icon: Wrench, label: 'Run Tools', prompt: 'Run a terminal command: ' },
  { icon: Plug, label: 'Connect MCP', prompt: 'List my MCP connectors and their tools' },
  { icon: Zap, label: 'Automate', prompt: 'Create an automation for: ' },
];

export function ChatArea({ phoenix }: Props) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [phoenix.messages]);

  // Welcome screen
  if (phoenix.messages.length === 0) {
    return (
      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="text-center space-y-6 max-w-lg animate-fade-in">
            <svg className="w-14 h-14 mx-auto" viewBox="0 0 100 100" fill="none">
              <rect width="100" height="100" rx="20" fill="#101216"/>
              <path d="M50 12 C60 26 72 38 72 52 C72 66 62 76 50 76 C38 76 28 66 28 52 C28 38 40 26 50 12Z" fill="#FF6A00"/>
              <path d="M50 28 C55 36 61 44 61 52 C61 60 56 66 50 66 C44 66 39 60 39 52 C39 44 45 36 50 28Z" fill="#FFB347" opacity="0.6"/>
              <circle cx="50" cy="52" r="5" fill="#fff"/>
            </svg>
            <div>
              <h2 className="font-display text-2xl font-bold text-phoenix-text mb-2">PHOENIX</h2>
              <p className="text-phoenix-muted text-sm">Your AI-powered terminal companion.<br/>Ask PHOENIX to code, debug, automate, or work with your files.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {shortcuts.map(s => (
                <button
                  key={s.label}
                  onClick={() => phoenix.sendMessage(s.prompt)}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-phoenix-surface border border-phoenix-border hover:border-phoenix-ember/30 hover:bg-phoenix-elevated text-phoenix-muted hover:text-phoenix-text text-xs transition-all text-left"
                >
                  <s.icon size={14} className="text-phoenix-ember shrink-0" />
                  <span>{s.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        <ChatComposer phoenix={phoenix} />
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col min-h-0">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto py-6 px-4 space-y-6">
          {phoenix.messages.map((msg, i) => (
            <ChatMessage key={i} message={msg} />
          ))}
          {phoenix.isLoading && (
            <div className="flex items-center gap-2 text-phoenix-muted text-sm animate-fade-in">
              <div className="flex gap-1"><span className="w-1.5 h-1.5 rounded-full bg-phoenix-ember animate-bounce" style={{animationDelay:'0ms'}}/><span className="w-1.5 h-1.5 rounded-full bg-phoenix-ember animate-bounce" style={{animationDelay:'150ms'}}/><span className="w-1.5 h-1.5 rounded-full bg-phoenix-ember animate-bounce" style={{animationDelay:'300ms'}}/></div>
              <span className="font-code text-xs">PHOENIX is thinking...</span>
            </div>
          )}
          <div ref={bottomRef} />
        </div>
      </div>
      <ChatComposer phoenix={phoenix} />
    </div>
  );
}
