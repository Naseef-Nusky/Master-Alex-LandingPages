import PageMeta from '../components/common/PageMeta'
import LegalPageLayout from '../components/common/LegalPageLayout'
import { SITE } from '../constants/siteData'

export default function TermsConditions() {
  return (
    <>
      <PageMeta
        title={`Terms & Conditions | ${SITE.name}`}
        description={`Please read these terms carefully before using ${SITE.name}'s website and services.`}
      />
      <LegalPageLayout
        title="Terms & Conditions"
        subtitle={`Please read these terms carefully before using ${SITE.name}'s website and services.`}
      >
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-master-plum">Agreement</h2>
          <p className="leading-relaxed">
            Please read these Terms &amp; Conditions carefully before using this website. This website is owned and
            operated by {SITE.name}. By accessing, browsing, or using this website, you agree to abide by these Terms
            &amp; Conditions.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-master-plum">Use of Services</h2>
          <p className="leading-relaxed">
            Services offered on this website are provided for astrology, psychic readings, and spiritual guidance
            purposes only. They are not a substitute for professional medical, financial, or legal advice. You must be
            at least 18 years old to use or purchase our services.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-master-plum">Payments &amp; Refunds</h2>
          <p className="leading-relaxed">All payments must be made in advance before any service is rendered.</p>
          <p className="leading-relaxed">
            Payments are non-refundable, except in cases of technical failure where the service could not be delivered.
          </p>
          <p className="leading-relaxed">
            {SITE.name} reserves the right to modify pricing or service terms at any time without prior notice.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-master-plum">Intellectual Property</h2>
          <p className="leading-relaxed">
            All content on this website, including text, graphics, logos, images, videos, and design, is the
            intellectual property of {SITE.name} and is protected by applicable copyright and intellectual property
            laws. Unauthorized use, copying, or reproduction of any material is strictly prohibited.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-master-plum">Third-Party Links</h2>
          <p className="leading-relaxed">
            Our website may contain links to third-party websites. {SITE.name} is not responsible for the content,
            services, or privacy practices of these external sites. Visiting any third-party link is done at your own
            risk.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-master-plum">Limitation of Liability</h2>
          <p className="leading-relaxed">
            Services provided by {SITE.name} are intended for spiritual guidance and educational purposes only. We do
            not guarantee specific results or outcomes. Under no circumstances shall we be liable for any direct,
            indirect, or consequential damages arising from the use of our website, services, or related content.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-master-plum">Changes to Terms</h2>
          <p className="leading-relaxed">
            {SITE.name} may update or modify these Terms &amp; Conditions at any time without prior notice. Your
            continued use of the website after changes are made indicates your acceptance of the revised terms.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-master-plum">Governing Law</h2>
          <p className="leading-relaxed">
            All disputes or claims related to this website shall be governed by and interpreted in accordance with the
            applicable laws of the jurisdiction in which {SITE.name} operates.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-master-plum">Contact Us</h2>
          <p className="leading-relaxed">
            If you have any questions or concerns regarding these Terms &amp; Conditions, please contact us at:{' '}
            <a href={`mailto:${SITE.email}`} className="font-medium text-master-gold-dark hover:underline">
              {SITE.email}
            </a>
          </p>
        </div>
      </LegalPageLayout>
    </>
  )
}
