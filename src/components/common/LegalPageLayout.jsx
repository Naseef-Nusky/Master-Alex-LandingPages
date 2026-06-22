import LandingLayout from '../layout/LandingLayout'

function splitLegalTitle(title) {
  if (title === 'Privacy Policy') return ['Privacy', 'Policy']
  if (title === 'Terms & Conditions') return ['Terms &', 'Conditions']
  const words = title.split(' ')
  if (words.length === 1) return [title, '']
  return [words.slice(0, -1).join(' '), words.at(-1)]
}

export default function LegalPageLayout({ title, subtitle, children }) {
  const [line1, line2] = splitLegalTitle(title)

  return (
    <LandingLayout>
      <section className="relative overflow-hidden pt-36 pb-12 sm:pt-32 sm:pb-16">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-master-plum-deep via-master-plum to-master-plum-deep/95" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6">
          <h1 className="hero-title text-[1.75rem] leading-tight font-extrabold sm:text-5xl sm:leading-[1.2]">
            <span className="sm:hidden">
              <span className="gold-text-light">{line1} </span>
              <span className="text-white">{line2}</span>
            </span>
            <span className="hidden sm:block">
              <span className="gold-text-light hero-title-line">{line1}</span>
              {line2 && <span className="hero-title-line text-white">{line2}</span>}
            </span>
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              {subtitle}
            </p>
          )}
        </div>
      </section>

      <section className="section-tint-alt relative px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-10 text-master-muted">{children}</div>
      </section>
    </LandingLayout>
  )
}
