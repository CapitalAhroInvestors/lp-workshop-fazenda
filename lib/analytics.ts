declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
  }
}

type TrackProps = Record<string, string | number | boolean | undefined>

export function track(event: string, props?: TrackProps) {
  if (typeof window === 'undefined') return

  if (window.gtag) {
    window.gtag('event', event, props)
  }

  if (window.fbq) {
    window.fbq('track', event, props)
  }
}

export function persistUtms() {
  if (typeof window === 'undefined') return
  const params = new URLSearchParams(window.location.search)
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']
  const utms: Record<string, string> = {}
  utmKeys.forEach((key) => {
    const val = params.get(key)
    if (val) utms[key] = val
  })
  if (Object.keys(utms).length > 0) {
    localStorage.setItem('utms', JSON.stringify(utms))
  }
}

export function getCheckoutUrl(base: string): string {
  if (typeof window === 'undefined') return base
  try {
    const stored = localStorage.getItem('utms')
    if (!stored) return base
    const utms = JSON.parse(stored) as Record<string, string>
    const url = new URL(base)
    Object.entries(utms).forEach(([k, v]) => url.searchParams.set(k, v))
    return url.toString()
  } catch {
    return base
  }
}
