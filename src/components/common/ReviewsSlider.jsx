import { useState, useEffect } from 'react'
import { TESTIMONIALS } from '../../constants/siteData'

const DURATION = 5500

function Stars() {
  return (
    <div className="mb-4 flex justify-center gap-0.5" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-4 w-4 text-master-gold" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function ReviewsSlider({ items = TESTIMONIALS }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length)
    }, DURATION)
    return () => clearInterval(timer)
  }, [items.length])

  const goTo = (index) => {
    setActive((index + items.length) % items.length)
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="relative min-h-[240px] sm:min-h-[220px]">
        {items.map((review, i) => (
          <div
            key={review.name}
            className={`transition-opacity duration-700 ease-in-out ${
              i === active
                ? 'relative z-10 opacity-100'
                : 'pointer-events-none absolute inset-0 z-0 opacity-0'
            }`}
          >
            <div className="rounded-2xl border border-master-plum/10 bg-white/90 p-6 text-center shadow-sm sm:p-8">
              <Stars />
              <p className="text-base leading-relaxed text-master-muted sm:text-lg">{review.text}</p>
              <div className="mt-6 border-t border-master-plum/10 pt-5">
                <p className="text-lg font-semibold text-master-plum">{review.name}</p>
                <p className="mt-1 text-sm text-master-muted">{review.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => goTo(active - 1)}
          aria-label="Previous review"
          className="btn-touch flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-master-plum/15 bg-white text-master-plum transition-colors hover:border-master-gold hover:text-master-gold-dark sm:h-10 sm:w-10"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex justify-center gap-2">
          {items.map((review, i) => (
            <button
              key={review.name}
              type="button"
              aria-label={`Show review from ${review.name}`}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? 'w-8 bg-master-gold' : 'w-2 bg-master-plum/20 hover:bg-master-gold/50'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(active + 1)}
          aria-label="Next review"
          className="btn-touch flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-master-plum/15 bg-white text-master-plum transition-colors hover:border-master-gold hover:text-master-gold-dark sm:h-10 sm:w-10"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}
