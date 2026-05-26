'use client'

import { useEffect, useState } from 'react'
import { EVENT } from '@/lib/constants'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function pad(n: number) {
  return String(n).padStart(2, '0')
}

function calcTimeLeft(): TimeLeft | null {
  const diff = new Date(EVENT.date).getTime() - Date.now()
  if (diff <= 0) return null
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / 1000 / 60) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const initial = calcTimeLeft()
    setTimeLeft(initial)
    if (!initial) return

    const timer = setInterval(() => {
      const tl = calcTimeLeft()
      setTimeLeft(tl)
      if (!tl) clearInterval(timer)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!timeLeft) return null

  const units = [
    { label: 'DIAS', value: pad(timeLeft.days) },
    { label: 'HORAS', value: pad(timeLeft.hours) },
    { label: 'MIN', value: pad(timeLeft.minutes) },
    { label: 'SEG', value: pad(timeLeft.seconds) },
  ]

  return (
    <div
      id="countdown"
      className="sticky top-0 z-50 w-full border-b border-[var(--border-subtle)] bg-[var(--bg-elevated)]"
    >
      <div className="flex items-center justify-center gap-2 px-4 py-2.5 md:gap-4">
        <span className="hidden font-sans text-xs text-[var(--text-muted)] sm:inline">
          Faltam menos de
        </span>
        <div className="flex items-center gap-1 md:gap-2">
          {units.map((unit, i) => (
            <div key={unit.label} className="flex items-center gap-1 md:gap-2">
              <div className="flex flex-col items-center">
                <span className="font-sans text-sm font-bold tabular-nums text-[var(--green-glow)] md:text-base">
                  {unit.value}
                </span>
                <span className="font-sans text-[9px] text-[var(--text-muted)] md:text-[10px]">
                  {unit.label}
                </span>
              </div>
              {i < units.length - 1 && (
                <span className="mb-3 font-sans text-sm font-bold text-[var(--text-muted)]">
                  :
                </span>
              )}
            </div>
          ))}
        </div>
        <span className="hidden font-sans text-xs text-[var(--text-muted)] sm:inline">
          para o workshop ao vivo
        </span>
      </div>
    </div>
  )
}
