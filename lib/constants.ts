export const EVENT = {
  date: '2026-06-10T20:00:00-03:00',
  durationMin: 90,
  format: 'Online ao vivo',
} as const

export const PLANS = {
  basic: {
    id: 'workshop',
    name: 'Workshop',
    price: 47,
    nextLotPrice: 67,
    checkoutUrl: 'https://payfast.greenn.com.br/atksj3t/offer/5Ystx8',
    upsellPrice: 57,
    upsellCheckoutUrl: 'https://payfast.greenn.com.br/atksj3t/offer/0DFrj1',
    features: [
      'Workshop ao vivo · 10 de junho · 20h',
      'Grupo VIP de WhatsApp',
      'Q&A ao vivo com Dr. Renato',
      'Certificado de participação',
    ],
  },
  premium: {
    id: 'workshop_apostila',
    name: 'Workshop + Apostila',
    price: 67,
    nextLotPrice: 97,
    checkoutUrl: 'https://payfast.greenn.com.br/atksj3t/offer/sfMOUC',
    highlight: true,
    badge: 'Mais escolhido',
    featuresHeader: 'Tudo do plano Workshop +',
    features: [
      'Apostila Mapa dos 5 Sistemas (PDF 40 páginas)',
      'Grupo VIP de WhatsApp',
      'Q&A ao vivo com Dr. Renato',
      'Certificado de participação',
    ],
  },
} as const

export const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID ?? ''
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? ''
