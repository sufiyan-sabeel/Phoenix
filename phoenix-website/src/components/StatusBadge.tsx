interface StatusBadgeProps {
  status: 'available' | 'in-development' | 'planned'
}

const labels = {
  available: 'AVAILABLE',
  'in-development': 'IN DEV',
  planned: 'PLANNED',
}

const colors = {
  available: 'bg-success/8 text-success border-success/30',
  'in-development': 'bg-gold/8 text-gold border-gold/30',
  planned: 'bg-ghost/8 text-ghost border-ghost/30',
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-widest rounded border ${colors[status]}`}
    >
      {labels[status]}
    </span>
  )
}
