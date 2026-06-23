const API_URL = import.meta.env.VITE_CONTACT_API_URL || '/api/contact'

export async function submitContact(payload) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  const data = await response.json().catch(() => ({}))

  if (!response.ok) {
    throw new Error(data.error || 'Failed to send message. Please try again.')
  }

  return data
}
