'use client'

import { getCheckoutUrl, track } from '@/lib/analytics'

interface Props {
  href: string
  children: React.ReactNode
  size?: 'md' | 'lg'
  trackingId: string
  trackingProps?: Record<string, string>
  className?: string
  isAnchor?: boolean
}

export default function CtaButton({
  href,
  children,
  size = 'md',
  trackingId,
  trackingProps,
  className = '',
  isAnchor = false,
}: Props) {
  const sizeClasses = {
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg',
  }

  const handleClick = () => {
    track(trackingId, trackingProps)
  }

  if (isAnchor) {
    return (
      <a
        href={href}
        onClick={handleClick}
        className={`inline-flex items-center justify-center rounded-full bg-[var(--green-bright)] font-sans font-semibold uppercase tracking-wide text-black transition-all duration-200 hover:bg-[var(--green-deep)] hover:shadow-[0_0_40px_rgba(34,197,94,0.4)] active:scale-95 ${sizeClasses[size]} ${className}`}
      >
        {children}
      </a>
    )
  }

  return (
    <a
      href={getCheckoutUrl(href)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`inline-flex items-center justify-center rounded-full bg-[var(--green-bright)] font-sans font-semibold uppercase tracking-wide text-black transition-all duration-200 hover:bg-[var(--green-deep)] hover:shadow-[0_0_40px_rgba(34,197,94,0.4)] active:scale-95 ${sizeClasses[size]} ${className}`}
    >
      {children}
    </a>
  )
}
