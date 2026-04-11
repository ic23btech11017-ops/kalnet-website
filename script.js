const fs = require('fs');

const ind = import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { ArrowRight } from 'lucide-react'
import { Link as RouterLink } from 'react-router-dom'
import SiteFooter from '../components/navigation/SiteFooter'
import SiteHeader from '../components/navigation/SiteHeader'
import { allIndustriesItems, allSolutionsItems } from '../data/navigationData'
import { FONT_BRAND, MONO } from '../theme/marketingMono'

function SectionLabel({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <Typography
      sx={{
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: '.14em',
        textTransform: 'uppercase',
        color: dark ? 'rgba(255,255,255,.4)' : 'rgba(17,17,17,.38)',
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
        border: dark ? '1px solid rgba(255,255,255,.1)' : \1px solid \\,
        bgcolor: dark ? 'rgba(255,255,255,.03)' : MONO.surfaceSoft,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 3,
        textAlign: 'center',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <Typography
        sx={{
          color: dark ? 'rgba(255,255,255,.35)' : 'rgba(17,17,17,.3)',
          fontWeight: 500,
          fontSize: 12,
          letterSpacing: '.06em',
          textTransform: 'uppercase',
          zIndex: 2
        }}
      >
        {label}
      </Typography>
      <Box sx={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: 120, height: 120, borderRadius: '50%', border: dark ? '1px dashed rgba(255,255,255,0.1)' : '1px dashed rgba(17,17,17,0.1)',
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: dark ? 'rgba(255,255,255,0.2)' : 'rgba(17,17,17,0.2)' }} />
      </Box>
    </Box>
  )
}

export default function IndustriesPage() {
  return (
    <Box data-nav-theme="light" sx={{ bgcolor: MONO.page, color: MONO.text, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SiteHeader />

      <Box component="main" sx={{ flexGrow: 1, pt: { xs: 16, md: 22 }, pb: { xs: 8, md: 14 } }}>
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 800, mb: { xs: 8, md: 10 } }}>
            <SectionLabel>Kalnet Industries</SectionLabel>
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
              Purpose-built solutions tailored for specific business domains.
            </Typography>
            <Typography sx={{ color: MONO.muted, fontSize: { xs: 16, md: 20 }, lineHeight: 1.6, maxWidth: 640 }}>
              From healthcare compliance to heavy manufacturing operations, deploy workflows mapped directly to your operational reality.
            </Typography>
          </Box>

          <Box sx={{ mb: { xs: 12, md: 16 } }}>
             <MediaSlot label="Full-width Industry Demo Video Space" minHeight={600} />
          </Box>

          <Box sx={{ mb: { xs: 12, md: 16 } }}>
            <Box sx={{ mb: 6, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 3 }}>
              <Box>
                <SectionLabel>Browse by Sector</SectionLabel>
                <Typography sx={{ fontFamily: FONT_BRAND, fontSize: { xs: 28, md: 40 }, fontWeight: 500, letterSpacing: '-.02em' }}>
                  Industry categories
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 2 }}>
              {allIndustriesItems.map((item) => (
                <Box
                  key={item.slug}
                  component={RouterLink}
                  to={item.href}
                  sx={{
                    textDecoration: 'none',
                    borderRadius: 3,
                    border: \1px solid \\,
                    bgcolor: MONO.surface,
                    p: { xs: 3, md: 4 },
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.25s ease',
                    minHeight: 280,
                    '&:hover': {
                      borderColor: MONO.text,
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  <Box sx={{ flexGrow: 1 }}>
                    <Box sx={{ mb: 3 }}>
                       <MediaSlot label="Industry Image Thumbnail" minHeight={120} />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, color: MONO.text }}>
                      <item.icon size={24} strokeWidth={1.5} />
                    </Box>
                    <Typography sx={{ color: MONO.text, fontSize: 22, fontWeight: 600, fontFamily: FONT_BRAND, letterSpacing: '-.02em', mb: 1.5 }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: MONO.muted, fontSize: 14, lineHeight: 1.6 }}>
                      {item.description}
                    </Typography>
                  </Box>
                  <Box sx={{ mt: 4, display: 'flex', alignItems: 'center', color: MONO.text, fontWeight: 500, fontSize: 13, textTransform: 'uppercase', letterSpacing: '.06em' }}>
                    Explore Workflows <ArrowRight size={14} style={{ marginLeft: 6 }} />
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          <Box sx={{ p: { xs: 4, md: 6 }, borderRadius: 4, bgcolor: MONO.text, color: '#fff', textAlign: 'center' }}>
            <Typography sx={{ fontFamily: FONT_BRAND, fontSize: { xs: 26, md: 36 }, fontWeight: 500, letterSpacing: '-.02em', mb: 2 }}>
              Need a custom deployment?
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,.6)', fontSize: 16, maxWidth: 600, mx: 'auto', mb: 4, lineHeight: 1.6 }}>
              Our architecture team can map your specific organizational structure into Kalnet's platform across any niche domain.
            </Typography>
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
                '&:hover': { bgcolor: '#e0e0e0' }
              }}
            >
              Speak to our architects
            </Button>
          </Box>
        </Container>
      </Box>

      <SiteFooter />
    </Box>
  )
}


const sol = \import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { ArrowRight } from 'lucide-react'
import { Link as RouterLink } from 'react-router-dom'
import SiteFooter from '../components/navigation/SiteFooter'
import SiteHeader from '../components/navigation/SiteHeader'
import { allSolutionsItems } from '../data/navigationData'
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

function MediaSlot({ label, minHeight = 400, dark = false }: { label: string; minHeight?: number; dark?: boolean }) {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight,
        borderRadius: 3,
        border: dark ? '1px solid rgba(255,255,255,.1)' : \\\1px solid \\\\,
        bgcolor: dark ? 'rgba(255,255,255,.03)' : MONO.surfaceSoft,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 3,
        textAlign: 'center',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <Typography
        sx={{
          color: dark ? 'rgba(255,255,255,.35)' : 'rgba(17,17,17,.3)',
          fontWeight: 500,
          fontSize: 12,
          letterSpacing: '.06em',
          textTransform: 'uppercase',
          zIndex: 2
        }}
      >
        {label}
      </Typography>
      {/* Decorative center element emphasizing media area */}
      <Box sx={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: 120, height: 120, borderRadius: '50%', border: dark ? '1px dashed rgba(255,255,255,0.1)' : '1px dashed rgba(17,17,17,0.1)',
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: dark ? 'rgba(255,255,255,0.2)' : 'rgba(17,17,17,0.2)' }} />
      </Box>
    </Box>
  )
}

export default function SolutionsPage() {
  return (
    <Box data-nav-theme="light" sx={{ bgcolor: MONO.page, color: MONO.text, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SiteHeader />

      <Box component="main" sx={{ flexGrow: 1, pt: { xs: 16, md: 22 }, pb: { xs: 8, md: 14 } }}>
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 800, mb: { xs: 8, md: 10 } }}>
            <SectionLabel>Kalnet Solutions</SectionLabel>
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
              Core platform capabilities for enterprise scale.
            </Typography>
            <Typography sx={{ color: MONO.muted, fontSize: { xs: 16, md: 20 }, lineHeight: 1.6, maxWidth: 640 }}>
              Discover our modular toolset designed to solve the most complex infrastructure, security, and data challenges your business faces today.
            </Typography>
          </Box>

          <Box sx={{ mb: { xs: 12, md: 16 } }}>
             <MediaSlot label="Interactive Product Tour Space" minHeight={600} />
          </Box>

          <Box sx={{ mb: { xs: 12, md: 16 } }}>
            <Box sx={{ mb: 6, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 3 }}>
              <Box>
                <SectionLabel>Platform Modularity</SectionLabel>
                <Typography sx={{ fontFamily: FONT_BRAND, fontSize: { xs: 28, md: 40 }, fontWeight: 500, letterSpacing: '-.02em' }}>
                  Explore solutions
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 2 }}>
              {allSolutionsItems.map((item) => (
                <Box
                  key={item.slug}
                  component={RouterLink}
                  to={item.href}
                  sx={{
                    textDecoration: 'none',
                    borderRadius: 3,
                    border: \\\1px solid \\\\,
                    bgcolor: MONO.surface,
                    p: { xs: 3, md: 4 },
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.25s ease',
                    minHeight: 280,
                    '&:hover': {
                      borderColor: MONO.text,
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  <Box sx={{ flexGrow: 1 }}>
                    <Box sx={{ mb: 3 }}>
                       <MediaSlot label="Solution Diagram/Image" minHeight={120} />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, color: MONO.text }}>
                      <item.icon size={24} strokeWidth={1.5} />
                    </Box>
                    <Typography sx={{ color: MONO.text, fontSize: 22, fontWeight: 600, fontFamily: FONT_BRAND, letterSpacing: '-.02em', mb: 1.5 }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: MONO.muted, fontSize: 14, lineHeight: 1.6 }}>
                      {item.description}
                    </Typography>
                  </Box>
                  <Box sx={{ mt: 4, display: 'flex', alignItems: 'center', color: MONO.text, fontWeight: 500, fontSize: 13, textTransform: 'uppercase', letterSpacing: '.06em' }}>
                    View Capabilities <ArrowRight size={14} style={{ marginLeft: 6 }} />
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      <SiteFooter />
    </Box>
  )
}
\

const cat = \import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { ArrowRight, ChevronRight, Play } from 'lucide-react'
import { Link as RouterLink, useParams, Navigate, useLocation } from 'react-router-dom'
import SiteFooter from '../components/navigation/SiteFooter'
import SiteHeader from '../components/navigation/SiteHeader'
import { allIndustriesItems, allSolutionsItems } from '../data/navigationData'
import { FONT_BRAND, MONO } from '../theme/marketingMono'

function SectionLabel({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <Typography
      sx={{
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: '.14em',
        textTransform: 'uppercase',
        color: dark ? 'rgba(255,255,255,.4)' : 'rgba(17,17,17,.38)',
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
        border: dark ? '1px solid rgba(255,255,255,.1)' : \\\1px solid \\\\,
        bgcolor: dark ? 'rgba(255,255,255,.03)' : MONO.surfaceSoft,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 3,
        textAlign: 'center',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <Typography
        sx={{
          color: dark ? 'rgba(255,255,255,.35)' : 'rgba(17,17,17,.3)',
          fontWeight: 500,
          fontSize: 12,
          letterSpacing: '.06em',
          textTransform: 'uppercase',
          zIndex: 2
        }}
      >
        {label}
      </Typography>
      <Box sx={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: 120, height: 120, borderRadius: '50%', border: dark ? '1px dashed rgba(255,255,255,0.1)' : '1px dashed rgba(17,17,17,0.1)',
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: dark ? 'rgba(255,255,255,0.2)' : 'rgba(17,17,17,0.2)' }} />
      </Box>
    </Box>
  )
}

export default function CategoryDetailPage() {
  const { categoryId } = useParams()
  const location = useLocation()
  
  const isSolution = location.pathname.startsWith('/solutions')
  const itemType = isSolution ? 'Solutions' : 'Industries'
  const parentPath = isSolution ? '/solutions' : '/industries'
  
  const items = isSolution ? allSolutionsItems : allIndustriesItems
  const item = items.find(i => i.slug === categoryId)

  if (!item) {
    return <Navigate to={parentPath} replace />
  }

  const Icon = item.icon

  return (
    <Box data-nav-theme="light" sx={{ bgcolor: MONO.page, color: MONO.text, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SiteHeader />

      <Box component="main" sx={{ flexGrow: 1, pt: { xs: 14, md: 18 }, pb: { xs: 8, md: 14 } }}>
        <Container maxWidth="lg">
          
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 6, fontSize: 13, fontWeight: 500, color: MONO.muted }}>
            <Box component={RouterLink} to={parentPath} sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: MONO.text } }}>
              {itemType}
            </Box>
            <ChevronRight size={14} style={{ margin: '0 8px' }} />
            <Box sx={{ color: MONO.text }}>{item.title}</Box>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 6, md: 12 }, mb: { xs: 12, md: 16 } }}>
            <Box sx={{ flex: 1, pt: 2 }}>
              <Box sx={{ display: 'inline-flex', p: 1.5, borderRadius: 2, bgcolor: MONO.surface, border: \\\1px solid \\\\, mb: 4 }}>
                <Icon size={32} strokeWidth={1.5} color={MONO.text} />
              </Box>
              <Typography
                component="h1"
                sx={{
                  fontFamily: FONT_BRAND,
                  fontSize: { xs: 40, md: 56 },
                  fontWeight: 500,
                  lineHeight: 1.1,
                  letterSpacing: '-.03em',
                  mb: 3,
                }}
              >
                {item.title}
              </Typography>
              <Typography sx={{ color: MONO.muted, fontSize: { xs: 16, md: 20 }, lineHeight: 1.6, maxWidth: 540, mb: 6 }}>
                {item.description} Empower your organization with tailored capabilities designed specifically for this domain.
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button variant="contained" sx={{ bgcolor: MONO.text, color: MONO.page, borderRadius: '999px', px: 4, py: 1.5, fontWeight: 600, textTransform: 'none', '&:hover': { bgcolor: '#333' } }}>
                  Request Demo
                </Button>
                <Button variant="outlined" sx={{ borderColor: MONO.border, color: MONO.text, borderRadius: '999px', px: 4, py: 1.5, fontWeight: 600, textTransform: 'none', '&:hover': { bgcolor: MONO.surfaceSoft } }}>
                  Documentation
                </Button>
              </Stack>
            </Box>

            <Box sx={{ flex: 1.2 }}>
              <MediaSlot label="Hero Product Showcase Space" minHeight={480} />
            </Box>
          </Box>

          <Box sx={{ bgcolor: MONO.text, color: MONO.page, borderRadius: 6, p: { xs: 4, md: 8, lg: 10 }, mb: { xs: 12, md: 16 } }}>
            <Box sx={{ maxWidth: 640, mb: 10 }}>
              <SectionLabel dark>Deep Dive</SectionLabel>
              <Typography sx={{ fontFamily: FONT_BRAND, fontSize: { xs: 32, md: 48 }, fontWeight: 500, lineHeight: 1.1, letterSpacing: '-.02em', mb: 3 }}>
                Capabilities & Architecture
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
               <MediaSlot label="Architecture Diagram / Workflows" minHeight={500} dark />
            </Box>
          </Box>
          
          <Box sx={{ textAlign: 'center', py: { xs: 8, md: 12 } }}>
             <Typography sx={{ fontFamily: FONT_BRAND, fontSize: { xs: 28, md: 40 }, fontWeight: 500, letterSpacing: '-.02em', mb: 4 }}>
               Ready to scale with the {item.title} suite?
             </Typography>
             <Button variant="contained" component={RouterLink} to="/contact" sx={{ bgcolor: MONO.text, color: MONO.page, borderRadius: '999px', px: 5, py: 2, fontSize: 16, fontWeight: 600, textTransform: 'none', '&:hover': { bgcolor: '#333' } }}>
                Speak to our specialists
             </Button>
          </Box>

        </Container>
      </Box>

      <SiteFooter />
    </Box>
  )
}
\

fs.writeFileSync('src/pages/IndustriesPage.tsx', ind);
fs.writeFileSync('src/pages/SolutionsPage.tsx', sol);
fs.writeFileSync('src/pages/CategoryDetailPage.tsx', cat);
