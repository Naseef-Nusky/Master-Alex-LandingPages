const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim()

let initPromise = null
let isReady = false
const pendingPageViews = []

function hasGtag() {
  return typeof window !== 'undefined' && typeof window.gtag === 'function'
}

export function isGoogleAnalyticsEnabled() {
  return Boolean(MEASUREMENT_ID)
}

function sendPageView(path) {
  if (!MEASUREMENT_ID || !hasGtag()) return

  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: document.title,
    page_location: `${window.location.origin}${path}`,
  })
}

function flushPendingPageViews() {
  while (pendingPageViews.length > 0) {
    sendPageView(pendingPageViews.shift())
  }
}

export function initGoogleAnalytics() {
  if (!MEASUREMENT_ID || typeof window === 'undefined') {
    return Promise.resolve(false)
  }

  if (initPromise) return initPromise

  initPromise = new Promise((resolve) => {
    if (isReady && hasGtag()) {
      resolve(true)
      return
    }

    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag() {
      window.dataLayer.push(arguments)
    }
    window.gtag('js', new Date())

    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`
    script.onload = () => {
      window.gtag('config', MEASUREMENT_ID, { send_page_view: false })
      isReady = true
      flushPendingPageViews()
      resolve(true)
    }
    script.onerror = () => {
      console.warn('Google Analytics failed to load. Check ad blockers or network.')
      resolve(false)
    }
    document.head.appendChild(script)
  })

  return initPromise
}

export function trackPageView(path) {
  if (!MEASUREMENT_ID) return

  if (!isReady) {
    pendingPageViews.push(path)
    initGoogleAnalytics()
    return
  }

  sendPageView(path)
}

export function trackEvent(eventName, params = {}) {
  if (!MEASUREMENT_ID || !hasGtag()) return

  window.gtag('event', eventName, params)
}
