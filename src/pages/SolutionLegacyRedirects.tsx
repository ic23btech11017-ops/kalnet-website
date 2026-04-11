import { Navigate, useParams } from 'react-router-dom'
import { LEGACY_SOLUTION_SLUG_REDIRECTS, legacyModulePathFromTitleSlug } from '../data/platformSolutionsData'

/** Old `/solutions/:slug` (single segment) → `/solutions/:category/:module` */
export function LegacySolutionSlugRedirect() {
  const { slug } = useParams<{ slug: string }>()
  if (!slug) return <Navigate to="/solutions" replace />
  const target = LEGACY_SOLUTION_SLUG_REDIRECTS[slug]
  if (target) return <Navigate to={target} replace />
  return <Navigate to="/solutions" replace />
}

/** Old `/module/:slug` (title-derived) → nested solutions URL */
export function LegacyModulePathRedirect() {
  const { slug } = useParams<{ slug: string }>()
  if (!slug) return <Navigate to="/solutions" replace />
  const target = legacyModulePathFromTitleSlug(slug)
  if (target) return <Navigate to={target} replace />
  return <Navigate to="/solutions" replace />
}
