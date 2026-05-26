'use client'

import Container from '@/components/ui/Container'
import CtaButton from '@/components/ui/CtaButton'
import AnimateIn from '@/components/ui/AnimateIn'
import { PLANS } from '@/lib/constants'

export default function FinalCta() {
  return (
    <section
      id="cta-final"
      className="relative flex min-h-[60vh] items-center py-32 md:py-40"
      style={{ background: 'radial-gradient(ellipse at center, rgba(74,222,128,0.06), transparent 65%), #000' }}
    >
      <Container>
        <AnimateIn variant="fadeUpSlow" className="mx-auto max-w-[720px] text-center">
          <h2 className="mb-6 font-serif text-[36px] font-medium leading-[1.05] text-[var(--text-primary)] md:text-[56px]">
            Sua próxima safra começa{' '}
            <em className="italic text-[var(--green-glow)]">agora</em>.
          </h2>
          <p className="mb-10 font-sans text-base leading-[1.7] text-[var(--text-secondary)] md:text-[18px]">
            A diferença entre quem apenas produz e quem constrói patrimônio está em entender os
            5 sistemas da fazenda. Te vejo no workshop.
          </p>
          <CtaButton
            href={PLANS.premium.checkoutUrl}
            trackingId="click_checkout_67"
            trackingProps={{ source: 'final_cta' }}
            size="lg"
          >
            Garantir minha vaga
          </CtaButton>
        </AnimateIn>
      </Container>
    </section>
  )
}
