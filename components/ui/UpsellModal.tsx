'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Check, Zap } from 'lucide-react'
import { getCheckoutUrl, track } from '@/lib/analytics'

interface Props {
  open: boolean
  onClose: () => void
  onReject: () => void
  upsellPrice: number
  originalPrice: number
  upsellCheckoutUrl: string
}

const EASE = [0.22, 1, 0.36, 1] as const

const UPSELL_FEATURES = [
  'Apostila Mapa dos 5 Sistemas (PDF 40 páginas)',
  'Acesso vitalício ao material',
  'Tudo do plano Workshop incluso',
]

export default function UpsellModal({
  open,
  onClose,
  onReject,
  upsellPrice,
  originalPrice,
  upsellCheckoutUrl,
}: Props) {
  // Bloqueia scroll do body quando aberto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleAccept = () => {
    track('click_upsell_accept', { from: originalPrice, to: upsellPrice })
    window.open(getCheckoutUrl(upsellCheckoutUrl), '_blank', 'noopener,noreferrer')
    onClose()
  }

  const handleReject = () => {
    track('click_upsell_reject')
    onReject()
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <div
              className="relative w-full max-w-[440px] overflow-hidden rounded-2xl border border-[var(--border-glow)] bg-[var(--bg-card)] shadow-[0_0_60px_rgba(74,222,128,0.2)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Fechar */}
              <button
                onClick={onClose}
                aria-label="Fechar"
                className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--bg-elevated)] text-[var(--text-muted)] transition-colors hover:text-white"
              >
                <X size={16} />
              </button>

              {/* Header com glow */}
              <div className="relative overflow-hidden bg-[var(--bg-elevated)] px-6 pt-8 pb-6 text-center">
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{ background: 'radial-gradient(ellipse at top, rgba(74,222,128,0.1), transparent 70%)' }}
                  aria-hidden="true"
                />
                <div className="relative">
                  <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[rgba(74,222,128,0.12)] px-3 py-1 font-sans text-xs font-semibold uppercase tracking-widest text-[var(--green-glow)]">
                    <Zap size={11} aria-hidden="true" /> Oferta exclusiva
                  </span>
                  <h2 className="mt-2 font-serif text-[26px] font-medium leading-[1.2] text-white">
                    Espera! Leve a Apostila<br />por só <em className="italic text-[var(--green-glow)]">R$ {upsellPrice}</em>
                  </h2>
                  <p className="mt-2 font-sans text-sm text-[var(--text-muted)]">
                    De <span className="line-through">R$ {originalPrice}</span> — economia de R$ {originalPrice - upsellPrice}
                  </p>
                </div>
              </div>

              {/* Mockup + features */}
              <div className="flex gap-5 px-6 py-5">
                <div className="shrink-0">
                  <Image
                    src="/mockup-bundle.png"
                    alt="Bundle Workshop + Apostila Mapa dos 5 Sistemas"
                    width={110}
                    height={80}
                    className="object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]"
                    style={{ width: 110, height: 'auto' }}
                  />
                </div>
                <ul className="flex flex-col justify-center gap-2.5">
                  {UPSELL_FEATURES.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[var(--green-subtle)]">
                        <Check size={10} className="text-[var(--green-glow)]" aria-hidden="true" />
                      </div>
                      <span className="font-sans text-sm leading-snug text-[var(--text-secondary)]">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-3 px-6 pb-6">
                {/* Botão aceitar — shimmer */}
                <button
                  onClick={handleAccept}
                  className="relative w-full overflow-hidden rounded-full px-6 py-4 font-sans text-base font-semibold uppercase tracking-wide text-black shadow-[0_0_24px_rgba(34,197,94,0.4)] active:scale-95 transition-transform"
                  style={{ background: 'linear-gradient(90deg, #16a34a, #4ade80, #22c55e, #4ade80, #16a34a)' }}
                >
                  <motion.span
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
                    }}
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
                  />
                  <span className="relative z-10">Sim, quero por R$ {upsellPrice}</span>
                </button>

                {/* Rejeitar */}
                <button
                  onClick={handleReject}
                  className="w-full rounded-full border border-[var(--border-subtle)] py-3 font-sans text-xs text-[var(--text-muted)] transition-colors hover:border-[var(--border-glow)] hover:text-[var(--text-secondary)]"
                >
                  Não, prefiro continuar sem a apostila
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
