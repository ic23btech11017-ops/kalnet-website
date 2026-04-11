import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { Link as RouterLink, Navigate, useParams } from 'react-router-dom'
import SiteFooter from '../components/navigation/SiteFooter'
import SiteHeader from '../components/navigation/SiteHeader'
import { HighlightCard, MediaPlaceholder, StatStrip } from '../components/content/PageBlocks'
import { findSolutionModule } from '../data/platformSolutionsData'
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

export default function ModuleDetailPage() {
  const { categorySlug, moduleSlug } = useParams<{ categorySlug: string; moduleSlug: string }>()

  if (!categorySlug || !moduleSlug) {
    return <Navigate to="/solutions" replace />
  }

  const found = findSolutionModule(categorySlug, moduleSlug)
  if (!found) {
    return <Navigate to="/solutions" replace />
  }

  const { category, module } = found

  return (
    <Box data-nav-theme="light" sx={{ bgcolor: MONO.page, color: MONO.text, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SiteHeader />

      <Box component="main" sx={{ flexGrow: 1 }}>
        <Box sx={{ pt: { xs: 16, md: 20 }, pb: { xs: 2, md: 3 } }}>
          <Container maxWidth="lg">
            <Typography
              component={RouterLink}
              to="/solutions"
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
              ← All solutions
            </Typography>
            <SectionLabel>{category.category}</SectionLabel>
            <Typography
              component="h1"
              sx={{
                fontFamily: FONT_BRAND,
                fontSize: { xs: 32, md: 44 },
                fontWeight: 500,
                lineHeight: 1.05,
                letterSpacing: '-.03em',
                mb: 2,
                maxWidth: 800,
              }}
            >
              {module.title}
            </Typography>
            <Typography sx={{ fontSize: 16, color: MONO.muted, lineHeight: 1.6, maxWidth: 560, mb: 1 }}>
              {module.tagline}
            </Typography>
            <Typography sx={{ color: MONO.muted, fontSize: { xs: 15, md: 16 }, lineHeight: 1.65, maxWidth: 680 }}>
              {module.desc}
            </Typography>
          </Container>
        </Box>

        <Box sx={{ bgcolor: MONO.pageGrey, py: 3, borderTop: `1px solid ${MONO.border}`, borderBottom: `1px solid ${MONO.border}` }}>
          <Container maxWidth="lg">
            <StatStrip
              items={[
                { label: 'Deployment', value: 'Rapid' },
                { label: 'Integration', value: 'API-ready' },
                { label: 'Workflows', value: 'Automated' },
                { label: 'Security', value: 'Enterprise' },
              ]}
            />
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1.15fr .85fr' }, gap: 3 }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' }, gap: 1.5 }}>
              <HighlightCard
                title="Centralized operations"
                description={`Unify ${module.title.toLowerCase()} processes in one dashboard and reduce manual handoffs.`}
              />
              <HighlightCard title="Real-time visibility" description="See KPIs and bottlenecks early with role-based views and live status." />
              <HighlightCard title="Automated workflows" description="Use triggers, approvals, and SLAs to remove repetitive admin work." />
              <HighlightCard title="Scalable architecture" description="Deploy standalone or as part of the full Kalnet platform." />
            </Box>
            <MediaPlaceholder title={`${module.title} interface`} subtitle={`Walkthroughs and UI for ${module.title} workflows.`} />
          </Box>

          <Box
            sx={{
              mt: 4,
              border: `1px solid ${MONO.text}`,
              borderRadius: 2,
              p: { xs: 2.5, md: 3.5 },
              bgcolor: MONO.surface,
            }}
          >
            <Typography sx={{ fontFamily: FONT_BRAND, fontSize: { xs: 22, md: 26 }, fontWeight: 500, letterSpacing: '-.02em', mb: 2 }}>
              Why choose Kalnet {module.title}?
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 1.5 }}>
              {[
                'Fewer data silos across departments',
                'Faster process completion with automation',
                'Controls embedded in everyday workflows',
                'Low friction for day-to-day operators',
                'Stays in sync with the wider Kalnet stack',
                'Role-based access from day one',
              ].map(benefit => (
                <Typography key={benefit} sx={{ color: MONO.mutedStrong, fontSize: 15, lineHeight: 1.55, pl: 1.5, borderLeft: `2px solid rgba(17,17,17,.12)` }}>
                  {benefit}
                </Typography>
              ))}
            </Box>
          </Box>
        </Container>

        <Box data-nav-theme="dark" sx={{ py: { xs: 8, md: 10 }, px: 2, bgcolor: MONO.darkSoft, borderTop: '1px solid rgba(255,255,255,.08)' }}>
          <Container maxWidth="lg">
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'flex-start', md: 'center' }, justifyContent: 'space-between', gap: 3 }}>
              <Box sx={{ maxWidth: 560 }}>
                <Typography sx={{ fontFamily: FONT_BRAND, fontSize: { xs: 22, md: 28 }, fontWeight: 500, letterSpacing: '-.02em', mb: 1.2, color: '#fff' }}>
                  Ready to deploy {module.title}?
                </Typography>
                <Typography sx={{ color: MONO.darkMuted, fontSize: 15, lineHeight: 1.65 }}>
                  Book a tailored walkthrough and see how this module fits your operations.
                </Typography>
              </Box>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.2} flexShrink={0}>
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
                    border: '1px solid transparent',
                    whiteSpace: 'nowrap',
                    '&:hover': { bgcolor: MONO.accentHover, boxShadow: 'none', borderColor: '#111' },
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
                    whiteSpace: 'nowrap',
                    '&:hover': { borderColor: 'rgba(255,255,255,.5)', bgcolor: 'rgba(255,255,255,.04)' },
                  }}
                >
                  Talk to sales
                </Button>
              </Stack>
            </Box>
          </Container>
        </Box>
      </Box>

      <SiteFooter />
    </Box>
  )
}
