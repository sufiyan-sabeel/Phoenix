import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Button from '../components/Button'
import Github from '../components/Github'
import Terminal from '../components/Terminal'

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-ember)_0%,_transparent_50%)] opacity-[0.03]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="px-2 py-0.5 text-[10px] font-mono font-semibold text-ember bg-ember/10 border border-ember/20 rounded uppercase tracking-widest">
                OPEN SOURCE
              </span>
              <span className="px-2 py-0.5 text-[10px] font-mono font-semibold text-ghost bg-elevated border border-border rounded uppercase tracking-widest">
                v1.0.0
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-text leading-[1.1] mb-5 tracking-tight">
              Your AI-powered{' '}
              <span className="text-ember">terminal</span>{' '}
              companion.
            </h1>

            <p className="text-muted text-base leading-relaxed mb-6 max-w-md">
              Code, automate and build with PHOENIX directly from your terminal. Built for Android Termux, Linux, and remote shell environments.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <Button href="/docs/getting-started" size="lg">
                Install PHOENIX
                <ArrowRight size={14} />
              </Button>
              <Button
                href="https://github.com/sufiyan-sabeel/Phoenix"
                variant="secondary"
                size="lg"
              >
                <Github size={14} />
                View on GitHub
              </Button>
            </div>

            <p className="text-ghost text-xs font-mono">
              Architected & maintained by Umaiz Sufiyan
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <Terminal title="phoenix — session_01">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-ghost text-[10px] font-mono">PID: 4921</span>
                  <span className="text-ghost text-[10px] font-mono">splitscreen</span>
                </div>
                <div className="border-t border-border my-2" />
                <div className="flex items-center gap-2">
                  <span className="text-ember">&gt;</span>
                  <span className="text-text">phoenix</span>
                </div>
                <div className="p-3 rounded bg-bg border border-border mt-2">
                  <div className="text-ember font-heading font-bold text-sm mb-2">PHOENIX CLI v1.0.0</div>
                  <div className="space-y-1 text-xs font-mono">
                    <div className="flex justify-between">
                      <span className="text-ghost">Provider</span>
                      <span className="text-text">OpenRouter</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-ghost">Model</span>
                      <span className="text-text">openrouter/free</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-ghost">Status</span>
                      <span className="text-success flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-success" />
                        Ready
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-ember">&gt;</span>
                  <span className="text-ghost">Ask PHOENIX anything...</span>
                  <span className="w-1.5 h-3.5 bg-ember animate-pulse" />
                </div>
                <div className="border-t border-border my-2" />
                <div className="flex items-center gap-2">
                  <span className="text-ember">&gt;</span>
                  <span className="text-success text-xs">Running automated diagnostics...</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle size={12} className="text-success" />
                  <span className="text-muted">Termux API hooks verified</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle size={12} className="text-success" />
                  <span className="text-muted">Android ADB bridge detected</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle size={12} className="text-success" />
                  <span className="text-muted">Context memory indexed</span>
                </div>
              </div>
            </Terminal>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
