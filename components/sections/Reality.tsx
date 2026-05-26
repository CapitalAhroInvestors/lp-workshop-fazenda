'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import AnimateIn, { containerVariants, itemVariants } from '@/components/ui/AnimateIn'

const EASE = [0.22, 1, 0.36, 1] as const

const CARDS = [
  { value: '-36%', label: 'Margem da soja' },
  { value: '-92%', label: 'Margem do milho safrinha' },
  { value: '+30%', label: 'Custo de fertilizante' },
]

export default function Reality() {
  return (
    <section
      id="realidade"
      className="py-24 md:py-32"
      style={{ background: 'radial-gradient(ellipse at center, rgba(74,222,128,0.04), transparent 70%), #000' }}
    >
      <Container>
        <AnimateIn variant="fadeUp" className="mb-14">
          <SectionTitle eyebrow="O CENÁRIO 2025/26" align="center">
            A realidade que <em>ninguém</em> quer encarar.
          </SectionTitle>
        </AnimateIn>

        <motion.div
          className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {CARDS.map((card) => (
            <motion.div
              key={card.label}
              variants={itemVariants}
              className="flex flex-col items-center rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-8 text-center"
            >
              <span className="font-serif text-[72px] font-medium leading-none text-[var(--danger)] md:text-[80px]">
                {card.value}
              </span>
              <span className="mt-3 font-sans text-sm text-[var(--text-muted)]">
                {card.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <AnimateIn variant="fadeUp" delay={0.2}>
          <p className="mx-auto max-w-[720px] text-center font-sans text-lg leading-[1.6] text-[var(--text-secondary)] md:text-xl">
            E mesmo assim, milhares de produtores vendem sua produção sem saber exatamente se
            estão ganhando ou perdendo dinheiro.
          </p>
        </AnimateIn>
      </Container>
    </section>
  )
}
