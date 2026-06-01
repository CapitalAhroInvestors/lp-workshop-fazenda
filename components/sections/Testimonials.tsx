'use client'

import Image from 'next/image'
import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import AnimateIn from '@/components/ui/AnimateIn'

interface Testimonial {
  quote: string
  name: string
  city: string
  culture: string
  area?: string
  slotImage?: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Outra pessoa não entra na minha propriedade mais não, só você que trabalha com os produtos aqui agora.',
    name: 'Ronilson',
    city: 'Mutum (MG)',
    culture: 'Café Arábica',
    area: '~30ha',
    slotImage: '/depoimento-ronilson.webp',
  },
  {
    quote: 'A Capital tá entregando o que ela realmente prometeu. Melhoria de produtividade na lavoura.',
    name: 'Vinícius',
    city: 'Brejetuba (ES)',
    culture: 'Café Conilon',
    slotImage: '/depoimento-vinicius.webp',
  },
  {
    quote: 'Era pra eu arrancar a lavoura. Hoje, ela mudou da água pro vinho.',
    name: 'Produtor',
    city: 'Muniz Freire (ES)',
    culture: 'Café Arábica',
    area: '12ha',
    slotImage: '/depoimento-muniz-freire.webp',
  },
]

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 md:py-32" style={{ background: '#000' }}>
      <Container>
        <AnimateIn variant="fadeUp" className="mb-12">
          <SectionTitle eyebrow="O QUE OUTROS PRODUTORES ESTÃO DIZENDO" align="center">
            Quem já aplicou na <em>própria fazenda</em>.
          </SectionTitle>
        </AnimateIn>

        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto scrollbar-hide md:grid md:grid-cols-3 md:overflow-visible">
          {TESTIMONIALS.map((t, i) => (
            <AnimateIn
              key={t.name + t.city}
              delay={i * 0.12}
              className="flex min-w-[85vw] snap-center flex-col rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-4 md:min-w-0 md:p-6"
            >
              {t.slotImage ? (
                <Image
                  src={t.slotImage}
                  alt={`Depoimento de ${t.name}`}
                  width={600}
                  height={900}
                  loading="lazy"
                  className="w-full rounded-xl object-contain"
                  sizes="(max-width: 768px) 85vw, 33vw"
                />
              ) : (
                <>
                  <p className="mb-6 flex-1 font-serif text-[22px] italic leading-[1.4] text-[var(--text-primary)]">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-auto border-t border-[var(--border-subtle)] pt-4">
                    <p className="font-sans text-sm font-semibold text-[var(--text-primary)]">{t.name}</p>
                    <p className="font-sans text-xs text-[var(--text-muted)]">
                      {t.city} · {t.culture}{t.area && ` · ${t.area}`}
                    </p>
                  </div>
                </>
              )}
            </AnimateIn>
          ))}
        </div>
      </Container>
    </section>
  )
}
