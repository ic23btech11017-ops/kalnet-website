import { Box, Stack, Typography } from '@mui/material'
import { ArrowRight } from 'lucide-react'
import { Link as RouterLink } from 'react-router-dom'
import BrandedPageLayout from '../components/layout/BrandedPageLayout'
import { HighlightCard, MediaPlaceholder } from '../components/content/PageBlocks'

const blogPosts = [
  { slug: 'enterprise-automation-guide', title: 'Enterprise Automation: A Practical Rollout Guide', excerpt: 'How to move from scattered tools to a unified operations stack without disruption.' },
  { slug: 'crm-erp-integration-playbook', title: 'CRM + ERP Integration Playbook', excerpt: 'A proven structure for syncing customer, sales, and finance workflows at scale.' },
  { slug: 'industry-specific-digital-transformation', title: 'Industry-Specific Digital Transformation', excerpt: 'Why generic software fails and how tailored systems accelerate operations.' },
]

export default function BlogsPage() {
  return (
    <BrandedPageLayout
      eyebrow="INSIGHTS"
      title="Kalnet Blogs"
      description="Product thinking, implementation lessons, and practical playbooks for modern businesses."
    >
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1.15fr .85fr' }, gap: 3, mb: 3 }}>
        <Box sx={{ border: '1px solid #e2e8f4', borderRadius: 4, p: { xs: 3, md: 4 }, bgcolor: '#f9fbff' }}>
          <Typography sx={{ color: '#0f172a', fontSize: { xs: 24, md: 34 }, fontWeight: 800, mb: 1.2 }}>
            Featured: Enterprise Automation Blueprint
          </Typography>
          <Typography sx={{ color: '#607089', fontSize: 16, lineHeight: 1.65, mb: 2 }}>
            A practical framework for moving from disconnected tools to one operating system without disrupting ongoing teams.
          </Typography>
          <Box component={RouterLink} to="/blogs/enterprise-automation-guide" sx={{ textDecoration: 'none', color: '#0D7377', fontWeight: 800, fontSize: 13, letterSpacing: '.05em', display: 'inline-flex', alignItems: 'center' }}>
            READ FEATURED ARTICLE <ArrowRight size={14} style={{ marginLeft: 6 }} />
          </Box>
        </Box>
        <MediaPlaceholder title="Blog hero media placeholder" subtitle="Use this area for editorial cover art, author visuals, or embedded video summaries." />
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' }, gap: 2.2, mb: 3 }}>
        <HighlightCard title="Automation" description="Guides for process simplification and workflow orchestration." />
        <HighlightCard title="CRM + ERP" description="Implementation notes for connected sales, finance, and operations." />
        <HighlightCard title="Industry Playbooks" description="Vertical-specific approaches for healthcare, services, and education." />
      </Box>

      <Stack spacing={2.5}>
        {blogPosts.map(post => (
          <Box key={post.slug} component={RouterLink} to={`/blogs/${post.slug}`} sx={{ textDecoration: 'none', border: '1px solid #e2e8f4', borderRadius: 4, p: { xs: 2.5, md: 3 }, bgcolor: '#f9fbff', '&:hover': { bgcolor: '#f2f9f8', borderColor: 'rgba(13,115,119,.34)' } }}>
            <Typography sx={{ color: '#182033', fontSize: { xs: 22, md: 28 }, fontWeight: 800, lineHeight: 1.2, mb: .8 }}>{post.title}</Typography>
            <Typography sx={{ color: '#607089', fontSize: 16, lineHeight: 1.6 }}>{post.excerpt}</Typography>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 2 }}>
              <Typography sx={{ color: '#0D7377', fontSize: 13, fontWeight: 800, letterSpacing: '.05em' }}>READ ARTICLE</Typography>
              <ArrowRight size={14} color="#0D7377" />
            </Stack>
          </Box>
        ))}
      </Stack>
    </BrandedPageLayout>
  )
}
