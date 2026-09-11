import { motion } from 'framer-motion'
import { Code, Smartphone, Terminal, CheckCircle } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const badges = [
  { icon: <CheckCircle size={12} className="text-success" />, label: 'OPEN SOURCE (MIT)' },
  { icon: <Smartphone size={12} className="text-ember" />, label: 'TERMUX READY' },
  { icon: <Code size={12} className="text-ember" />, label: 'MULTI-PROVIDER AI' },
  { icon: <Terminal size={12} className="text-ember" />, label: 'CLI FIRST' },
]

export default function Capabilities() {
  return (
    <section className="py-16 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-border bg-surface text-xs font-mono text-muted"
            >
              {badge.icon}
              {badge.label}
            </div>
          ))}
        </div>

        <SectionHeader
          eyebrow="01 / CAPABILITIES"
          title="One CLI. Multiple workflows."
        />

        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              num: '01',
              category: 'CODE',
              icon: <Code size={16} />,
              title: 'AI Coding Agent',
              desc: 'AI-assisted coding workflows, diff inspection, and patch generation directly from your terminal.',
              cmd: 'phoenix code --diff ./src',
            },
            {
              num: '02',
              category: 'ANDROID',
              icon: <Smartphone size={16} />,
              title: 'Android & Termux Control',
              desc: 'Android automation through ADB workflows, Termux native intents, and sensor integrations.',
              cmd: 'phoenix adb --tap-record app.flow',
            },
            {
              num: '03',
              category: 'SHELL',
              icon: <Terminal size={16} />,
              title: 'Terminal Intelligence',
              desc: 'AI-powered command synthesis, syntax error auto-correction, and pipeline safety checks.',
              cmd: 'phoenix shell "compress all pngs"',
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-5 rounded-lg border border-border bg-surface hover:bg-elevated hover:border-ember/20 transition-all duration-200"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-mono font-semibold text-ghost">{card.num}</span>
                <span className="text-[10px] font-mono font-semibold text-ember uppercase tracking-widest">
                  {card.category}
                </span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-ember">{card.icon}</span>
                <h3 className="font-heading font-semibold text-text text-sm">{card.title}</h3>
              </div>
              <p className="text-muted text-sm leading-relaxed mb-3">{card.desc}</p>
              <div className="px-3 py-2 rounded bg-bg border border-border">
                <code className="text-xs font-mono text-ghost">{card.cmd}</code>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
