import LandingServiceLayout from '../components/common/LandingServiceLayout'

export default function SpiritualHealing() {
  return (
    <LandingServiceLayout
      title="Spiritual Healing"
      subtitle="Trusted spiritual healer in the UK. Master Alex offers energy healing and spiritual cleansing to restore peace, strength, and balance."
      serviceSlug="spiritual-healing"
      serviceImage="/spiritual-healing.png"
      intro={[
        {
          heading: 'Find Peace and Balance Through Energy Healing and Spiritual Cleansing in the UK',
          text: "Do you feel confused, drained, or overwhelmed by events in your life without knowing why? A negative mindset can deeply affect how life unfolds in today's fast-paced world. That's why surrounding yourself with positive energy matters, and Master Alex, a trusted spiritual healer in the UK, can help. Through spiritual healing and energy cleansing, he helps people across the UK overcome emotional pain, refocus on their goals, and find happiness even during difficult times. His healing methods restore natural energy flow, bringing back peace, strength, and balance. Book your appointment today and find inner peace again.",
        },
        {
          heading: 'Understanding Spiritual Healing',
          text: 'Spiritual healing is a process led by Master Alex to bring your body, mind, and spirit into harmony and clear negative energy. With years of experience as a spiritual healer in the UK, he uses traditional energy practices and prayers to release emotional burdens and nurture positive growth. Learn more about Master Alex to discover his background and astrological expertise.',
        },
      ]}
      sections={[
        {
          bg: 'dark',
          heading: 'How Does Energy Healing Work?',
          text: 'During energy healing, Master Alex channels positive vibrations throughout your body to clear blockages that hold you back. The result is a lighter, calmer, and more focused state of mind. He believes that when your energy is balanced, improvements can follow in relationships, career, and overall health. Common benefits include:',
          list: [
            'Reduced stress and anxiety',
            'Greater emotional stability and better sleep',
            'Stronger self-confidence and mental clarity',
            'A deeper spiritual connection',
          ],
          afterText:
            'Why Choose an Energy Healer in the UK? Master Alex is an experienced energy healer in the UK offering both in-person and remote sessions. His approach combines timeless spiritual wisdom with practical support for modern life. If you face emotional pain, relationship strain, or mental exhaustion, his healing restores inner strength and purifies your energy field. If you often feel surrounded by negativity or persistent fatigue, you may also benefit from his negative energy removal services for deeper spiritual cleansing.',
          cta: 'call',
        },
        {
          bg: 'white',
          heading: 'Experience the Power of Spiritual Cleansing',
          text: 'Spiritual cleansing is different from spiritual healing. It focuses on removing harmful vibrations from your aura, home, personal space, and even your workplace so you stay surrounded by positive energy. Master Alex tailors each cleansing session to your spiritual needs for lasting results and emotional balance.',
          cta: 'call',
        },
        {
          bg: 'surface',
          heading: 'Book Your Energy Healing and Spiritual Cleansing Session Today',
          text: 'A consultation with Master Alex can help lift the emotional weight you have been carrying. Many clients feel more positive, experience greater peace in daily life, and move closer to the success they want. Book your energy healing and spiritual cleansing session today.',
          cta: 'call',
          image: true,
          imageSrc: '/spiritual-healing.png',
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
