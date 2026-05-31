'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Check } from 'lucide-react'
import { motion } from 'framer-motion'
import { getCheckoutUrl, track } from '@/lib/analytics'
import UpsellModal from './UpsellModal'

interface Props {
  name: string
  price: number
  nextLotPrice: number
  features: readonly string[]
  checkoutUrl: string
  highlight?: boolean
  badge?: string
  featuresHeader?: string
  trackingId: string
  mockupImage?: string
  upsellPrice?: number
  upsellCheckoutUrl?: string
}

export default function PlanCard({
  name,
  price,
  nextLotPrice,
  features,
  checkoutUrl,
  highlight = false,
  badge,
  featuresHeader,
  trackingId,
  mockupImage,
  upsellPrice,
  upsellCheckoutUrl,
}: Props) {
  const [showUpsell, setShowUpsell] = useState(false)
  const fmtPrice = (p: number) =>
    p % 1 === 0 ? String(p) : p.toLocaleString('pt-BR', { minimumFractionDigits: 2 })

  const handleClick = () => {
    if (upsellPrice && upsellCheckoutUrl) {
      track(trackingId)
      setShowUpsell(true)
    } else {
      track(trackingId)
      window.open(getCheckoutUrl(checkoutUrl), '_blank', 'noopener,noreferrer')
    }
  }

  const handleUpsellReject = () => {
    setShowUpsell(false)
    window.open(getCheckoutUrl(checkoutUrl), '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <div
        className={`relative flex flex-col rounded-2xl border transition-all duration-200 ${
          highlight
            ? 'border-[var(--border-glow)] bg-[var(--bg-card)] shadow-[0_0_40px_rgba(74,222,128,0.18)] md:scale-[1.03]'
            : 'border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[var(--border-glow)]'
        }`}
      >
        {/* Badge */}
        {badge && (
          <div className="absolute -top-5 left-1/2 z-20 -translate-x-1/2">
            <div className="relative">
              {/* Glow pulsante atrás */}
              <motion.div
                className="absolute inset-0 rounded-full blur-md"
                style={{ background: 'rgba(34,197,94,0.7)' }}
                animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                aria-hidden="true"
              />
              {/* Badge principal com shimmer */}
              <div
                className="relative overflow-hidden rounded-full px-5 py-2 font-sans text-sm font-bold uppercase tracking-widest text-black shadow-[0_0_20px_rgba(34,197,94,0.8)]"
                style={{ background: 'linear-gradient(90deg, #16a34a, #4ade80, #22c55e, #4ade80, #16a34a)' }}
              >
                <motion.span
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%)',
                  }}
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'linear', repeatDelay: 1.2 }}
                />
                <span className="relative z-10 flex items-center gap-1.5 whitespace-nowrap">
                  ⭐ Mais escolhido
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Mockup — bloco de impacto visual no topo do card premium */}
        {mockupImage && (
          <div className="relative overflow-hidden rounded-t-2xl bg-[#0a1a0f]" style={{ minHeight: 140 }}>
            {/* Glow radial de fundo */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(74,222,128,0.13), transparent 70%)' }}
              aria-hidden="true"
            />
            {/* Vinheta nas bordas */}
            <div
              className="pointer-events-none absolute inset-0 z-10"
              style={{ background: 'linear-gradient(to bottom, transparent 55%, var(--bg-card) 100%)' }}
              aria-hidden="true"
            />
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-0 flex justify-center pt-6 pb-2"
            >
              <Image
                src={mockupImage}
                alt="Bundle Workshop + Apostila Mapa dos 5 Sistemas"
                width={252}
                height={168}
                className="w-full max-w-[57%] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
                style={{ height: 'auto' }}
                priority
              />
            </motion.div>
          </div>
        )}

        <div className={`flex flex-1 flex-col p-6 md:p-8 ${mockupImage ? 'pt-5' : ''}`}>
          {/* Nome e preço */}
          <div className="mb-6">
            <p className="mb-3 font-sans text-sm font-medium uppercase tracking-widest text-[var(--text-muted)]">
              {name}
            </p>

            {/* Ancoragem de valor */}
            <p className="mb-1 font-sans text-sm font-semibold text-red-500">
              ⚠ Lote 2 em breve por R$ {fmtPrice(nextLotPrice)}
            </p>

            <div className="flex items-baseline gap-2">
              <span className="font-sans text-sm text-[var(--text-muted)]">R$</span>
              <span className="font-serif text-5xl font-medium text-[var(--text-primary)]">{fmtPrice(price)}</span>
              <span className="font-sans text-sm text-[var(--text-muted)]">à vista</span>
            </div>

            {highlight && (
              <p className="mt-1 font-sans text-xs text-[var(--text-muted)]">
                ou <span className="font-semibold text-[var(--text-secondary)]">12x de R$ 6,89</span>
              </p>
            )}
          </div>

          {/* Features */}
          <div className="mb-8 flex flex-col gap-3">
            {featuresHeader && (
              <p className="font-sans text-sm font-semibold text-[var(--text-primary)]">{featuresHeader}</p>
            )}
            {features.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--green-subtle)]">
                  <Check size={12} className="text-[var(--green-glow)]" aria-hidden="true" />
                </div>
                <span
                  className={`font-sans text-sm leading-relaxed ${
                    featuresHeader && feature.includes('Apostila')
                      ? 'font-semibold text-[var(--text-primary)]'
                      : 'text-[var(--text-secondary)]'
                  }`}
                >
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Botão */}
          <div className="mt-auto">
            {highlight ? (
              /* Premium — shimmer animado */
              <button
                onClick={handleClick}
                className="relative w-full overflow-hidden rounded-full px-8 py-4 font-sans text-base font-semibold uppercase tracking-wide text-black shadow-[0_0_28px_rgba(34,197,94,0.45)] transition-transform duration-200 active:scale-95"
                style={{ background: 'linear-gradient(90deg, #16a34a, #4ade80, #22c55e, #4ade80, #16a34a)' }}
              >
                <motion.span
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%)',
                  }}
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'linear', repeatDelay: 0.8 }}
                />
                <span className="relative z-10">Quero por R$ {fmtPrice(price)}</span>
              </button>
            ) : (
              /* Básico — glow verde */
              <button
                onClick={handleClick}
                className="relative w-full overflow-hidden rounded-full bg-[var(--green-bright)] px-8 py-4 font-sans text-base font-semibold uppercase tracking-wide text-black shadow-[0_0_24px_rgba(34,197,94,0.35)] transition-all duration-200 hover:shadow-[0_0_36px_rgba(34,197,94,0.55)] active:scale-95"
              >
                <motion.span
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)',
                  }}
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear', repeatDelay: 1.5 }}
                />
                <span className="relative z-10">Quero por R$ {fmtPrice(price)}</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Modal de upsell */}
      {upsellPrice && upsellCheckoutUrl && (
        <UpsellModal
          open={showUpsell}
          onClose={() => setShowUpsell(false)}
          onReject={handleUpsellReject}
          upsellPrice={upsellPrice}
          originalPrice={67}
          upsellCheckoutUrl={upsellCheckoutUrl}
        />
      )}
    </>
  )
}
