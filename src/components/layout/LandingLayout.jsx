import LandingHeader from './LandingHeader'
import LandingFooter from './LandingFooter'
import FloatingCta from '../common/FloatingCta'
import PageBackground from '../common/PageBackground'

export default function LandingLayout({ children }) {
  return (
    <div className="relative min-h-screen">
      <PageBackground />
      <div className="relative z-10 flex min-h-screen flex-col">
        <LandingHeader />
        <main className="flex-1 pb-20 lg:pb-0">{children}</main>
        <LandingFooter />
        <FloatingCta />
      </div>
    </div>
  )
}
