'use client'

import { useEffect, useRef } from 'react'
import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import PlanCard from '@/components/ui/PlanCard'
import AnimateIn from '@/components/ui/AnimateIn'
import { PLANS } from '@/lib/constants'
import { track } from '@/lib/analytics'

export default function Plans() {
  const sectionRef = useRef<HTMLElement>(null)
  const tracked = useRef(false)

  useEffect(() => {
    if (!sectionRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !tracked.current) {
          track('view_pricing')
          tracked.current = true
        }
      },
      { threshold: 0.2 },
    )
    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="planos"
      ref={sectionRef}
      className="py-24 md:py-32"
      style={{ background: 'radial-gradient(ellipse at center, rgba(74,222,128,0.04), transparent 70%), #000' }}
    >
      <Container>
        {/* Ancoragem de oferta */}
        <AnimateIn variant="fadeUp" className="mb-12">
          <div className="mx-auto max-w-[680px] rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] px-8 py-8 text-center">
            <p className="mb-4 font-sans text-base leading-[1.7] text-[var(--text-secondary)] md:text-[17px]">
              Uma compra de insumo errada custa milhares. Uma safra vendida sem margem-alvo, idem.
              Um vazamento de custo não enxergado se repete safra após safra.
            </p>
            <p className="font-sans text-base font-semibold leading-[1.7] text-[var(--text-primary)] md:text-[17px]">
              R$ 67 é menos do que o prejuízo de um único desses erros.{' '}
              <span className="text-[var(--green-glow)]">
                Em 90 minutos você sai com uma régua para enxergar onde sua fazenda está perdendo dinheiro — antes que vire prejuízo.
              </span>
            </p>
          </div>
        </AnimateIn>

        <AnimateIn variant="fadeUp" className="mb-4">
          <SectionTitle eyebrow="GARANTA SUA VAGA" align="center">
            Escolha como você vai <em>participar</em>.
          </SectionTitle>
        </AnimateIn>

        <AnimateIn variant="fadeUp" delay={0.1} className="mb-12 flex justify-center">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
            <div className="flex items-center gap-2 rounded-full border border-[var(--border-glow)] bg-[rgba(74,222,128,0.08)] px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--green-glow)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--green-bright)]" />
              </span>
              <span className="font-sans text-sm font-semibold text-[var(--green-glow)]">
                Lote 1 ativo
              </span>
            </div>
            <span className="hidden text-[var(--border-subtle)] sm:inline" aria-hidden="true">|</span>
            <div className="flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] px-4 py-2">
              <span className="font-sans text-xs uppercase tracking-widest text-[var(--text-muted)]">
                Próximo lote
              </span>
              <span className="font-sans text-sm font-semibold text-[var(--text-secondary)] line-through opacity-60">
                R$ 97 / R$ 127
              </span>
            </div>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 md:items-start">
          <AnimateIn delay={0.12} className="order-1 md:order-2">
            <PlanCard
              name={PLANS.premium.name}
              price={PLANS.premium.price}
              nextLotPrice={PLANS.premium.nextLotPrice}
              features={PLANS.premium.features}
              checkoutUrl={PLANS.premium.checkoutUrl}
              highlight={PLANS.premium.highlight}
              badge={PLANS.premium.badge}
              featuresHeader={PLANS.premium.featuresHeader}
              trackingId="click_checkout_67"
              mockupImage="/mockup-bundle.webp"
            />
          </AnimateIn>
          <AnimateIn delay={0} className="order-2 md:order-1">
            <PlanCard
              name={PLANS.basic.name}
              price={PLANS.basic.price}
              nextLotPrice={PLANS.basic.nextLotPrice}
              features={PLANS.basic.features}
              checkoutUrl={PLANS.basic.checkoutUrl}
              trackingId="click_checkout_49"
              upsellPrice={PLANS.basic.upsellPrice}
              upsellCheckoutUrl={PLANS.basic.upsellCheckoutUrl}
              mockupImage="/mockup-bundle2.webp"
            />
          </AnimateIn>
        </div>

        {/* Garantia inline — próxima dos botões de compra */}
        <AnimateIn variant="fadeUp" delay={0.2} className="mt-10 flex justify-center">
          <div className="flex items-center gap-3 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] px-6 py-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="shrink-0 text-[var(--green-glow)]" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            <span className="font-sans text-sm text-[var(--text-secondary)]">
              <strong className="text-[var(--text-primary)]">Garantia de 7 dias.</strong>{' '}
              Se o workshop não te mostrar onde sua fazenda pode estar perdendo dinheiro, devolvemos 100% do valor. Sem burocracia.
            </span>
          </div>
        </AnimateIn>
      </Container>
    </section>
  )
}
