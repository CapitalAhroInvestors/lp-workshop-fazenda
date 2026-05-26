'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import AnimateIn from '@/components/ui/AnimateIn'
import SectionTitle from '@/components/ui/SectionTitle'

// ─── Icons ───────────────────────────────────────────────────────────────────

const BackIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#aebac1" aria-label="Voltar">
    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
  </svg>
)
const VideoIcon = () => (
  <svg width="21" height="21" viewBox="0 0 24 24" fill="#aebac1" aria-label="Videochamada">
    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
  </svg>
)
const PhoneIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="#aebac1" aria-label="Ligação">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
)
const DotsIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="#aebac1" aria-label="Mais opções">
    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
  </svg>
)
const SignalIcon = () => (
  <svg width="14" height="11" viewBox="0 0 14 11" fill="#aebac1" aria-hidden="true">
    <rect x="0" y="7" width="2" height="4" rx="0.5" />
    <rect x="3" y="5" width="2" height="6" rx="0.5" />
    <rect x="6" y="3" width="2" height="8" rx="0.5" />
    <rect x="9" y="1" width="2" height="10" rx="0.5" />
    <rect x="12" y="0" width="2" height="11" rx="0.5" />
  </svg>
)
const BatteryIcon = () => (
  <svg width="22" height="11" viewBox="0 0 22 11" fill="none" aria-hidden="true">
    <rect x="0.5" y="0.5" width="18" height="10" rx="2.5" stroke="#aebac1" />
    <rect x="2" y="2" width="13" height="7" rx="1.5" fill="#aebac1" />
    <path d="M19.5 3.5v4a1.5 1.5 0 000-4z" fill="#aebac1" />
  </svg>
)
const MicIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#aebac1" aria-hidden="true">
    <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15c-.08-.49-.49-.85-.98-.85-.61 0-1.09.54-1 1.14.49 3 2.89 5.35 5.91 5.78V20c0 .55.45 1 1 1s1-.45 1-1v-2.08c3.02-.43 5.42-2.78 5.91-5.78.1-.6-.39-1.14-1-1.14z" />
  </svg>
)
const EmojiIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#aebac1" aria-hidden="true">
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 14.24A6.943 6.943 0 0112 18c-1.59 0-3.1-.54-4.23-1.5-.23-.19-.26-.52-.07-.74.19-.23.52-.25.74-.07C9.37 16.55 10.65 17 12 17c1.36 0 2.63-.45 3.56-1.31.22-.18.55-.16.74.07.19.22.16.54-.07.48zM8.5 11c-.83 0-1.5-.67-1.5-1.5S7.67 8 8.5 8s1.5.67 1.5 1.5S9.33 11 8.5 11zm7 0c-.83 0-1.5-.67-1.5-1.5S14.67 8 15.5 8s1.5.67 1.5 1.5S16.33 11 15.5 11z" />
  </svg>
)
const PlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#aebac1" aria-hidden="true">
    <path d="M8 5v14l11-7z" />
  </svg>
)

// ─── Types ────────────────────────────────────────────────────────────────────

type TextMsg  = { type: 'text';  text: string; time: string; isFirst?: boolean }
type AudioMsg = { type: 'audio'; duration: string; time: string; transcript: string }
type Msg = TextMsg | AudioMsg

interface Conv {
  name: string
  sub: string
  initials: string
  avatarBg: string
  status: string
  messages: Msg[]
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const CONVS: Conv[] = [
  {
    name: 'Ronilson M.',
    sub: 'Produtor · Goiás',
    initials: 'R',
    avatarBg: '#00a884',
    status: 'visto por último hoje às 19:45',
    messages: [
      { type: 'text', text: 'Dr. Renato, boa noite 🙏', time: '19:42', isFirst: true },
      { type: 'text', text: 'só queria mandar um obrigado mesmo', time: '19:42' },
      { type: 'text', text: 'ja fiz uns 4 ou 5 curso de agro e nenhum chegou no pé da Capital Escola não', time: '19:43' },
      { type: 'text', text: 'é outro nivel mesmo, conteudo pra aplicar na fazenda na segunda de manha', time: '19:43' },
      { type: 'text', text: 'tamo junto 👊', time: '19:44' },
    ],
  },
  {
    name: 'Vinícius P.',
    sub: 'Cafeicultor · Sul de Minas',
    initials: 'V',
    avatarBg: '#7c4dff',
    status: 'online',
    messages: [
      { type: 'text', text: 'Renato bom dia', time: '08:17', isFirst: true },
      { type: 'text', text: 'cara preciso te contar uma coisa', time: '08:17' },
      { type: 'text', text: 'montei o Sistema Financeiro do jeito que vc ensinou semana passada', time: '08:18' },
      { type: 'text', text: 'descobri que tava perdendo R$ 380 por saca em um talhão e nao sabia', time: '08:18' },
      { type: 'text', text: '380 reais por saca irmão 😩', time: '08:19' },
      { type: 'text', text: 'os 5 sistemas mudou minha cabeça de verdade, obrigado demais', time: '08:19' },
    ],
  },
  {
    name: 'Eduardo C.',
    sub: 'Cafeicultor · Cerrado Mineiro',
    initials: 'E',
    avatarBg: '#e53935',
    status: 'visto por último hoje às 21:12',
    messages: [
      { type: 'text', text: 'boa noite pessoal do grupo', time: '21:08', isFirst: true },
      { type: 'text', text: 'só pra dividir com vcs', time: '21:09' },
      { type: 'text', text: 'apliquei o método dos 5 sistemas do Dr Renato na minha fazenda de café', time: '21:09' },
      { type: 'text', text: 'em 6 meses ja consegui identificar 3 vazamento de custo que tava acontecendo a anos e eu nem via', time: '21:10' },
      { type: 'text', text: 'recomendo demais pra quem ta começando, vale cada centavo', time: '21:10' },
    ],
  },
  {
    name: 'Roberto F.',
    sub: 'Produtor de grãos · Bahia',
    initials: 'R',
    avatarBg: '#1976d2',
    status: 'online',
    messages: [
      { type: 'text', text: 'fala Renato', time: '14:33', isFirst: true },
      { type: 'audio', duration: '0:47', time: '14:33', transcript: 'cara o que vc faz é traduzir 20 anos de Embrapa numa linguagem que o produtor entende. Nunca vi ninguém ensinar gestão de fazenda desse jeito. Os 5 sistemas é simples mas tem uma profundidade que só quem viveu pesquisa de verdade consegue passar. Muito obrigado mesmo' },
    ],
  },
  {
    name: 'Marcos A.',
    sub: 'Pecuarista · Mato Grosso',
    initials: 'M',
    avatarBg: '#f57c00',
    status: 'visto por último hoje às 17:02',
    messages: [
      { type: 'text', text: 'renato', time: '16:55', isFirst: true },
      { type: 'text', text: 'confesso que entrei meio desconfiado', time: '16:55' },
      { type: 'text', text: 'achei que ia ser mais um workshop generico desses que tem por ai', time: '16:56' },
      { type: 'text', text: 'me enganei feio kkkk', time: '16:56' },
      { type: 'text', text: 'Capital Escola de Negocios Agro tem pegada de gente que viveu a roça mesmo, nao é teoria de PowerPoint', time: '16:57' },
      { type: 'text', text: 'sai do workshop com plano de ação na mão, ja botando em pratica essa semana', time: '16:57' },
    ],
  },
  {
    name: 'Antônio L.',
    sub: 'Produtor de soja · Maranhão',
    initials: 'A',
    avatarBg: '#00897b',
    status: 'visto por último hoje às 12:10',
    messages: [
      { type: 'text', text: 'Dr Renato', time: '12:04', isFirst: true },
      { type: 'text', text: 'sempre achei que gestão era coisa de empresa grande sabe', time: '12:04' },
      { type: 'text', text: 'que fazenda nao precisava disso', time: '12:05' },
      { type: 'text', text: 'os 5 sistemas me mostrou o contrário', time: '12:05' },
      { type: 'text', text: 'hoje decido por ROI e nao mais por intuição ou pelo que o vizinho ta fazendo', time: '12:06' },
      { type: 'text', text: 'mudou meu jogo 🙏🙌', time: '12:06' },
    ],
  },
]

// ─── Waveform ─────────────────────────────────────────────────────────────────

const WAVE = [3, 7, 11, 15, 9, 5, 12, 17, 8, 4, 13, 7, 3, 8, 11, 16, 9, 5, 14, 8, 4, 11, 6, 3, 9, 13, 7, 5, 10, 6]

// ─── Bubble components ────────────────────────────────────────────────────────

function TextBubble({ msg }: { msg: TextMsg }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-start', position: 'relative' }}>
      {msg.isFirst && (
        <div aria-hidden="true" style={{
          position: 'absolute', top: 0, left: -6,
          width: 0, height: 0,
          borderRight: '7px solid #202c33',
          borderBottom: '7px solid transparent',
        }} />
      )}
      <div style={{
        background: '#202c33',
        borderRadius: msg.isFirst ? '0 7.5px 7.5px 7.5px' : 7.5,
        padding: '6px 10px 4px',
        maxWidth: '85%',
        boxShadow: '0 1px 2px rgba(0,0,0,0.3)',
      }}>
        <p style={{ color: '#e9edef', fontSize: 13, lineHeight: 1.45, margin: 0, wordBreak: 'break-word' }}>
          {msg.text}
        </p>
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 3, marginTop: 2 }}>
          <span style={{ color: '#8696a0', fontSize: 10 }}>{msg.time}</span>
        </div>
      </div>
    </div>
  )
}

function AudioBubble({ msg }: { msg: AudioMsg }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {/* Audio balloon */}
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <div style={{
          background: '#202c33',
          borderRadius: 7.5,
          padding: '8px 10px 4px',
          maxWidth: '90%',
          boxShadow: '0 1px 2px rgba(0,0,0,0.3)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{
              width: 34, height: 34, borderRadius: '50%',
              background: '#00a884',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <PlayIcon />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
              {WAVE.map((h, i) => (
                <div key={i} aria-hidden="true" style={{
                  width: 2, height: h, borderRadius: 1, flexShrink: 0,
                  background: i < 15 ? '#00a884' : '#3b4a54',
                }} />
              ))}
            </div>
            <span style={{ color: '#8696a0', fontSize: 11, flexShrink: 0 }}>{msg.duration}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
            <span style={{ color: '#8696a0', fontSize: 10 }}>{msg.time}</span>
          </div>
        </div>
      </div>
      {/* Transcript */}
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <div style={{
          background: '#202c33',
          borderRadius: 7.5,
          padding: '6px 10px 4px',
          maxWidth: '90%',
          boxShadow: '0 1px 2px rgba(0,0,0,0.3)',
        }}>
          <p style={{ color: '#8696a0', fontSize: 12, fontStyle: 'italic', lineHeight: 1.4, margin: 0 }}>
            🎙️ {msg.transcript}
          </p>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
            <span style={{ color: '#8696a0', fontSize: 10 }}>14:34</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Phone card ───────────────────────────────────────────────────────────────

function PhoneCard({ conv }: { conv: Conv }) {
  const now = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })

  return (
    <article style={{
      background: '#111b21',
      borderRadius: 28,
      border: '2px solid #1f2c34',
      overflow: 'hidden',
      boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
      fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
    }}>
      {/* Status bar */}
      <div style={{
        background: '#111b21',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '10px 16px 4px',
      }}>
        <span style={{ color: '#aebac1', fontSize: 12, fontWeight: 600 }}>{now}</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <SignalIcon />
          <SignalIcon />
          <BatteryIcon />
        </div>
      </div>

      {/* WA Header */}
      <div style={{
        background: '#202c33',
        display: 'flex', alignItems: 'center', gap: 8,
        padding: '6px 10px 8px',
      }}>
        <BackIcon />
        <div style={{
          width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
          background: conv.avatarBg,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontSize: 14, fontWeight: 700,
        }} aria-hidden="true">
          {conv.initials}
        </div>
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <p style={{ color: '#e9edef', fontSize: 14, fontWeight: 600, margin: 0, lineHeight: 1.3 }}>
            {conv.name}
          </p>
          <p style={{ color: '#8696a0', fontSize: 11, margin: 0 }}>{conv.status}</p>
        </div>
        <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
          <VideoIcon />
          <PhoneIcon />
          <DotsIcon />
        </div>
      </div>

      {/* Chat area */}
      <div style={{
        background: '#0b141a',
        padding: '10px 10px 6px',
        display: 'flex', flexDirection: 'column', gap: 3,
        minHeight: 220,
      }}>
        {/* HOJE pill */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 6 }}>
          <span style={{
            background: '#182229', color: '#8696a0',
            fontSize: 11, padding: '3px 10px', borderRadius: 6,
            boxShadow: '0 1px 2px rgba(0,0,0,0.3)',
          }}>HOJE</span>
        </div>

        {conv.messages.map((msg, i) =>
          msg.type === 'audio'
            ? <AudioBubble key={i} msg={msg} />
            : <TextBubble key={i} msg={msg} />
        )}
      </div>

      {/* Input bar */}
      <div style={{
        background: '#202c33',
        display: 'flex', alignItems: 'center', gap: 8,
        padding: '8px 10px',
      }}>
        <EmojiIcon />
        <div style={{
          flex: 1, background: '#2a3942', borderRadius: 20,
          padding: '7px 12px',
          color: '#8696a0', fontSize: 13,
        }}>
          Mensagem
        </div>
        <MicIcon />
      </div>
    </article>
  )
}

const GAP = 20
const SPRING = { type: 'spring', stiffness: 280, damping: 30 } as const

// ─── Section ──────────────────────────────────────────────────────────────────

export default function WhatsappTestimonials() {
  const [current, setCurrent]   = useState(0)
  const [cardW,   setCardW]     = useState(320)
  const [perPage, setPerPage]   = useState(1)
  const containerRef            = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const update = () => {
      const per = window.innerWidth >= 1024 ? 3 : 1
      setPerPage(per)
      if (containerRef.current) {
        const w = (containerRef.current.offsetWidth - GAP * (per - 1)) / per
        setCardW(w)
      }
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const maxIdx  = Math.max(0, CONVS.length - perPage)
  const numDots = maxIdx + 1
  const trackX  = -(current * (cardW + GAP))
  const minDrag = -(maxIdx * (cardW + GAP))

  const go = (idx: number) => setCurrent(Math.max(0, Math.min(idx, maxIdx)))

  return (
    <section
      id="depoimentos-whatsapp"
      className="py-24 md:py-32"
      style={{ background: '#000' }}
    >
      <Container>
        <AnimateIn variant="fadeUp" className="mb-4">
          <SectionTitle eyebrow="O QUE OUTROS PRODUTORES ESTÃO DIZENDO" align="center">
            Quem já aplicou na <em>própria fazenda</em>.
          </SectionTitle>
        </AnimateIn>

        <AnimateIn variant="fadeUp" delay={0.1} className="mb-10 flex justify-center">
          <p className="max-w-xl text-center font-sans text-base leading-relaxed text-[var(--text-muted)]">
            Mensagens reais que recebemos no WhatsApp depois do último workshop.
          </p>
        </AnimateIn>

        {/* Track */}
        <div ref={containerRef} className="overflow-hidden">
          <motion.div
            drag="x"
            dragConstraints={{ left: minDrag, right: 0 }}
            dragElastic={0.07}
            onDragEnd={(_, info) => {
              if (info.offset.x < -(cardW * 0.22)) go(current + 1)
              else if (info.offset.x > cardW * 0.22) go(current - 1)
            }}
            animate={{ x: trackX }}
            transition={SPRING}
            style={{ display: 'flex', gap: GAP, cursor: 'grab', userSelect: 'none', touchAction: 'pan-y' }}
          >
            {CONVS.map((conv, i) => (
              <div key={i} style={{ width: cardW, flexShrink: 0 }}>
                <PhoneCard conv={conv} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Controls */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <div className="flex items-center gap-5">
            <button
              onClick={() => go(current - 1)}
              disabled={current === 0}
              aria-label="Anterior"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] transition-colors hover:border-[var(--border-glow)] hover:text-white disabled:opacity-25"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
              </svg>
            </button>

            <div className="flex items-center gap-2" role="tablist" aria-label="Navegação de depoimentos">
              {Array.from({ length: numDots }).map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Posição ${i + 1}`}
                  onClick={() => go(i)}
                  style={{
                    width: i === current ? 20 : 7,
                    height: 7,
                    borderRadius: 4,
                    background: i === current ? 'var(--green-bright)' : 'var(--border-subtle)',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'all 0.2s',
                  }}
                />
              ))}
            </div>

            <button
              onClick={() => go(current + 1)}
              disabled={current === maxIdx}
              aria-label="Próximo"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] transition-colors hover:border-[var(--border-glow)] hover:text-white disabled:opacity-25"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
              </svg>
            </button>
          </div>

          <p className="font-sans text-xs text-[var(--text-muted)]">
            {current + 1}–{Math.min(current + perPage, CONVS.length)} de {CONVS.length}
          </p>
        </div>
      </Container>
    </section>
  )
}
