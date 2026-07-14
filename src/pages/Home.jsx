import { Link } from 'react-router-dom'
import LandingLayout from '../components/layout/LandingLayout'
import ContactForm from '../components/common/ContactForm'
import ReviewsSection from '../components/common/ReviewsSection'
import FaqSection from '../components/common/FaqSection'
import Disclaimer from '../components/common/Disclaimer'
import { PhoneIcon } from '../components/common/Buttons'
import { SITE, SERVICE_LINKS, HOME } from '../constants/siteData'

function CheckIcon({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  )
}

function ServiceCard({ service }) {
  return (
    <Link
      to={service.href}
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-master-plum/10 bg-white shadow-sm transition hover:-translate-y-1 hover:border-master-gold/30 hover:shadow-lg"
    >
      <div className="aspect-[4/3] overflow-hidden bg-master-surface">
        <img
          src={service.image}
          alt={service.label}
          className="h-full w-full object-cover object-top"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-master-plum">{service.label}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-master-muted">{service.description}</p>
        <span className="mt-4 inline-flex items-center justify-center rounded-xl bg-master-gold px-4 py-2.5 text-sm font-semibold text-master-dark transition hover:bg-master-gold-light">
          Learn More
        </span>
      </div>
    </Link>
  )
}

export default function Home() {
  return (
    <LandingLayout>
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden px-4 pb-16 pt-28 sm:pt-32">
        <div className="pointer-events-none absolute inset-0">
          <img src="/hero-bg-main.png" alt="" aria-hidden className="h-full w-full object-cover object-center" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-master-purple/85 via-master-purple/75 to-master-dark/95" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-medium tracking-wide text-master-gold-light md:text-base">
            {HOME.tagline}
          </p>
          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="gold-text-light block">{HOME.headlineLine1}</span>
            <span className="mt-1 block text-white">{HOME.headlineLine2}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            {HOME.intro}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={SITE.phoneLink}
              className="btn-gold inline-flex items-center gap-2 rounded-2xl px-7 py-3.5 text-base font-bold shadow-lg"
            >
              <PhoneIcon className="h-5 w-5" />
              Call {SITE.phone}
            </a>
            <a
              href="#services"
              className="inline-flex items-center rounded-2xl border border-white/25 bg-white/5 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* Free Consultation — same form component/style as service pages */}
      <section id="consultation" className="section-tint-alt relative px-4 py-24 sm:px-6 lg:py-32">
        <div className="mx-auto max-w-xl lg:max-w-lg">
          <ContactForm
            heading="Contact Us Now"
            description="Fill in your details for a free, confidential consultation with Master Alex."
            page="Home"
          />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section-tint-alt relative px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="section-eyebrow border-master-gold/20 bg-master-gold/10 text-master-gold-dark">
              Our Services
            </span>
            <h2 className="mt-4 text-3xl font-bold text-master-plum md:text-4xl">
              Spiritual Guidance for Every Challenge
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-master-muted">
              Explore all of Master Alex&apos;s trusted services for protection, healing, love, and clarity.
            </p>
          </div>

          <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_LINKS.map((service, i) => {
              const isLastAlone = i === SERVICE_LINKS.length - 1 && SERVICE_LINKS.length % 3 === 1
              return (
                <div
                  key={service.href}
                  className={
                    isLastAlone
                      ? 'h-full sm:col-span-2 sm:mx-auto sm:w-full sm:max-w-md lg:col-span-3 lg:max-w-sm'
                      : 'h-full'
                  }
                >
                  <ServiceCard service={service} />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section id="about" className="relative px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <span className="section-eyebrow border-master-gold/20 bg-master-gold/10 text-master-gold-dark">
              Why Choose Us
            </span>
            <h2 className="mt-4 text-3xl font-bold text-master-plum md:text-4xl">{HOME.whyTitle}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-master-muted">{HOME.whyIntro}</p>
          </div>
          <ul className="mt-10 space-y-3">
            {HOME.whyChoose.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-master-plum/10 bg-white/80 px-4 py-3"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-master-gold/10 text-master-gold-dark">
                  <CheckIcon />
                </span>
                <span className="text-sm text-master-muted md:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ReviewsSection />

      <FaqSection
        items={HOME.homeFaqs}
        description="Find answers to common questions about our services and consultations."
      />

      {/* Contact — same layout as service landing pages */}
      <section id="contact" className="section-tint-alt relative px-4 py-24 sm:px-6 lg:py-32">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <span className="section-eyebrow border-master-gold/20 bg-master-gold/10 text-master-gold-dark">
              Get In Touch
            </span>
            <h2 className="mt-5 text-3xl font-bold text-master-plum lg:text-5xl">Contact Us Now</h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-master-muted">
              Reach out today for a confidential consultation. We respond within 24 hours.
            </p>
          </div>
          <ContactForm heading={null} page="Home" />
        </div>
      </section>

      <Disclaimer />
    </LandingLayout>
  )
}
