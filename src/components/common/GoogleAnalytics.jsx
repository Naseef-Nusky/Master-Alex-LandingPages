import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { initGoogleAnalytics, trackPageView } from '../../utils/analytics'

export default function GoogleAnalytics() {
  const location = useLocation()

  useEffect(() => {
    initGoogleAnalytics()
  }, [])

  useEffect(() => {
    trackPageView(`${location.pathname}${location.search}`)
  }, [location.pathname, location.search])

  return null
}
