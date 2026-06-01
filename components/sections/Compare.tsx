import Image from 'next/image'
import { X, Check } from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import AnimateIn from '@/components/ui/AnimateIn'

const ROWS = [
  ['Não sabe o custo real por hectare', 'Custo por hectare calculado e atualizado'],
  ['Vende café por "preço de mercado"', 'Vende com margem-alvo definida'],
  ['Investe no que o vizinho fez', 'Investe com base em ROI projetado'],
  ['Compra insumo por preço', 'Compra insumo por retorno na produtividade'],
  ['Descobre o prejuízo na safra seguinte', 'Identifica vazamento em tempo real'],
  ['Depende do clima para ter lucro', 'Tem margem mesmo em ano ruim'],
  ['Toma decisão por intuição', 'Decide por dado e método'],
]

export default function Compare() {
  return (
    <section id="comparativo" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 z-0">
        <Image
          src="/cafe-bg.jpg"
          alt=""
          fill
          aria-hidden="true"
          className="object-cover object-center"
          sizes="100vw"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.82) 50%, rgba(0,0,0,0.88) 100%)',
          }}
        />
      </div>
      <Container>
        <AnimateIn variant="fadeUp" className="relative z-10 mb-14">
          <SectionTitle eyebrow="O DIVISOR DE ÁGUAS" align="center">
            A diferença entre quem <em>improvisa</em> e quem <em>profissionaliza</em>.
          </SectionTitle>
        </AnimateIn>

        {/* Desktop */}
        <div className="relative z-10 hidden md:block">
          <AnimateIn variant="scale" className="mb-4 grid grid-cols-2 gap-6">
            <div className="rounded-xl border border-[var(--danger)] border-opacity-40 bg-[rgba(220,38,38,0.08)] px-6 py-3 text-center">
              <span className="font-sans text-sm font-semibold uppercase tracking-widest text-[var(--danger)]">Quem improvisa</span>
            </div>
            <div className="rounded-xl border border-[var(--border-glow)] bg-[rgba(74,222,128,0.08)] px-6 py-3 text-center">
              <span className="font-sans text-sm font-semibold uppercase tracking-widest text-[var(--green-glow)]">Quem profissionaliza</span>
            </div>
          </AnimateIn>

          <div className="flex flex-col gap-3">
            {ROWS.map(([left, right], i) => (
              <AnimateIn key={i} delay={i * 0.07} className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3 rounded-xl bg-[var(--bg-card)] px-5 py-4">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[rgba(220,38,38,0.15)]">
                    <X size={12} className="text-[var(--danger)]" aria-hidden="true" />
                  </div>
                  <span className="font-sans text-sm text-[var(--text-secondary)]">{left}</span>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-[var(--bg-card)] px-5 py-4">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--green-subtle)]">
                    <Check size={12} className="text-[var(--green-glow)]" aria-hidden="true" />
                  </div>
                  <span className="font-sans text-sm text-[var(--text-secondary)]">{right}</span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="relative z-10 flex flex-col gap-8 md:hidden">
          <AnimateIn variant="fadeLeft">
            <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-[var(--danger)]">QUEM IMPROVISA ↓</p>
            <div className="flex flex-col gap-3">
              {ROWS.map(([left], i) => (
                <div key={i} className="flex items-center gap-3 rounded-xl bg-[var(--bg-card)] px-5 py-4">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[rgba(220,38,38,0.15)]">
                    <X size={12} className="text-[var(--danger)]" aria-hidden="true" />
                  </div>
                  <span className="font-sans text-sm text-[var(--text-secondary)]">{left}</span>
                </div>
              ))}
            </div>
          </AnimateIn>

          <AnimateIn variant="fadeRight" delay={0.1}>
            <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-[var(--green-glow)]">QUEM PROFISSIONALIZA ↓</p>
            <div className="flex flex-col gap-3">
              {ROWS.map(([, right], i) => (
                <div key={i} className="flex items-center gap-3 rounded-xl bg-[var(--bg-card)] px-5 py-4">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--green-subtle)]">
                    <Check size={12} className="text-[var(--green-glow)]" aria-hidden="true" />
                  </div>
                  <span className="font-sans text-sm text-[var(--text-secondary)]">{right}</span>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </Container>
    </section>
  )
}
