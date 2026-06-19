import { useState } from 'react'

export default function ContactForm({
  className = '',
  buttonLabel = 'Send Message',
  fields = ['name', 'email', 'phone', 'message'],
  dark = false,
  heading = 'Free Consultation',
  description = "Fill in your details and we'll get back to you within 24 hours.",
}) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you! We will contact you shortly.')
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  const inputClass = dark
    ? 'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder:text-white/30 transition-all focus:border-master-gold/50 focus:bg-white/8 focus:ring-4 focus:ring-master-gold/10 focus:outline-none'
    : 'w-full rounded-xl border border-gray-200/80 bg-white px-4 py-3.5 text-master-purple transition-all placeholder:text-gray-400 focus:border-master-gold/50 focus:ring-4 focus:ring-master-gold/10 focus:outline-none'

  const labelClass = dark ? 'text-sm font-semibold text-white/80' : 'text-sm font-semibold text-master-purple'

  const Field = ({ label, children }) => (
    <div className="space-y-2">
      <label className={labelClass}>{label}</label>
      {children}
    </div>
  )

  const formContent = (
    <>
      {heading && (
        <div className="mb-6">
          <span
            className={`section-eyebrow ${
              dark
                ? 'border-white/10 bg-white/5 text-master-gold-light'
                : 'border-master-gold/20 bg-master-gold/5 text-master-gold-dark'
            }`}
          >
            Free Consultation
          </span>
          <h3 className={`mt-3 text-xl font-bold ${dark ? 'text-white' : 'text-master-purple'}`}>
            {heading}
          </h3>
          {description && (
            <p className={`mt-2 text-sm ${dark ? 'text-white/55' : 'text-master-muted'}`}>
              {description}
            </p>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit} className={`space-y-5 ${className}`}>
        <div className="grid gap-5 sm:grid-cols-2">
          {fields.includes('name') && (
            <Field label="Full Name">
              <input
                type="text"
                placeholder="John Doe"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
              />
            </Field>
          )}
          {fields.includes('email') && (
            <Field label="Email">
              <input
                type="email"
                placeholder="you@email.com"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
              />
            </Field>
          )}
        </div>
        {fields.includes('phone') && (
          <Field label="Phone">
            <input
              type="tel"
              placeholder="+44 ..."
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className={inputClass}
            />
          </Field>
        )}
        {fields.includes('message') && (
          <Field label="Message">
            <textarea
              placeholder="How can we help you?"
              rows={4}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`${inputClass} resize-none`}
            />
          </Field>
        )}
        <button
          type="submit"
          className="btn-gold btn-touch min-h-[48px] w-full rounded-2xl py-3.5 text-base font-bold text-master-dark transition-all active:scale-[0.98] sm:py-4"
        >
          {buttonLabel}
        </button>
      </form>
    </>
  )

  return formContent
}
