import { CheckCircle } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'
import Github from '../components/Github'

export default function OpenSource() {
  return (
    <section className="py-16 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="DOCUMENTATION"
          title="Quickstart Guide"
        />

        <div className="max-w-2xl mx-auto mb-10">
          <div className="p-5 rounded-lg border border-border bg-surface space-y-4">
            <div className="space-y-2 text-sm text-muted leading-relaxed">
              <p>1. Export your API token or let PHOENIX manage secrets via keychain:</p>
              <div className="px-3 py-2 rounded bg-bg border border-border font-mono text-xs text-text">
                export OPENROUTER_API_KEY="sk-or-v1-..."
              </div>
              <p>2. Execute an interactive prompt or pipe command outputs:</p>
              <div className="px-3 py-2 rounded bg-bg border border-border font-mono text-xs text-text">
                git status | phoenix "summarize changes and suggest commit title"
              </div>
              <p>3. Generate executable shell scripts safely:</p>
              <div className="px-3 py-2 rounded bg-bg border border-border font-mono text-xs text-text">
                phoenix make-script "backup docker volumes daily at 2am"
              </div>
            </div>
          </div>
        </div>

        <SectionHeader
          eyebrow="FAVORITE"
          title="Built in the open"
          description="Free, fully open source, and built for hackers who live in the CLI."
        />

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <Button
            href="https://github.com/sufiyan-sabeel/Phoenix"
            variant="secondary"
            size="lg"
          >
            <Github size={14} />
            View on GitHub
          </Button>
          <Button href="/docs/getting-started" size="lg">
            Read Documentation
          </Button>
        </div>

        <div className="flex items-center justify-center gap-4 text-xs font-mono text-ghost">
          <div className="flex items-center gap-1.5">
            <CheckCircle size={10} className="text-success" />
            <span>OPEN SOURCE (MIT)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle size={10} className="text-ember" />
            <span>TERMUX READY</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle size={10} className="text-ember" />
            <span>MULTI-PROVIDER AI</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle size={10} className="text-ember" />
            <span>CLI FIRST</span>
          </div>
        </div>
      </div>
    </section>
  )
}
