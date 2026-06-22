import LandingServiceLayout from '../components/common/LandingServiceLayout'

export default function LoveSpellCaster() {
  return (
    <LandingServiceLayout
      title="Love Spell Caster"
      subtitle="Trusted love spell caster in the UK. Master Alex helps rebuild affection, restore trust, and bring back lost love."
      serviceSlug="love-spell-caster"
      serviceImage="/love-spell-caster.png"
      intro={[
        {
          heading: 'Rediscover True Love with a Trusted Love Spell Caster in the UK',
          text: 'When misunderstandings grow, love can slowly drift apart, leaving confusion and pain behind. Master Alex, a respected love spell caster in the UK, helps people rebuild genuine affection and emotional peace. His ancient love rituals help create positive change in relationships, restore trust, and bring back lost love. One call to Master Alex can help you find hope again with powerful love spells in the UK. Book your appointment today.',
        },
        {
          heading: 'Understanding How Love Spells Work',
          text: 'Love spells use spiritual energy to attract love, heal broken bonds, or strengthen existing connections. As an experienced love spell specialist in the UK, Master Alex carefully reviews your situation before performing the rituals best suited to your needs. Each spell is cast with pure intention to align you with the energy of love and clarity. Learn more about Master Alex to discover his background and the depth of his love spell practice.',
        },
      ]}
      sections={[
        {
          bg: 'dark',
          heading: 'Types of Love Spells Offered by Master Alex',
          text: 'Based on your relationship needs, Master Alex provides different kinds of love spells, including:',
          list: [
            'Binding spells to unite two hearts and deepen commitment',
            'Attraction spells to spark new romance or revive fading passion',
            'Love marriage spells to remove obstacles and create harmony',
            'Powerful love spells for couples facing serious misunderstandings',
          ],
          afterText:
            'Every spell is guided by spiritual care to protect your wellbeing and bring genuine happiness into your life.',
          cta: 'call',
        },
        {
          bg: 'white',
          heading: 'Why Trust a Love Spell Specialist in the UK?',
          text: 'Clients across the UK trust Master Alex because his work is safe, confidential, and effective. As a skilled love spell specialist in the UK, he helps couples address deep emotional issues and find peace again. His approach focuses on balance, communication, and understanding, not just magic. If your marriage feels strained, he also offers spiritual counselling and specialized rituals to support husband and wife problems and restore harmony at home.',
          cta: 'call',
        },
        {
          bg: 'surface',
          heading: 'Reconnect with Your Lost Partner',
          text: 'Sometimes life separates two people who truly belong together. Through powerful love spells and binding rituals, Master Alex can help you rebuild the emotional bond with your lost partner. Many clients have found happiness again after his spell-casting sessions and personal guidance. You may also explore services such as get ex love back with Master Alex for additional support in healing your relationship.',
          cta: 'call',
        },
        {
          bg: 'dark',
          heading: 'Book a Session with a Love Spell Caster in the UK',
          text: "If heartbreak, doubt, or relationship struggles are weighing on you, reach out to Master Alex, one of UK's most trusted love spell casters. His honest guidance and spiritual methods have helped many couples find real, lasting love. Schedule your session today.",
          cta: 'call',
          image: true,
          imageSrc: '/love-spell-caster.png',
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
