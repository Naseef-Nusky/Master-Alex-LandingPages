const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID

function hasGtag() {
  return typeof window !== 'undefined' && typeof window.gtag === 'function'
}

export function isGoogleAnalyticsEnabled() {
  return Boolean(MEASUREMENT_ID)
}

export function initGoogleAnalytics() {
  if (!MEASUREMENT_ID || typeof window === 'undefined' || hasGtag()) {
    return Boolean(MEASUREMENT_ID && hasGtag())
  }

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', MEASUREMENT_ID, { send_page_view: false })

  return true
}

export function trackPageView(path) {
  if (!MEASUREMENT_ID || !hasGtag()) return

  window.gtag('config', MEASUREMENT_ID, {
    page_path: path,
  })
}

export function trackEvent(eventName, params = {}) {
  if (!MEASUREMENT_ID || !hasGtag()) return

  window.gtag('event', eventName, params)
}
