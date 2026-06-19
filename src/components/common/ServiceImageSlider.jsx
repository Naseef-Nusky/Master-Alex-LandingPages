import { SERVICE_LINKS } from '../../constants/siteData'

const LOOP_ITEMS = [...SERVICE_LINKS, ...SERVICE_LINKS, ...SERVICE_LINKS]

export default function ServiceImageSlider() {
  return (
    <div className="group/slider relative w-full overflow-hidden">
      <div className="services-marquee flex w-max">
        {LOOP_ITEMS.map((service, i) => (
          <a
            key={`${service.label}-${i}`}
            href={service.href || '#contact'}
            className="group/card relative block h-40 w-[150px] shrink-0 overflow-hidden border-r border-master-plum/10 bg-master-plum shadow-sm transition hover:border-master-gold/35 hover:shadow-md sm:h-44 sm:w-[175px] md:w-[190px]"
            aria-label={service.label}
          >
            <img
              src={service.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover/card:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-master-plum/90 via-master-plum/25 to-transparent" />
            <p className="absolute right-0 bottom-0 left-0 px-2 py-2.5 text-center text-[10px] leading-tight font-bold text-white sm:text-xs">
              {service.label}
            </p>
          </a>
        ))}
      </div>
    </div>
  )
}
