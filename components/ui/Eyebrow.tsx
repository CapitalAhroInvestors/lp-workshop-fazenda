interface Props {
  children: React.ReactNode
  className?: string
}

export default function Eyebrow({ children, className = '' }: Props) {
  return (
    <p
      className={`font-sans text-[13px] font-medium uppercase tracking-[0.2em] text-[var(--green-glow)] ${className}`}
    >
      {children}
    </p>
  )
}
