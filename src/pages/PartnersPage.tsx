import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import SiteFooter from '../components/navigation/SiteFooter'
import SiteHeader from '../components/navigation/SiteHeader'

const FONT_BRAND = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"

const PARTNER_REGISTER = 'https://www.kalnet.co/partner-register'
const PARTNER_PORTAL = 'https://www.kalnet.co/partner-portal'

const MONO = {
  page: '#f5f5f5',
  pageGrey: '#ebebeb',
  pageGreyDeep: '#e2e2e2',
  surface: '#ffffff',
  surfaceSoft: '#f4f4f4',
  text: '#111111',
  muted: 'rgba(17,17,17,.55)',
  mutedStrong: 'rgba(17,17,17,.72)',
  border: 'rgba(17,17,17,.10)',
  borderSoft: 'rgba(17,17,17,.07)',
  accent: '#D6E6FF',
  accentHover: '#C2D9FF',
  accentText: '#111',
}

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

const whyPartner = [
  {
    title: 'Attractive margins',
    body: 'Earn competitive commissions (5–15%) and recurring revenue with flexible pricing and partner incentives.',
  },
  {
    title: 'Market-leading product',
    body: 'Offer AI-powered solutions across 15+ industries with proven ROI and strong customer satisfaction.',
  },
  {
    title: 'Dedicated support',
    body: 'Technical experts, sales enablement, and marketing resources focused on your success.',
  },
  {
    title: 'Sales enablement',
    body: 'Training, demo environments, and co-marketing to help you close faster.',
  },
  {
    title: 'Protected territories',
    body: 'Geographic or vertical exclusivity where agreed, so you can invest with confidence.',
  },
  {
    title: 'Pan-India presence',
    body: 'Build on Kalnet’s reputation and expand reach with an established enterprise brand.',
  },
]

const tiers: Array<{
  name: string
  tagline: string
  highlight?: boolean
  bullets: string[]
}> = [
  {
    name: 'Starter',
    tagline: 'Ideal for getting started',
    bullets: [
      '15% commission on sales',
      'Sales volume: ₹0 – ₹2 Lakh',
      'Access to product demos',
      'Email support',
      'Marketing collateral',
      'Partner portal access',
      'Quarterly business reviews',
    ],
  },
  {
    name: 'Growth',
    tagline: 'Best for growing businesses',
    highlight: true,
    bullets: [
      '10% commission on sales',
      'Sales volume: ₹2 – ₹10 Lakh',
      'Dedicated account manager',
      'Priority support (24/7)',
      'Co-marketing campaigns',
      'Lead generation support',
      'Technical training and certification',
      'Protected territory rights',
      'NFR (Not For Resale) licenses',
    ],
  },
  {
    name: 'Enterprise',
    tagline: 'For high-volume partners',
    bullets: [
      '5% commission on sales',
      'Sales volume: ₹10 – ₹50+ Lakh',
      'Executive sponsor relationship',
      'White-label opportunities',
      'Custom integration support',
      'Exclusive market access',
      'Revenue share on renewals',
      'Joint solution development',
      'Strategic planning sessions',
    ],
  },
]

const steps = [
  {
    step: '01',
    title: 'Apply',
    body: 'Submit your application with business details, target markets, and partnership goals.',
  },
  {
    step: '02',
    title: 'Get approved',
    body: 'Our team reviews your application and schedules an onboarding call within 48 hours.',
  },
  {
    step: '03',
    title: 'Training and certification',
    body: 'Complete partner training and get certified on Kalnet solutions.',
  },
  {
    step: '04',
    title: 'Start selling',
    body: 'Use the partner portal, marketing resources, and full technical support to close deals.',
  },
]

const resources = [
  { title: 'Training and certification', body: 'Online and in-person programs with official certification.' },
  { title: 'Sales collateral', body: 'Presentations, brochures, case studies, and proposal templates.' },
  { title: 'Marketing support', body: 'Co-branded campaigns, digital assets, and MDF where applicable.' },
  { title: 'Technical support', body: '24/7 assistance, dedicated channels, and pre-sales engineering.' },
  { title: 'Partner portal', body: 'Deal registration, tracking, commission reports, and learning paths.' },
  { title: 'Sales enablement', body: 'Demo environments, POC support, and competitive positioning.' },
  { title: 'Partner community', body: 'Events, forums, and best-practice sharing with other partners.' },
  { title: 'Innovation access', body: 'Early features, betas, and visibility into the product roadmap.' },
]

export default function PartnersPage() {
  return (
    <Box data-nav-theme="light" sx={{ bgcolor: MONO.page, color: MONO.text, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SiteHeader />

      <Box component="main" sx={{ flexGrow: 1 }}>
        {/* Hero */}
        <Box sx={{ pt: { xs: 16, md: 22 }, pb: { xs: 8, md: 12 } }}>
          <Container maxWidth="lg">
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={8} alignItems="center">
              <Box sx={{ flex: 1, maxWidth: 640 }}>
                <SectionLabel>Partner program</SectionLabel>
                <Typography
                  component="h1"
                  sx={{
                    fontFamily: FONT_BRAND,
                    fontSize: { xs: 34, md: 52 },
                    fontWeight: 500,
                    lineHeight: 1.05,
                    letterSpacing: '-.03em',
                    mb: 2.5,
                  }}
                >
                  Grow together with Kalnet partnership
                </Typography>
                <Typography sx={{ color: MONO.muted, fontSize: { xs: 15, md: 18 }, lineHeight: 1.65, mb: 4 }}>
                  Join a growing ERP and operating-system ecosystem. Empower your clients with solutions across 15+ industries and unlock new revenue streams.
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.2} sx={{ flexWrap: 'wrap' }}>
                  <Button
                    component="a"
                    href={PARTNER_REGISTER}
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
                      border: '1px solid transparent',
                      '&:hover': { bgcolor: MONO.accentHover, boxShadow: 'none', borderColor: '#111' },
                    }}
                  >
                    Become a partner
                  </Button>
                  <Button
                    component="a"
                    href={PARTNER_PORTAL}
                    variant="outlined"
                    sx={{
                      borderColor: MONO.text,
                      color: MONO.text,
                      borderRadius: '999px',
                      px: 3.5,
                      py: 1.2,
                      fontWeight: 600,
                      fontSize: 14,
                      textTransform: 'none',
                      bgcolor: MONO.surface,
                      '&:hover': { borderColor: '#111', bgcolor: MONO.surfaceSoft },
                    }}
                  >
                    Already a partner?
                  </Button>
                </Stack>
              </Box>
              <Box sx={{ flex: 1, display: { xs: 'none', md: 'block' } }}>
                <Box
                  component="img"
                  src="/images/undraw_handshake-deal_nwk6.svg"
                  alt="Kalnet Partnership"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: 500,
                    display: 'block',
                    margin: '0 auto',
                  }}
                />
              </Box>
            </Stack>
          </Container>
        </Box>

        {/* Why partner — grey band */}
        <Box sx={{ bgcolor: MONO.pageGrey, py: { xs: 8, md: 12 }, borderTop: `1px solid ${MONO.border}`, borderBottom: `1px solid ${MONO.border}` }}>
          <Container maxWidth="lg">
            <SectionLabel>Why partner with us</SectionLabel>
            <Typography
              sx={{
                fontFamily: FONT_BRAND,
                fontSize: { xs: 26, md: 36 },
                fontWeight: 500,
                lineHeight: 1.1,
                letterSpacing: '-.02em',
                mb: 1,
                maxWidth: 560,
              }}
            >
              Unlock unlimited potential
            </Typography>
            <Typography sx={{ color: MONO.muted, fontSize: 16, lineHeight: 1.6, maxWidth: 560, mb: { xs: 4, md: 5 } }}>
              World-class technology, dedicated support, and programs built for long-term growth.
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 1.5 }}>
              {whyPartner.map(item => (
                <Box
                  key={item.title}
                  sx={{
                    borderRadius: 2,
                    border: `1px solid rgba(17,17,17,.12)`,
                    bgcolor: MONO.surface,
                    p: 2.5,
                    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                    '&:hover': { borderColor: MONO.text, boxShadow: '0 1px 0 #111' },
                  }}
                >
                  <Typography sx={{ fontFamily: FONT_BRAND, fontSize: 18, fontWeight: 500, letterSpacing: '-.01em', mb: 1 }}>{item.title}</Typography>
                  <Typography sx={{ color: MONO.mutedStrong, fontSize: 14, lineHeight: 1.55 }}>{item.body}</Typography>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* Tiers */}
        <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: MONO.page }}>
          <Container maxWidth="lg">
            <SectionLabel>Partnership tiers</SectionLabel>
            <Typography
              sx={{
                fontFamily: FONT_BRAND,
                fontSize: { xs: 26, md: 36 },
                fontWeight: 500,
                lineHeight: 1.1,
                letterSpacing: '-.02em',
                mb: 1,
              }}
            >
              Choose your partnership level
            </Typography>
            <Typography sx={{ color: MONO.muted, fontSize: 16, lineHeight: 1.6, maxWidth: 560, mb: { xs: 4, md: 5 } }}>
              Select the tier that matches your goals and volume. Upgrade as you grow.
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 1.5, alignItems: 'stretch' }}>
              {tiers.map(tier => (
                <Box
                  key={tier.name}
                  className="tier-card"
                  sx={{
                    position: 'relative',
                    borderRadius: 2,
                    bgcolor: MONO.surfaceSoft,
                    border: '2px solid rgba(17,17,17,.1)',
                    p: { xs: 2.5, md: 3 },
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease',
                    '&:hover': {
                      borderColor: MONO.text,
                      bgcolor: MONO.surface,
                      boxShadow: '0 8px 28px rgba(17,17,17,.08)',
                    },
                    '&:hover .tier-cta': {
                      bgcolor: MONO.accent,
                      color: MONO.accentText,
                      borderColor: 'transparent',
                    },
                    '&:hover .tier-cta:hover': {
                      bgcolor: MONO.accentHover,
                      borderColor: '#111',
                    },
                  }}
                >
                  {tier.highlight ? (
                    <Typography
                      className="tier-popular-badge"
                      sx={{
                        position: 'absolute',
                        top: 12,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: '.12em',
                        textTransform: 'uppercase',
                        color: 'rgba(17,17,17,.45)',
                        bgcolor: 'rgba(17,17,17,.06)',
                        px: 1.5,
                        py: 0.4,
                        borderRadius: 1,
                        transition: 'color 0.2s ease, background-color 0.2s ease',
                        '.tier-card:hover &': {
                          color: MONO.text,
                          bgcolor: MONO.pageGreyDeep,
                        },
                      }}
                    >
                      Most popular
                    </Typography>
                  ) : null}
                  <Typography
                    sx={{
                      fontFamily: FONT_BRAND,
                      fontSize: { xs: 22, md: 24 },
                      fontWeight: 500,
                      mb: 0.5,
                      mt: tier.highlight ? 2.5 : 0,
                    }}
                  >
                    {tier.name}
                  </Typography>
                  <Typography sx={{ color: MONO.muted, fontSize: 14, mb: 2 }}>{tier.tagline}</Typography>
                  <Box component="ul" sx={{ m: 0, pl: 2.2, flexGrow: 1 }}>
                    {tier.bullets.map(line => (
                      <Typography key={line} component="li" sx={{ color: MONO.mutedStrong, fontSize: 14, lineHeight: 1.55, mb: 0.8 }}>
                        {line}
                      </Typography>
                    ))}
                  </Box>
                  <Button
                    component="a"
                    href={PARTNER_REGISTER}
                    className="tier-cta"
                    fullWidth
                    sx={{
                      mt: 3,
                      borderRadius: '999px',
                      py: 1.25,
                      fontWeight: 600,
                      fontSize: 14,
                      textTransform: 'none',
                      boxShadow: 'none',
                      border: '1px solid transparent',
                      bgcolor: MONO.text,
                      color: '#fff',
                      transition: 'background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease',
                      '&:hover': { bgcolor: '#2a2a2a' },
                    }}
                  >
                    Get started
                  </Button>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* How it works — grey */}
        <Box sx={{ bgcolor: MONO.pageGreyDeep, py: { xs: 8, md: 12 } }}>
          <Container maxWidth="lg">
            <SectionLabel>How it works</SectionLabel>
            <Typography
              sx={{
                fontFamily: FONT_BRAND,
                fontSize: { xs: 26, md: 36 },
                fontWeight: 500,
                lineHeight: 1.1,
                letterSpacing: '-.02em',
                mb: 1,
              }}
            >
              Simple onboarding
            </Typography>
            <Typography sx={{ color: MONO.muted, fontSize: 16, lineHeight: 1.6, maxWidth: 560, mb: { xs: 4, md: 5 } }}>
              Four steps from application to selling—with support at every stage.
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 1.5 }}>
              {steps.map(s => (
                <Box
                  key={s.step}
                  sx={{
                    borderRadius: 2,
                    border: `1px solid ${MONO.text}`,
                    bgcolor: MONO.surface,
                    p: 2.5,
                  }}
                >
                  <Typography sx={{ fontSize: 11, fontWeight: 600, letterSpacing: '.14em', color: 'rgba(17,17,17,.4)', mb: 1 }}>
                    Step {s.step}
                  </Typography>
                  <Typography sx={{ fontFamily: FONT_BRAND, fontSize: 18, fontWeight: 500, mb: 1 }}>{s.title}</Typography>
                  <Typography sx={{ color: MONO.mutedStrong, fontSize: 14, lineHeight: 1.55 }}>{s.body}</Typography>
                </Box>
              ))}
            </Box>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.2} justifyContent="center" alignItems="center" sx={{ mt: { xs: 5, md: 6 } }}>
              <Button
                component="a"
                href={PARTNER_REGISTER}
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
                  border: '1px solid transparent',
                  '&:hover': { bgcolor: MONO.accentHover, boxShadow: 'none', borderColor: '#111' },
                }}
              >
                Apply now
              </Button>
              <Button
                component={RouterLink}
                to="/contact"
                variant="outlined"
                sx={{
                  borderColor: MONO.text,
                  color: MONO.text,
                  borderRadius: '999px',
                  px: 3.5,
                  py: 1.2,
                  fontWeight: 600,
                  fontSize: 14,
                  textTransform: 'none',
                  bgcolor: MONO.surface,
                  '&:hover': { borderColor: '#111', bgcolor: MONO.surface },
                }}
              >
                Schedule a call
              </Button>
            </Stack>
          </Container>
        </Box>

        {/* Resources */}
        <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: MONO.page }}>
          <Container maxWidth="lg">
            <SectionLabel>Partner resources</SectionLabel>
            <Typography
              sx={{
                fontFamily: FONT_BRAND,
                fontSize: { xs: 26, md: 36 },
                fontWeight: 500,
                lineHeight: 1.1,
                letterSpacing: '-.02em',
                mb: 1,
              }}
            >
              Everything you need to succeed
            </Typography>
            <Typography sx={{ color: MONO.muted, fontSize: 16, lineHeight: 1.6, maxWidth: 560, mb: { xs: 4, md: 5 } }}>
              Training, collateral, and programs designed for partner-led growth.
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 1.5 }}>
              {resources.map(r => (
                <Box
                  key={r.title}
                  sx={{
                    borderRadius: 2,
                    border: `1px solid rgba(17,17,17,.1)`,
                    bgcolor: MONO.surfaceSoft,
                    p: 2,
                    transition: 'border-color 0.2s ease',
                    '&:hover': { borderColor: MONO.text },
                  }}
                >
                  <Typography sx={{ fontFamily: FONT_BRAND, fontSize: 16, fontWeight: 500, mb: 0.8 }}>{r.title}</Typography>
                  <Typography sx={{ color: MONO.muted, fontSize: 13, lineHeight: 1.5 }}>{r.body}</Typography>
                </Box>
              ))}
            </Box>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.2} justifyContent="center" alignItems="center" sx={{ mt: { xs: 5, md: 6 } }}>
              <Button
                component="a"
                href={PARTNER_REGISTER}
                variant="contained"
                sx={{
                  bgcolor: MONO.text,
                  color: '#fff',
                  borderRadius: '999px',
                  px: 3.5,
                  py: 1.2,
                  fontWeight: 600,
                  fontSize: 14,
                  textTransform: 'none',
                  boxShadow: 'none',
                  '&:hover': { bgcolor: '#2a2a2a', boxShadow: 'none' },
                }}
              >
                Get started
              </Button>
              <Button
                component="a"
                href={PARTNER_PORTAL}
                variant="outlined"
                sx={{
                  borderColor: MONO.text,
                  color: MONO.text,
                  borderRadius: '999px',
                  px: 3.5,
                  py: 1.2,
                  fontWeight: 600,
                  fontSize: 14,
                  textTransform: 'none',
                  bgcolor: MONO.surface,
                  '&:hover': { borderColor: '#111', bgcolor: MONO.surfaceSoft },
                }}
              >
                Partner portal
              </Button>
            </Stack>
          </Container>
        </Box>

        {/* Final CTA */}
        <Box sx={{ py: { xs: 10, md: 14 }, bgcolor: MONO.pageGrey, borderTop: `1px solid ${MONO.border}` }}>
          <Container maxWidth="md">
            <Typography sx={{ fontSize: 12, fontWeight: 500, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(17,17,17,.38)', mb: 2, textAlign: 'center' }}>
              Limited-time offer
            </Typography>
            <Typography
              component="h2"
              sx={{
                fontFamily: FONT_BRAND,
                fontSize: { xs: 28, md: 40 },
                fontWeight: 500,
                lineHeight: 1.1,
                letterSpacing: '-.02em',
                textAlign: 'center',
                mb: 2,
              }}
            >
              Ready to accelerate your growth?
            </Typography>
            <Typography sx={{ color: MONO.muted, fontSize: 16, lineHeight: 1.65, textAlign: 'center', maxWidth: 560, mx: 'auto', mb: 4 }}>
              Join Kalnet’s partner ecosystem. Early benefits can include waived onboarding fees, priority territory selection, and dedicated account management—subject to program terms.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.2} justifyContent="center" alignItems="center">
              <Button
                component="a"
                href={PARTNER_REGISTER}
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
                  border: '1px solid transparent',
                  '&:hover': { bgcolor: MONO.accentHover, boxShadow: 'none', borderColor: '#111' },
                }}
              >
                Apply now — it’s free
              </Button>
              <Button
                component={RouterLink}
                to="/contact"
                variant="outlined"
                sx={{
                  borderColor: MONO.text,
                  color: MONO.text,
                  borderRadius: '999px',
                  px: 3.5,
                  py: 1.2,
                  fontWeight: 600,
                  fontSize: 14,
                  textTransform: 'none',
                  bgcolor: MONO.surface,
                  '&:hover': { borderColor: '#111', bgcolor: MONO.surface },
                }}
              >
                Schedule a call
              </Button>
            </Stack>
          </Container>
        </Box>
      </Box>

      <SiteFooter />
    </Box>
  )
}
