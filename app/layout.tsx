import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { GA4_ID, META_PIXEL_ID } from '@/lib/constants'

const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const sans = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.capitalescolaagro.com.br'),
  title: 'Workshop A Fazenda Que Funciona Como Empresa | Capital Agro',
  description:
    'Workshop online com Dr. Renato Rodrigues (Ex Pesquisador Embrapa) sobre os 5 sistemas que separam fazenda lucrativa de fazenda que só sobrevive. 10 de junho, 20h.',
  openGraph: {
    title: 'A Fazenda Que Funciona Como Empresa',
    description: 'Workshop ao vivo com Dr. Renato Rodrigues. 10 de junho, 20h.',
    images: ['/og.jpg'],
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: { card: 'summary_large_image' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'A Fazenda Que Funciona Como Empresa',
  startDate: '2026-06-10T20:00:00-03:00',
  endDate: '2026-06-10T21:30:00-03:00',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
  location: {
    '@type': 'VirtualLocation',
    url: 'https://capitalagro.com.br',
  },
  organizer: {
    '@type': 'Organization',
    name: 'Capital Agro Investors',
  },
  performer: {
    '@type': 'Person',
    name: 'Dr. Renato Rodrigues',
    description: 'Ex-Embrapa, fundador da Capital Agro Investors',
  },
  offers: [
    {
      '@type': 'Offer',
      name: 'Workshop',
      price: '49.90',
      priceCurrency: 'BRL',
      availability: 'https://schema.org/InStock',
    },
    {
      '@type': 'Offer',
      name: 'Workshop + Apostila',
      price: '67',
      priceCurrency: 'BRL',
      availability: 'https://schema.org/InStock',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${serif.variable} ${sans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[var(--bg-base)] text-[var(--text-primary)] antialiased">
        <a href="#main-content" className="skip-link">
          Ir para conteúdo principal
        </a>

        {children}

        {/* GA4 */}
        {GA4_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA4_ID}');
              `}
            </Script>
          </>
        )}

        {/* UTMify — UTM tracking */}
        <Script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck=""
          data-utmify-prevent-subids=""
          strategy="lazyOnload"
        />

        {/* UTMify — Pixel */}
        <Script id="utmify-pixel" strategy="lazyOnload">
          {`
            window.pixelId = "6a162382c4557a58b68ee762";
            var a = document.createElement("script");
            a.setAttribute("async", "");
            a.setAttribute("defer", "");
            a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
            document.head.appendChild(a);
          `}
        </Script>

        {/* Meta Pixel */}
        {META_PIXEL_ID && (
          <Script id="meta-pixel" strategy="lazyOnload">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${META_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}
      </body>
    </html>
  )
}
