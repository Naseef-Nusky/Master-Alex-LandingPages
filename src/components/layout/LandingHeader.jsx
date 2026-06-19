import { useState, useEffect } from 'react'
import { SITE, LOGO } from '../../constants/siteData'
import { PhoneIcon, WhatsAppIcon } from '../common/Buttons'

export default function LandingHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 w-full border-b border-white/10 transition-all duration-500 ${
        scrolled
          ? 'bg-master-dark/95 shadow-2xl shadow-black/30 backdrop-blur-xl'
          : 'bg-master-purple/95 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-2.5 sm:gap-3 sm:px-6 sm:py-3.5">
        <a href="#top" className="inline-flex shrink-0 transition hover:opacity-90">
          <img
            src={LOGO}
            alt={SITE.name}
            className="h-20 w-20 object-contain md:h-24 md:w-24"
          />
        </a>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <a
            href={SITE.phoneLink}
            className="btn-touch inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-white transition hover:border-master-gold/40 hover:text-master-gold-light sm:hidden"
          >
            <PhoneIcon className="h-4 w-4" />
            Call
          </a>
          <a
            href={SITE.phoneLink}
            className="btn-touch hidden min-h-[44px] items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-master-gold/40 hover:text-master-gold-light md:inline-flex"
          >
            <PhoneIcon className="h-4 w-4" />
            {SITE.phone}
          </a>
          <a
            href={SITE.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold btn-touch inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold text-master-dark sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm"
          >
            <WhatsAppIcon className="h-6 w-6" />
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}
