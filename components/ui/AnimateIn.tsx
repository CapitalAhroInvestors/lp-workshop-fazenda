'use client'

import { motion, Variants } from 'framer-motion'
import { ReactNode } from 'react'

const EASE = [0.22, 1, 0.36, 1] as const

const variants: Record<string, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.94 },
    visible: { opacity: 1, scale: 1 },
  },
  fadeUpSlow: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  },
}

export const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
}

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
}

interface Props {
  children: ReactNode
  variant?: keyof typeof variants
  delay?: number
  duration?: number
  className?: string
  as?: keyof JSX.IntrinsicElements
  stagger?: boolean
}

export default function AnimateIn({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.65,
  className = '',
  as = 'div',
  stagger = false,
}: Props) {
  const Tag = motion[as as keyof typeof motion] as typeof motion.div

  if (stagger) {
    return (
      <Tag
        className={className}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {children}
      </Tag>
    )
  }

  return (
    <Tag
      className={className}
      variants={variants[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration, ease: EASE, delay }}
    >
      {children}
    </Tag>
  )
}
