import { cn } from '../lib/utils'
import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  className?: string
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-medium rounded transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember/50 active:scale-[0.98]'

  const variants = {
    primary: 'bg-ember text-bg font-mono text-sm font-medium hover:bg-ember-hover shadow-[0_0_12px_rgba(255,106,0,0.3)]',
    secondary:
      'bg-transparent border border-border text-text text-sm font-medium hover:bg-elevated hover:border-border-active',
    ghost: 'text-muted text-sm font-medium hover:text-text hover:bg-surface',
  }

  const sizes = {
    sm: 'px-2.5 py-1 text-xs gap-1.5',
    md: 'px-3 py-1.5 text-sm gap-1.5',
    lg: 'px-4 py-2 text-sm gap-2',
  }

  const classes = cn(base, variants[variant], sizes[size], className)

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
