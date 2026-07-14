import { Link, useLocation, useSearchParams } from 'react-router-dom'
import LandingLayout from '../components/layout/LandingLayout'
import PageMeta from '../components/common/PageMeta'
import { CallButton } from '../components/common/Buttons'
import { SITE } from '../constants/siteData'
import { getValidLandingReturnPath } from '../constants/landingPages'

export default function ThankYou() {
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const returnPath = getValidLandingReturnPath(location.state?.from || searchParams.get('from'))
  return (
    <LandingLayout>
      <PageMeta
        title="Thank You | Master Alex"
        description="Thank you for contacting Master Alex. We will get back to you shortly."
        path="/thank-you"
      />

      <section className="relative flex min-h-[80vh] items-center overflow-hidden px-4 py-28 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-master-plum-deep via-master-plum to-master-plum-deep/95" />

        <div className="relative z-10 mx-auto w-full max-w-xl text-center animate-fade-up">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-master-gold/35 bg-master-gold/15">
            <svg className="h-10 w-10 text-master-gold-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <span className="section-eyebrow border-master-gold/35 bg-master-gold/15 font-bold text-master-gold-light">
            Message Sent
          </span>

          <h1 className="mt-6 text-3xl font-extrabold leading-tight text-white md:text-5xl">
            <span className="gold-text-light">Thank </span>
            <span>You!</span>
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-white/85">
            Your message has been received successfully.
          </p>
          <p className="mt-3 text-base text-white/55">
            {SITE.name} will contact you within 24 hours. For urgent help, call us now.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <CallButton variant="primary" className="shadow-lg" />
            <Link
              to={returnPath}
              className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-master-gold/40 hover:bg-white/10"
            >
              Back to Service
            </Link>
            <Link
              to="/"
              className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border border-master-gold/40 bg-master-gold/15 px-6 py-3 text-sm font-semibold text-master-gold-light transition hover:bg-master-gold/25"
            >
              Back to All Services
            </Link>
          </div>
        </div>
      </section>
    </LandingLayout>
  )
}
