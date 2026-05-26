'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import PlanCard from '@/components/ui/PlanCard'
import AnimateIn, { containerVariants, itemVariants } from '@/components/ui/AnimateIn'
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
        <AnimateIn variant="fadeUp" className="mb-4">
          <SectionTitle eyebrow="GARANTA SUA VAGA" align="center">
            Escolha como você vai <em>participar</em>.
          </SectionTitle>
        </AnimateIn>

        <AnimateIn variant="fadeUp" delay={0.1} className="mb-12 flex justify-center">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
            {/* Badge lote ativo com dot pulsante */}
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

            {/* Próximo lote */}
            <div className="flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] px-4 py-2">
              <span className="font-sans text-xs uppercase tracking-widest text-[var(--text-muted)]">
                Próximo lote
              </span>
              <span className="font-sans text-sm font-semibold text-[var(--text-secondary)] line-through opacity-60">
                R$ 67 / R$ 97
              </span>
            </div>
          </div>
        </AnimateIn>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 md:items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {/* Mobile: premium primeiro */}
          <motion.div variants={itemVariants} className="order-1 md:order-2">
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
              mockupImage="/mockup-bundle.png"
            />
          </motion.div>
          <motion.div variants={itemVariants} className="order-2 md:order-1">
            <PlanCard
              name={PLANS.basic.name}
              price={PLANS.basic.price}
              nextLotPrice={PLANS.basic.nextLotPrice}
              features={PLANS.basic.features}
              checkoutUrl={PLANS.basic.checkoutUrl}
              trackingId="click_checkout_47"
              upsellPrice={PLANS.basic.upsellPrice}
              upsellCheckoutUrl={PLANS.basic.upsellCheckoutUrl}
              mockupImage="/mockup-bundle2.png"
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
