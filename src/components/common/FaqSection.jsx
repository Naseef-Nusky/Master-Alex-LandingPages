import { useState } from 'react'
import { FAQS } from '../../constants/siteData'

export default function FaqSection({
  items = FAQS,
  description = 'Find answers to common questions about black magic removal and our spiritual healing services.',
}) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="section-tint relative px-4 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <span className="section-eyebrow border-master-gold/20 bg-master-gold/10 text-master-gold-dark">
            FAQ
          </span>
          <h2 className="mt-4 text-3xl font-bold text-master-plum lg:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-master-muted">
            {description}
          </p>
        </div>

        <div className="space-y-3">
          {items.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-xl border border-master-plum/10 bg-white/80 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-master-plum-light/50 sm:px-6"
                >
                  <span className="font-semibold text-master-plum">
                    <span className="mr-2 text-master-gold-dark">Q{i + 1}.</span>
                    {faq.q}
                  </span>
                  <svg
                    className={`h-5 w-5 shrink-0 text-master-muted transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isOpen && (
                  <p className="border-t border-master-plum/10 px-5 pb-5 text-sm leading-relaxed text-master-muted sm:px-6">
                    {faq.a}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
