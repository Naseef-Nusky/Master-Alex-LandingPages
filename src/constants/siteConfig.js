const stripTrailingSlash = (url) => url.replace(/\/$/, '')

/** Production landing subdomain, e.g. https://services.yourdomain.com */
export const SITE_URL = stripTrailingSlash(import.meta.env.VITE_SITE_URL || '')

/** Main website URL, e.g. https://yourdomain.com */
export const MAIN_SITE_URL = stripTrailingSlash(import.meta.env.VITE_MAIN_SITE_URL || '')

export function getCanonicalUrl(path = '/') {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`

  if (SITE_URL) {
    return `${SITE_URL}${normalizedPath}`
  }

  if (typeof window !== 'undefined') {
    return `${window.location.origin}${normalizedPath}`
  }

  return normalizedPath
}

export function getAbsoluteAssetUrl(assetPath) {
  if (!assetPath) return ''
  if (assetPath.startsWith('http')) return assetPath
  const path = assetPath.startsWith('/') ? assetPath : `/${assetPath}`
  return SITE_URL ? `${SITE_URL}${path}` : path
}
