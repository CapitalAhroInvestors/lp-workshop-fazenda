'use client'

import { useRef, useEffect, ReactNode, ElementType, ComponentPropsWithRef } from 'react'

type Variant = 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scale' | 'fadeUpSlow'

interface Props {
  children: ReactNode
  variant?: Variant
  delay?: number
  className?: string
  as?: ElementType
  style?: React.CSSProperties
}

export default function AnimateIn({
  children,
  variant = 'fadeUp',
  delay = 0,
  className = '',
  as: Tag = 'div',
  style,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('ai-v')
          observer.disconnect()
        }
      },
      { rootMargin: '-80px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`ai ai-${variant} ${className}`}
      style={delay ? { transitionDelay: `${delay}s`, ...style } : style}
    >
      {children}
    </Tag>
  )
}
