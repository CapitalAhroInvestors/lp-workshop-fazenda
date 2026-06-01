'use client'

import { useEffect } from 'react'
import { persistUtms } from '@/lib/analytics'

export default function UtmPersist() {
  useEffect(() => {
    persistUtms()
  }, [])

  return null
}
