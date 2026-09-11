import { Link } from 'react-router-dom'
import { Terminal } from 'lucide-react'
import Github from './Github'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded bg-ember/10 border border-ember/20 flex items-center justify-center">
                <Terminal size={12} className="text-ember" />
              </div>
              <span className="font-heading font-bold text-sm text-text">PHOENIX</span>
            </div>
            <p className="text-muted text-sm max-w-xs leading-relaxed">
              Open-source AI coding & automation CLI for Termux, Linux, and Android workflows.
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <h4 className="text-[10px] font-mono font-semibold text-ghost uppercase tracking-widest mb-3">
                Product
              </h4>
              <ul className="space-y-1.5">
                <li><Link to="/#features" className="text-muted text-sm hover:text-text transition-colors">Features</Link></li>
                <li><Link to="/docs/getting-started" className="text-muted text-sm hover:text-text transition-colors">Documentation</Link></li>
                <li><Link to="/#install" className="text-muted text-sm hover:text-text transition-colors">Installation</Link></li>
                <li><Link to="/#roadmap" className="text-muted text-sm hover:text-text transition-colors">Roadmap</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-mono font-semibold text-ghost uppercase tracking-widest mb-3">
                Connect
              </h4>
              <ul className="space-y-1.5">
                <li>
                  <a
                    href="https://github.com/sufiyan-sabeel/Phoenix"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-muted text-sm hover:text-text transition-colors"
                  >
                    <Github size={12} />
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/sufiyan-sabeel/Phoenix/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted text-sm hover:text-text transition-colors"
                  >
                    Issues
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/sufiyan-sabeel/Phoenix/releases"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted text-sm hover:text-text transition-colors"
                  >
                    Releases
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-ghost text-xs font-mono">
            MIT License &copy; 2026 Umaiz Sufiyan
          </p>
          <div className="flex items-center gap-3">
            <span className="text-ghost text-xs font-mono">PHOENIX CLI</span>
            <span className="text-ghost text-xs">&bull;</span>
            <a
              href="https://github.com/sufiyan-sabeel/Phoenix/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ghost text-xs font-mono hover:text-muted transition-colors"
            >
              MIT
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
