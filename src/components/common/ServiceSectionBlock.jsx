import { CallButton } from './Buttons'

export default function ServiceSectionBlock({
  section,
  isDark = false,
  align = 'center',
  index = 0,
}) {
  const alignClass = align === 'left' ? 'text-left' : 'text-center mx-auto'
  const headingClass = isDark ? 'text-white' : 'text-master-purple'
  const textClass = isDark ? 'text-white/70' : 'text-master-muted'

  return (
    <div className={`w-full max-w-3xl ${alignClass}`}>
      {section.heading && (
        <div className={align === 'center' ? 'text-center' : ''}>
          <span
            className={`section-eyebrow mb-5 ${
              isDark
                ? 'border-white/10 bg-white/5 text-master-gold-light'
                : 'border-master-gold/20 bg-master-gold/5 text-master-gold-dark'
            }`}
          >
            0{index + 1} — Expert Guidance
          </span>
          <h2 className={`mb-6 text-3xl leading-tight font-bold lg:text-4xl ${headingClass}`}>
            {section.heading}
          </h2>
        </div>
      )}

      {section.text && (
        <p className={`mb-8 text-base leading-relaxed lg:text-lg ${textClass}`}>{section.text}</p>
      )}

      {section.list && (
        <ul className={`mb-8 grid gap-4 ${section.list.length > 2 ? 'sm:grid-cols-2' : ''}`}>
          {section.list.map((item, i) => (
            <li
              key={item}
              className={`group flex items-start gap-4 rounded-2xl p-5 transition-all duration-300 ${
                isDark
                  ? 'border border-white/8 bg-white/5 hover:border-master-gold/25 hover:bg-white/8'
                  : 'border border-gray-100 bg-white shadow-sm hover:border-master-gold/20 hover:shadow-md'
              }`}
            >
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold ${
                  isDark
                    ? 'bg-master-gold/15 text-master-gold-light'
                    : 'bg-master-gold/10 text-master-gold-dark'
                }`}
              >
                {i + 1}
              </span>
              <span className={`pt-1.5 text-sm leading-relaxed font-medium lg:text-base ${isDark ? 'text-white/85' : 'text-master-muted'}`}>
                {item}
              </span>
            </li>
          ))}
        </ul>
      )}

      {section.afterText && (
        <p className={`mb-8 text-base leading-relaxed lg:text-lg ${textClass}`}>{section.afterText}</p>
      )}

      {section.cta && (
        <div className={`flex w-full ${align === 'center' ? 'justify-center' : ''}`}>
          {(section.cta === 'call' || section.cta === 'whatsapp') && (
            <CallButton variant={isDark ? 'primary' : 'dark'} className="max-w-md sm:max-w-none" />
          )}
        </div>
      )}
    </div>
  )
}
