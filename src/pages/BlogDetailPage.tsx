import { Box, Stack, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import BrandedPageLayout from '../components/layout/BrandedPageLayout'
import { MediaPlaceholder } from '../components/content/PageBlocks'

export default function BlogDetailPage() {
  const { slug } = useParams()
  const title = (slug ?? 'blog-post').split('-').map(word => word[0]?.toUpperCase() + word.slice(1)).join(' ')

  return (
    <BrandedPageLayout
      eyebrow="BLOG ARTICLE"
      title={title}
      description="Full-length article layout for content publishing is now wired into routing."
    >
      <Box sx={{ border: '1px solid #e2e8f4', borderRadius: 4, p: { xs: 3, md: 4 }, bgcolor: '#f9fbff', mb: 3 }}>
        <Typography sx={{ color: '#8ca0bd', fontSize: 12, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', mb: .8 }}>
          8 min read • Strategy
        </Typography>
        <Typography sx={{ color: '#5f7089', fontSize: 16, lineHeight: 1.75 }}>
          This template is ready for production content. Add author details, publish date, reading time, and hero summary to complete your editorial standard.
        </Typography>
      </Box>

      <MediaPlaceholder
        title="Article hero media placeholder"
        subtitle="Use this for cover imagery, chart snapshots, or embedded explainer video related to the article topic."
      />

      <Stack spacing={2} sx={{ mt: 3, border: '1px solid #e2e8f4', borderRadius: 4, p: { xs: 3, md: 4 }, bgcolor: '#f9fbff' }}>
        <Typography sx={{ color: '#1d293d', fontSize: { xs: 24, md: 30 }, fontWeight: 800 }}>Key takeaways</Typography>
        {[
          'Start with process clarity before choosing modules.',
          'Phase implementation to reduce operational disruption.',
          'Measure outcomes with baseline and post-rollout metrics.',
        ].map(point => (
          <Typography key={point} sx={{ color: '#5f7089', fontSize: 16, lineHeight: 1.65 }}>
            • {point}
          </Typography>
        ))}
      </Stack>
    </BrandedPageLayout>
  )
}
