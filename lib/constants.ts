export const EVENT = {
  date: '2026-06-10T20:00:00-03:00',
  durationMin: 90,
  format: 'Online ao vivo',
} as const

export const PLANS = {
  basic: {
    id: 'workshop',
    name: 'Workshop',
    price: 67,
    nextLotPrice: 97,
    checkoutUrl: 'https://payfast.greenn.com.br/atksj3t/offer/HSFWWf?b_id_1=8g6rg5g&b_offer_1=Kc6Vd3&b_id_2=6hp37ke&b_offer_2=GE9L9y&b_id_3=7maq232&b_offer_3=8RAAaC&b_id_4=qbt9rz5&b_offer_4=LggXs5',
    upsellPrice: 57,
    upsellCheckoutUrl: 'https://payfast.greenn.com.br/redirect/288914',
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
    price: 97,
    nextLotPrice: 127,
    checkoutUrl: 'https://payfast.greenn.com.br/atksj3t/offer/sfMOUC?b_id_1=8g6rg5g&b_offer_1=Kc6Vd3&b_id_2=6hp37ke&b_offer_2=GE9L9y&b_id_3=7maq232&b_offer_3=8RAAaC&b_id_4=qbt9rz5&b_offer_4=LggXs5',
    highlight: true,
    badge: 'Mais escolhido',
    featuresHeader: 'Tudo do plano Workshop +',
    features: [
      'Apostila Mapa dos 5 Sistemas (PDF 40 páginas)',
      'Aula gravada + acesso à plataforma de cursos',
      'Grupo VIP de WhatsApp',
      'Q&A ao vivo com Dr. Renato',
      'Certificado de participação',
    ],
  },
} as const

export const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID ?? ''
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? ''
