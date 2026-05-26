import Eyebrow from './Eyebrow'

interface Props {
  eyebrow?: string
  children: React.ReactNode
  className?: string
  as?: 'h1' | 'h2' | 'h3'
  size?: 'hero' | 'section' | 'card'
  align?: 'left' | 'center'
}

export default function SectionTitle({
  eyebrow,
  children,
  className = '',
  as: Tag = 'h2',
  size = 'section',
  align = 'left',
}: Props) {
  const sizeClasses = {
    hero: 'text-[40px] md:text-[64px] leading-[1.05] font-medium',
    section: 'text-[32px] md:text-[48px] leading-[1.1] font-medium',
    card: 'text-[22px] md:text-[28px] leading-[1.2] font-medium',
  }

  const alignClasses = align === 'center' ? 'text-center' : 'text-left'

  return (
    <div className={`${alignClasses} ${className}`}>
      {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
      <Tag
        className={`font-serif text-[var(--text-primary)] ${sizeClasses[size]} [&_em]:not-italic [&_em]:italic [&_em]:text-[var(--green-glow)]`}
      >
        {children}
      </Tag>
    </div>
  )
}
