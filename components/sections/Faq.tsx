'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, X } from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import AnimateIn from '@/components/ui/AnimateIn'
import { track } from '@/lib/analytics'

const EASE = [0.22, 1, 0.36, 1] as const

const FAQS = [
  {
    q: 'Quando é o workshop?',
    a: 'Dia 10 de junho, às 20h (horário de Brasília). A transmissão é online ao vivo e dura 90 minutos, com 30 minutos finais de Q&A direto com o Dr. Renato.',
  },
  {
    q: 'Qual a diferença entre os 2 planos?',
    a: 'O plano de R$ 47 te dá acesso ao workshop ao vivo, grupo VIP de WhatsApp, Q&A e certificado. O plano de R$ 67 inclui tudo isso mais a Apostila Mapa dos 5 Sistemas — um PDF de 40 páginas para você aplicar direto na sua fazenda.',
  },
  {
    q: 'E se eu não conseguir assistir ao vivo?',
    a: 'A gravação fica disponível no grupo VIP de WhatsApp por 7 dias após o evento. Recomendamos fortemente assistir ao vivo para participar do Q&A — é onde o aprendizado mais aplicado acontece.',
  },
  {
    q: 'O pagamento é seguro?',
    a: 'Sim. O pagamento é processado pela Cakto, com criptografia ponta a ponta. Aceitamos cartão de crédito (até 12x) e PIX (à vista, com desconto quando aplicável).',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number, question: string) => {
    const next = openIndex === i ? null : i
    setOpenIndex(next)
    if (next !== null) track('faq_open', { question })
  }

  return (
    <section id="faq" className="py-24 md:py-32" style={{ background: '#000' }}>
      <Container>
        <AnimateIn variant="fadeUp" className="mb-12">
          <SectionTitle eyebrow="PERGUNTAS FREQUENTES" align="center">
            Dúvidas frequentes
          </SectionTitle>
        </AnimateIn>

        <div className="mx-auto max-w-[720px]">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i
            const itemId = `faq-answer-${i}`

            return (
              <AnimateIn key={faq.q} variant="fadeUp" delay={i * 0.07}>
                <div className="border-b border-[var(--border-subtle)] last:border-b-0">
                  <button
                    type="button"
                    onClick={() => toggle(i, faq.q)}
                    aria-expanded={isOpen}
                    aria-controls={itemId}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--green-glow)] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  >
                    <span className="font-sans text-base font-medium text-[var(--text-primary)] md:text-[17px]">
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0"
                    >
                      {isOpen
                        ? <X size={18} className="text-[var(--green-glow)]" aria-hidden="true" />
                        : <Plus size={18} className="text-[var(--text-muted)]" aria-hidden="true" />
                      }
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={itemId}
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: EASE }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p className="pb-5 font-sans text-base leading-[1.7] text-[var(--text-secondary)]">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimateIn>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
