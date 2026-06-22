import { Link } from 'react-router-dom'
import { SITE, LOGO } from '../../constants/siteData'

export default function LandingFooter() {
  return (
    <footer className="relative border-t border-white/10 bg-master-dark pb-24 text-white lg:pb-0">
      <div className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-master-gold/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
        <div className="flex flex-col items-start gap-8 text-left sm:gap-10 md:flex-row md:justify-between lg:gap-12">
          <div className="flex max-w-md flex-col items-start">
            <a href="#top" className="mb-4 inline-block transition hover:opacity-90 sm:mb-5">
              <img
                src={LOGO}
                alt={SITE.name}
                className="h-16 w-16 object-contain sm:h-20 sm:w-20 lg:h-24 lg:w-24"
              />
            </a>
            <p className="text-sm leading-relaxed text-white/55 sm:text-base">
              Trusted spiritual guidance and astrology services in the UK.
            </p>
          </div>

          <div className="w-full max-w-md md:max-w-sm md:shrink-0">
            <p className="mb-4 text-xs font-bold tracking-widest text-white/35 uppercase">Contact</p>
            <div className="space-y-3">
              <a
                href={SITE.phoneLink}
                className="flex items-center justify-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:border-master-gold/30 hover:bg-white/10 hover:text-white"
              >
                <svg className="h-4 w-4 shrink-0 text-master-gold-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {SITE.phone}
              </a>

              <a
                href={SITE.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:border-master-gold/30 hover:bg-white/10 hover:text-white"
              >
                <svg className="h-5 w-5 shrink-0 text-master-gold-light" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                </svg>
                WhatsApp
              </a>

              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center justify-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:border-master-gold/30 hover:bg-white/10 hover:text-white"
              >
                <svg className="h-4 w-4 shrink-0 text-master-gold-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="break-all">{SITE.email}</span>
              </a>

              <p className="flex items-start justify-start gap-3 px-1 py-1 text-sm leading-relaxed text-white/45">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-master-gold-light/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{SITE.address}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-4 sm:flex-row sm:py-5">
          <p className="text-center text-[11px] leading-relaxed text-white/30 sm:text-left sm:text-xs">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <Link
              to="/privacy-policy"
              className="shrink-0 whitespace-nowrap text-[11px] text-white/40 transition hover:text-white/70 sm:text-xs"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-and-conditions"
              className="shrink-0 whitespace-nowrap text-[11px] text-white/40 transition hover:text-white/70 sm:text-xs"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
