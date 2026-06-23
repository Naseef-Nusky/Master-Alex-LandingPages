import BlackMagicRemoval from '../pages/BlackMagicRemoval'
import GetExLoveBack from '../pages/GetExLoveBack'
import HusbandWifeProblems from '../pages/HusbandWifeProblems'
import NegativeEnergyRemoval from '../pages/NegativeEnergyRemoval'
import PsychicReading from '../pages/PsychicReading'
import LoveSpellCaster from '../pages/LoveSpellCaster'
import SpiritualHealing from '../pages/SpiritualHealing'
import { DEFAULT_LANDING_PATH, LANDING_ROUTES, getLandingRouteBySlug } from './landingRoutes'

const PAGE_COMPONENTS = {
  'black-magic-removal': BlackMagicRemoval,
  'get-ex-love-back': GetExLoveBack,
  'husband-wife-problems': HusbandWifeProblems,
  'negative-energy-removal': NegativeEnergyRemoval,
  'psychic-reading': PsychicReading,
  'love-spell-caster': LoveSpellCaster,
  'spiritual-healing': SpiritualHealing,
}

/**
 * Add new landing pages in landingRoutes.js, then map the component here.
 * Production example: https://services.yourdomain.com/get-ex-love-back
 */
export const LANDING_PAGES = LANDING_ROUTES.map((route) => ({
  ...route,
  component: PAGE_COMPONENTS[route.slug],
}))

export { DEFAULT_LANDING_PATH, getLandingRouteBySlug as getLandingPageBySlug }
