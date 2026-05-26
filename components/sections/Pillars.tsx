'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import PillarCard from '@/components/ui/PillarCard'
import AnimateIn, { containerVariants, itemVariants } from '@/components/ui/AnimateIn'

const PILLARS = [
  {
    number: '01',
    title: 'A perda invisível',
    description: 'Como identificar onde sua lavoura está perdendo dinheiro antes que vire prejuízo.',
  },
  {
    number: '02',
    title: 'Os 5 sistemas da fazenda lucrativa',
    description: 'O que toda fazenda que dá lucro tem em funcionamento — e o que a sua provavelmente está negligenciando.',
  },
  {
    number: '03',
    title: 'ROI sem MBA',
    description: 'Como decidir onde investir o próximo real da fazenda usando uma régua simples de retorno.',
  },
  {
    number: '04',
    title: 'Casos reais aplicados',
    description: 'Cerrado, café especial, florestas comerciais. O que funcionou, o que falhou, e por quê.',
  },
  {
    number: '05',
    title: 'Q&A ao vivo',
    description: '30 minutos de perguntas diretas com o Dr. Renato. Sem corte, sem edição.',
  },
]

export default function Pillars() {
  return (
    <section id="pilares" className="bg-[var(--bg-elevated)] py-24 md:py-32">
      <Container>
        <AnimateIn variant="fadeUp" className="mb-14">
          <SectionTitle eyebrow="OS 5 PILARES DO WORKSHOP" align="center">
            O que você vai <em>construir</em> em 90 minutos ao vivo.
          </SectionTitle>
        </AnimateIn>

        <div className="relative mx-auto max-w-[720px]">
          <div
            className="absolute left-6 top-6 hidden h-[calc(100%-96px)] w-px bg-[var(--border-subtle)] md:block"
            aria-hidden="true"
          />
          <motion.div
            className="flex flex-col"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {PILLARS.map((pillar, i) => (
              <motion.div key={pillar.number} variants={itemVariants}>
                <PillarCard
                  number={pillar.number}
                  title={pillar.title}
                  description={pillar.description}
                  isLast={i === PILLARS.length - 1}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
