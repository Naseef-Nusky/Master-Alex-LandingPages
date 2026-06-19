import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import PageMeta from './components/common/PageMeta'
import { DEFAULT_LANDING_PATH, LANDING_PAGES } from './constants/landingPages'

function LandingPageEntry({ page }) {
  const Page = page.component

  return (
    <>
      <PageMeta title={page.title} description={page.description} />
      <Page />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={DEFAULT_LANDING_PATH} replace />} />
        {LANDING_PAGES.map((page) => (
          <Route
            key={page.slug}
            path={page.path}
            element={<LandingPageEntry page={page} />}
          />
        ))}
        <Route path="*" element={<Navigate to={DEFAULT_LANDING_PATH} replace />} />
      </Routes>
    </BrowserRouter>
  )
}
