import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import Terminal from '../components/Terminal'

export default function Showcase() {
  return (
    <section className="py-16 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="CLI SESSION"
          title="Automated refactor daemon"
          description="PHOENIX gives you a complete AI agent in your terminal."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Terminal title="phoenix-session // automated-refactor-daemon">
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-ghost text-[10px] font-mono">BUFFER: STREAMING</span>
              </div>
              <div className="border-t border-border my-2" />
              <div className="flex items-center gap-2">
                <span className="text-ember">&gt;</span>
                <span className="text-text">phoenix run --agent refactor --target ./services/android_bridge.py</span>
              </div>
              <div className="text-muted text-xs mt-2">[PHOENIX v1.0.0] Loading abstract syntax tree...</div>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-ember">&gt;</span>
                <span className="text-muted">Scanning project... Reading AST... 18 modules verified.</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-ember">&gt;</span>
                <span className="text-muted">Inspecting android_bridge.py: line 42</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-success">&#10003;</span>
                <span className="text-muted">Found potential memory leak in unbounded socket handler thread.</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-ember">&gt;</span>
                <span className="text-muted">Applying non-blocking asynchronous event loop patch...</span>
              </div>
              <div className="border-t border-border my-2" />
              <div className="text-[10px] font-mono text-ghost uppercase tracking-widest">
                DIFF: services/android_bridge.py
              </div>
              <div className="text-[10px] font-mono text-ghost">+4 lines / -2 lines</div>
              <div className="p-2 rounded bg-bg border border-border text-xs font-mono space-y-1">
                <div className="text-error/70">- while self.is_connected: thread.sleep(100)</div>
                <div className="text-success/70">+ async with asyncio.timeout(30):</div>
                <div className="text-success/70">+     await self.event_stream.read_message()</div>
              </div>
              <div className="flex items-center gap-2 text-xs mt-2">
                <span className="text-success">&#10003;</span>
                <span className="text-muted">Refactor validated. Commit created: c84a2f1</span>
              </div>
            </div>
          </Terminal>
        </motion.div>
      </div>
    </section>
  )
}
