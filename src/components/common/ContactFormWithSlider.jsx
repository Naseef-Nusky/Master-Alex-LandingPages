import ContactForm from './ContactForm'
import ServiceImageSlider from './ServiceImageSlider'

export default function ContactFormWithSlider({ heading, dark = false }) {
  return (
    <div>
      <div className={`mb-12 ${dark ? 'text-center' : 'text-center'}`}>
        <span
          className={`section-eyebrow ${
            dark
              ? 'border-white/10 bg-white/5 text-master-gold-light'
              : 'border-master-gold/20 bg-master-gold/5 text-master-gold-dark'
          }`}
        >
          Contact
        </span>
        {heading && (
          <h2 className={`mt-5 text-3xl font-bold lg:text-5xl ${dark ? 'text-white' : 'text-master-purple'}`}>
            {heading}
          </h2>
        )}
        <p className={`mx-auto mt-4 max-w-xl text-base ${dark ? 'text-white/55' : 'text-master-muted'}`}>
          Reach out today for a confidential consultation. We respond within 24 hours.
        </p>
      </div>
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
        <ContactForm dark={dark} />
        <ServiceImageSlider />
      </div>
    </div>
  )
}
