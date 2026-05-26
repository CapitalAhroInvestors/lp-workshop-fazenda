'use client'

import { ShieldCheck } from 'lucide-react'
import Container from '@/components/ui/Container'
import AnimateIn from '@/components/ui/AnimateIn'

export default function Guarantee() {
  return (
    <section
      id="garantia"
      className="border-y border-[var(--border-subtle)] bg-[var(--bg-elevated)] py-20 md:py-28"
    >
      <Container>
        <AnimateIn variant="scale" className="mx-auto flex max-w-[640px] flex-col items-center text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-[var(--border-glow)] bg-[var(--bg-card)] shadow-[0_0_24px_rgba(74,222,128,0.35)]">
            <ShieldCheck size={40} className="text-[var(--green-glow)]" aria-hidden="true" />
          </div>
          <h2 className="mb-4 font-serif text-[28px] font-medium text-[var(--text-primary)] md:text-[36px]">
            Garantia incondicional de 7 dias
          </h2>
          <p className="font-sans text-base leading-[1.7] text-[var(--text-secondary)] md:text-[17px]">
            Participe do workshop. Se não valer cada centavo, devolvemos seu dinheiro
            integralmente. Sem perguntas. Sem burocracia.
          </p>
        </AnimateIn>
      </Container>
    </section>
  )
}
