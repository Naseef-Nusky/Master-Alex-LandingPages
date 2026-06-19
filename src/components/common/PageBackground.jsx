import { BG_IMAGE } from '../../constants/siteData'

export default function PageBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
      <img
        src={BG_IMAGE}
        alt=""
        className="h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-white/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-master-plum-light/40" />
    </div>
  )
}
