import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import PageMeta from './components/common/PageMeta'
import ScrollToTop from './components/common/ScrollToTop'
import { DEFAULT_LANDING_PATH, LANDING_PAGES } from './constants/landingPages'
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
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to={DEFAULT_LANDING_PATH} replace />} />
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
        <Route path="*" element={<Navigate to={DEFAULT_LANDING_PATH} replace />} />
      </Routes>
    </BrowserRouter>
  )
}
