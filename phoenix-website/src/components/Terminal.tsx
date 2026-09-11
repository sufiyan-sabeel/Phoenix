import type { ReactNode } from 'react'

interface TerminalProps {
  title?: string
  children: ReactNode
  className?: string
}

export default function Terminal({ title = 'Terminal', children, className }: TerminalProps) {
  return (
    <div className={`rounded-lg border border-border bg-surface overflow-hidden ${className ?? ''}`}>
      <div className="flex items-center gap-2 px-3 py-2 bg-elevated border-b border-border">
        <div className="flex gap-1">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span className="text-[11px] text-ghost font-mono ml-1">{title}</span>
      </div>
      <div className="p-4 font-mono text-sm leading-relaxed">{children}</div>
    </div>
  )
}
