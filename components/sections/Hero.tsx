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

          {/* H1 */}
          <h1
            className="mb-6 max-w-[760px] font-serif text-[38px] font-medium leading-[1.1] text-white md:text-[64px]"
            style={{ animation: 'hero-fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both' }}
          >
            Você produz, vende e movimenta dinheiro o ano inteiro — e ainda assim não sabe dizer, com número, se{' '}
            <em className="italic text-[var(--green-glow)]">lucrou, se perdeu ou só girou caixa.</em>
          </h1>

          {/* Subtítulo */}
          <p
            className="mb-10 max-w-[580px] font-sans text-base leading-[1.65] text-white/75 md:text-[18px]"
            style={{ animation: 'hero-fade-up 0.7s cubic-bezier(0.22,1,0.36,1) 0.12s both' }}
          >
            Workshop ao vivo com o Dr. Renato Rodrigues (ex-pesquisador Embrapa) sobre os 5 sistemas que separam a fazenda que constrói patrimônio da que só sobrevive à próxima safra.
          </p>

          {/* CTA principal */}
          <div style={{ animation: 'hero-fade-up 0.7s cubic-bezier(0.22,1,0.36,1) 0.24s both' }}>
            <CtaButton href="#planos" trackingId="hero_cta_primary" size="lg" isAnchor>
              Quero enxergar onde minha fazenda perde dinheiro — R$ 49,90
            </CtaButton>
          </div>

          {/* Régua de credibilidade — discreta, abaixo do CTA */}
          <div
            className="mt-8 flex flex-wrap justify-center gap-3"
            style={{ animation: 'hero-fade-up 0.7s cubic-bezier(0.22,1,0.36,1) 0.36s both' }}
          >
            {INFO_ITEMS.map(({ icon: Icon, label }, i) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.15)] bg-[rgba(0,0,0,0.35)] px-3 py-1.5 backdrop-blur-sm"
                style={{ animation: `hero-scale-in 0.4s cubic-bezier(0.22,1,0.36,1) ${0.46 + i * 0.06}s both` }}
              >
                <Icon size={13} strokeWidth={1.5} className="text-[var(--green-glow)]" aria-hidden="true" />
                <span className="font-sans text-xs text-white/70">
                  {label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  )
}
