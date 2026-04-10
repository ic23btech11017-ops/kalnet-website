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
  'Tayog', 'IIT Hyderabad', 'Commi', 'HealthBud', 'Apollo Clinics', 'Retail Chain', 'MedAssist',
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

              <MediaSlot label="Dashboard preview" minHeight={380} />
            </Box>
          </Container>
        </Box>

        {/* ═══════════════ TRUSTED BY ═══════════════ */}
        <Box sx={{ mt: { xs: 6, md: 8 }, overflow: 'hidden', py: { xs: 3, md: 4 }, borderTop: `1px solid ${MONO.borderSoft}`, borderBottom: `1px solid ${MONO.borderSoft}` }}>
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
          <Box sx={{ overflow: 'hidden', position: 'relative' }}>
            {/* Fade edges */}
            <Box sx={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(90deg, #f5f5f5 0%, transparent 100%)', zIndex: 1 }} />
            <Box sx={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(270deg, #f5f5f5 0%, transparent 100%)', zIndex: 1 }} />
            <Box className="logo-strip">
              {[...trustedPartners, ...trustedPartners, ...trustedPartners].map((name, i) => (
                <Box
                  key={`${name}-${i}`}
                  sx={{
                    flexShrink: 0,
                    px: { xs: 3, md: 5 },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: 16, md: 20 },
                      fontWeight: 600,
                      color: 'rgba(17,17,17,.2)',
                      letterSpacing: '-.01em',
                      whiteSpace: 'nowrap',
                      fontFamily: FONT_BRAND,
                      userSelect: 'none',
                    }}
                  >
                    {name}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* ═══════════════ 01 — PLATFORM ═══════════════ */}
        <Container data-nav-theme="light" maxWidth="lg" sx={{ mt: { xs: 10, md: 18 } }}>
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

        {/* ═══════════════ 02 — INDUSTRIES ═══════════════ */}
        <Container data-nav-theme="light" maxWidth="lg" sx={{ mt: { xs: 10, md: 18 } }}>
          <SectionLabel>02 — Industries</SectionLabel>
          <Typography
            sx={{
              fontFamily: FONT_BRAND,
              fontSize: { xs: 28, md: 40 },
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: '-.02em',
              mb: 1,
            }}
          >
            Built for your industry
          </Typography>
          <Typography sx={{ color: MONO.muted, maxWidth: 500, mb: 4, fontSize: 15, fontWeight: 400 }}>
            Systems designed for real-world operations
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1.25fr .85fr' },
              gridTemplateRows: { md: '220px 170px 170px' },
              gridTemplateAreas: { md: '"a b c" "d b f" "d e f"' },
              gap: 1.5,
            }}
          >
            {/* Card A — Admissions */}
            <Box sx={{ gridArea: { md: 'a' } }}>
              <Box
                className="flat-card"
                sx={{
                  height: '100%', borderRadius: '16px', border: `1px solid ${MONO.border}`,
                  bgcolor: MONO.surface, p: 2, display: 'flex', flexDirection: 'column',
                }}
              >
                <Stack direction="row" spacing={0.7} sx={{ mb: 1 }}>
                  <Box sx={{ px: 1.2, py: 0.4, borderRadius: 99, bgcolor: '#111', color: '#fff', fontSize: 10, fontWeight: 600 }}>
                    Queue
                  </Box>
                  <Box sx={{ px: 1.2, py: 0.4, borderRadius: 99, bgcolor: '#f1f1f1', color: '#111', fontSize: 10, fontWeight: 600 }}>
                    Status
                  </Box>
                </Stack>
                <Stack spacing={0.6}>
                  {['Patient / Guest ID', 'Department', 'Workflow'].map(field => (
                    <Box
                      key={field}
                      sx={{
                        height: 28,
                        borderRadius: 99,
                        border: `1px solid ${MONO.borderSoft}`,
                        bgcolor: '#fafafa',
                        px: 1,
                        display: 'flex',
                        alignItems: 'center',
                        color: 'rgba(17,17,17,.35)',
                        fontSize: 10,
                      }}
                    >
                      {field}
                    </Box>
                  ))}
                </Stack>
                <Box sx={{ mt: 'auto', pt: 1 }}>
                  <Box sx={{ height: 30, borderRadius: 99, bgcolor: '#111', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 11 }}>
                    Open Workflow
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* Card B — Hero video */}
            <Box sx={{ gridArea: { md: 'b' } }}>
              <Box sx={{ height: '100%', position: 'relative', borderRadius: '16px', overflow: 'hidden', border: `1px solid ${MONO.borderSoft}`, bgcolor: '#787878' }}>
                <Typography sx={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,.4)', fontSize: 11, fontWeight: 500, letterSpacing: '.06em', textTransform: 'uppercase' }}>
                  Operations video
                </Typography>
                <Box sx={{ position: 'absolute', left: 0, right: 0, bottom: 0, p: 2, bgcolor: 'rgba(0,0,0,.65)' }}>
                  <Typography sx={{ color: '#fff', fontFamily: FONT_BRAND, fontSize: { xs: 24, md: 28 }, fontWeight: 500, lineHeight: 1.05 }}>
                    Healthcare & Hospitality
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,.7)', fontSize: 13, mt: 0.3, fontWeight: 400 }}>
                    Admissions, rooms, and support — one platform.
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Card C */}
            <Box sx={{ gridArea: { md: 'c' } }}>
              <Box className="flat-card" sx={{ height: '100%', borderRadius: '16px', border: `1px solid ${MONO.border}`, bgcolor: '#eeeeee', p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                <Typography sx={{ fontSize: { xs: 22, md: 24 }, lineHeight: 1.05, color: '#111', fontFamily: FONT_BRAND, fontWeight: 500, mb: 0.4 }}>
                  Decisions with clarity
                </Typography>
                <Typography sx={{ color: MONO.muted, lineHeight: 1.4, fontSize: 13, fontWeight: 400 }}>
                  A single source of truth for daily operations.
                </Typography>
              </Box>
            </Box>

            {/* Card D — Dark */}
            <Box sx={{ gridArea: { md: 'd' } }}>
              <Box sx={{ height: '100%', borderRadius: '16px', border: '1px solid rgba(255,255,255,.1)', bgcolor: MONO.darkSoft, p: 2, display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ color: '#fff', fontFamily: FONT_BRAND, fontSize: { xs: 24, md: 26 }, fontWeight: 500, lineHeight: 1.05, mb: 0.6 }}>
                  Industry-ready workflows
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,.55)', lineHeight: 1.5, fontSize: 13, fontWeight: 400 }}>
                  Built for healthcare and hospitality where coordination matters most.
                </Typography>
              </Box>
            </Box>

            {/* Card E */}
            <Box sx={{ gridArea: { md: 'e' } }}>
              <Box className="flat-card" sx={{ height: '100%', borderRadius: '16px', border: `1px solid ${MONO.border}`, bgcolor: MONO.surface, p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography sx={{ fontSize: { xs: 24, md: 26 }, lineHeight: 1, color: '#111', fontFamily: FONT_BRAND, fontWeight: 500, mb: 0.3 }}>
                  Unified sync
                </Typography>
                <Typography sx={{ color: MONO.muted, lineHeight: 1.4, fontSize: 13, fontWeight: 400 }}>
                  Front office, service, and finance — fewer handoffs.
                </Typography>
              </Box>
            </Box>

            {/* Card F — Image */}
            <Box sx={{ gridArea: { md: 'f' } }}>
              <Box sx={{ height: '100%', position: 'relative', borderRadius: '16px', overflow: 'hidden', border: `1px solid ${MONO.borderSoft}`, bgcolor: '#6f6f6f' }}>
                <Typography sx={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,.4)', fontSize: 11, fontWeight: 500, letterSpacing: '.06em', textTransform: 'uppercase' }}>
                  Case study visual
                </Typography>
                <Box sx={{ position: 'absolute', left: 0, right: 0, bottom: 0, p: 2, bgcolor: 'rgba(0,0,0,.65)' }}>
                  <Typography sx={{ color: '#fff', fontFamily: FONT_BRAND, fontSize: { xs: 20, md: 22 }, fontWeight: 500, lineHeight: 1.05 }}>
                    Seamless operations
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
            {/* Top row — 3 stat cards */}
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 1.5 }}>
              {featureTopCards.map(card => (
                <Box
                  key={card.title}
                  className="flat-card"
                  sx={{
                    borderRadius: '16px',
                    border: `1px solid ${MONO.borderSoft}`,
                    bgcolor: MONO.surface,
                    p: 2.5,
                    minHeight: 220,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box
                    sx={{
                      width: 72,
                      height: 72,
                      borderRadius: '50%',
                      border: `1px solid ${MONO.border}`,
                      bgcolor: '#fafafa',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#111',
                      fontSize: 16,
                      fontWeight: 600,
                    }}
                  >
                    {card.stat}
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: { xs: 22, md: 26 }, lineHeight: 1.05, fontFamily: FONT_BRAND, fontWeight: 500, mb: 0.5, color: '#111' }}>
                      {card.title}
                    </Typography>
                    <Typography sx={{ color: MONO.muted, lineHeight: 1.5, fontSize: 14, fontWeight: 400 }}>
                      {card.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            {/* Bottom row — 2 wider cards */}
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 1.5 }}>
              {featureBottomCards.map(card => (
                <Box
                  key={card.title}
                  className="flat-card"
                  sx={{
                    borderRadius: '16px',
                    border: `1px solid ${MONO.borderSoft}`,
                    bgcolor: MONO.surface,
                    minHeight: 220,
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                    overflow: 'hidden',
                  }}
                >
                  <Box sx={{ p: 2.5, borderRight: { md: `1px solid ${MONO.borderSoft}` }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography sx={{ fontSize: { xs: 24, md: 28 }, lineHeight: 1.05, fontFamily: FONT_BRAND, fontWeight: 500, mb: 0.5, color: '#111' }}>
                      {card.title}
                    </Typography>
                    <Typography sx={{ color: MONO.muted, lineHeight: 1.5, fontSize: 14, fontWeight: 400 }}>
                      {card.description}
                    </Typography>
                  </Box>
                  <Box sx={{ p: 1.5, display: 'flex', alignItems: 'stretch' }}>
                    <MediaSlot label={card.mediaLabel} minHeight={180} />
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
                  border: `1px solid ${MONO.borderSoft}`,
                  bgcolor: MONO.surface,
                  p: 2,
                  minHeight: 180,
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'border-color 0.25s ease',
                  '&:hover': { borderColor: '#111' },
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
