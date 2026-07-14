import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { DEFAULT_LANDING_PATH, LANDING_ROUTES } from '../src/constants/landingRoutes.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const publicDir = path.join(root, 'public')

function readSiteUrl() {
  if (process.env.VITE_SITE_URL) {
    return process.env.VITE_SITE_URL.replace(/\/$/, '')
  }

  const envPath = path.join(root, '.env')
  if (!fs.existsSync(envPath)) {
    return ''
  }

  for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const [key, ...rest] = trimmed.split('=')
    if (key === 'VITE_SITE_URL') {
      return rest.join('=').trim().replace(/^["']|["']$/g, '').replace(/\/$/, '')
    }
  }

  return ''
}

const siteUrl = readSiteUrl()
const paths = [
  '/',
  ...LANDING_ROUTES.map((page) => page.path),
  '/privacy-policy',
  '/terms-and-conditions',
]

const today = new Date().toISOString().slice(0, 10)

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map((pagePath) => {
    const loc = siteUrl ? `${siteUrl}${pagePath === '/' ? '/' : pagePath}` : pagePath
    const priority = pagePath === '/' ? '1.0' : '0.8'
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`
  })
  .join('\n')}
</urlset>
`

const robots = siteUrl
  ? `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`
  : `User-agent: *
Allow: /
`

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap)
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots)

console.log(`Generated SEO files${siteUrl ? ` for ${siteUrl}` : ' (set VITE_SITE_URL for full URLs)'}`)
