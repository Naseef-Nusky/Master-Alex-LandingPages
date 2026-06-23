export function validateContactForm(values, { showDate = false } = {}) {
  const errors = {}

  const name = values.name?.trim() || ''
  const email = values.email?.trim() || ''
  const phone = values.phone?.trim() || ''
  const message = values.message?.trim() || ''

  if (!name) {
    errors.name = 'Please enter your full name.'
  } else if (name.length < 2) {
    errors.name = 'Name must be at least 2 characters.'
  }

  if (!email) {
    errors.email = 'Please enter your email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!phone) {
    errors.phone = 'Please enter your phone number.'
  } else if (phone.replace(/\D/g, '').length < 7) {
    errors.phone = 'Please enter a valid phone number (at least 7 digits).'
  }

  if (!message) {
    errors.message = 'Please enter your message.'
  } else if (message.length < 5) {
    errors.message = 'Message must be at least 5 characters.'
  }

  if (showDate) {
    if (!values.date) {
      errors.date = 'Please select your preferred date.'
    } else {
      const selected = new Date(`${values.date}T00:00:00`)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      if (selected < today) {
        errors.date = 'Please choose today or a future date.'
      }
    }
  }

  return errors
}
