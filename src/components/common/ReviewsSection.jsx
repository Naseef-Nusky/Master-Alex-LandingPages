import ReviewsSlider from './ReviewsSlider'
import { TESTIMONIALS } from '../../constants/siteData'

export default function ReviewsSection({ items = TESTIMONIALS }) {
  return (
    <section id="reviews" className="section-tint-alt relative px-4 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <span className="section-eyebrow border-master-gold/20 bg-master-gold/10 text-master-gold-dark">
            Client Reviews
          </span>
          <h2 className="mt-4 text-3xl font-bold text-master-plum lg:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-master-muted sm:text-base">
            Real stories from people who found peace and protection through Master Alex&apos;s
            spiritual guidance.
          </p>
        </div>
        <ReviewsSlider items={items} />
      </div>
    </section>
  )
}
