import { motion } from 'framer-motion'
import { Terminal, Smartphone, Puzzle } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

export default function Architecture() {
  return (
    <section className="py-16 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="03 / ARCHITECTURE"
          title="Decoupled. Extensible. Lightweight."
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Upstream providers */}
          <div className="text-center mb-8">
            <p className="text-[10px] font-mono font-semibold text-ghost uppercase tracking-widest mb-4">
              UPSTREAM AI PROVIDERS
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['OpenRouter (Multi-Model)', 'Groq (Ultra-low Latency)', 'Ollama (Local Offline LLM)'].map(
                (provider) => (
                  <div
                    key={provider}
                    className="px-4 py-2 rounded-lg border border-border bg-surface text-sm font-mono text-muted"
                  >
                    {provider}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Arrow down */}
          <div className="flex justify-center my-4">
            <div className="w-px h-8 bg-border" />
          </div>

          {/* Core */}
          <div className="flex justify-center mb-4">
            <div className="px-6 py-4 rounded-xl border-2 border-ember/30 bg-ember/5 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="text-ember font-mono text-xs">memory</span>
              </div>
              <div className="font-heading font-bold text-text">PHOENIX CORE</div>
              <div className="text-xs font-mono text-ghost">v1.0.0 [Python]</div>
              <p className="text-muted text-xs mt-2 max-w-sm">
                Dispatches prompts, formats context trees, manages sandboxed executions, and monitors latency.
              </p>
            </div>
          </div>

          {/* Arrow down */}
          <div className="flex justify-center my-4">
            <div className="w-px h-8 bg-border" />
          </div>

          {/* Subsystems */}
          <div className="text-center mb-2">
            <p className="text-[10px] font-mono font-semibold text-ghost uppercase tracking-widest mb-4">
              SUBSYSTEM EXECUTION
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto">
            {[
              { icon: <Terminal size={16} />, label: 'Terminal Engine & PTY' },
              { icon: <Smartphone size={16} />, label: 'Android ADB & Termux API' },
              { icon: <Puzzle size={16} />, label: 'Extension Sandbox' },
            ].map((sub) => (
              <div
                key={sub.label}
                className="p-3 rounded-lg border border-border bg-surface text-center"
              >
                <div className="text-ember flex justify-center mb-1">{sub.icon}</div>
                <div className="text-[10px] font-mono text-muted leading-tight">{sub.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
