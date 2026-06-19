import { DISCLAIMER } from '../../constants/siteData'

export default function Disclaimer() {
  return (
    <section className="section-tint relative px-4 py-10">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[11px] font-bold tracking-[0.2em] text-master-muted uppercase">
          Disclaimer
        </p>
        <p className="mt-3 text-sm leading-relaxed text-master-muted/90">{DISCLAIMER}</p>
      </div>
    </section>
  )
}
