import { Box, Typography } from '@mui/material'
import BrandedPageLayout from '../components/layout/BrandedPageLayout'
import { HighlightCard, MediaPlaceholder, StatStrip } from '../components/content/PageBlocks'
import { staticPageContent, type StaticPageKey } from '../data/pageContent'

type StaticPageProps = {
  pageKey: StaticPageKey
}

export default function StaticPage({ pageKey }: StaticPageProps) {
  const page = staticPageContent[pageKey]

  return (
    <BrandedPageLayout title={page.title} description={page.description} eyebrow={page.eyebrow}>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1.15fr .85fr' }, gap: 3, mb: 3 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' }, gap: 2.2 }}>
          {page.highlights.map(highlight => (
            <HighlightCard key={highlight.title} title={highlight.title} description={highlight.description} />
          ))}
        </Box>
        <MediaPlaceholder
          title={`${page.title} media section`}
          subtitle="Keep this block for page-specific photos, team visuals, process diagrams, or intro videos."
        />
      </Box>

      <StatStrip items={page.stats} />

      <Box sx={{ mt: 3, border: '1px solid #e2e8f4', borderRadius: 4, p: { xs: 3, md: 4 }, bgcolor: '#f9fbff' }}>
        <Typography sx={{ color: '#1d293d', fontSize: { xs: 24, md: 32 }, fontWeight: 800, mb: 1.2 }}>
          Frontend-only content module
        </Typography>
        <Typography sx={{ color: '#5f7089', fontSize: 16, lineHeight: 1.65 }}>
          This page now follows the shared branding and card system. In the next pass, we can replace placeholder text blocks with finalized marketing copy.
        </Typography>
      </Box>
    </BrandedPageLayout>
  )
}
