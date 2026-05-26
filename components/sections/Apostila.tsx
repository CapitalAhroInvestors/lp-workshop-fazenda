'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import AnimateIn, { containerVariants, itemVariants } from '@/components/ui/AnimateIn'

const IMAGES = [
  { src: '/apostila-capa.png', alt: 'Apostila — capa', caption: 'Capa · Mapa dos 5 Sistemas' },
  { src: '/apostila-sumario.png', alt: 'Apostila — sumário', caption: 'Sumário · Visão geral' },
  { src: '/apostila-interna.png', alt: 'Apostila — interna', caption: 'Página interna · Sistema Financeiro' },
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

        <motion.div
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scrollbar-hide md:grid md:grid-cols-3 md:overflow-visible"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {IMAGES.map((img, i) => (
            <motion.div
              key={img.src}
              variants={itemVariants}
              className="flex min-w-[80vw] snap-center flex-col gap-3 md:min-w-0"
            >
              {/* TODO: substituir placeholder */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  loading={i === 0 ? 'eager' : 'lazy'}
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 33vw"
                />
              </div>
              <p className="text-center font-sans text-xs text-[var(--text-muted)]">{img.caption}</p>
            </motion.div>
          ))}
        </motion.div>

        <AnimateIn variant="fadeUp" delay={0.15} className="mt-8 text-center">
          <p className="font-sans text-xs text-[var(--text-muted)]">
            Prints da versão final — apostila entregue após o workshop.
          </p>
        </AnimateIn>
      </Container>
    </section>
  )
}
