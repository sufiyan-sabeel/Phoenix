import type { ReactNode } from 'react'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  command?: string
}

export default function FeatureCard({ icon, title, description, command }: FeatureCardProps) {
  return (
    <div className="group p-4 rounded-lg border border-border bg-surface hover:bg-elevated hover:border-ember/20 transition-all duration-200">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-8 h-8 rounded bg-ember/10 border border-ember/20 flex items-center justify-center text-ember flex-shrink-0 group-hover:bg-ember/20 transition-colors">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-heading font-semibold text-text text-sm mb-1">{title}</h3>
          <p className="text-muted text-sm leading-relaxed">{description}</p>
        </div>
      </div>
      {command && (
        <div className="mt-3 px-3 py-2 rounded bg-bg border border-border">
          <code className="text-xs font-mono text-ghost">{command}</code>
        </div>
      )}
    </div>
  )
}
