interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeaderProps) {
  return (
    <div className={`mb-10 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {eyebrow && (
        <p className="text-ember text-[10px] font-mono font-semibold tracking-[0.15em] uppercase mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-text mb-3">{title}</h2>
      {description && (
        <p className="text-muted text-base max-w-xl leading-relaxed mx-auto">
          {description}
        </p>
      )}
    </div>
  )
}
