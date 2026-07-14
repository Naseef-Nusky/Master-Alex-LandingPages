import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import GoogleAnalytics from './components/common/GoogleAnalytics'
import PageMeta from './components/common/PageMeta'
import ScrollToTop from './components/common/ScrollToTop'
import { LANDING_PAGES } from './constants/landingPages'
import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'
import ThankYou from './pages/ThankYou'

function LandingPageEntry({ page }) {
  const Page = page.component

  return (
    <>
      <PageMeta title={page.title} description={page.description} path={page.path} />
      <Page />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <GoogleAnalytics />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <PageMeta
                title="Master Alex | Trusted Spiritual Services UK"
                description="Master Alex offers black magic removal, love solutions, psychic reading, and spiritual healing across the UK. Book a free consultation today."
                path="/"
              />
              <Home />
            </>
          }
        />
        {LANDING_PAGES.map((page) => (
          <Route
            key={page.slug}
            path={page.path}
            element={<LandingPageEntry page={page} />}
          />
        ))}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsConditions />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
