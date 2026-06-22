import LandingLayout from '../layout/LandingLayout'
import PageBanner from './PageBanner'
import ContactForm from './ContactForm'
import ServiceSectionBlock from './ServiceSectionBlock'
import ServiceImageSlider from './ServiceImageSlider'
import ReviewsSection from './ReviewsSection'
import FaqSection from './FaqSection'
import Disclaimer from './Disclaimer'
import { LOGO, BANNER_IMAGES } from '../../constants/siteData'

export default function LandingServiceLayout({
  title,
  subtitle,
  serviceSlug,
  serviceImage,
  intro,
  sections = [],
  faqs,
}) {
  const bannerImage = BANNER_IMAGES[serviceSlug]
  const image = serviceImage || LOGO
  const contentSections = sections.filter((section) => !section.form)
  const formSections = sections.filter((section) => section.form)

  return (
    <LandingLayout>
      <div id="top">
        <PageBanner title={title} subtitle={subtitle} serviceSlug={serviceSlug} />
      </div>

      <section id="about" className="section-tint-alt relative px-4 py-24 sm:px-6 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <span className="section-eyebrow border-master-gold/20 bg-master-gold/10 text-master-gold-dark">
              About the Service
            </span>
            <div className="mt-8 space-y-10">
              {intro.map((block, i) => (
                <div key={i} className="relative pl-6">
                  <div className="absolute top-1 bottom-1 left-0 w-1 rounded-full bg-gradient-to-b from-master-gold to-master-gold/20" />
                  {block.heading && (
                    <h2 className="mb-4 text-2xl leading-snug font-bold text-master-plum lg:text-3xl">
                      {block.heading}
                    </h2>
                  )}
                  {block.text && (
                    <p className="text-base leading-relaxed text-master-muted lg:text-lg">
                      {block.text}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-36 sm:top-32">
              <ContactForm
                heading="Contact Us Now"
                description="Fill in your details for a free, confidential consultation with Master Alex."
              />
            </div>
          </div>
        </div>
      </section>

      {contentSections.map((section, i) => (
        <section
          key={i}
          className={`relative px-4 py-16 sm:px-6 lg:py-24 ${i % 2 === 0 ? 'section-tint' : 'section-tint-alt'}`}
        >
          <div
            className={`mx-auto max-w-7xl ${
              section.image ? 'grid items-center gap-12 lg:grid-cols-2 lg:gap-16' : ''
            }`}
          >
            <div className={section.image ? (section.reverse ? 'lg:order-2' : '') : 'flex justify-center'}>
              <ServiceSectionBlock
                section={section}
                align={section.image ? 'left' : 'center'}
                index={i}
              />
            </div>

            {section.image && (
              <div className={section.reverse ? 'lg:order-1' : ''}>
                <div className="group relative overflow-hidden rounded-2xl border border-master-plum/10 bg-white/80 shadow-xl">
                  <img
                    src={section.imageSrc || bannerImage || image}
                    alt={section.heading || title}
                    className={`w-full transition duration-700 group-hover:scale-105 ${
                      section.imageSrc ? 'h-auto object-contain' : 'aspect-[4/3] object-cover'
                    }`}
                  />
                </div>
              </div>
            )}
          </div>
        </section>
      ))}

      <section id="services" className="section-tint relative py-20 sm:py-24 lg:py-28">
        <div className="mx-auto mb-8 max-w-6xl px-4 text-center sm:mb-10 sm:px-6">
          <span className="section-eyebrow border-master-gold/20 bg-master-gold/10 text-master-gold-dark">
            Our Services
          </span>
          <h2 className="mt-4 text-3xl font-bold text-master-plum lg:text-4xl">
            Spiritual Healing Services
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-master-muted sm:text-base">
            Browse our spiritual healing services — tap any image to book a consultation.
          </p>
        </div>
        <ServiceImageSlider />
      </section>

      <ReviewsSection />

      <FaqSection items={faqs} />

      {formSections.map((section, i) => (
        <section key={`form-${i}`} id="contact" className="section-tint-alt relative px-4 py-24 sm:px-6 lg:py-32">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center">
              <span className="section-eyebrow border-master-gold/20 bg-master-gold/10 text-master-gold-dark">
                Get In Touch
              </span>
              {section.heading && (
                <h2 className="mt-5 text-3xl font-bold text-master-plum lg:text-5xl">
                  {section.heading}
                </h2>
              )}
              <p className="mx-auto mt-4 max-w-xl text-base text-master-muted">
                Reach out today for a confidential consultation. We respond within 24 hours.
              </p>
            </div>
            <ContactForm heading={null} />
          </div>
        </section>
      ))}

      <Disclaimer />
    </LandingLayout>
  )
}
