import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import StatusBadge from '../components/StatusBadge'
import { features } from '../data/features'
import {
  Code, Cpu, Terminal, Smartphone, Clock, Puzzle, Brain, Eye, Mic,
} from 'lucide-react'

const iconMap: Record<string, React.ReactNode> = {
  Code: <Code size={14} />,
  Cpu: <Cpu size={14} />,
  Terminal: <Terminal size={14} />,
  Smartphone: <Smartphone size={14} />,
  Clock: <Clock size={14} />,
  Puzzle: <Puzzle size={14} />,
  Brain: <Brain size={14} />,
  Eye: <Eye size={14} />,
  Mic: <Mic size={14} />,
}

export default function Features() {
  return (
    <section id="features" className="py-16 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="SPECIFICATIONS"
          title="Built around the terminal."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="p-4 rounded-lg border border-border bg-surface hover:bg-elevated hover:border-ember/20 transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="w-7 h-7 rounded bg-ember/10 border border-ember/20 flex items-center justify-center text-ember">
                  {iconMap[feature.icon]}
                </div>
                <StatusBadge status={feature.status} />
              </div>
              <h3 className="font-heading font-semibold text-text text-sm mb-1">
                {feature.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
