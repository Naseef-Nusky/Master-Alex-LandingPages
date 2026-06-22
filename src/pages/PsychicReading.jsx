import LandingServiceLayout from '../components/common/LandingServiceLayout'

export default function PsychicReading() {
  return (
    <LandingServiceLayout
      title="Psychic Reading"
      subtitle="Trusted psychic readings in the UK. Master Alex offers clear insights into love, career, and your life path."
      serviceSlug="psychic-reading"
      serviceImage="/psychic-reading.png"
      intro={[
        {
          heading: 'Trusted Psychic Reading in the UK for Clear Insights',
          text: "Why choose a psychic reading? Because it helps you understand what lies ahead. If you feel uncertain about love, career, or relationships, Master Alex's psychic readings in the UK can guide you toward the right path. His deep intuition and spiritual insight reveal what the eye cannot see, offering a clearer view of your future. As a well-known psychic reader in the UK, he uses his gifts to lead you toward success, happiness, and inner peace. Book a session today.",
        },
        {
          heading: 'What Happens During a Psychic Reading?',
          text: 'A psychic reading is a spiritual practice that interprets your energy to understand your thoughts, emotions, and life direction. It can uncover hidden worries, past obstacles, and future opportunities. Master Alex connects with your energy and, through his strong intuitive ability, provides guidance that rebuilds confidence and emotional balance. You can also learn more about Master Alex and how his astrological expertise strengthens his psychic readings.',
        },
      ]}
      sections={[
        {
          bg: 'dark',
          heading: 'Why People Choose the Best Psychic in the UK',
          text: 'Clients turn to the best psychic in the UK for many reasons, including uncertainty in love, financial pressure, or family stress. A psychic reading can help you:',
          list: [
            'Understand your life purpose and direction',
            'Heal emotional wounds from the past',
            'Strengthen relationships and communication',
            'Discover the right career path',
            'Release fear and anxiety about the future',
          ],
          afterText:
            'Each session is confidential and personalized, focused entirely on your energy and your questions.',
          cta: 'call',
        },
        {
          bg: 'white',
          heading: 'Love Psychic in the UK for Relationship Guidance',
          text: 'If your love life feels uncertain, a love psychic in the UK like Master Alex can offer meaningful emotional guidance. His readings help couples understand one another more deeply and find peace within their relationship. Many partners visit him to rebuild affection, strengthen their bond, and restore trust. He also offers spiritual cleansing services to remove negative energy from your mind and surroundings.',
          cta: 'call',
        },
        {
          bg: 'surface',
          heading: 'Work with a Trusted Psychic Reader for Healing',
          text: "Master Alex is a respected guide for emotional and energy healing, and one of UK's most trusted psychic readers. His sessions help release stress and remove mental blocks that hold back your happiness. Through aura reading and energy balancing, he brings calm and positivity back into your life. You may also explore his energy healing services for deeper relaxation and spiritual growth.",
          cta: 'call',
        },
        {
          bg: 'dark',
          heading: 'Book Your Psychic Reading in the UK Today',
          text: 'Contact Master Alex today if you are looking for the best psychic in the UK who truly understands your emotional journey and life path. His readings provide guidance, clarity, and hope for a brighter future. Schedule your session now and begin your path to positive change through psychic reading in the UK.',
          cta: 'call',
          image: true,
          imageSrc: '/psychic-reading.png',
          reverse: true,
        },
        {
          bg: 'dark',
          form: true,
          heading: 'Contact Us Now',
        },
      ]}
    />
  )
}
