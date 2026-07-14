import { Link, useLocation } from 'react-router-dom'
import { LOGO, SITE } from '../../constants/siteData'
import { scrollToTop } from './LandingLink'

export default function LandingLogoLink({ className = '', imageClassName = '' }) {
  const { pathname } = useLocation()
  const logoPath = '/'

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
