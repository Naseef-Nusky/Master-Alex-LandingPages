import { Link, useLocation } from 'react-router-dom'
import { DEFAULT_LANDING_PATH, LANDING_PAGES } from '../../constants/landingPages'
import { LOGO, SITE } from '../../constants/siteData'
import { scrollToTop } from './LandingLink'

export default function LandingLogoLink({ className = '', imageClassName = '' }) {
  const { pathname } = useLocation()
  const isLandingPage = LANDING_PAGES.some((page) => page.path === pathname)
  const logoPath = isLandingPage ? pathname : DEFAULT_LANDING_PATH

  const handleClick = (e) => {
    if (pathname === logoPath) {
      e.preventDefault()
    }
    scrollToTop()
  }

  return (
    <Link to={logoPath} onClick={handleClick} className={className}>
      <img src={LOGO} alt={SITE.name} className={imageClassName} />
    </Link>
  )
}
