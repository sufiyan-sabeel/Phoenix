import { ArrowRight } from 'lucide-react'
import Button from '../components/Button'
import { Terminal } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="py-16 border-t border-border bg-surface/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-text mb-3">
            Ready to ignite your terminal?
          </h2>
          <p className="text-muted text-sm mb-6">
            Free, fully open source, and built for hackers who live in the CLI.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Button href="/docs/getting-started" size="lg">
              Install PHOENIX
              <ArrowRight size={14} />
            </Button>
            <Button href="/docs/getting-started" variant="secondary" size="lg">
              Read Documentation
            </Button>
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-ember/10 border border-ember/20 flex items-center justify-center">
              <Terminal size={12} className="text-ember" />
            </div>
            <span className="font-heading font-bold text-sm text-text">PHOENIX</span>
          </div>
          <p className="text-ghost text-xs font-mono text-center">
            &copy; 2026 PHOENIX CLI by Umaiz Sufiyan. MIT Licensed.
          </p>
          <div className="flex items-center gap-4">
            <a href="/docs/getting-started" className="text-ghost text-xs font-mono hover:text-muted transition-colors">
              Documentation
            </a>
            <a href="https://github.com/sufiyan-sabeel/Phoenix/releases" className="text-ghost text-xs font-mono hover:text-muted transition-colors">
              Changelog
            </a>
            <a href="https://github.com/sufiyan-sabeel/Phoenix" className="text-ghost text-xs font-mono hover:text-muted transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
