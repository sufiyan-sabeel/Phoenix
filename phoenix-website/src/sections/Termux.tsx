import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import CodeBlock from '../components/CodeBlock'

export default function Termux() {
  return (
    <section id="install" className="py-16 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="02 / PORTABILITY FIRST"
          title="Serious AI tooling. In your pocket."
          description="Built around terminal-first workflows for developers using Termux and Android without compromising desktop performance."
        />

        <div className="flex flex-wrap items-center justify-center gap-4 mb-10 text-xs font-mono text-muted">
          <div className="flex items-center gap-1.5">
            <CheckCircle size={12} className="text-success" />
            Zero bloated dependencies (Pure Python 3.10+)
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle size={12} className="text-success" />
            ARM64 / aarch64 native acceleration
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle size={12} className="text-success" />
            Works offline with local models via Ollama
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[
            { label: 'Termux (pkg)', code: 'pkg update && pkg install phoenix-cli' },
            { label: 'PyPI (pip)', code: 'pip install phoenix-cli' },
            { label: 'Build from Source', code: 'git clone https://github.com/sufiyan-sabeel/Phoenix.git\ncd Phoenix && pip install .' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
            >
              <CodeBlock code={item.code} label={item.label} />
            </motion.div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-4 text-xs font-mono text-ghost">
          <span className="flex items-center gap-1">
            <CheckCircle size={10} className="text-success" />
            Tested on Termux Android 12/13/14
          </span>
          <span className="text-border">|</span>
          <span>SHA256: verified</span>
        </div>
      </div>
    </section>
  )
}
