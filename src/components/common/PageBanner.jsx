import { HERO_BG_IMAGE } from '../../constants/siteData'
import { CallButton, WhatsAppButton } from './Buttons'

export default function PageBanner({ title, subtitle }) {
  const renderTitle = () => {
    if (title === 'Black Magic Removal') {
      return (
        <>
          <span className="gold-text-light">Black Magic</span>
          <br />
          <span className="text-white">Removal</span>
        </>
      )
    }
    return title
  }

  return (
    <section className="relative min-h-screen overflow-hidden pt-24 pb-16 lg:pt-28">
      <img
        src={HERO_BG_IMAGE}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-master-plum-deep/65 via-master-plum/55 to-master-plum-deep/70" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-center px-4 sm:px-6 lg:min-h-[calc(100vh-7rem)]">
        <div className="hero-content hero-content-dark animate-fade-up max-w-2xl">
          <div className="mb-6 flex flex-wrap gap-2">
            <span className="section-eyebrow border border-master-gold/35 bg-master-gold/15 font-bold text-master-gold-light">
              London&apos;s Trusted Expert
            </span>
            <span className="section-eyebrow border border-white/20 bg-white/10 font-semibold text-white/85">
              24/7 Available
            </span>
          </div>

          <h1 className="mb-6 overflow-visible text-5xl leading-[1.2] font-extrabold sm:text-6xl lg:text-7xl">
            {renderTitle()}
          </h1>

          {subtitle && (
            <p className="mb-8 max-w-lg text-lg leading-relaxed font-medium text-white/85 lg:text-xl">
              {subtitle}
            </p>
          )}

          <div className="flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:items-center">
            <CallButton variant="primary" className="shadow-lg" />
            <WhatsAppButton className="!border-master-whatsapp !bg-master-whatsapp !text-white shadow-lg hover:!bg-master-whatsapp/90" />
          </div>
        </div>
      </div>
    </section>
  )
}
