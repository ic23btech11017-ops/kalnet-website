import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { ArrowRight, ArrowUpRight, CheckCircle2, CirclePlay } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import SiteFooter from './components/navigation/SiteFooter'
import SiteHeader from './components/navigation/SiteHeader'

const FONT_BRAND = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"

const productModules = [
  {
    title: 'CRM System',
    description: 'Manage leads, customers, and sales pipelines in one place',
  },
  {
    title: 'ERP System',
    description: 'Control operations, finance, and internal workflows',
  },
  {
    title: 'Finance & Billing',
    description: 'Handle invoices, payments, and financial tracking with ease',
  },
  {
    title: 'HR & Workforce',
    description: 'Manage employees, roles, and payroll efficiently',
  },
  {
    title: 'Workflow Automation',
    description: 'Automate repetitive processes and improve efficiency',
  },
  {
    title: 'Industry Solutions',
    description: 'Pre-built systems tailored for your business domain',
  },
]

const features = [
  'Lead Management',
  'Sales Pipeline Tracking',
  'Inventory Management',
  'Financial Reports & Analytics',
  'Role-Based Access Control',
  'Workflow Automation',
  'Multi-Department Coordination',
]

const howItWorksSteps = [
  {
    title: 'Understand Your Business',
    description:
      'Your workflows, bottlenecks, and goals are mapped first so your setup starts with clarity.',
  },
  {
    title: 'Configure Your Platform',
    description:
      'Your CRM, ERP modules, dashboards, and workflows are configured around the way your team already works.',
  },
  {
    title: 'Integrate Your Tools',
    description:
      'Your payment tools, communication apps, and external systems connect into one dependable flow.',
  },
  {
    title: 'Data Setup & Backend',
    description:
      'Your data and backend setup are handled carefully so your team can start with confidence.',
  },
  {
    title: 'Go Live Smoothly',
    description:
      'Your system goes live with guided rollout support so daily operations continue without disruption.',
  },
]

const howStepMedia = [
  'Business discovery walkthrough video slot',
  'Platform configuration demo video slot',
  'Tool integration flow video slot',
  'Data and backend setup preview slot',
  'Go-live support walkthrough slot',
]

const whyKalnet = [
  'One connected place to manage customers and operations',
  'Workflows tailored to how your business actually runs',
  'Implementation that minimizes disruption to your team',
  'Structure that scales as your business grows',
  'Industry-ready setups for practical day-to-day use',
  'Dedicated support when your team needs guidance',
]

function MediaSlot({ label, minHeight = 210, dark = false }: { label: string; minHeight?: number; dark?: boolean }) {
  return (
    <Box
      sx={{
        minHeight,
        borderRadius: 3,
        border: dark ? '1px dashed rgba(255,255,255,.26)' : '1px dashed rgba(13,115,119,.28)',
        bgcolor: dark ? 'rgba(255,255,255,.04)' : 'rgba(13,115,119,.04)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 3,
        textAlign: 'center',
      }}
    >
      <Typography sx={{ color: dark ? 'rgba(255,255,255,.72)' : 'rgba(13,82,85,.85)', fontWeight: 600, fontSize: 12, letterSpacing: '.04em', textTransform: 'uppercase' }}>
        {label}
      </Typography>
    </Box>
  )
}

export default function App() {
  const [activeHowStep, setActiveHowStep] = useState(0)
  const howScrollyRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 900) {
        setActiveHowStep(0)
        return
      }

      const el = howScrollyRef.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      const viewportH = window.innerHeight
      const trackStart = viewportH * 0.18
      const trackLength = Math.max(1, rect.height - viewportH * 0.58)
      const progress = Math.min(0.999, Math.max(0, (trackStart - rect.top) / trackLength))
      const index = Math.min(howItWorksSteps.length - 1, Math.floor(progress * howItWorksSteps.length))
      setActiveHowStep(index)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <Box sx={{ bgcolor: '#edf3f3', color: '#132225' }}>
      <SiteHeader />

      <Box component="main" sx={{ pb: 0 }}>
        <Box data-nav-theme="dark" sx={{ pt: { xs: 14, md: 19 }, pb: { xs: 7, md: 9 }, bgcolor: '#0D7377', background: 'linear-gradient(140deg, #0D7377 0%, #085255 72%)', borderBottom: '1px solid rgba(255,255,255,.12)' }}>
          <Container maxWidth="lg">
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.05fr .95fr' }, gap: 3.2, alignItems: 'start' }}>
              <Box>
                <Typography sx={{ fontFamily: FONT_BRAND, fontSize: { xs: 38, md: 56 }, fontWeight: 600, lineHeight: .98, letterSpacing: '-.02em', mb: 2.2, color: '#fff' }}>
                  All-in-one CRM & ERP platform for modern businesses
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,.82)', fontSize: { xs: 16, md: 18 }, lineHeight: 1.7, maxWidth: 560, mb: 2.2 }}>
                  You get one unified place to manage customers, operations, finance, and workflows so your team can move faster with less manual effort.
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,.85)', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', fontSize: 12, mb: 3 }}>
                  CRM • ERP • Automation • Industry Systems
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                  <Button component={RouterLink} to="/contact" variant="contained" sx={{ bgcolor: '#fff', color: '#0d2a2d', px: 3.2, py: 1.3, borderRadius: '999px', fontWeight: 700, transition: 'all .2s ease', '&:hover': { bgcolor: 'rgba(255,255,255,.86)' } }}>
                    Get a Demo
                  </Button>
                  <Button component={RouterLink} to="/solutions" variant="outlined" sx={{ borderColor: 'rgba(255,255,255,.5)', color: '#fff', px: 3.2, py: 1.3, borderRadius: '999px', fontWeight: 700, transition: 'all .2s ease', '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,.08)' } }}>
                    Explore Platform
                  </Button>
                </Stack>
              </Box>

              <Box sx={{ display: 'grid', gap: 1.6 }}>
                <MediaSlot label="Hero dashboard screenshot slot" minHeight={300} dark />
                <MediaSlot label="Hero product video slot" minHeight={170} dark />
              </Box>
            </Box>
          </Container>
        </Box>

        <Container data-nav-theme="light" maxWidth="lg" sx={{ mt: { xs: 8, md: 10 } }}>
          <Typography sx={{ fontFamily: FONT_BRAND, fontSize: { xs: 33, md: 48 }, lineHeight: 1, letterSpacing: '-.02em', mb: 2.8 }}>
            Everything you need to run your business
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2 }}>
            {productModules.map(module => (
              <Box
                key={module.title}
                sx={{
                  position: 'relative',
                  borderRadius: '28px',
                  border: '1px solid rgba(14,46,51,.10)',
                  background: 'linear-gradient(180deg, #ffffff 0%, #f4f8f8 100%)',
                  p: 3,
                  minHeight: 360,
                  boxShadow: '0 18px 32px rgba(18,34,36,.06)',
                  transition: 'transform .22s ease, box-shadow .22s ease',
                  '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 24px 40px rgba(18,34,36,.11)' },
                  '&:hover .card-arrow': { opacity: 1, transform: 'translate(0, 0)' },
                }}
              >
                <Box
                  className="card-arrow"
                  sx={{
                    position: 'absolute',
                    top: 18,
                    right: 18,
                    width: 34,
                    height: 34,
                    borderRadius: '50%',
                    border: '1px solid rgba(13,115,119,.26)',
                    color: '#0D7377',
                    bgcolor: 'rgba(13,115,119,.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transform: 'translate(-4px, 4px)',
                    transition: 'all .22s ease',
                  }}
                >
                  <ArrowUpRight size={16} />
                </Box>
                <Typography sx={{ fontFamily: FONT_BRAND, fontSize: 28, fontWeight: 600, lineHeight: 1.08, mb: .8 }}>{module.title}</Typography>
                <Typography sx={{ color: 'rgba(19,34,37,.72)', lineHeight: 1.6, mb: 1.6 }}>{module.description}</Typography>
                <MediaSlot label="Product photo / video slot" minHeight={170} />
              </Box>
            ))}
          </Box>
        </Container>

        <Container data-nav-theme="light" maxWidth="lg" sx={{ mt: { xs: 8, md: 10 } }}>
          <Typography sx={{ fontFamily: FONT_BRAND, fontSize: { xs: 33, md: 46 }, lineHeight: 1, letterSpacing: '-.02em', mb: 1.2 }}>
            Built for your industry
          </Typography>
          <Typography sx={{ color: 'rgba(19,34,37,.72)', maxWidth: 650, mb: 2.5 }}>
            Pre-built, customizable systems designed for real-world business needs
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1.02fr 1.2fr 0.86fr' },
              gridTemplateRows: { md: '230px 175px 175px' },
              gridTemplateAreas: {
                md: '"a b c" "d b f" "d e f"',
              },
              gap: 2,
            }}
          >
            <Box sx={{ gridArea: { md: 'a' } }}>
              <Box sx={{ height: '100%', borderRadius: '28px', border: '1px solid rgba(14,46,51,.12)', bgcolor: '#fff', p: 1.8, display: 'flex', flexDirection: 'column' }}>
                <Stack direction="row" spacing={.8} sx={{ mb: 1.1 }}>
                  <Box sx={{ px: 1.4, py: .55, borderRadius: 99, bgcolor: '#0f2325', color: '#fff', fontSize: 11, fontWeight: 700 }}>
                    Admissions Queue
                  </Box>
                  <Box sx={{ px: 1.4, py: .55, borderRadius: 99, bgcolor: 'rgba(13,115,119,.1)', color: '#0D7377', fontSize: 11, fontWeight: 700 }}>
                    Room Status
                  </Box>
                </Stack>
                <Stack spacing={.7}>
                  {['Patient / Guest ID', 'Department / Floor', 'Assigned Workflow'].map(field => (
                    <Box key={field} sx={{ height: 32, borderRadius: 99, border: '1px solid rgba(19,34,37,.14)', bgcolor: '#fbfdfd', px: 1.1, display: 'flex', alignItems: 'center', color: 'rgba(19,34,37,.42)', fontSize: 11 }}>
                      {field}
                    </Box>
                  ))}
                </Stack>
                <Typography sx={{ color: 'rgba(19,34,37,.54)', fontSize: 10.5, mt: 'auto', mb: .9 }}>
                  Build structured operational entries in seconds.
                </Typography>
                <Box sx={{ height: 34, borderRadius: 99, bgcolor: '#14FFEC', color: '#063035', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 12 }}>
                  Open Workflow
                </Box>
              </Box>
            </Box>

            <Box sx={{ gridArea: { md: 'b' } }}>
              <Box sx={{ height: '100%', position: 'relative', borderRadius: '28px', overflow: 'hidden', border: '1px solid rgba(255,255,255,.16)', background: 'linear-gradient(180deg, #31555b 0%, #10272a 100%)' }}>
                <Typography sx={{ position: 'absolute', top: 14, left: 14, px: 1.4, py: .45, borderRadius: 99, border: '1px solid rgba(255,255,255,.35)', color: 'rgba(255,255,255,.92)', fontSize: 11, fontWeight: 600, letterSpacing: '.02em' }}>
                  WHY CHOOSE US
                </Typography>
                <Typography sx={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,.58)', fontSize: 12, fontWeight: 600, letterSpacing: '.04em', textTransform: 'uppercase', px: 3, textAlign: 'center' }}>
                  Industry Operations Video Slot
                </Typography>
                <Box sx={{ position: 'absolute', left: 0, right: 0, bottom: 0, p: 2.2, background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(5,20,22,.92) 70%, rgba(5,20,22,.98) 100%)' }}>
                  <Typography sx={{ color: '#fff', fontFamily: FONT_BRAND, fontSize: { xs: 30, md: 34 }, lineHeight: 1.02, mb: .45 }}>
                    Healthcare & Hospitality Workflows
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,.84)', lineHeight: 1.5, maxWidth: 360, fontSize: 14 }}>
                    Run admissions, room operations, and support workflows from one unified platform.
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{ gridArea: { md: 'c' } }}>
                <Box sx={{ height: '100%', borderRadius: '28px', border: '1px solid rgba(20,255,236,.35)', bgcolor: '#14FFEC', p: 2.2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Box sx={{ width: 34, height: 34, borderRadius: '50%', bgcolor: '#0f2325', color: '#14FFEC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, fontWeight: 700 }}>
                  *
                </Box>
                <Box>
                  <Typography sx={{ fontSize: { xs: 28, md: 27 }, lineHeight: 1.03, color: '#082f32', fontFamily: FONT_BRAND, mb: .55 }}>
                    Decisions with Clarity
                  </Typography>
                  <Typography sx={{ color: 'rgba(8,47,50,.82)', lineHeight: 1.42, fontSize: 13.5 }}>
                    Give every team a single source of truth so daily operations stay clear, predictable, and aligned.
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{ gridArea: { md: 'd' } }}>
              <Box sx={{ height: '100%', borderRadius: '28px', border: '1px solid rgba(255,255,255,.16)', bgcolor: '#0f2325', p: 2.2, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ width: 34, height: 34, borderRadius: '50%', bgcolor: '#14FFEC', color: '#0f2325', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, mb: 1.2 }}>
                  +
                </Box>
                <Typography sx={{ color: '#fff', fontFamily: FONT_BRAND, fontSize: { xs: 29, md: 32 }, lineHeight: 1.04, mb: .75 }}>
                  Industry-ready workflows
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,.82)', lineHeight: 1.5, fontSize: 14 }}>
                  Designed for healthcare and hospitality operations where coordination, visibility, and response time matter most.
                </Typography>
              </Box>
            </Box>

            <Box sx={{ gridArea: { md: 'e' } }}>
              <Box sx={{ height: '100%', borderRadius: '28px', border: '1px solid rgba(14,46,51,.12)', bgcolor: '#fff', p: 2.2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography sx={{ fontSize: { xs: 29, md: 34 }, lineHeight: .95, color: '#0f2325', fontFamily: FONT_BRAND, mb: .35 }}>
                  Unified
                </Typography>
                <Typography sx={{ fontSize: { xs: 28, md: 31 }, lineHeight: .98, color: '#0f2325', fontFamily: FONT_BRAND, mb: .45 }}>
                  Department Sync
                </Typography>
                <Typography sx={{ color: 'rgba(19,34,37,.68)', lineHeight: 1.45, fontSize: 13.8 }}>
                  Help your teams align front office, service, and finance with fewer handoff delays.
                </Typography>
              </Box>
            </Box>

            <Box sx={{ gridArea: { md: 'f' } }}>
              <Box sx={{ height: '100%', position: 'relative', borderRadius: '28px', overflow: 'hidden', border: '1px solid rgba(13,115,119,.24)', background: 'linear-gradient(180deg, #6f8793 0%, #23363e 100%)' }}>
                <Typography sx={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,.62)', fontSize: 12, fontWeight: 600, letterSpacing: '.04em', textTransform: 'uppercase', px: 3, textAlign: 'center' }}>
                  Industry Case-study Visual Slot
                </Typography>
                <Box sx={{ position: 'absolute', left: 0, right: 0, bottom: 0, p: 2.1, background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(5,20,22,.92) 70%, rgba(5,20,22,.98) 100%)' }}>
                  <Typography sx={{ color: '#fff', fontFamily: FONT_BRAND, fontSize: { xs: 26, md: 23 }, lineHeight: 1.06 }}>
                    Seamless Across Service Operations
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box sx={{ mt: 1.7, p: 1.8, borderRadius: 3, bgcolor: 'rgba(13,115,119,.06)', border: '1px solid rgba(13,115,119,.15)' }}>
            <Typography sx={{ fontSize: 13, color: '#0b5960' }}>
              SEO pages planned: `/healthcare-erp` • `/hotel-management-system` • `/coaching-erp`
            </Typography>
          </Box>
        </Container>

        <Container data-nav-theme="light" maxWidth="lg" sx={{ mt: { xs: 8, md: 10 } }}>
          <Typography sx={{ fontFamily: FONT_BRAND, fontSize: { xs: 33, md: 46 }, lineHeight: 1, letterSpacing: '-.02em', mb: 2.3 }}>
            Powerful features to simplify your operations
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(4, 1fr)' }, gap: 1.5 }}>
            {features.map(feature => (
              <Box key={feature} sx={{ borderRadius: 3, border: '1px solid rgba(14,46,51,.12)', bgcolor: '#fff', p: 1.8, display: 'flex', alignItems: 'center', gap: 1 }}>
                <CheckCircle2 size={16} color="#0D7377" />
                <Typography sx={{ color: '#1f3236', fontSize: 14 }}>{feature}</Typography>
              </Box>
            ))}
          </Box>
        </Container>

        <Container data-nav-theme="dark" maxWidth="lg" sx={{ mt: { xs: 8, md: 10 } }}>
          <Box sx={{ borderRadius: 5, border: '1px solid rgba(20,255,236,.18)', bgcolor: '#0f2325', p: { xs: 3, md: 5 }, minHeight: { md: 460 } }}>
            <Stack spacing={2.4}>
              <Stack sx={{ justifyContent: 'center' }}>
                <Typography sx={{ fontFamily: FONT_BRAND, fontSize: { xs: 33, md: 58 }, fontWeight: 600, lineHeight: .98, letterSpacing: '-.02em', mb: 1.5, color: '#fff', maxWidth: 880 }}>
                  Not just software. Your complete business operating system.
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,.78)', fontSize: { xs: 16, md: 18 }, lineHeight: 1.75, maxWidth: 980, mb: 1.2 }}>
                  Kalnet combines CRM, ERP, and automation into one unified platform, helping businesses streamline operations, manage customers, and scale efficiently without complexity.
                </Typography>
                <Typography sx={{ color: '#8ef4ea', fontWeight: 600 }}>
                  Unlike traditional tools, Kalnet adapts to your business instead of forcing you to adapt to the software.
                </Typography>
              </Stack>
              <MediaSlot label="Full section video / photo slot" minHeight={420} dark />
            </Stack>
          </Box>
        </Container>

        <Container data-nav-theme="light" maxWidth="lg" sx={{ mt: { xs: 8, md: 10 } }}>
          <Box ref={howScrollyRef} sx={{ position: 'relative', minHeight: { xs: 'auto', md: `calc(${howItWorksSteps.length} * 58vh)` } }}>
            <Box sx={{ borderRadius: 5, border: '1px solid rgba(13,115,119,.16)', background: 'linear-gradient(180deg, #f9fcfc 0%, #f0f6f6 100%)', p: { xs: 2.2, md: 4 }, position: { md: 'sticky' }, top: { md: 98 } }}>
              <Typography sx={{ fontFamily: FONT_BRAND, fontSize: { xs: 33, md: 44 }, lineHeight: 1, letterSpacing: '-.02em', mb: 1.2 }}>
                How Kalnet works
              </Typography>
              <Typography sx={{ color: 'rgba(19,34,37,.72)', maxWidth: 760, mb: 2.5 }}>
                From understanding your business to launch readiness, every step is designed to keep your operations clear and in control.
              </Typography>

              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.08fr .92fr' }, gap: 2.2, alignItems: 'start' }}>
                <Box sx={{ borderRadius: 4, border: '1px solid rgba(13,115,119,.14)', bgcolor: '#fff', p: { xs: 1.5, md: 2 } }}>
                  <Stack direction="row" spacing={1} sx={{ mb: 1.2, flexWrap: 'wrap' }}>
                    {howItWorksSteps.map((_, i) => (
                      <Box
                        key={i}
                        sx={{
                          px: 1.1,
                          py: 0.45,
                          borderRadius: 99,
                          fontSize: 12,
                          fontWeight: 700,
                          color: activeHowStep === i ? '#085255' : 'rgba(19,34,37,.46)',
                          bgcolor: activeHowStep === i ? 'rgba(20,255,236,.34)' : 'rgba(13,115,119,.08)',
                          border: activeHowStep === i ? '1px solid rgba(13,115,119,.35)' : '1px solid rgba(13,115,119,.12)',
                          transition: 'all .25s ease',
                        }}
                      >
                        Step {i + 1}
                      </Box>
                    ))}
                  </Stack>
                  <Box sx={{ borderRadius: 3, border: '1px solid rgba(13,115,119,.2)', bgcolor: '#fcfefe', p: { xs: 1.6, md: 1.8 }, minHeight: { md: 210 }, transition: 'all .28s ease' }}>
                    <Typography sx={{ color: '#0D7377', fontWeight: 800, fontSize: 12, letterSpacing: '.06em', textTransform: 'uppercase', mb: .4 }}>
                      Step {activeHowStep + 1}
                    </Typography>
                    <Typography sx={{ fontFamily: FONT_BRAND, fontSize: { xs: 24, md: 29 }, lineHeight: 1.07, mb: .55 }}>
                      {howItWorksSteps[activeHowStep].title}
                    </Typography>
                    <Typography sx={{ color: 'rgba(19,34,37,.72)', lineHeight: 1.6, fontSize: { xs: 15, md: 15 } }}>
                      {howItWorksSteps[activeHowStep].description}
                    </Typography>
                  </Box>
                </Box>

                <Stack spacing={1.4}>
                  <MediaSlot label={howStepMedia[activeHowStep]} minHeight={320} />
                  <MediaSlot label="Related implementation dashboard slot" minHeight={150} />
                </Stack>
              </Box>

              <Typography sx={{ color: '#0b5960', fontWeight: 700, textAlign: 'center', mt: 2.6 }}>
                No confusing setup. No unnecessary complexity. Just a system your team can actually use with confidence.
              </Typography>
              <Stack alignItems="center" sx={{ mt: 1.6 }}>
                <Button component={RouterLink} to="/contact" variant="contained" endIcon={<ArrowRight size={16} />} sx={{ bgcolor: '#0D7377', borderRadius: '999px', px: 3.6, py: 1.25, fontWeight: 700, '&:hover': { bgcolor: '#085255' } }}>
                  Go Live Smoothly
                </Button>
              </Stack>
            </Box>
          </Box>
        </Container>

        <Container data-nav-theme="light" maxWidth="lg" sx={{ mt: { xs: 8, md: 10 } }}>
          <Typography sx={{ fontFamily: FONT_BRAND, fontSize: { xs: 33, md: 46 }, lineHeight: 1, letterSpacing: '-.02em', mb: 2.2 }}>
            Why businesses choose Kalnet
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 1.6 }}>
            {whyKalnet.map(point => (
              <Box key={point} sx={{ borderRadius: 3, border: '1px solid rgba(14,46,51,.12)', bgcolor: '#fff', p: 2, display: 'flex', gap: 1.1, alignItems: 'flex-start' }}>
                <CheckCircle2 size={17} color="#0D7377" style={{ marginTop: 3, flexShrink: 0 }} />
                <Typography sx={{ color: 'rgba(19,34,37,.8)', lineHeight: 1.6 }}>{point}</Typography>
              </Box>
            ))}
          </Box>
        </Container>

        <Box
          data-nav-theme="dark"
          sx={{
            mt: { xs: 8, md: 10 },
            pt: { xs: 8, md: 10 },
            pb: { xs: 12, md: 16 },
            px: 2,
            bgcolor: '#0D7377',
            background:
              'linear-gradient(180deg, #0D7377 0%, #0A5F64 58%, #041416 82%, #000000 100%)',
          }}
        >
          <Container maxWidth="md" sx={{ textAlign: 'center' }}>
            <Typography
              sx={{
                fontFamily: FONT_BRAND,
                fontSize: { xs: 38, md: 64 },
                fontWeight: 700,
                lineHeight: 0.98,
                letterSpacing: '-.02em',
                mb: 2.2,
                color: '#fff',
              }}
            >
              Ready to streamline your business?
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,.78)', maxWidth: 700, mx: 'auto', mb: 4.5, fontSize: { xs: 15, md: 18 } }}>
              Get started with a CRM and ERP setup designed to reduce operational friction and help your team perform better every day.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.6} justifyContent="center">
              <Button
                component={RouterLink}
                to="/contact"
                variant="contained"
                sx={{
                  bgcolor: '#f2f4f5',
                  color: '#0B5A5F',
                  borderRadius: '999px',
                  px: 4,
                  py: 1.35,
                  fontWeight: 800,
                  minWidth: 190,
                  transition: 'all .2s ease',
                  '&:hover': { bgcolor: '#ffffff' },
                }}
              >
                Book a Demo
              </Button>
              <Button
                component={RouterLink}
                to="/contact"
                variant="outlined"
                startIcon={<CirclePlay size={16} />}
                sx={{
                  borderColor: 'rgba(255,255,255,.35)',
                  color: '#fff',
                  borderRadius: '999px',
                  px: 3.6,
                  py: 1.35,
                  fontWeight: 700,
                  minWidth: 220,
                  transition: 'all .2s ease',
                  '&:hover': { borderColor: 'rgba(255,255,255,.75)', bgcolor: 'rgba(255,255,255,.08)' },
                }}
              >
                Get Free Consultation
              </Button>
            </Stack>
          </Container>
        </Box>
      </Box>

      <SiteFooter />
    </Box>
  )
}
