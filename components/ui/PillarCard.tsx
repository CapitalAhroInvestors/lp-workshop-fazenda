import { Check } from 'lucide-react'
import GlowCircle from './GlowCircle'

interface Props {
  number: string
  title: string
  description: string
  isLast?: boolean
}

export default function PillarCard({ number, title, description, isLast = false }: Props) {
  return (
    <div className="flex gap-6 md:gap-8">
      <div className="relative flex flex-col items-center">
        <GlowCircle number={number} size="md" />
        {!isLast && (
          <div
            className="hidden md:block flex-1 w-px bg-[var(--border-subtle)] mt-3"
            aria-hidden="true"
          />
        )}
      </div>
      <div className="flex-1 pb-10 md:pb-12">
        <div className="mb-2 flex items-center gap-3">
          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--green-subtle)] md:hidden">
            <Check size={12} className="text-[var(--green-glow)]" aria-hidden="true" />
          </div>
        </div>
        <h3 className="mb-2 font-serif text-[22px] font-medium text-[var(--text-primary)] md:text-[28px]">
          {title}
        </h3>
        <p className="font-sans text-base leading-relaxed text-[var(--text-secondary)] md:text-[17px]">
          {description}
        </p>
      </div>
    </div>
  )
}
