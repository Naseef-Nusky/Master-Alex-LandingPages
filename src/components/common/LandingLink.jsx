import { Link } from 'react-router-dom'

export function isInternalRoute(href) {
  return typeof href === 'string' && href.startsWith('/') && !href.startsWith('//')
}

export function scrollToTop() {
  window.scrollTo(0, 0)
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
}

export default function LandingLink({ to, children, className, onClick, ...props }) {
  return (
    <Link
      to={to}
      className={className}
      onClick={(e) => {
        onClick?.(e)
        if (!e.defaultPrevented) {
          scrollToTop()
        }
      }}
      {...props}
    >
      {children}
    </Link>
  )
}
