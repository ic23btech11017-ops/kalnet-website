import { Navigate, Route, Routes } from 'react-router-dom'
import App from './App'
import BlogDetailPage from './pages/BlogDetailPage'
import BlogsPage from './pages/BlogsPage'
import CategoryDetailPage from './pages/CategoryDetailPage'
import IndustriesPage from './pages/IndustriesPage'
import SolutionsPage from './pages/SolutionsPage'
import StaticPage from './pages/StaticPage'
import ModuleDetailPage from './pages/ModuleDetailPage'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />

      <Route path="/solutions" element={<SolutionsPage />} />
      <Route path="/solutions/:slug" element={<CategoryDetailPage type="solutions" />} />
      <Route path="/module/:slug" element={<ModuleDetailPage />} />

      <Route path="/industries" element={<IndustriesPage />} />
      <Route path="/industries/:slug" element={<CategoryDetailPage type="industries" />} />

      <Route path="/partners" element={<StaticPage pageKey="partners" />} />
      <Route path="/careers" element={<StaticPage pageKey="careers" />} />
      <Route path="/about" element={<StaticPage pageKey="about" />} />
      <Route path="/contact" element={<StaticPage pageKey="contact" />} />

      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/blogs/:slug" element={<BlogDetailPage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
