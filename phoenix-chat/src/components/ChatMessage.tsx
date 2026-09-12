import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { User, Bot, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import type { Message } from '../types/phoenix';

interface Props { message: Message; }

export function ChatMessage({ message }: Props) {
  const [copied, setCopied] = useState(false);
  const isUser = message.role === 'user';

  const copyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`flex gap-3 animate-fade-in ${isUser ? 'flex-row-reverse' : ''}`}>
      <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${isUser ? 'bg-phoenix-elevated' : 'bg-phoenix-ember/10'}`}>
        {isUser ? <User size={14} className="text-phoenix-muted" /> : <Bot size={14} className="text-phoenix-ember" />}
      </div>
      <div className={`flex-1 min-w-0 ${isUser ? 'text-right' : ''}`}>
        <div className={`inline-block max-w-full text-left rounded-xl px-4 py-3 ${isUser ? 'bg-phoenix-ember text-white' : 'bg-phoenix-surface border border-phoenix-border text-phoenix-text'}`}>
          <ReactMarkdown
            className="prose prose-sm dark:prose-invert max-w-none prose-p:my-1 prose-pre:my-2 prose-code:text-phoenix-ember"
            components={{
              code({ inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                if (!inline && match) {
                  return (
                    <div className="relative group rounded-lg overflow-hidden border border-phoenix-border my-2">
                      <div className="flex items-center justify-between bg-phoenix-bg px-3 py-1.5 text-xs text-phoenix-muted font-code">
                        <span>{match[1]}</span>
                        <button onClick={() => copyCode(String(children).replace(/\n$/, ''))} className="hover:text-phoenix-ember transition-colors">
                          {copied ? <Check size={12} /> : <Copy size={12} />}
                        </button>
                      </div>
                      <SyntaxHighlighter style={oneDark} language={match[1]} PreTag="div" className="!bg-phoenix-bg !m-0 text-xs">
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    </div>
                  );
                }
                return <code className="bg-phoenix-bg/50 px-1.5 py-0.5 rounded text-phoenix-ember font-code text-xs" {...props}>{children}</code>;
              }
            }}
          >
            {message.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
