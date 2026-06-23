import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getAbsoluteAssetUrl, getCanonicalUrl } from '../../constants/siteConfig'

const DEFAULT_OG_IMAGE = '/logo-removebg.png'

function upsertMeta(selector, attributes) {
  let element = document.querySelector(selector)
  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })
}

function upsertLink(rel, href) {
  let element = document.querySelector(`link[rel="${rel}"]`)
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }
  element.setAttribute('href', href)
}

export default function PageMeta({ title, description, path }) {
  const location = useLocation()
  const canonicalPath = path || location.pathname
  const canonicalUrl = getCanonicalUrl(canonicalPath)
  const ogImage = getAbsoluteAssetUrl(DEFAULT_OG_IMAGE)

  useEffect(() => {
    if (title) {
      document.title = title
    }

    if (description) {
      upsertMeta('meta[name="description"]', { name: 'description', content: description })
    }

    upsertLink('canonical', canonicalUrl)

    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl })
    if (title) {
      upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title })
    }
    if (description) {
      upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description })
    }
    if (ogImage.startsWith('http')) {
      upsertMeta('meta[property="og:image"]', { property: 'og:image', content: ogImage })
    }

    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
    if (title) {
      upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title })
    }
    if (description) {
      upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description })
    }
  }, [title, description, canonicalUrl, ogImage])

  return null
}
