'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Calendar, Clock, Wifi, Timer } from 'lucide-react'
import Container from '@/components/ui/Container'
import CtaButton from '@/components/ui/CtaButton'

const EASE = [0.22, 1, 0.36, 1] as const

const INFO_ITEMS = [
  { icon: Calendar, label: '10 de junho' },
  { icon: Clock,    label: '20h · Brasília' },
  { icon: Wifi,     label: 'Online ao vivo' },
  { icon: Timer,    label: '90 minutos' },
]

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Vídeo de fundo */}
      {/* TODO: /public/hero-drone.mp4 — vídeo de drone em fazenda de café */}
      <video
        autoPlay muted loop playsInline
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        poster="/hero-poster.jpg"
      >
        <source src="/hero-drone.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.72) 100%), radial-gradient(ellipse at top center, rgba(74,222,128,0.07), transparent 60%)',
        }}
      />

      {/* Logo no topo */}
      <div className="absolute top-0 left-0 right-0 z-20 py-6">
        <Container>
          <div className="flex items-center justify-center px-6">
            <Image
              src="/logo-escola.png"
              alt="Capital Agro Investors"
              width={192}
              height={72}
              className="object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
              style={{ height: 'auto' }}
              priority
            />
          </div>
        </Container>
      </div>

      {/* Conteúdo centralizado */}
      <Container className="relative z-10 py-28 md:py-36">
        <div className="flex flex-col items-center text-center">

          {/* Título */}
          <motion.h1
            className="mb-6 max-w-[760px] font-serif text-[42px] font-medium leading-[1.05] text-white md:text-[72px]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            A fazenda que funciona como{' '}
            <em className="italic text-[var(--green-glow)]">empresa</em>.
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            className="mb-10 max-w-[560px] font-sans text-base leading-[1.65] text-white/75 md:text-[18px]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
          >
            Workshop online com Dr. Renato Rodrigues (Ex Pesquisador Embrapa) sobre os 5 sistemas que
            separam fazenda lucrativa de fazenda que só sobrevive.
          </motion.p>

          {/* Pills de informação */}
          <motion.div
            className="mb-10 flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.28 }}
          >
            {INFO_ITEMS.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label}
                className="flex items-center gap-2.5 rounded-full border border-[rgba(74,222,128,0.45)] bg-[rgba(0,0,0,0.45)] px-4 py-2.5 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.32 + i * 0.07 }}
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--green-glow)] text-[var(--green-glow)]">
                  <Icon size={14} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <span className="font-sans text-sm font-medium text-white md:text-[15px]">
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.48 }}
          >
            <CtaButton href="#planos" trackingId="scroll_to_planos" size="lg" isAnchor>
              Ver os planos do workshop ↓
            </CtaButton>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
