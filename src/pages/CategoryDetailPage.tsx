import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { ChevronRight } from 'lucide-react'
import { Link as RouterLink, Navigate, useParams } from 'react-router-dom'
import SiteFooter from '../components/navigation/SiteFooter'
import SiteHeader from '../components/navigation/SiteHeader'
import { HighlightCard, MediaPlaceholder, StatStrip } from '../components/content/PageBlocks'
import { allIndustriesItems } from '../data/navigationData'
import { industryDetailContent } from '../data/pageContent'
import { FONT_BRAND, MONO } from '../theme/marketingMono'

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      sx={{
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: '.14em',
        textTransform: 'uppercase',
        color: 'rgba(17,17,17,.38)',
        mb: 1.5,
      }}
    >
      {children}
    </Typography>
  )
}

const fallbackIndustryDetail = (title: string, description: string) => ({
  eyebrow: 'INDUSTRY CATEGORY',
  summary: description,
  stats: [
    { label: 'Workflows', value: 'Configurable' },
    { label: 'Visibility', value: 'Live' },
    { label: 'Controls', value: 'Role-based' },
    { label: 'Scale', value: 'Enterprise' },
  ],
  pillars: [
    { title: 'Operational alignment', description: `${description} Kalnet modules adapt to your operating model.` },
    { title: 'Process automation', description: 'Reduce manual handoffs with approvals, SLAs, and structured workflows.' },
    { title: 'Unified data', description: 'Keep finance, operations, and customer records consistent across teams.' },
    { title: 'Governed access', description: 'Apply role-based visibility so teams see only what they need.' },
  ],
  workflow: ['Map your industry processes', 'Configure modules and approvals', 'Launch with training and support', 'Iterate with analytics'],
  outcomes: ['Faster cycle times', 'Clearer accountability', 'Better cross-team coordination'],
  mediaTitle: `${title} operations`,
  mediaSubtitle: 'Add industry-specific dashboards, workflow diagrams, and walkthrough media here.',
})

export default function CategoryDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const item = slug ? allIndustriesItems.find(i => i.slug === slug) : undefined

  if (!slug || !item) {
    return <Navigate to="/industries" replace />
  }

  const detail = industryDetailContent[slug] ?? fallbackIndustryDetail(item.title, item.description)
  const Icon = item.icon

  return (
    <Box data-nav-theme="light" sx={{ bgcolor: MONO.page, color: MONO.text, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SiteHeader />

      <Box component="main" sx={{ flexGrow: 1, pt: { xs: 16, md: 20 }, pb: { xs: 8, md: 14 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, fontSize: 13, fontWeight: 500, color: MONO.muted }}>
            <Box component={RouterLink} to="/industries" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: MONO.text } }}>
              Industries
            </Box>
            <ChevronRight size={14} style={{ margin: '0 8px' }} />
            <Box sx={{ color: MONO.text }}>{item.title}</Box>
          </Box>

          <Box sx={{ mb: 2, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 4, md: 8 } }}>
            <Box sx={{ flex: 1 }}>
              <Typography
                component={RouterLink}
                to="/industries"
                sx={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: MONO.muted,
                  textDecoration: 'none',
                  display: 'inline-block',
                  mb: 2,
                  '&:hover': { color: MONO.text, borderBottom: '1px solid rgba(17,17,17,.3)' },
                }}
              >
                ← All industries
              </Typography>
              <SectionLabel>{detail.eyebrow}</SectionLabel>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Box sx={{ display: 'inline-flex', p: 1.25, borderRadius: 2, bgcolor: MONO.surface, border: `1px solid ${MONO.borderSoft}` }}>
                  <Icon size={28} strokeWidth={1.5} color={MONO.text} />
                </Box>
              </Box>
              <Typography
                component="h1"
                sx={{
                  fontFamily: FONT_BRAND,
                  fontSize: { xs: 32, md: 44 },
                  fontWeight: 500,
                  lineHeight: 1.08,
                  letterSpacing: '-.03em',
                  mb: 2,
                  maxWidth: 800,
                }}
              >
                {item.title}
              </Typography>
              <Typography sx={{ color: MONO.muted, fontSize: { xs: 15, md: 17 }, lineHeight: 1.65, maxWidth: 680 }}>{detail.summary}</Typography>
            </Box>
            
            <Box sx={{ flex: 1, minHeight: 320, display: 'flex' }}>
              {/* Massive Hero Product Display Area */}
              <Box
                sx={{
                  width: '100%',
                  bgcolor: MONO.surfaceSoft,
                  border: `1px dashed ${MONO.border}`,
                  borderRadius: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <Typography sx={{ color: MONO.text, fontFamily: FONT_BRAND, fontSize: 18, fontWeight: 500 }}>
                  Product Interface Preview
                </Typography>
                <Typography sx={{ color: MONO.muted, fontSize: 13, mt: 1 }}>
                  Full-bleed {item.title.toLowerCase()} dashboard image
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ py: 3, borderTop: `1px solid ${MONO.border}`, borderBottom: `1px solid ${MONO.border}` }}>
            <StatStrip items={detail.stats} />
          </Box>

          <Box sx={{ py: { xs: 6, md: 8 } }}>
            <SectionLabel>Capabilities</SectionLabel>
            <Typography sx={{ fontFamily: FONT_BRAND, fontSize: { xs: 24, md: 32 }, fontWeight: 500, letterSpacing: '-.02em', mb: 3 }}>
              How Kalnet supports this sector
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1.15fr .85fr' }, gap: 3 }}>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' }, gap: 1.5 }}>
                {detail.pillars.map(p => (
                  <HighlightCard key={p.title} title={p.title} description={p.description} />
                ))}
              </Box>
              <MediaPlaceholder title={detail.mediaTitle} subtitle={detail.mediaSubtitle} />
            </Box>
          </Box>

          <Box
            sx={{
              border: `1px solid ${MONO.text}`,
              borderRadius: 2,
              p: { xs: 2.5, md: 3.5 },
              bgcolor: MONO.surface,
              mb: { xs: 6, md: 8 },
            }}
          >
            <Typography sx={{ fontFamily: FONT_BRAND, fontSize: { xs: 20, md: 24 }, fontWeight: 500, letterSpacing: '-.02em', mb: 2 }}>
              Typical rollout path
            </Typography>
            <Box component="ol" sx={{ m: 0, pl: 2.5, color: MONO.mutedStrong, fontSize: 15, lineHeight: 1.7 }}>
              {detail.workflow.map((step, i) => (
                <Box component="li" key={i} sx={{ mb: 0.5 }}>
                  {step}
                </Box>
              ))}
            </Box>
          </Box>
          
          <Box sx={{ mb: { xs: 6, md: 8 } }}>
            <Box
              sx={{
                width: '100%',
                minHeight: 480,
                borderRadius: 3,
                border: `1px dashed ${MONO.border}`,
                bgcolor: MONO.surfaceSoft,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                px: 3,
                textAlign: 'center'
              }}
            >
              <Typography sx={{ color: MONO.text, fontFamily: FONT_BRAND, fontSize: 24, fontWeight: 500, letterSpacing: '-.02em', mb: 1 }}>
                Configuration & Workflow Architecture
              </Typography>
              <Typography sx={{ color: MONO.muted, fontSize: 15, maxWidth: 600 }}>
                Embed a large structural diagram or {item.title}-specific workflow map here showing integration points.
              </Typography>
            </Box>
          </Box>

          <Box sx={{ mb: { xs: 8, md: 10 } }}>
            <SectionLabel>Outcomes</SectionLabel>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {detail.outcomes.map(o => (
                <Box
                  key={o}
                  sx={{
                    px: 2,
                    py: 0.75,
                    borderRadius: '999px',
                    border: `1px solid ${MONO.border}`,
                    fontSize: 14,
                    color: MONO.text,
                  }}
                >
                  {o}
                </Box>
              ))}
            </Box>
          </Box>

          <Box data-nav-theme="dark" sx={{ py: { xs: 8, md: 10 }, px: { xs: 2, md: 0 }, bgcolor: MONO.darkSoft, borderRadius: 2, border: '1px solid rgba(255,255,255,.08)' }}>
            <Box sx={{ maxWidth: 640, mx: 'auto', textAlign: 'center' }}>
              <Typography sx={{ fontFamily: FONT_BRAND, fontSize: { xs: 22, md: 28 }, fontWeight: 500, letterSpacing: '-.02em', mb: 2, color: '#fff' }}>
                Ready to explore {item.title}?
              </Typography>
              <Typography sx={{ color: MONO.darkMuted, fontSize: 15, lineHeight: 1.65, mb: 3 }}>
                Book a walkthrough tailored to your workflows and compliance needs.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.2} justifyContent="center">
                <Button
                  component={RouterLink}
                  to="/contact"
                  variant="contained"
                  sx={{
                    bgcolor: MONO.accent,
                    color: MONO.accentText,
                    borderRadius: '999px',
                    px: 3,
                    py: 1.2,
                    fontWeight: 600,
                    fontSize: 14,
                    textTransform: 'none',
                    boxShadow: 'none',
                    '&:hover': { bgcolor: MONO.accentHover, boxShadow: 'none' },
                  }}
                >
                  Get a demo
                </Button>
                <Button
                  component={RouterLink}
                  to="/contact"
                  variant="outlined"
                  sx={{
                    borderColor: 'rgba(255,255,255,.25)',
                    color: '#fff',
                    borderRadius: '999px',
                    px: 3,
                    py: 1.2,
                    fontWeight: 600,
                    fontSize: 14,
                    textTransform: 'none',
                    '&:hover': { borderColor: 'rgba(255,255,255,.5)', bgcolor: 'rgba(255,255,255,.04)' },
                  }}
                >
                  Talk to sales
                </Button>
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>

      <SiteFooter />
    </Box>
  )
}
