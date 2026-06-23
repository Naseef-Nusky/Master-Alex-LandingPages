import { HERO_BG_IMAGE, HERO_BG_IMAGES, HERO_BG_MOBILE_POSITION, HERO_TITLES } from '../../constants/siteData'
import { CallButton } from './Buttons'

export default function PageBanner({ title, subtitle, serviceSlug }) {
  const heroBg = (serviceSlug && HERO_BG_IMAGES[serviceSlug]) || HERO_BG_IMAGE
  const mobilePosition =
    HERO_BG_MOBILE_POSITION[serviceSlug] || HERO_BG_MOBILE_POSITION.default
  const heroTitle = (serviceSlug && HERO_TITLES[serviceSlug]) || {
    line1: title,
    line2: '',
  }

  return (
    <section className="relative flex min-h-[100dvh] flex-col overflow-hidden pt-36 pb-6 md:min-h-screen md:justify-center md:pb-16 md:pt-32 lg:pt-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <img
          src={heroBg}
          alt=""
          aria-hidden
          className="hero-bg-mobile h-full w-full object-cover object-center"
          style={{ '--hero-mobile-position': mobilePosition }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-master-plum-deep/65 via-master-plum/55 to-master-plum-deep/70" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 md:flex-none md:justify-center md:px-6 md:min-h-[calc(100vh-7rem)]">
        <div className="hero-content hero-content-dark animate-fade-up flex max-w-2xl flex-1 flex-col md:block md:flex-none">
          <div>
            <div className="mb-6 flex flex-wrap gap-2">
              <span className="section-eyebrow border border-master-gold/35 bg-master-gold/15 font-bold text-master-gold-light">
                UK&apos;s Trusted Expert
              </span>
              <span className="section-eyebrow border border-white/20 bg-white/10 font-semibold text-white/85">
                24/7 Available
              </span>
            </div>

            <h1 className="hero-title mb-6 overflow-visible text-[2.35rem] leading-[1.15] font-extrabold md:text-6xl md:leading-[1.2] lg:text-7xl">
              <span className="gold-text-light hero-title-line">{heroTitle.line1}</span>
              <span className="hero-title-line text-white">{heroTitle.line2}</span>
            </h1>

            {subtitle && (
              <p className="mb-0 max-w-lg text-lg leading-relaxed font-medium text-white/85 md:mb-8 lg:text-xl">
                {subtitle}
              </p>
            )}
          </div>

          <div className="mt-auto flex w-full max-w-md flex-col gap-3 pt-8 md:mt-0 md:max-w-none md:flex-row md:items-center md:pt-0">
            <CallButton variant="primary" className="shadow-lg" />
            {/* WhatsApp hidden for now — re-enable when ready
            <WhatsAppButton className="!border-master-whatsapp !bg-master-whatsapp !text-white shadow-lg hover:!bg-master-whatsapp/90" />
            */}
          </div>
        </div>
      </div>
    </section>
  )
}
