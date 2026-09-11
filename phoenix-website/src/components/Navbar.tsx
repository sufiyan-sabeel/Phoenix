import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Terminal } from 'lucide-react'
import Github from './Github'
import { cn } from '../lib/utils'

const navLinks = [
  { label: 'Features', href: '/#features' },
  { label: 'Docs', href: '/docs/getting-started' },
  { label: 'Install', href: '/#install' },
  { label: 'Roadmap', href: '/#roadmap' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-200',
        scrolled
          ? 'bg-bg/90 backdrop-blur-xl border-b border-border'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded bg-ember/10 border border-ember/20 flex items-center justify-center group-hover:bg-ember/20 transition-colors">
              <Terminal size={14} className="text-ember" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-sm text-text tracking-tight leading-none">
                PHOENIX
              </span>
              <span className="text-[10px] font-mono text-ghost uppercase tracking-widest">
                TERMINAL CLI
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'px-3 py-1.5 text-sm font-medium rounded transition-colors',
                  location.pathname === link.href
                    ? 'text-ember bg-ember/10'
                    : 'text-muted hover:text-text hover:bg-surface'
                )}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://github.com/sufiyan-sabeel/Phoenix"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 p-1.5 text-muted hover:text-text rounded hover:bg-surface transition-colors"
            >
              <Github size={16} />
            </a>
            <Link
              to="/docs/getting-started"
              className="ml-2 px-3 py-1.5 text-sm font-medium bg-ember text-bg rounded hover:bg-ember-hover transition-colors"
            >
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-1.5 text-muted hover:text-text rounded"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-surface border-b border-border">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block px-3 py-2 text-sm font-medium text-muted hover:text-text hover:bg-elevated rounded transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://github.com/sufiyan-sabeel/Phoenix"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted hover:text-text hover:bg-elevated rounded transition-colors"
            >
              <Github size={14} />
              GitHub
            </a>
            <Link
              to="/docs/getting-started"
              className="block px-3 py-2 text-sm font-medium bg-ember text-bg rounded text-center mt-2"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
