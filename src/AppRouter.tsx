import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import App from './App'
import BlogDetailPage from './pages/BlogDetailPage'
import BlogsPage from './pages/BlogsPage'
import CategoryDetailPage from './pages/CategoryDetailPage'
import IndustriesPage from './pages/IndustriesPage'
import SolutionsPage from './pages/SolutionsPage'
import ModuleDetailPage from './pages/ModuleDetailPage'
import { LegacyModulePathRedirect, LegacySolutionSlugRedirect } from './pages/SolutionLegacyRedirects'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PartnersPage from './pages/PartnersPage'
import CareersPage from './pages/CareersPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsOfServicePage from './pages/TermsOfServicePage'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function AppRouter() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/solutions/:categorySlug/:moduleSlug" element={<ModuleDetailPage />} />
        <Route path="/solutions/:slug" element={<LegacySolutionSlugRedirect />} />
        <Route path="/module/:slug" element={<LegacyModulePathRedirect />} />

      <Route path="/industries" element={<IndustriesPage />} />
      <Route path="/industries/:slug" element={<CategoryDetailPage />} />

      <Route path="/partners" element={<PartnersPage />} />
      <Route path="/careers" element={<CareersPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />

      <Route path="/privacy" element={<PrivacyPolicyPage />} />
      <Route path="/terms" element={<TermsOfServicePage />} />

      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/blogs/:slug" element={<BlogDetailPage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </>
  )
}
