'use client'

import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import AnimateIn from '@/components/ui/AnimateIn'

export default function Bridge() {
  return (
    <section
      id="bridge"
      className="border-y border-[var(--border-subtle)] bg-[var(--bg-elevated)] py-20 md:py-28"
    >
      <Container>
        <AnimateIn variant="fadeUpSlow" className="mx-auto max-w-[800px] text-center">
          <SectionTitle
            eyebrow="O SEGUNDO LANÇAMENTO DA CAPITAL ESCOLA DE NEGÓCIOS AGRO"
            align="center"
            className="mb-6"
          >
            Uma nova edição. Mais <em>prática</em>. Mais <em>aplicada</em>.
          </SectionTitle>
          <p className="font-sans text-lg leading-[1.7] text-[var(--text-secondary)] md:text-[20px]">
            Depois do sucesso do primeiro workshop, a Capital Escola de Negócios Agro retorna
            com uma nova edição ainda mais prática e aplicada para produtores que querem
            transformar a fazenda em uma operação lucrativa e previsível.
          </p>
        </AnimateIn>
      </Container>
    </section>
  )
}
