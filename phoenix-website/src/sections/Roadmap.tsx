import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'

const roadmap = [
  {
    version: 'v1.0.0',
    label: 'Shipped',
    status: 'released' as const,
    items: [
      'Initial open-source release',
      'Termux package build',
      'OpenRouter / Gemini / Claude integration',
      'Direct ADB architecture',
      '76 built-in tools',
    ],
  },
  {
    version: 'v1.1.0',
    label: 'In Progress',
    status: 'in-progress' as const,
    items: [
      'Local vector memory',
      'Custom tool hooks',
      'Multi-file code editing agent',
    ],
  },
  {
    version: 'v1.2.0+',
    label: 'Planning',
    status: 'planning' as const,
    items: [
      'Terminal Vision renderer',
      'Voice mode (Whisper)',
      'Plugin marketplace',
    ],
  },
]

const statusColors = {
  released: 'text-success',
  'in-progress': 'text-gold',
  planning: 'text-ghost',
}

const statusBg = {
  released: 'bg-success/8 border-success/20',
  'in-progress': 'bg-gold/8 border-gold/20',
  planning: 'bg-ghost/8 border-ghost/20',
}

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-16 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="DEVELOPMENT CADENCE"
          title="Project roadmap"
        />

        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {roadmap.map((section, i) => (
            <motion.div
              key={section.version}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="p-4 rounded-lg border border-border bg-surface"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="font-heading font-bold text-text text-sm">{section.version}</span>
                <span className={`px-1.5 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-widest rounded border ${statusColors[section.status]} ${statusBg[section.status]}`}>
                  {section.label}
                </span>
              </div>
              <ul className="space-y-1.5">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted">
                    <span className="w-1 h-1 rounded-full bg-border mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
