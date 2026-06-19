import BlackMagicRemoval from '../pages/BlackMagicRemoval'

/**
 * Add new landing pages here. Each page gets its own URL path and browser title.
 * Example live URL: https://master-alex-landing-pages.vercel.app/black-magic-removal
 */
export const LANDING_PAGES = [
  {
    slug: 'black-magic-removal',
    path: '/black-magic-removal',
    title: 'Black Magic Removal London | Master Alex',
    description:
      'Expert black magic removal in London. Restore peace, protection, and control of your life with Master Alex.',
    component: BlackMagicRemoval,
  },
]

export const DEFAULT_LANDING_PATH = LANDING_PAGES[0].path

export function getLandingPageBySlug(slug) {
  return LANDING_PAGES.find((page) => page.slug === slug)
}
