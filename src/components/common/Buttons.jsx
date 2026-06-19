import { SITE } from '../../constants/siteData'

function PhoneIcon({ className = 'h-4 w-4 shrink-0' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  )
}

function WhatsAppIcon({ className = 'h-4 w-4 shrink-0' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    </svg>
  )
}

export { PhoneIcon, WhatsAppIcon }

const base =
  'btn-touch inline-flex w-full sm:w-auto flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 rounded-2xl text-center text-sm font-semibold transition-all duration-300 active:scale-[0.98] sm:text-base'

export function CallButton({ className = '', compact = false, variant = 'primary' }) {
  const styles = {
    primary: 'btn-gold text-master-dark',
    dark: 'bg-master-purple text-white shadow-lg hover:bg-master-purple-light',
    outline:
      'border border-gray-200 bg-white text-master-purple hover:border-master-gold/40 hover:bg-master-gold/5',
  }

  const sizeClass = compact ? 'min-h-[44px] px-4 py-2.5 text-sm' : 'min-h-[48px] px-4 py-3 sm:px-7 sm:py-3.5'

  return (
    <a href={SITE.phoneLink} className={`${base} ${styles[variant]} ${sizeClass} ${className}`}>
      <span className="inline-flex items-center justify-center gap-2">
        <PhoneIcon />
        {!compact && (
          <>
            <span className="sm:hidden">Call Now</span>
            <span className="hidden sm:inline">Call {SITE.name}</span>
          </>
        )}
        {compact && <span>Call</span>}
      </span>
      {!compact && <span className="font-bold leading-tight">{SITE.phone}</span>}
    </a>
  )
}

export function WhatsAppButton({ className = '', compact = false }) {
  const sizeClass = compact ? 'min-h-[44px] px-4 py-2.5 text-sm' : 'min-h-[48px] px-4 py-3 sm:px-7 sm:py-3.5'

  return (
    <a
      href={SITE.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} border border-master-whatsapp/30 bg-master-whatsapp/10 text-master-whatsapp hover:bg-master-whatsapp hover:text-white ${sizeClass} ${className}`}
    >
      <WhatsAppIcon />
      WhatsApp
    </a>
  )
}
