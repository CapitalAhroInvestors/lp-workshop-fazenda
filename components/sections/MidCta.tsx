'use client'

import Container from '@/components/ui/Container'
import CtaButton from '@/components/ui/CtaButton'
import AnimateIn from '@/components/ui/AnimateIn'
import { PLANS } from '@/lib/constants'

interface Props {
  text?: string
  label?: string
  source: string
}

export default function MidCta({
  text = 'Garanta sua vaga antes que as inscrições encerrem.',
  label = 'Quero participar do workshop',
  source,
}: Props) {
  return (
    <section className="relative py-16 md:py-20">
      <Container>
        <AnimateIn variant="fadeUpSlow" className="mx-auto max-w-[640px] text-center">
          <p className="mb-8 font-sans text-base leading-[1.7] text-[var(--text-secondary)] md:text-[18px]">
            {text}
          </p>
          <CtaButton
            href={PLANS.premium.checkoutUrl}
            trackingId="click_checkout_67"
            trackingProps={{ source }}
            size="lg"
          >
            {label}
          </CtaButton>
        </AnimateIn>
      </Container>
    </section>
  )
}
