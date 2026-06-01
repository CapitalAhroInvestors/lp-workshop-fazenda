'use client'

import Image from 'next/image'
import { Calendar, Clock, Wifi, Timer } from 'lucide-react'
import Container from '@/components/ui/Container'
import CtaButton from '@/components/ui/CtaButton'

const INFO_ITEMS = [
  { icon: Calendar, label: '10 de junho' },
  { icon: Clock,    label: '20h · Brasília' },
  { icon: Wifi,     label: 'Online ao vivo' },
  { icon: Timer,    label: '90 minutos' },
]

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Imagem de fundo */}
      <Image
        src="/hero-bg.jpg"
        alt=""
        fill
        priority
        aria-hidden="true"
        className="object-cover object-center"
        sizes="100vw"
      />

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
              src="/logo-escola.webp"
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

          <h1
            className="mb-6 max-w-[760px] font-serif text-[42px] font-medium leading-[1.05] text-white md:text-[72px]"
            style={{ animation: 'hero-fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both' }}
          >
            A fazenda que funciona como{' '}
            <em className="italic text-[var(--green-glow)]">empresa</em>.
          </h1>

          <p
            className="mb-10 max-w-[560px] font-sans text-base leading-[1.65] text-white/75 md:text-[18px]"
            style={{ animation: 'hero-fade-up 0.7s cubic-bezier(0.22,1,0.36,1) 0.15s both' }}
          >
            Workshop online com Dr. Renato Rodrigues (Ex Pesquisador Embrapa) sobre os 5 sistemas que
            separam fazenda lucrativa de fazenda que só sobrevive.
          </p>

          <div
            className="mb-10 flex flex-wrap justify-center gap-3"
            style={{ animation: 'hero-fade-up 0.7s cubic-bezier(0.22,1,0.36,1) 0.28s both' }}
          >
            {INFO_ITEMS.map(({ icon: Icon, label }, i) => (
              <div
                key={label}
                className="flex items-center gap-2.5 rounded-full border border-[rgba(74,222,128,0.45)] bg-[rgba(0,0,0,0.45)] px-4 py-2.5 backdrop-blur-sm"
                style={{ animation: `hero-scale-in 0.5s cubic-bezier(0.22,1,0.36,1) ${0.32 + i * 0.07}s both` }}
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--green-glow)] text-[var(--green-glow)]">
                  <Icon size={14} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <span className="font-sans text-sm font-medium text-white md:text-[15px]">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div style={{ animation: 'hero-fade-up 0.7s cubic-bezier(0.22,1,0.36,1) 0.48s both' }}>
            <CtaButton href="#planos" trackingId="scroll_to_planos" size="lg" isAnchor>
              Ver os planos do workshop ↓
            </CtaButton>
          </div>
        </div>
      </Container>
    </section>
  )
}
