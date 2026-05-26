interface Props {
  number: string | number
  size?: 'sm' | 'md' | 'lg'
}

export default function GlowCircle({ number, size = 'md' }: Props) {
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-12 h-12 text-base',
    lg: 'w-16 h-16 text-xl',
  }

  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full border border-[var(--green-glow)] bg-[var(--bg-card)] font-sans font-semibold text-[var(--green-glow)] shadow-[0_0_24px_rgba(74,222,128,0.35)] ${sizeClasses[size]}`}
      aria-hidden="true"
    >
      {number}
    </div>
  )
}
