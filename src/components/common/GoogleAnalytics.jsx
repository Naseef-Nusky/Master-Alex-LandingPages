import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { initGoogleAnalytics, trackPageView } from '../../utils/analytics'

export default function GoogleAnalytics() {
  const location = useLocation()
  const lastTrackedPath = useRef(null)

  useEffect(() => {
    const path = `${location.pathname}${location.search}`

    initGoogleAnalytics().then(() => {
      if (lastTrackedPath.current === path) return

      // index.html already sends the first page view on load
      if (lastTrackedPath.current === null) {
        lastTrackedPath.current = path
        return
      }

      lastTrackedPath.current = path
      trackPageView(path)
    })
  }, [location.pathname, location.search])

  return null
}
