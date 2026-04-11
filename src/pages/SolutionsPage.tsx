import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import SiteFooter from '../components/navigation/SiteFooter'
import SiteHeader from '../components/navigation/SiteHeader'
import { PLATFORM_SOLUTIONS, solutionModulePath } from '../data/platformSolutionsData'
import { FONT_BRAND, MONO } from '../theme/marketingMono'

/** Graphic tile behind icons — matches reference card style */
const SOLUTION_CARD_GRAPHIC_BG = '#EEEEEE'

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

function MediaSlot({ label, minHeight = 400, dark = false }: { label: string; minHeight?: number; dark?: boolean }) {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight,
        borderRadius: 3,
        border: dark ? '1px solid rgba(255,255,255,.1)' : `1px solid ${MONO.borderSoft}`,
        bgcolor: dark ? 'rgba(255,255,255,.03)' : MONO.surfaceSoft,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 3,
        textAlign: 'center',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Typography
        sx={{
          color: dark ? 'rgba(255,255,255,.35)' : 'rgba(17,17,17,.3)',
          fontWeight: 500,
          fontSize: 12,
          letterSpacing: '.06em',
          textTransform: 'uppercase',
          zIndex: 2,
        }}
      >
        {label}
      </Typography>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 120,
          height: 120,
          borderRadius: '50%',
          border: dark ? '1px dashed rgba(255,255,255,0.1)' : '1px dashed rgba(17,17,17,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: dark ? 'rgba(255,255,255,0.2)' : 'rgba(17,17,17,0.2)' }} />
      </Box>
    </Box>
  )
}

export default function SolutionsPage() {
  const moduleCount = PLATFORM_SOLUTIONS.reduce((n, c) => n + c.modules.length, 0)

  return (
    <Box data-nav-theme="light" sx={{ bgcolor: MONO.page, color: MONO.text, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SiteHeader />

      <Box component="main" sx={{ flexGrow: 1, pt: { xs: 16, md: 22 }, pb: { xs: 8, md: 14 } }}>
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 800, mb: { xs: 8, md: 10 } }}>
            <SectionLabel>Kalnet solutions</SectionLabel>
            <Typography
              component="h1"
              sx={{
                fontFamily: FONT_BRAND,
                fontSize: { xs: 40, md: 64 },
                fontWeight: 500,
                lineHeight: 1.05,
                letterSpacing: '-.03em',
                mb: 3,
              }}
            >
              Complete platform ecosystem
            </Typography>
            <Typography sx={{ color: MONO.muted, fontSize: { xs: 16, md: 20 }, lineHeight: 1.6, maxWidth: 680 }}>
              {moduleCount}+ integrated modules across {PLATFORM_SOLUTIONS.length} categories—each with its own detail page. Pick a module to learn how it fits your stack.
            </Typography>
          </Box>

          <Box sx={{ mb: { xs: 12, md: 16 } }}>
            <MediaSlot label="Solutions overview media" minHeight={600} />
          </Box>

          {PLATFORM_SOLUTIONS.map(cat => (
            <Box key={cat.categorySlug} sx={{ mb: { xs: 10, md: 14 } }}>
              <Box sx={{ mb: 4, display: 'flex', alignItems: 'flex-end', gap: 2, flexWrap: 'wrap' }}>
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: MONO.surfaceSoft,
                    border: `1px solid ${MONO.borderSoft}`,
                  }}
                >
                  <cat.Icon size={22} strokeWidth={1.5} color={MONO.text} />
                </Box>
                <Box>
                  <SectionLabel>{cat.category}</SectionLabel>
                  <Typography sx={{ fontFamily: FONT_BRAND, fontSize: { xs: 26, md: 34 }, fontWeight: 500, letterSpacing: '-.02em' }}>
                    {cat.category}
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', lg: 'repeat(3, minmax(0, 1fr))' },
                  gap: { xs: 3, md: 4 },
                }}
              >
                {cat.modules.map(mod => (
                  <Box
                    key={mod.slug}
                    component={RouterLink}
                    to={solutionModulePath(cat.categorySlug, mod.slug)}
                    className="solution-module-card"
                    sx={{
                      textDecoration: 'none',
                      color: 'inherit',
                      display: 'flex',
                      flexDirection: 'column',
                      bgcolor: MONO.surface,
                      textAlign: 'left',
                      transition: 'transform 0.28s ease, box-shadow 0.28s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 16px 48px rgba(17,17,17,.08)',
                        '& .solution-card-graphic': { bgcolor: '#e4e4e4' },
                      },
                    }}
                  >
                    <Box
                      className="solution-card-graphic"
                      sx={{
                        aspectRatio: '1',
                        width: '100%',
                        bgcolor: SOLUTION_CARD_GRAPHIC_BG,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'background-color 0.28s ease',
                      }}
                    >
                      <cat.Icon size={52} strokeWidth={1.15} color="#111111" aria-hidden />
                    </Box>
                    <Box sx={{ p: { xs: 2.5, md: 3 }, display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
                      <Typography
                        sx={{
                          color: MONO.text,
                          fontSize: { xs: 17, md: 18 },
                          fontWeight: 700,
                          fontFamily: FONT_BRAND,
                          letterSpacing: '-.02em',
                          lineHeight: 1.25,
                          mb: 1.75,
                        }}
                      >
                        {mod.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: 'rgba(17,17,17,.52)',
                          fontSize: 14,
                          lineHeight: 1.75,
                          flex: 1,
                          mb: 2.5,
                          display: '-webkit-box',
                          WebkitLineClamp: 4,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {mod.desc}
                      </Typography>
                      <Typography
                        sx={{
                          color: MONO.text,
                          fontWeight: 700,
                          fontSize: 11,
                          letterSpacing: '.12em',
                          textTransform: 'uppercase',
                        }}
                      >
                        View module
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}

          <Box
            sx={{
              mt: { xs: 4, md: 6 },
              p: { xs: 4, md: 6 },
              borderRadius: 4,
              bgcolor: MONO.text,
              color: '#fff',
              textAlign: 'center',
            }}
          >
            <Typography sx={{ fontFamily: FONT_BRAND, fontSize: { xs: 26, md: 36 }, fontWeight: 500, letterSpacing: '-.02em', mb: 2 }}>
              Need a custom solution?
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,.6)', fontSize: 16, maxWidth: 560, mx: 'auto', mb: 4, lineHeight: 1.6 }}>
              Tell us how you operate—we will map the right modules and integrations.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} justifyContent="center" alignItems="center">
              <Button
                component={RouterLink}
                to="/contact"
                variant="contained"
                sx={{
                  bgcolor: '#fff',
                  color: '#111',
                  borderRadius: '999px',
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  textTransform: 'none',
                  '&:hover': { bgcolor: '#e0e0e0' },
                }}
              >
                Request demo
              </Button>
              <Button
                component={RouterLink}
                to="/contact"
                variant="outlined"
                sx={{
                  borderColor: 'rgba(255,255,255,.35)',
                  color: '#fff',
                  borderRadius: '999px',
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  textTransform: 'none',
                  '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,.06)' },
                }}
              >
                Talk to sales
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      <SiteFooter />
    </Box>
  )
}
