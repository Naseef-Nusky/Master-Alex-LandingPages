import { useState, useEffect } from 'react'
import { SITE } from '../../constants/siteData'
import { WhatsAppIcon } from './Buttons'

export default function FloatingCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('top')
    if (!hero) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting)
      },
      { threshold: 0, rootMargin: '0px 0px -1px 0px' },
    )

    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      className={`fixed right-0 bottom-0 left-0 z-40 border-t border-white/10 bg-master-dark/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-lg backdrop-blur-xl transition-transform duration-500 ease-out lg:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full pointer-events-none'
      }`}
      aria-hidden={!visible}
    >
      <div className="mx-auto flex w-full max-w-lg gap-2">
        <a
          href={SITE.phoneLink}
          className="btn-gold btn-touch flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-xl text-sm font-bold text-master-dark"
          tabIndex={visible ? 0 : -1}
        >
          Call Now
        </a>
        <a
          href={SITE.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-touch flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-xl bg-master-whatsapp text-sm font-bold text-white"
          tabIndex={visible ? 0 : -1}
        >
          <WhatsAppIcon className="h-6 w-6" />
          WhatsApp
        </a>
      </div>
    </div>
  )
}
