import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

interface CodeBlockProps {
  code: string
  label?: string
  showCopy?: boolean
}

export default function CodeBlock({ code, label, showCopy = true }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="group relative rounded-lg border border-border bg-surface overflow-hidden">
      {label && (
        <div className="flex items-center justify-between px-3 py-1.5 bg-elevated border-b border-border">
          <span className="text-[10px] text-ghost font-mono uppercase tracking-widest">{label}</span>
          {showCopy && (
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 text-[10px] font-mono text-ghost hover:text-muted transition-colors"
              aria-label="Copy command"
            >
              {copied ? (
                <>
                  <Check size={10} className="text-success" />
                  <span className="text-success">COPIED</span>
                </>
              ) : (
                <>
                  <Copy size={10} />
                  <span>COPY</span>
                </>
              )}
            </button>
          )}
        </div>
      )}
      <pre className="p-3 overflow-x-auto text-sm font-mono text-text leading-relaxed">
        <code>{code}</code>
      </pre>
      {!label && showCopy && (
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 p-1 rounded bg-elevated border border-border text-ghost hover:text-muted opacity-0 group-hover:opacity-100 transition-all"
          aria-label="Copy code"
        >
          {copied ? <Check size={12} className="text-success" /> : <Copy size={12} />}
        </button>
      )}
    </div>
  )
}
