import LandingServiceLayout from '../components/common/LandingServiceLayout'

export default function NegativeEnergyRemoval() {
  return (
    <LandingServiceLayout
      title="Negative Energy Removal"
      subtitle="Dependable negative energy removal in London. Master Alex helps you find balance, peace, and renewed wellbeing."
      serviceSlug="negative-energy-removal"
      serviceImage="/negative-energy-removal.png"
      intro={[
        {
          heading: 'Powerful Negative Energy Removal in London by Master Alex',
          text: 'Living under the weight of negative energy can make every step feel harder. You may work tirelessly yet see little return, as if success stays just beyond reach. Often it is not a lack of effort, but dark energy standing in your way. When that energy is removed, doors begin to open, your hard work is acknowledged, and life starts flowing in a healthier direction. Master Alex delivers dependable negative energy removal in London to help you find balance, peace, and renewed wellbeing. Schedule your appointment today.',
        },
        {
          heading: 'Restore Positivity Through Negative Energy Removal in London',
          text: 'Are constant fatigue, bad luck, or a heavy sense of negativity part of your daily life? These could be warning signs of harmful energy around you. Master Alex offers focused negative energy removal in London to purify your aura, rebuild inner harmony, and return a sense of calm to your routine. Through his spiritual support, you can break free from negative forces and open yourself to brighter, positive energy once more.',
        },
      ]}
      sections={[
        {
          bg: 'dark',
          heading: 'Warning Signs That Call for Bad Energy Removal in London',
          text: 'Harmful energy can slowly disrupt your work, love life, home environment, friendships, and overall health, often without you noticing at first. Many people only recognize the problem after significant damage has already been done. Watch for these common signals that bad energy removal in London may be needed:',
          list: [
            'Persistent low mood or unexpected emotional shifts',
            'Constant tiredness or stress with no clear cause',
            'A string of failures or continuous misfortune',
            'Family disputes or ongoing tension with loved ones',
          ],
          afterText:
            'If any of these resonate with you, consider cleansing your space and energy field. Master Alex also offers energy healing sessions to help restore spiritual strength and emotional stability.',
          cta: 'call',
        },
        {
          bg: 'white',
          heading: "Master Alex's Approach to Dark Energy Removal",
          text: 'Master Alex is a skilled spiritual healer who combines prayer, astrological insight, and energy balancing to remove dark energy. His techniques are time-tested, safe, and suitable for individuals as well as families. In his London sessions, he helps clients shed the unwanted energy that limits growth and disturbs inner calm. He further supports them with spiritual cleansing rituals to block future negativity and nurture long-term positivity.',
          cta: 'call',
        },
        {
          bg: 'surface',
          heading: 'What to Expect from Negative Energy Cleansing in London',
          text: 'Clients who undergo negative energy cleansing with Master Alex in London often report meaningful improvements in how they feel and how their environment responds. Benefits commonly include:',
          list: [
            'Greater mental peace and emotional ease',
            'Healthier bonds and smoother communication',
            'Stronger protection on a spiritual level',
            'Better focus and a more optimistic outlook',
          ],
          afterText:
            'With positive energy restored around you, it becomes easier to welcome new chances, happiness, and contentment into your life.',
          cta: 'call',
        },
        {
          bg: 'dark',
          heading: 'Schedule Your Session to Clear Negative Energy',
          text: "Don't let unseen negative forces limit your happiness or progress. Master Alex is a trusted specialist in negative energy removal in London, offering spiritual healing to help you take back control. Every remedy is customized to your needs, aiming for deep relief and ongoing protection against future harm. Reach out to Master Alex today for proven bad energy removal in London and start moving toward peace, balance, and happiness.",
          cta: 'call',
          image: true,
          imageSrc: '/negative-energy-removal.png',
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
