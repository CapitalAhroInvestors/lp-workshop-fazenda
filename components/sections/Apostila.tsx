import Image from 'next/image'
import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import AnimateIn from '@/components/ui/AnimateIn'

const IMAGES = [
  { src: '/apostila-capa.webp', alt: 'Apostila — capa', caption: 'Capa · Mapa dos 5 Sistemas' },
  { src: '/apostila-sumario.webp', alt: 'Apostila — sumário', caption: 'Sumário · Visão geral' },
  { src: '/apostila-interna.webp', alt: 'Apostila — interna', caption: 'Página interna · Sistema Financeiro' },
]

export default function Apostila() {
  return (
    <section id="apostila" className="bg-[var(--bg-elevated)] py-24 md:py-32">
      <Container>
        <AnimateIn variant="fadeUp" className="mb-12">
          <SectionTitle eyebrow="O QUE VAI NA APOSTILA" align="center">
            40 páginas para você <em>aplicar</em> direto na sua fazenda.
          </SectionTitle>
        </AnimateIn>

        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto scrollbar-hide md:grid md:grid-cols-3 md:overflow-visible">
          {IMAGES.map((img, i) => (
            <AnimateIn
              key={img.src}
              delay={i * 0.12}
              className="flex min-w-[80vw] snap-center flex-col gap-3 md:min-w-0"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 33vw"
                />
              </div>
              <p className="text-center font-sans text-xs text-[var(--text-muted)]">{img.caption}</p>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn variant="fadeUp" delay={0.15} className="mt-8 text-center">
          <p className="font-sans text-xs text-[var(--text-muted)]">
            Prints da versão final — apostila entregue após o workshop.
          </p>
        </AnimateIn>
      </Container>
    </section>
  )
}
