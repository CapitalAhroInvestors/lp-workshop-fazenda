import Image from 'next/image'
import Container from '@/components/ui/Container'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-elevated)] py-10">
      <Container>
        <div className="flex flex-col items-center gap-4 text-center">
          <Image
            src="/logo-escola.webp"
            alt="Capital Agro Investors"
            width={140}
            height={52}
            className="object-contain opacity-80"
            style={{ height: 'auto' }}
          />
          <p className="font-sans text-sm text-[var(--text-muted)]">
            Capital Agro Investors © 2026
          </p>
          <div className="flex items-center gap-4">
            <a
              href="/privacidade"
              className="font-sans text-xs text-[var(--text-muted)] transition-colors hover:text-[var(--text-secondary)]"
            >
              Política de Privacidade
            </a>
            <span className="text-[var(--text-muted)]" aria-hidden="true">·</span>
            <a
              href="/termos"
              className="font-sans text-xs text-[var(--text-muted)] transition-colors hover:text-[var(--text-secondary)]"
            >
              Termos de Uso
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

{/* SEÇÃO Footer — concluída */}
