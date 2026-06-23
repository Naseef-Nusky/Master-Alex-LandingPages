export const LANDING_ROUTES = [
  {
    slug: 'black-magic-removal',
    path: '/black-magic-removal',
    title: 'Black Magic Removal UK | Master Alex',
    description:
      'Expert black magic removal in the UK. Restore peace, protection, and control of your life with Master Alex.',
  },
  {
    slug: 'get-ex-love-back',
    path: '/get-ex-love-back',
    title: 'Get Ex Love Back UK | Master Alex',
    description:
      "Reconnect with true love through UK's trusted love back expert. Master Alex helps you rebuild your relationship and bring your ex back.",
  },
  {
    slug: 'husband-wife-problems',
    path: '/husband-wife-problems',
    title: 'Husband & Wife Problem Solutions UK | Master Alex',
    description:
      'Trusted husband and wife problem solutions in the UK. Master Alex helps couples restore love, trust, and harmony in their marriage.',
  },
  {
    slug: 'negative-energy-removal',
    path: '/negative-energy-removal',
    title: 'Negative Energy Removal UK | Master Alex',
    description:
      'Powerful negative energy removal in the UK. Master Alex helps you restore balance, peace, and positive energy in your life.',
  },
  {
    slug: 'psychic-reading',
    path: '/psychic-reading',
    title: 'Psychic Reading UK | Master Alex',
    description:
      'Trusted psychic readings in the UK. Master Alex offers clear insights into love, career, relationships, and your life path.',
  },
  {
    slug: 'love-spell-caster',
    path: '/love-spell-caster',
    title: 'Love Spell Caster UK | Master Alex',
    description:
      'Trusted love spell caster in the UK. Master Alex helps rebuild affection, restore trust, and bring back lost love.',
  },
  {
    slug: 'spiritual-healing',
    path: '/spiritual-healing',
    title: 'Spiritual Healing UK | Master Alex',
    description:
      'Trusted spiritual healer in the UK. Master Alex offers energy healing and spiritual cleansing to restore peace and balance.',
  },
]

export const DEFAULT_LANDING_PATH = LANDING_ROUTES[0].path

export function getLandingRouteBySlug(slug) {
  return LANDING_ROUTES.find((page) => page.slug === slug)
}

export function getValidLandingReturnPath(path) {
  if (!path || typeof path !== 'string') return DEFAULT_LANDING_PATH

  const normalized = path.split('?')[0].split('#')[0]
  if (!normalized.startsWith('/')) return DEFAULT_LANDING_PATH

  const isValid = LANDING_ROUTES.some((route) => route.path === normalized)
  return isValid ? normalized : DEFAULT_LANDING_PATH
}
