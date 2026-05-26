import Image from 'next/image'
import Container from '@/components/ui/Container'

export default function LogoBand() {
  return (
    <div className="border-y border-[var(--border-subtle)] bg-[var(--bg-elevated)] py-8">
      <Container>
        <div className="flex flex-col items-center gap-2">
          <p className="font-sans text-xs uppercase tracking-widest text-[var(--text-muted)]">
            Uma realização
          </p>
          <Image
            src="/logo-escola.png"
            alt="Capital Agro Investors"
            width={180}
            height={64}
            className="object-contain opacity-90"
            style={{ height: 'auto' }}
          />
        </div>
      </Container>
    </div>
  )
}
