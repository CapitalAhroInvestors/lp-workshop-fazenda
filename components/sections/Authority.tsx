import Image from 'next/image'
import Container from '@/components/ui/Container'
import Eyebrow from '@/components/ui/Eyebrow'
import AnimateIn from '@/components/ui/AnimateIn'

const BIO_PARAGRAPHS = [
  'Renato Rodrigues é Diretor de Negócios Nacionais e Internacionais da Capital Agro Investors. Doutor em Geoquímica Ambiental, possui mais de 20 anos de experiência em sustentabilidade, gestão agroambiental, estratégia e inovação no agronegócio.',
  'Foi pesquisador e executivo da Embrapa por 12 anos, coautor do Plano ABC (Agricultura de Baixo Carbono) e membro do IPCC. Atualmente, é professor da Fundação Dom Cabral, integrante do painel de especialistas da UNFCCC, palestrante e executivo com atuação em mudança do clima, gestão estratégica, inovação e sustentabilidade aplicada ao agro.',
]

const STATS = [
  { value: '+20', unit: 'ANOS', label: 'de experiência no agro' },
  { value: '12', unit: 'ANOS', label: 'pesquisador na Embrapa' },
  { value: '9', unit: 'PAÍSES', label: 'alcance internacional' },
]

export default function Authority() {
  return (
    <section
      id="autoridade"
      className="relative overflow-hidden bg-[var(--bg-elevated)] py-24 md:py-32"
    >
      <div
        className="pointer-events-none absolute left-0 top-0 h-full w-[50%] opacity-30"
        style={{
          background:
            'radial-gradient(ellipse at 30% 50%, rgba(74,222,128,0.18), transparent 65%)',
        }}
        aria-hidden="true"
      />

      <Container>
        <AnimateIn variant="fadeUp" className="mb-10 text-center">
          <Eyebrow>QUEM VAI CONDUZIR</Eyebrow>
        </AnimateIn>

        <div className="flex flex-col items-center gap-0 md:flex-row md:items-end md:gap-8">
          <AnimateIn
            variant="fadeLeft"
            className="relative w-full max-w-[340px] shrink-0 md:w-[42%]"
          >
            <Image
              src="/renato.webp"
              alt="Dr. Renato Rodrigues — Ex Pesquisador Embrapa, fundador da Capital Agro Investors"
              width={680}
              height={900}
              loading="lazy"
              className="w-full object-contain object-bottom drop-shadow-[0_8px_40px_rgba(74,222,128,0.15)]"
              sizes="(max-width: 768px) 340px, 42vw"
            />
          </AnimateIn>

          <AnimateIn
            variant="fadeRight"
            delay={0.1}
            className="flex flex-1 flex-col items-center pb-6 text-center md:items-start md:pb-12 md:text-left"
          >
            <h2 className="mb-1 font-serif text-[36px] font-medium text-[var(--text-primary)] md:text-[52px]">
              Dr. Renato Rodrigues
            </h2>
            <p className="mb-8 font-sans text-base text-[var(--text-muted)]">
              Ex Pesquisador Embrapa
            </p>

            <div className="mb-10 flex flex-col gap-4 text-left">
              {BIO_PARAGRAPHS.map((para, i) => (
                <AnimateIn key={para.slice(0, 30)} as="p" delay={i * 0.12} className="font-sans text-base leading-[1.7] text-[var(--text-secondary)]">
                  {para}
                </AnimateIn>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-8 md:justify-start">
              {STATS.map((stat, i) => (
                <AnimateIn key={stat.label} delay={i * 0.1} className="flex flex-col items-center md:items-start">
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-[52px] font-medium leading-none text-[var(--green-glow)]">
                      {stat.value}
                    </span>
                    {stat.unit && (
                      <span className="font-sans text-sm font-semibold text-[var(--text-muted)]">
                        {stat.unit}
                      </span>
                    )}
                  </div>
                  <span className="mt-1 font-sans text-xs text-[var(--text-muted)]">
                    {stat.label}
                  </span>
                </AnimateIn>
              ))}
            </div>
          </AnimateIn>
        </div>
      </Container>
    </section>
  )
}
