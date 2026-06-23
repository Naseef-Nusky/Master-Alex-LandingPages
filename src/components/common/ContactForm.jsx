import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { submitContact } from '../../utils/submitContact'
import { validateContactForm } from '../../utils/validateContactForm'

function FormField({ label, labelClass, error, children }) {
  return (
    <div className="space-y-2">
      <label className={labelClass}>{label}</label>
      {children}
      {error && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

const EMPTY_FORM = {
  name: '',
  email: '',
  phone: '',
  message: '',
  website: '',
}

export default function ContactForm({
  className = '',
  buttonLabel = 'Send Message',
  fields = ['name', 'email', 'phone', 'message'],
  dark = false,
  heading = 'Free Consultation',
  description = "Fill in your details and we'll get back to you within 24 hours.",
  source = 'landing',
  page = '',
}) {
  const navigate = useNavigate()
  const [form, setForm] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const isLoading = status === 'loading'

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }))
    }
    if (errorMessage) {
      setErrorMessage('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (form.website) return

    const validationErrors = validateContactForm(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setStatus('idle')
      return
    }

    setStatus('loading')
    setErrorMessage('')
    setErrors({})

    try {
      await submitContact({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        message: form.message.trim(),
        source,
        page: page || window.location.pathname,
      })
      setForm(EMPTY_FORM)
      const returnPath = window.location.pathname
      navigate(`/thank-you?from=${encodeURIComponent(returnPath)}`, {
        replace: true,
        state: { from: returnPath },
      })
    } catch (error) {
      setStatus('error')
      setErrorMessage(error.message)
    }
  }

  const inputBase = dark
    ? 'w-full rounded-xl border bg-white/5 px-4 py-3.5 text-white placeholder:text-white/30 transition-all focus:border-master-gold/50 focus:bg-white/8 focus:ring-4 focus:ring-master-gold/10 focus:outline-none'
    : 'w-full rounded-xl border bg-white px-4 py-3.5 text-master-purple transition-all placeholder:text-gray-400 focus:border-master-gold/50 focus:ring-4 focus:ring-master-gold/10 focus:outline-none'

  const inputClass = (field) =>
    `${inputBase} ${errors[field] ? 'border-red-400' : dark ? 'border-white/10' : 'border-gray-200/80'}`

  const labelClass = dark ? 'text-sm font-semibold text-white/80' : 'text-sm font-semibold text-master-purple'

  return (
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

      <form onSubmit={handleSubmit} noValidate className={`space-y-5 ${className}`}>
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(e) => updateField('website', e.target.value)}
          className="hidden"
          aria-hidden="true"
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {fields.includes('name') && (
            <FormField label="Full Name" labelClass={labelClass} error={errors.name}>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                autoComplete="name"
                disabled={isLoading}
                value={form.name}
                onChange={(e) => updateField('name', e.target.value)}
                className={inputClass('name')}
                aria-invalid={Boolean(errors.name)}
              />
            </FormField>
          )}
          {fields.includes('email') && (
            <FormField label="Email" labelClass={labelClass} error={errors.email}>
              <input
                type="email"
                name="email"
                placeholder="you@email.com"
                autoComplete="email"
                disabled={isLoading}
                value={form.email}
                onChange={(e) => updateField('email', e.target.value)}
                className={inputClass('email')}
                aria-invalid={Boolean(errors.email)}
              />
            </FormField>
          )}
        </div>
        {fields.includes('phone') && (
          <FormField label="Phone" labelClass={labelClass} error={errors.phone}>
            <input
              type="tel"
              name="phone"
              placeholder="+44 7XXX XXXXXX"
              autoComplete="tel"
              disabled={isLoading}
              value={form.phone}
              onChange={(e) => updateField('phone', e.target.value)}
              className={inputClass('phone')}
              aria-invalid={Boolean(errors.phone)}
            />
          </FormField>
        )}
        {fields.includes('message') && (
          <FormField label="Message" labelClass={labelClass} error={errors.message}>
            <textarea
              name="message"
              placeholder="How can we help you?"
              rows={4}
              disabled={isLoading}
              value={form.message}
              onChange={(e) => updateField('message', e.target.value)}
              className={`${inputClass('message')} resize-none`}
              aria-invalid={Boolean(errors.message)}
            />
          </FormField>
        )}

        {status === 'error' && errorMessage && (
          <p className="rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
            {errorMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="btn-gold btn-touch min-h-[48px] w-full rounded-2xl py-3.5 text-base font-bold text-master-dark transition-all active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 sm:py-4"
        >
          {isLoading ? 'Sending...' : buttonLabel}
        </button>
      </form>
    </>
  )
}
