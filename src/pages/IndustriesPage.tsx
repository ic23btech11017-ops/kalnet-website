import { Box, Stack, Typography } from '@mui/material'
import { ArrowRight } from 'lucide-react'
import { Link as RouterLink } from 'react-router-dom'
import BrandedPageLayout from '../components/layout/BrandedPageLayout'
import { HighlightCard, MediaPlaceholder, StatStrip } from '../components/content/PageBlocks'
import { allIndustriesItems } from '../data/navigationData'

export default function IndustriesPage() {
  return (
    <BrandedPageLayout
      eyebrow="INDUSTRY-READY"
      title="KALNET Industries"
      description="Purpose-built solutions tailored for specific business domains and operating models."
    >
      <StatStrip
        items={[
          { label: 'Industry Verticals', value: '9+' },
          { label: 'Workflow Templates', value: '60+' },
          { label: 'Compliance Coverage', value: 'Multi-standard' },
          { label: 'Customization Depth', value: 'High' },
        ]}
      />

      <Box sx={{ mt: 3, display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1.1fr .9fr' }, gap: 3 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' }, gap: 2.2 }}>
          <HighlightCard title="Domain-fit workflows" description="Each industry page focuses on process patterns, operational roles, and lifecycle stages specific to that domain." />
          <HighlightCard title="Outcomes-focused modules" description="Map features to measurable business outcomes like faster service cycles, fewer manual steps, and better reporting." />
          <HighlightCard title="Adaptable implementation" description="Configure modules, permissions, and handoffs based on team structure and operating maturity." />
        </Box>
        <MediaPlaceholder
          title="Industry showcase placeholder"
          subtitle="Keep this section for vertical-specific dashboards, customer process maps, and explainer videos."
        />
      </Box>

      <Typography sx={{ mt: 4, mb: 2, color: '#0f172a', fontSize: { xs: 26, md: 34 }, fontWeight: 800, letterSpacing: '-.02em' }}>
        Browse industry categories
      </Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' }, gap: 2.5 }}>
        {allIndustriesItems.map(item => (
          <Box key={item.slug} component={RouterLink} to={item.href} sx={{ textDecoration: 'none', border: '1px solid #e2e8f4', borderRadius: 4, p: 3, bgcolor: '#f9fbff', minHeight: 220, display: 'flex', flexDirection: 'column', '&:hover': { bgcolor: '#f2f9f8', borderColor: 'rgba(13,115,119,.34)' } }}>
            <Box sx={{ width: 40, height: 40, borderRadius: 2.5, bgcolor: '#ecf2fb', color: '#475569', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2.5 }}>
              <item.icon size={18} />
            </Box>
            <Typography sx={{ color: '#182033', fontSize: 18, fontWeight: 800, lineHeight: 1.2, mb: 1 }}>{item.title}</Typography>
            <Typography sx={{ color: '#607089', fontSize: 14, lineHeight: 1.55 }}>{item.description}</Typography>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 'auto', pt: 3 }}>
              <Typography sx={{ color: '#0D7377', fontSize: 13, fontWeight: 800, letterSpacing: '.05em' }}>VIEW INDUSTRY</Typography>
              <ArrowRight size={14} color="#0D7377" />
            </Stack>
          </Box>
        ))}
      </Box>

      <Box sx={{ mt: 3, border: '1px solid #e2e8f4', borderRadius: 4, p: { xs: 3, md: 4 }, bgcolor: '#f9fbff' }}>
        <Typography sx={{ color: '#1d293d', fontSize: { xs: 22, md: 28 }, fontWeight: 800, mb: 1.2 }}>
          Industry implementation strategy
        </Typography>
        <Typography sx={{ color: '#5f7089', fontSize: 14.5, lineHeight: 1.65 }}>
          Every industry deployment starts with process mapping and role alignment. From there, workflows and reporting layers are configured around operational realities, not generic templates.
        </Typography>
      </Box>

      <Box sx={{ mt: 3, borderRadius: 4, p: { xs: 3, md: 4 }, bgcolor: '#101828', color: '#fff' }}>
        <Typography sx={{ fontSize: { xs: 22, md: 30 }, fontWeight: 800, letterSpacing: '-.02em', mb: 1.2 }}>
          Looking for your vertical playbook?
        </Typography>
        <Typography sx={{ color: 'rgba(255,255,255,.72)', fontSize: 14.5, lineHeight: 1.65, maxWidth: 760 }}>
          Explore each category page to see process-specific workflows, governance structures, and implementation pathways tailored to that industry.
        </Typography>
      </Box>
    </BrandedPageLayout>
  )
}
