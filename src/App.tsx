import { Box, Button, Container, InputBase, Stack, Typography } from '@mui/material'
import { ArrowRight, ArrowUpRight, CirclePlay } from 'lucide-react'
import { Link as RouterLink } from 'react-router-dom'
import SiteFooter from './components/navigation/SiteFooter'
import SiteHeader from './components/navigation/SiteHeader'

const FONT_BRAND = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"

const MONO = {
  page: '#f5f5f5',
  surface: '#ffffff',
  surfaceSoft: '#f8f8f8',
  text: '#111111',
  muted: 'rgba(17,17,17,.55)',
  border: 'rgba(17,17,17,.10)',
  borderSoft: 'rgba(17,17,17,.07)',
  dark: '#0f0f10',
  darkSoft: '#141414',
  darkMuted: 'rgba(255,255,255,.6)',
  accent: '#D6E6FF',
  accentHover: '#C2D9FF',
  accentText: '#111',
}

/* ─── Shortened, punchier copy ─── */

const productModules = [
  { title: 'CRM System', description: 'Leads, customers, and pipelines — unified.' },
  { title: 'ERP System', description: 'Operations, finance, and workflows — controlled.' },
  { title: 'Finance & Billing', description: 'Invoices, payments, and tracking — simplified.' },
  { title: 'HR & Workforce', description: 'Employees, roles, and payroll — managed.' },
  { title: 'Workflow Automation', description: 'Repetitive processes — eliminated.' },
  { title: 'Industry Solutions', description: 'Pre-built systems for your domain.' },
]

const featureTopCards = [
  { title: 'Fully Customizable', description: 'Shape workflows around your team.', stat: '100%' },
  { title: 'Secure by Default', description: 'Role-based controls, protected records.', stat: '—' },
  { title: 'Built for Speed', description: 'Fewer handoffs, real-time visibility.', stat: '—' },
]

const featureBottomCards = [
  {
    title: 'Faster execution',
    description: 'Track tasks and outcomes with less coordination friction.',
    mediaLabel: 'Operational trend chart',
  },
  {
    title: 'Workflows in sync',
    description: 'Connect people, records, and approvals in one layer.',
    mediaLabel: 'Cross-team communication',
  },
]

const howItWorksSteps = [
  { title: 'Understand', description: 'We map your workflows, bottlenecks, and goals.' },
  { title: 'Configure', description: 'Modules and dashboards set around your team.' },
  { title: 'Integrate', description: 'Payment tools and apps connect into one flow.' },
  { title: 'Data Setup', description: 'Backend handled so you start with confidence.' },
  { title: 'Go Live', description: 'Guided rollout, zero disruption.' },
]

const whyKalnet = [
  'One place for customers and operations',
  'Workflows that match how you actually run',
  'Implementation with minimal disruption',
  'Structure that scales with your growth',
]

const trustedPartners = [
  { name: 'Tayog', logo: '/images/tayog_logo.png' },
  { name: 'HealthBud', logo: '/images/Health_bud_logo.png' },
  { name: 'IIT Hyderabad', logo: '/images/images_9.png' },
  { name: 'Tayog', logo: '/images/tayog_logo.png' },
  { name: 'HealthBud', logo: '/images/Health_bud_logo.png' },
  { name: 'IIT Hyderabad', logo: '/images/images_9.png' },
]

const testimonials = [
  // ROW 1
  {
    quote: 'KALNET played a big role in scaling our operations. The CRM and patient modules helped us manage their records effortlessly.',
    name: 'Rishav',
    role: 'Founder',
    company: 'HealthBud',
    initials: 'R',
  },
  {
    quote: 'Switching to KALNET Healthcare was a game-changer. Patient scheduling, billing, and EMR are now seamless. Highly recommended.',
    name: 'Dr. Meera Singh',
    role: 'Medical Superintendent',
    company: 'Apollo Clinics',
    initials: 'MS',
  },
  {
    quote: 'Managing billing and inventory at my store was chaotic before KALNET. Now I have a single system that keeps everything organized.',
    name: 'Chirag Bamb',
    role: 'Store Owner',
    company: 'Retail Business',
    initials: 'CB',
  },
  {
    quote: 'The workflow automation saved us hours every week. Our team finally has visibility into what matters without the manual effort.',
    name: 'Ananya Rao',
    role: 'Operations Lead',
    company: 'Tayog',
    initials: 'AR',
  },
  {
    quote: 'Kalnet transformed our digital record system. The efficiency gains in our design excellence centre were immediate and measurable.',
    name: 'Rajesh Kumar',
    role: 'Dean',
    company: 'IIT Hyderabad',
    initials: 'RK',
  },
  // ROW 2
  {
    quote: 'We needed a secure, fast CRM for our international patients. Kalnet delivered with zero downtime and perfect data integrity.',
    name: 'Dr. Sarah Chen',
    role: 'Director',
    company: 'MedAssist',
    initials: 'SC',
  },
  {
    quote: 'Scaling from 5 to 50 stores was only possible because we had Kalnet managing our inventory and billing in one unified sink.',
    name: 'Vikram Sahay',
    role: 'CEO',
    company: 'Retail Chain',
    initials: 'VS',
  },
  {
    quote: 'The workflow engine is the best I have seen. It handles complex cross-department approvals effortlessly every single day.',
    name: 'Priya Sharma',
    role: 'Operations Pro',
    company: 'Logistics Hub',
    initials: 'PS',
  },
  {
    quote: 'Reliable, scalable, and intuitive. Exactly what a modern enterprise needs to move faster in a digital-first economy.',
    name: 'Marcus Thorne',
    role: 'CTO',
    company: 'Global Systems',
    initials: 'MT',
  },
  {
    quote: 'The customer support is world-class. They helped us customize every module to fit our unique operational DNA perfectly.',
    name: 'Elena Kostic',
    role: 'Founder',
    company: 'K-Industries',
    initials: 'EK',
  },
]

/* ─── Media Slot (minimal) ─── */
function MediaSlot({ label, minHeight = 180, dark = false }: { label: string; minHeight?: number; dark?: boolean }) {
  return (
    <Box
      sx={{
        minHeight,
        borderRadius: 2,
        border: dark ? '1px solid rgba(255,255,255,.1)' : `1px solid ${MONO.borderSoft}`,
        bgcolor: dark ? 'rgba(255,255,255,.03)' : MONO.surfaceSoft,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 3,
        textAlign: 'center',
      }}
    >
      <Typography
        sx={{
          color: dark ? 'rgba(255,255,255,.35)' : 'rgba(17,17,17,.3)',
          fontWeight: 500,
          fontSize: 11,
          letterSpacing: '.06em',
          textTransform: 'uppercase',
        }}
      >
        {label}
      </Typography>
    </Box>
  )
}

/* ─── Section Label ─── */
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

export default function App() {
  return (
    <Box sx={{ bgcolor: MONO.page, color: MONO.text }}>
      <SiteHeader />

      <Box component="main" sx={{ pb: 0 }}>

        {/* ═══════════════ HERO ═══════════════ */}
        <Box data-nav-theme="light" sx={{ pt: { xs: 16, md: 22 }, pb: { xs: 8, md: 12 } }}>
          <Container maxWidth="lg">
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: { xs: 4, md: 6 },
                alignItems: 'center',
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontFamily: FONT_BRAND,
                    fontSize: { xs: 38, md: 56 },
                    fontWeight: 500,
                    lineHeight: 1.1,
                    letterSpacing: '-.03em',
                    mb: 2.5,
                    color: '#111',
                    maxWidth: 600,
                  }}
                >
                  Manage your entire business in{' '}
                  <Box component="span" sx={{ color: '#111' }}>
                    one platform.
                  </Box>
                </Typography>
                <Typography
                  sx={{
                    color: MONO.muted,
                    fontSize: { xs: 15, md: 17 },
                    lineHeight: 1.65,
                    maxWidth: 460,
                    mb: 3.5,
                    fontWeight: 400,
                  }}
                >
                  CRM, ERP, and automation unified — so your team moves faster with less effort.
                </Typography>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} sx={{ maxWidth: 440 }}>
                  <InputBase
                    placeholder="Enter work email"
                    sx={{
                      flexGrow: 1,
                      height: 44,
                      px: 1.8,
                      borderRadius: 99,
                      border: `1px solid ${MONO.border}`,
                      bgcolor: '#fff',
                      fontSize: 13,
                      fontWeight: 400,
                      transition: 'border-color 0.2s ease',
                      '&:hover': { borderColor: '#111' },
                      '&.Mui-focused': { borderColor: '#111' },
                    }}
                  />
                  <Button
                    component={RouterLink}
                    to="/contact"
                    variant="contained"
                    sx={{
                      bgcolor: MONO.accent,
                      color: MONO.accentText,
                      px: 3,
                      py: 1.2,
                      borderRadius: '999px',
                      fontWeight: 600,
                      fontSize: 13,
                      textTransform: 'none',
                      boxShadow: 'none',
                      border: '1px solid transparent',
                      '&:hover': { bgcolor: MONO.accentHover, boxShadow: 'none', borderColor: '#111' },
                    }}
                  >
                    Get a Demo
                  </Button>
                </Stack>
              </Box>

              <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <Box
                  component="img"
                  src="/images/undraw_mcp-server_7kvc.svg"
                  alt="Kalnet Platform Overview"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: 540,
                    display: 'block',
                    margin: '0 auto',
                  }}
                />
              </Box>
            </Box>
          </Container>
        </Box>

        {/* ═══════════════ 01 — PLATFORM ═══════════════ */}
        <Container data-nav-theme="light" maxWidth="lg" sx={{ mt: { xs: 10, md: 14 } }}>
          <SectionLabel>01 — Platform</SectionLabel>
          <Typography
            sx={{
              fontFamily: FONT_BRAND,
              fontSize: { xs: 28, md: 40 },
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: '-.02em',
              mb: 4,
            }}
          >
            Everything to run your business
          </Typography>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 1.5 }}>
            {productModules.map(module => (
              <Box
                key={module.title}
                sx={{
                  position: 'relative',
                  borderRadius: '16px',
                  border: `1px solid ${MONO.borderSoft}`,
                  bgcolor: MONO.surface,
                  p: 2.5,
                  minHeight: 260,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  transition: 'border-color .25s ease',
                  '&:hover': { borderColor: '#111' },
                  '&:hover .card-arrow': { opacity: 1, transform: 'translate(0,0)' },
                }}
              >
                {/* Hover arrow */}
                <Box
                  className="card-arrow"
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    width: 30,
                    height: 30,
                    borderRadius: '50%',
                    border: `1px solid ${MONO.border}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#111',
                    opacity: 0,
                    transform: 'translate(-4px, 4px)',
                    transition: 'all .25s ease',
                  }}
                >
                  <ArrowUpRight size={14} />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: FONT_BRAND,
                      fontSize: { xs: 22, md: 24 },
                      fontWeight: 500,
                      lineHeight: 1.1,
                      mb: 0.8,
                    }}
                  >
                    {module.title}
                  </Typography>
                  <Typography sx={{ color: MONO.muted, lineHeight: 1.5, fontSize: 14, fontWeight: 400 }}>
                    {module.description}
                  </Typography>
                </Box>
                <MediaSlot label="Module preview" minHeight={130} />
              </Box>
            ))}
          </Box>
        </Container>

        {/* ═══════════════ TRUSTED BY ═══════════════ */}
        <Box sx={{ mt: { xs: 10, md: 18 }, overflow: 'hidden', py: { xs: 3, md: 4 }, borderTop: `1px solid ${MONO.borderSoft}`, borderBottom: `1px solid ${MONO.borderSoft}` }}>
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              color: 'rgba(17,17,17,.35)',
              mb: 2.5,
            }}
          >
            Trusted by global leaders
          </Typography>
          <Box sx={{ overflow: 'hidden', position: 'relative', '&:hover .logo-strip': { animationPlayState: 'paused' } }}>
            {/* Fade edges */}
            <Box sx={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(90deg, #f5f5f5 0%, transparent 100%)', zIndex: 1 }} />
            <Box sx={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(270deg, #f5f5f5 0%, transparent 100%)', zIndex: 1 }} />
            <Box className="logo-strip">
              {[...trustedPartners, ...trustedPartners, ...trustedPartners].map((partner, i) => (
                <Box
                  key={`${partner.name}-${i}`}
                  sx={{
                    flexShrink: 0,
                    px: { xs: 3, md: 5 },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    component="img"
                    src={partner.logo}
                    alt={partner.name}
                    sx={{
                      height: { xs: 32, md: 54 }, // increased height specifically for healthbud visibility
                      width: 'auto',
                      objectFit: 'contain',
                      filter: 'grayscale(100%) opacity(0.5)',
                      transition: 'filter 0.3s ease, opacity 0.3s ease, transform 0.3s ease', transform: partner.name === 'HealthBud' ? 'scale(1.4)' : 'none',
                      '&:hover': {
                        filter: 'grayscale(0%) opacity(1)',
                      },
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* ═══════════════ 02 — PLATFORM BENTO ═══════════════ */}
        <Container data-nav-theme="light" maxWidth="lg" sx={{ mt: { xs: 10, md: 18 } }}>
          <SectionLabel>02 — Platform</SectionLabel>
          <Typography
            sx={{
              fontFamily: FONT_BRAND,
              fontSize: { xs: 28, md: 44 },
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: '-.02em',
              mb: 1,
            }}
          >
            Built for how you operate
          </Typography>
          <Typography sx={{ color: MONO.muted, maxWidth: 560, mb: { xs: 3, md: 5 }, fontSize: { xs: 15, md: 16 }, fontWeight: 400, lineHeight: 1.55 }}>
            Kalnet is a modular digital operating system: ERP, CRM, finance, HR, workflows, and analytics in one governed stack—deploy end-to-end or by module, tuned to your industry.
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1fr) minmax(0, 1.2fr) minmax(0, 0.95fr)' },
              gridTemplateRows: { xs: 'auto', md: 'minmax(200px, 1fr) minmax(160px, auto) minmax(160px, auto)' },
              gridTemplateAreas: {
                xs: '"a" "b" "c" "d" "e" "f"',
                md: '"a b c" "d b f" "d e f"',
              },
              gap: { xs: 1.5, md: 2 },
            }}
          >
            {/* A — Workflow UI mock → /solutions */}
            <Box sx={{ gridArea: 'a', minHeight: { xs: 220, md: 0 } }}>
              <Box
                component={RouterLink}
                to="/solutions"
                className="flat-card"
                sx={{
                  height: '100%',
                  minHeight: { xs: 220, md: '100%' },
                  borderRadius: { xs: '20px', md: '24px' },
                  border: `1px solid ${MONO.border}`,
                  bgcolor: MONO.surface,
                  p: 2.25,
                  display: 'flex',
                  flexDirection: 'column',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'transform .22s ease, box-shadow .22s ease, border-color .22s ease',
                  '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 20px 48px rgba(17,17,17,.08)', borderColor: 'rgba(17,17,17,.18)' },
                }}
              >
                <Stack direction="row" spacing={0.75} sx={{ mb: 1.25 }}>
                  <Box sx={{ px: 1.25, py: 0.45, borderRadius: 99, bgcolor: '#111', color: '#fff', fontSize: 10, fontWeight: 700, letterSpacing: '.04em' }}>
                    Queue
                  </Box>
                  <Box sx={{ px: 1.25, py: 0.45, borderRadius: 99, bgcolor: '#ececec', color: '#111', fontSize: 10, fontWeight: 700, letterSpacing: '.04em' }}>
                    Status
                  </Box>
                </Stack>
                <Stack spacing={0.65}>
                  {['Record / case ID', 'Cost center', 'Workflow'].map(field => (
                    <Box
                      key={field}
                      sx={{
                        height: 30,
                        borderRadius: 99,
                        border: `1px solid ${MONO.borderSoft}`,
                        bgcolor: MONO.surfaceSoft,
                        px: 1.25,
                        display: 'flex',
                        alignItems: 'center',
                        color: 'rgba(17,17,17,.38)',
                        fontSize: 10,
                        fontWeight: 500,
                      }}
                    >
                      {field}
                    </Box>
                  ))}
                </Stack>
                <Box sx={{ mt: 'auto', pt: 1.25 }}>
                  <Box
                    sx={{
                      height: 34,
                      borderRadius: 99,
                      bgcolor: '#111',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: 11,
                      letterSpacing: '.04em',
                    }}
                  >
                    Open workflow
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* B — Platform walkthrough (grey media + caption) */}
            <Box sx={{ gridArea: 'b', minHeight: { xs: 320, md: 0 } }}>
              <Box
                component={RouterLink}
                to="/solutions"
                sx={{
                  height: '100%',
                  minHeight: { xs: 320, md: '100%' },
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: { xs: '20px', md: '24px' },
                  overflow: 'hidden',
                  border: `1px solid ${MONO.borderSoft}`,
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'transform .22s ease, box-shadow .22s ease',
                  '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 24px 56px rgba(17,17,17,.1)' },
                }}
              >
                <Box
                  sx={{
                    flex: { md: '1 1 62%' },
                    minHeight: { xs: 200, md: 0 },
                    bgcolor: '#8a8a8a',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      color: 'rgba(255,255,255,.45)',
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: '.14em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Platform walkthrough
                  </Typography>
                </Box>
                <Box sx={{ flex: { md: '0 0 auto' }, p: 2.25, bgcolor: MONO.darkSoft, borderTop: '1px solid rgba(255,255,255,.06)' }}>
                  <Typography sx={{ color: '#fff', fontFamily: FONT_BRAND, fontSize: { xs: 22, md: 28 }, fontWeight: 500, lineHeight: 1.08, letterSpacing: '-.02em' }}>
                    30+ modules, one architecture
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,.62)', fontSize: 14, mt: 0.75, fontWeight: 400, lineHeight: 1.45 }}>
                    Finance, operations, CRM, HR, documents, and AI—composed the way your enterprise runs.
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* C — Light panel */}
            <Box sx={{ gridArea: 'c', minHeight: { xs: 140, md: 0 } }}>
              <Box
                className="flat-card"
                sx={{
                  height: '100%',
                  borderRadius: { xs: '20px', md: '24px' },
                  border: `1px solid ${MONO.border}`,
                  bgcolor: '#e8e8e8',
                  p: 2.25,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  minHeight: { xs: 140, md: '100%' },
                }}
              >
                <Typography sx={{ fontSize: { xs: 22, md: 24 }, lineHeight: 1.1, color: '#111', fontFamily: FONT_BRAND, fontWeight: 600, letterSpacing: '-.02em', mb: 0.6 }}>
                  Governed decisions
                </Typography>
                <Typography sx={{ color: 'rgba(17,17,17,.52)', lineHeight: 1.5, fontSize: 14, fontWeight: 400 }}>
                  Audit trails, approvals, and role-based data—so leadership and compliance see the same truth.
                </Typography>
              </Box>
            </Box>

            {/* D — Dark copy → industries */}
            <Box sx={{ gridArea: 'd', minHeight: { xs: 160, md: 0 } }}>
              <Box
                component={RouterLink}
                to="/industries"
                sx={{
                  height: '100%',
                  minHeight: { xs: 160, md: '100%' },
                  borderRadius: { xs: '20px', md: '24px' },
                  border: '1px solid rgba(255,255,255,.12)',
                  bgcolor: MONO.darkSoft,
                  p: 2.5,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'transform .22s ease, border-color .22s ease',
                  '&:hover': { transform: 'translateY(-3px)', borderColor: 'rgba(255,255,255,.22)' },
                }}
              >
                <Typography sx={{ color: '#fff', fontFamily: FONT_BRAND, fontSize: { xs: 24, md: 28 }, fontWeight: 500, lineHeight: 1.08, letterSpacing: '-.02em', mb: 1 }}>
                  Industry depth, same core
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,.58)', lineHeight: 1.55, fontSize: 14, fontWeight: 400 }}>
                  Healthcare, retail, services, education, manufacturing, and public programs—workflows mapped to how each sector operates.
                </Typography>
              </Box>
            </Box>

            {/* E — White panel */}
            <Box sx={{ gridArea: 'e', minHeight: { xs: 140, md: 0 } }}>
              <Box
                className="flat-card"
                sx={{
                  height: '100%',
                  borderRadius: { xs: '20px', md: '24px' },
                  border: `1px solid ${MONO.border}`,
                  bgcolor: MONO.surface,
                  p: 2.25,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  minHeight: { xs: 140, md: '100%' },
                }}
              >
                <Typography sx={{ fontSize: { xs: 22, md: 26 }, lineHeight: 1.08, color: '#111', fontFamily: FONT_BRAND, fontWeight: 600, letterSpacing: '-.02em', mb: 0.6 }}>
                  Fewer handoffs
                </Typography>
                <Typography sx={{ color: MONO.muted, lineHeight: 1.5, fontSize: 14, fontWeight: 400 }}>
                  Sales, finance, HR, and operations share one record layer—integrations and automation replace spreadsheet bridges.
                </Typography>
              </Box>
            </Box>

            {/* F — Outcomes / proof (grey media) → contact */}
            <Box sx={{ gridArea: 'f', minHeight: { xs: 280, md: 0 } }}>
              <Box
                component={RouterLink}
                to="/contact"
                sx={{
                  height: '100%',
                  minHeight: { xs: 280, md: '100%' },
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: { xs: '20px', md: '24px' },
                  overflow: 'hidden',
                  border: `1px solid ${MONO.borderSoft}`,
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'transform .22s ease, box-shadow .22s ease',
                  '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 24px 56px rgba(17,17,17,.1)' },
                }}
              >
                <Box
                  sx={{
                    flex: { md: '1 1 58%' },
                    minHeight: { xs: 180, md: 0 },
                    bgcolor: '#7c7c7c',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      color: 'rgba(255,255,255,.42)',
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: '.14em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Impact snapshot
                  </Typography>
                </Box>
                <Box sx={{ flex: { md: '0 0 auto' }, p: 2.25, bgcolor: 'rgba(0,0,0,.78)' }}>
                  <Typography sx={{ color: '#fff', fontFamily: FONT_BRAND, fontSize: { xs: 20, md: 24 }, fontWeight: 500, lineHeight: 1.1, letterSpacing: '-.02em' }}>
                    Outcomes you can measure
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,.65)', fontSize: 13, mt: 0.6, fontWeight: 400, lineHeight: 1.45 }}>
                    Faster cycles, cleaner data, clearer ownership—talk to us about benchmarks for your use case.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>

        {/* ═══════════════ 03 — FEATURES ═══════════════ */}
        <Container data-nav-theme="light" maxWidth="lg" sx={{ mt: { xs: 10, md: 18 } }}>
          <SectionLabel>03 — Features</SectionLabel>
          <Typography
            sx={{
              fontFamily: FONT_BRAND,
              fontSize: { xs: 28, md: 40 },
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: '-.02em',
              mb: 4,
            }}
          >
            Powerful, yet simple
          </Typography>

          <Box sx={{ display: 'grid', gap: 1.5 }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 1.5 }}>
                {featureTopCards.map((card, i) => (
                  <Box
                    key={card.title}
                    className="flat-card"
                    sx={{
                      borderRadius: '16px',
                      border: '1px solid #111',
                      bgcolor: '#111',
                      p: 3,
                      minHeight: 280,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Box
                      sx={{
                        width: '100%',
                        height: 140,
                        mb: 3,
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        color: '#fff',
                      }}
                    >
                      {i === 0 ? (
                        <Box component="img" src="/images/customizable-100.jpg" sx={{ width: 'auto', height: '100%', objectFit: 'contain' }} alt="100% customizable" />
                      ) : i === 1 ? (
                        <Box component="img" src="/images/secure-fingerprint.jpg" sx={{ width: 'auto', height: '100%', objectFit: 'contain' }} alt="Secure by default" />
                      ) : (
                        <Box
                          sx={{
                            width: 72,
                            height: 72,
                            borderRadius: '50%',
                            border: '1px solid rgba(255,255,255,0.1)',
                            bgcolor: 'rgba(255,255,255,0.03)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#fff',
                            fontSize: 16,
                            fontWeight: 600,
                          }}
                        >
                          {card.stat}
                        </Box>
                      )}
                    </Box>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography sx={{ fontSize: { xs: 20, md: 22 }, lineHeight: 1.1, fontFamily: FONT_BRAND, fontWeight: 500, mb: 1, color: '#fff' }}>
                        {card.title}
                      </Typography>
                      <Typography sx={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.5, fontSize: 13, fontWeight: 400 }}>
                        {card.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>

              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 1.5 }}>
                {featureBottomCards.map(card => (
                  <Box
                    key={card.title}
                    className="flat-card"
                    sx={{
                      borderRadius: '16px',
                      border: '1px solid #111',
                      bgcolor: '#111',
                      minHeight: 220,
                      display: 'flex',
                      flexDirection: 'column',
                      overflow: 'hidden',
                    }}
                  >
                    <Box sx={{ flexGrow: 1, p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Box sx={{ width: '100%', height: 160, border: '1px solid rgba(255,255,255,0.05)', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'rgba(255,255,255,0.02)' }}>
                        <Typography sx={{ color: 'rgba(255,255,255,0.3)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.06em' }}>{card.mediaLabel}</Typography>
                      </Box>
                    </Box>
                    <Box sx={{ p: 3, pt: 0, textAlign: 'center' }}>
                      <Typography sx={{ fontSize: { xs: 20, md: 22 }, lineHeight: 1.1, fontFamily: FONT_BRAND, fontWeight: 500, mb: 1, color: '#fff' }}>
                        {card.title}
                      </Typography>
                      <Typography sx={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.5, fontSize: 13, fontWeight: 400 }}>
                        {card.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Container>

        {/* ═══════════════ DARK POSITIONING ═══════════════ */}
        <Container data-nav-theme="dark" maxWidth="lg" sx={{ mt: { xs: 10, md: 18 } }}>
          <Box
            sx={{
              borderRadius: '20px',
              border: '1px solid rgba(255,255,255,.08)',
              bgcolor: MONO.darkSoft,
              p: { xs: 3, md: 5 },
            }}
          >
            <Typography
              sx={{
                fontFamily: FONT_BRAND,
                fontSize: { xs: 28, md: 44 },
                fontWeight: 500,
                lineHeight: 1,
                letterSpacing: '-.02em',
                mb: 1.5,
                color: '#fff',
                maxWidth: 700,
              }}
            >
              Not just software.{' '}
              <Box component="span" sx={{ color: 'rgba(255,255,255,.4)' }}>
                Your complete operating system.
              </Box>
            </Typography>
            <Typography
              sx={{
                color: MONO.darkMuted,
                fontSize: { xs: 14, md: 16 },
                lineHeight: 1.6,
                maxWidth: 560,
                mb: 3,
                fontWeight: 400,
              }}
            >
              CRM, ERP, and automation combined into one platform that adapts to your business.
            </Typography>
            <MediaSlot label="Platform overview" minHeight={380} dark />
          </Box>
        </Container>

        {/* ═══════════════ 04 — PROCESS ═══════════════ */}
        <Container data-nav-theme="light" maxWidth="lg" sx={{ mt: { xs: 10, md: 18 } }}>
          <SectionLabel>04 — Process</SectionLabel>
          <Typography
            sx={{
              fontFamily: FONT_BRAND,
              fontSize: { xs: 28, md: 40 },
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: '-.02em',
              mb: 4,
            }}
          >
            How Kalnet works
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)' },
              gap: 1.5,
            }}
          >
            {howItWorksSteps.map((step, index) => (
              <Box
                key={step.title}
                className="flat-card"
                sx={{
                  borderRadius: '14px',
                  border: '1px solid #111',
                  bgcolor: MONO.surface,
                  p: 2,
                  minHeight: 180,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography
                  sx={{
                    color: 'rgba(17,17,17,.3)',
                    fontWeight: 500,
                    fontSize: 11,
                    letterSpacing: '.08em',
                    textTransform: 'uppercase',
                    mb: 0.5,
                  }}
                >
                  0{index + 1}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: FONT_BRAND,
                    fontSize: { xs: 18, md: 20 },
                    fontWeight: 500,
                    lineHeight: 1.1,
                    mb: 0.5,
                  }}
                >
                  {step.title}
                </Typography>
                <Typography sx={{ color: MONO.muted, lineHeight: 1.5, fontSize: 13, fontWeight: 400 }}>
                  {step.description}
                </Typography>
              </Box>
            ))}
          </Box>

          <Stack alignItems="center" sx={{ mt: 4 }}>
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              endIcon={<ArrowRight size={15} />}
              sx={{
                bgcolor: MONO.accent,
                color: MONO.accentText,
                borderRadius: '999px',
                px: 3.5,
                py: 1.1,
                fontWeight: 600,
                fontSize: 13,
                textTransform: 'none',
                boxShadow: 'none',
                border: '1px solid transparent',
                '&:hover': { bgcolor: MONO.accentHover, boxShadow: 'none', borderColor: '#111' },
              }}
            >
              Get started
            </Button>
          </Stack>
        </Container>

        {/* ═══════════════ 05 — WHY KALNET ═══════════════ */}
        <Container data-nav-theme="light" maxWidth="lg" sx={{ mt: { xs: 10, md: 18 } }}>
          <SectionLabel>05 — Why Kalnet</SectionLabel>
          <Typography
            sx={{
              fontFamily: FONT_BRAND,
              fontSize: { xs: 28, md: 40 },
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: '-.02em',
              mb: 3,
            }}
          >
            Why businesses choose us
          </Typography>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 1.2 }}>
            {whyKalnet.map(point => (
              <Box
                key={point}
                className="flat-card"
                sx={{
                  borderRadius: '14px',
                  border: `1px solid ${MONO.borderSoft}`,
                  bgcolor: MONO.surface,
                  p: 2.2,
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'border-color 0.25s ease',
                  '&:hover': { borderColor: '#111' },
                }}
              >
                <Typography sx={{ color: 'rgba(17,17,17,.72)', lineHeight: 1.5, fontSize: 14, fontWeight: 400 }}>
                  {point}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>

        {/* ═══════════════ 06 — REVIEWS ═══════════════ */}
        <Box data-nav-theme="light" sx={{ mt: { xs: 10, md: 18 }, overflow: 'hidden' }}>
          <Container maxWidth="lg" sx={{ mb: 4 }}>
            <SectionLabel>06 — Reviews</SectionLabel>
            <Typography
              sx={{
                fontFamily: FONT_BRAND,
                fontSize: { xs: 28, md: 40 },
                fontWeight: 500,
                lineHeight: 1.05,
                letterSpacing: '-.02em',
              }}
            >
              What our clients say
            </Typography>
          </Container>

          <Stack spacing={2}>
            {/* ROW 1 — Left scroll */}
            <Box sx={{ position: 'relative', py: 1 }}>
              <Box className="logo-strip">
                {[...testimonials.slice(0, 5), ...testimonials.slice(0, 5)].map((t, i) => (
                  <Box
                    key={`${t.name}-${i}`}
                    sx={{
                      flexShrink: 0,
                      width: { xs: 300, md: 400 },
                      mx: 1,
                      borderRadius: '16px',
                      border: `1px solid ${MONO.borderSoft}`,
                      bgcolor: MONO.surface,
                      p: { xs: 2.5, md: 3 },
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      minHeight: 200,
                      transition: 'border-color 0.25s ease',
                      '&:hover': { borderColor: '#111' },
                    }}
                  >
                    <Typography
                      sx={{
                        color: 'rgba(17,17,17,.72)',
                        fontSize: { xs: 14, md: 15 },
                        lineHeight: 1.65,
                        fontWeight: 400,
                        fontStyle: 'italic',
                        mb: 3,
                      }}
                    >
                      "{t.quote}"
                    </Typography>
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          bgcolor: '#e8e8e8',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <Typography sx={{ fontSize: 13, fontWeight: 600, color: '#555' }}>
                          {t.initials}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography sx={{ fontWeight: 600, fontSize: 14, lineHeight: 1.2, color: '#111' }}>
                          {t.name}
                        </Typography>
                        <Typography sx={{ fontSize: 12, color: MONO.muted, fontWeight: 400 }}>
                          {t.role} · {t.company}
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* ROW 2 — Right scroll */}
            <Box sx={{ position: 'relative', py: 1 }}>
              <Box className="logo-strip-reverse">
                {[...testimonials.slice(5), ...testimonials.slice(5)].map((t, i) => (
                  <Box
                    key={`${t.name}-${i}`}
                    sx={{
                      flexShrink: 0,
                      width: { xs: 300, md: 400 },
                      mx: 1,
                      borderRadius: '16px',
                      border: `1px solid ${MONO.borderSoft}`,
                      bgcolor: MONO.surface,
                      p: { xs: 2.5, md: 3 },
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      minHeight: 200,
                      transition: 'border-color 0.25s ease',
                      '&:hover': { borderColor: '#111' },
                    }}
                  >
                    <Typography
                      sx={{
                        color: 'rgba(17,17,17,.72)',
                        fontSize: { xs: 14, md: 15 },
                        lineHeight: 1.65,
                        fontWeight: 400,
                        fontStyle: 'italic',
                        mb: 3,
                      }}
                    >
                      "{t.quote}"
                    </Typography>
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          bgcolor: '#e8e8e8',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <Typography sx={{ fontSize: 13, fontWeight: 600, color: '#555' }}>
                          {t.initials}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography sx={{ fontWeight: 600, fontSize: 14, lineHeight: 1.2, color: '#111' }}>
                          {t.name}
                        </Typography>
                        <Typography sx={{ fontSize: 12, color: MONO.muted, fontWeight: 400 }}>
                          {t.role} · {t.company}
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                ))}
              </Box>
            </Box>
          </Stack>
        </Box>

        {/* ═══════════════ CTA ═══════════════ */}
        <Box data-nav-theme="dark" sx={{ mt: { xs: 12, md: 22 }, pt: { xs: 8, md: 12 }, pb: { xs: 10, md: 14 }, px: 2, bgcolor: '#0f0f10' }}>
          <Container maxWidth="md" sx={{ textAlign: 'center' }}>
            <Typography
              sx={{
                fontFamily: FONT_BRAND,
                fontSize: { xs: 32, md: 48 },
                fontWeight: 500,
                lineHeight: 1,
                letterSpacing: '-.025em',
                mb: 2,
                color: '#fff',
              }}
            >
              Ready to streamline{' '}
              <Box component="span" sx={{ color: 'rgba(255,255,255,.35)' }}>
                your business?
              </Box>
            </Typography>
            <Typography
              sx={{
                color: 'rgba(255,255,255,.5)',
                maxWidth: 480,
                mx: 'auto',
                mb: 4,
                fontSize: { xs: 14, md: 16 },
                fontWeight: 400,
              }}
            >
              A CRM and ERP setup designed to reduce friction and help your team perform.
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
                  px: 3.5,
                  py: 1.2,
                  fontWeight: 600,
                  fontSize: 14,
                  textTransform: 'none',
                  boxShadow: 'none',
                  minWidth: 160,
                  border: '1px solid transparent',
                  '&:hover': { bgcolor: MONO.accentHover, boxShadow: 'none', borderColor: '#111' },
                }}
              >
                Book a Demo
              </Button>
              <Button
                component={RouterLink}
                to="/contact"
                variant="outlined"
                startIcon={<CirclePlay size={15} />}
                sx={{
                  borderColor: 'rgba(255,255,255,.2)',
                  color: '#fff',
                  borderRadius: '999px',
                  px: 3,
                  py: 1.2,
                  fontWeight: 500,
                  fontSize: 14,
                  textTransform: 'none',
                  minWidth: 190,
                  '&:hover': { borderColor: 'rgba(255,255,255,.5)', bgcolor: 'rgba(255,255,255,.04)' },
                }}
              >
                Free Consultation
              </Button>
            </Stack>
          </Container>
        </Box>
      </Box>

      <SiteFooter />
    </Box>
  )
}


