import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { initGoogleAnalytics, trackPageView } from '../../utils/analytics'

export default function GoogleAnalytics() {
  const location = useLocation()

  useEffect(() => {
    let cancelled = false
    const path = `${location.pathname}${location.search}`

    initGoogleAnalytics().then(() => {
      if (!cancelled) {
        trackPageView(path)
      }
    })

    return () => {
      cancelled = true
    }
  }, [location.pathname, location.search])

  return null
}
