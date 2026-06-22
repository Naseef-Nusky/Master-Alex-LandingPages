import BlackMagicRemoval from '../pages/BlackMagicRemoval'
import GetExLoveBack from '../pages/GetExLoveBack'
import HusbandWifeProblems from '../pages/HusbandWifeProblems'
import NegativeEnergyRemoval from '../pages/NegativeEnergyRemoval'
import PsychicReading from '../pages/PsychicReading'
import LoveSpellCaster from '../pages/LoveSpellCaster'
import SpiritualHealing from '../pages/SpiritualHealing'

/**
 * Add new landing pages here. Each page gets its own URL path and browser title.
 * Example: https://master-alex-landing-pages.vercel.app/get-ex-love-back
 */
export const LANDING_PAGES = [
  {
    slug: 'black-magic-removal',
    path: '/black-magic-removal',
    title: 'Black Magic Removal UK | Master Alex',
    description:
      'Expert black magic removal in the UK. Restore peace, protection, and control of your life with Master Alex.',
    component: BlackMagicRemoval,
  },
  {
    slug: 'get-ex-love-back',
    path: '/get-ex-love-back',
    title: 'Get Ex Love Back UK | Master Alex',
    description:
      "Reconnect with true love through UK's trusted love back expert. Master Alex helps you rebuild your relationship and bring your ex back.",
    component: GetExLoveBack,
  },
  {
    slug: 'husband-wife-problems',
    path: '/husband-wife-problems',
    title: 'Husband & Wife Problem Solutions UK | Master Alex',
    description:
      'Trusted husband and wife problem solutions in the UK. Master Alex helps couples restore love, trust, and harmony in their marriage.',
    component: HusbandWifeProblems,
  },
  {
    slug: 'negative-energy-removal',
    path: '/negative-energy-removal',
    title: 'Negative Energy Removal UK | Master Alex',
    description:
      'Powerful negative energy removal in the UK. Master Alex helps you restore balance, peace, and positive energy in your life.',
    component: NegativeEnergyRemoval,
  },
  {
    slug: 'psychic-reading',
    path: '/psychic-reading',
    title: 'Psychic Reading UK | Master Alex',
    description:
      'Trusted psychic readings in the UK. Master Alex offers clear insights into love, career, relationships, and your life path.',
    component: PsychicReading,
  },
  {
    slug: 'love-spell-caster',
    path: '/love-spell-caster',
    title: 'Love Spell Caster UK | Master Alex',
    description:
      'Trusted love spell caster in the UK. Master Alex helps rebuild affection, restore trust, and bring back lost love.',
    component: LoveSpellCaster,
  },
  {
    slug: 'spiritual-healing',
    path: '/spiritual-healing',
    title: 'Spiritual Healing UK | Master Alex',
    description:
      'Trusted spiritual healer in the UK. Master Alex offers energy healing and spiritual cleansing to restore peace and balance.',
    component: SpiritualHealing,
  },
]

export const DEFAULT_LANDING_PATH = LANDING_PAGES[0].path

export function getLandingPageBySlug(slug) {
  return LANDING_PAGES.find((page) => page.slug === slug)
}
