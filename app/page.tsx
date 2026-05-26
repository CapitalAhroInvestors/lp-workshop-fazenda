'use client'

import { useEffect } from 'react'
import { persistUtms } from '@/lib/analytics'

import Countdown from '@/components/sections/Countdown'
import Hero from '@/components/sections/Hero'
import Reality from '@/components/sections/Reality'
import Pillars from '@/components/sections/Pillars'
import Compare from '@/components/sections/Compare'
import Authority from '@/components/sections/Authority'
import Bridge from '@/components/sections/Bridge'
import WhatsappTestimonials from '@/components/sections/WhatsappTestimonials'
import Plans from '@/components/sections/Plans'
import LogoBand from '@/components/sections/LogoBand'
import Apostila from '@/components/sections/Apostila'
import Guarantee from '@/components/sections/Guarantee'
import Faq from '@/components/sections/Faq'
import FinalCta from '@/components/sections/FinalCta'
import Footer from '@/components/sections/Footer'

export default function Home() {
  useEffect(() => {
    persistUtms()
  }, [])

  return (
    <>
      <Countdown />
      <main id="main-content">
        <Hero />
        <Authority />
        <Reality />
        <Pillars />
        <Compare />
        <WhatsappTestimonials />
        <Bridge />
        <Plans />
        <LogoBand />
        <Apostila />
        <Guarantee />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
