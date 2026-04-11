import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material'
import type { FormEvent } from 'react'
import { useState } from 'react'
import SiteFooter from '../components/navigation/SiteFooter'
import SiteHeader from '../components/navigation/SiteHeader'

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
  darkMuted: 'rgba(255,255,255,.6)',
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

const fieldSx = {
  '& .MuiOutlinedInput-root': {
    borderRadius: 2,
    bgcolor: '#fff',
    fontSize: 14,
    '& fieldset': { borderColor: MONO.border },
    '&:hover fieldset': { borderColor: 'rgba(17,17,17,.22)' },
    '&.Mui-focused fieldset': { borderColor: '#111' },
  },
  '& .MuiInputLabel-root': { fontSize: 13 },
}

const highlights = [
  {
    title: 'Discovery session',
    description: 'Discuss process gaps, goals, and expected outcomes with our solution team.',
  },
  {
    title: 'Implementation blueprint',
    description: 'Receive a practical rollout structure with modules and milestones.',
  },
  {
    title: 'Ongoing support',
    description: 'Plan onboarding and post-launch optimization for your team and stakeholders.',
  },
]

const stats = [
  { label: 'Response time', value: '< 24h' },
  { label: 'Onboarding support', value: 'Included' },
  { label: 'Consultation mode', value: 'Remote' },
  { label: 'Coverage', value: 'Global' },
]

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [topic, setTopic] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <Box data-nav-theme="light" sx={{ bgcolor: MONO.page, color: MONO.text, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SiteHeader />

      <Box component="main" sx={{ flexGrow: 1, pt: { xs: 16, md: 22 }, pb: { xs: 8, md: 14 } }}>
        <Container maxWidth="lg">
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={8} alignItems="center" sx={{ mb: { xs: 5, md: 7 } }}>
            <Box sx={{ flex: 1, maxWidth: 640 }}>
              <SectionLabel>Let&apos;s talk</SectionLabel>
              <Typography
                component="h1"
                sx={{
                  fontFamily: FONT_BRAND,
                  fontSize: { xs: 36, md: 52 },
                  fontWeight: 500,
                  lineHeight: 1.05,
                  letterSpacing: '-.03em',
                  mb: 2,
                }}
              >
                Contact
              </Typography>
              <Typography sx={{ color: MONO.muted, fontSize: { xs: 15, md: 17 }, lineHeight: 1.65 }}>
                Share your business goals and we will map the right CRM and ERP architecture for your workflows.
              </Typography>
            </Box>
            <Box sx={{ flex: 1, display: { xs: 'none', md: 'block' } }}>
              <Box
                component="img"
                src="/images/undraw_contact-us_kcoa.svg"
                alt="Contact Kalnet"
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

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1fr) minmax(0, 1.1fr)' },
              gap: { xs: 3, md: 4 },
              alignItems: 'start',
            }}
          >
            <Stack spacing={3}>
              <Box
                sx={{
                  borderRadius: 2,
                  border: `1px solid ${MONO.borderSoft}`,
                  bgcolor: MONO.surface,
                  p: { xs: 2.5, md: 3 },
                  transition: 'border-color 0.2s ease',
                  '&:hover': { borderColor: 'rgba(17,17,17,.18)' },
                }}
              >
                <Typography sx={{ fontSize: 11, fontWeight: 500, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(17,17,17,.38)', mb: 2 }}>
                  Direct
                </Typography>
                <Typography sx={{ fontFamily: FONT_BRAND, fontSize: { xs: 20, md: 22 }, fontWeight: 500, letterSpacing: '-.02em', mb: 1.5 }}>
                  sales@kalnet.co
                </Typography>
                <Typography sx={{ fontSize: 14, color: MONO.muted, lineHeight: 1.6, mb: 2 }}>
                  For demos, pricing, and product questions. We typically reply within one business day.
                </Typography>
                <Typography
                  component="a"
                  href="mailto:sales@kalnet.co"
                  sx={{
                    display: 'inline-block',
                    fontSize: 14,
                    fontWeight: 600,
                    color: MONO.text,
                    textDecoration: 'none',
                    borderBottom: '1px solid rgba(17,17,17,.35)',
                    pb: 0.2,
                    width: 'fit-content',
                    '&:hover': { borderBottomColor: '#111' },
                  }}
                >
                  Send an email
                </Typography>
              </Box>

              <Box
                sx={{
                  borderRadius: 2,
                  border: `1px solid ${MONO.borderSoft}`,
                  bgcolor: MONO.surfaceSoft,
                  p: { xs: 2.5, md: 3 },
                }}
              >
                <Typography sx={{ fontSize: 11, fontWeight: 500, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(17,17,17,.38)', mb: 1.5 }}>
                  Office
                </Typography>
                <Typography sx={{ fontSize: 14, color: MONO.muted, lineHeight: 1.65 }}>
                  KALNET Solutions Pvt. Ltd.
                  <br />
                  India — remote-first team, global delivery.
                </Typography>
              </Box>
            </Stack>

            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                borderRadius: 2,
                border: `1px solid ${MONO.text}`,
                bgcolor: MONO.surface,
                p: { xs: 2.5, md: 3.5 },
              }}
            >
              <Typography sx={{ fontSize: 11, fontWeight: 500, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(17,17,17,.38)', mb: 2.5 }}>
                Message
              </Typography>

              {sent ? (
                <Box sx={{ py: 2 }}>
                  <Typography sx={{ fontFamily: FONT_BRAND, fontSize: { xs: 20, md: 22 }, fontWeight: 500, mb: 1.5 }}>
                    Thank you
                  </Typography>
                  <Typography sx={{ color: MONO.muted, fontSize: 15, lineHeight: 1.65, mb: 2 }}>
                    This site preview does not send mail yet. Please reach out at{' '}
                    <Box component="span" sx={{ color: MONO.text, fontWeight: 600 }}>
                      sales@kalnet.co
                    </Box>{' '}
                    so we can continue the conversation.
                  </Typography>
                  <Button
                    type="button"
                    variant="outlined"
                    onClick={() => {
                      setSent(false)
                      setName('')
                      setEmail('')
                      setCompany('')
                      setTopic('')
                      setMessage('')
                    }}
                    sx={{
                      borderColor: MONO.border,
                      color: MONO.text,
                      borderRadius: '999px',
                      textTransform: 'none',
                      fontWeight: 600,
                      fontSize: 13,
                      px: 2.5,
                      '&:hover': { borderColor: '#111', bgcolor: 'rgba(17,17,17,.02)' },
                    }}
                  >
                    Send another message
                  </Button>
                </Box>
              ) : (
                <Stack spacing={2.2}>
                  <TextField
                    required
                    label="Full name"
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    fullWidth
                    sx={fieldSx}
                  />
                  <TextField
                    required
                    type="email"
                    label="Work email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    fullWidth
                    sx={fieldSx}
                  />
                  <TextField label="Company" name="company" value={company} onChange={e => setCompany(e.target.value)} fullWidth sx={fieldSx} />
                  <TextField
                    label="What do you need?"
                    name="topic"
                    value={topic}
                    onChange={e => setTopic(e.target.value)}
                    placeholder="Demo, pricing, partnership, support…"
                    fullWidth
                    sx={fieldSx}
                  />
                  <TextField
                    label="Details"
                    name="message"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    multiline
                    minRows={4}
                    fullWidth
                    sx={fieldSx}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      alignSelf: { xs: 'stretch', sm: 'flex-start' },
                      bgcolor: MONO.accent,
                      color: MONO.accentText,
                      borderRadius: '999px',
                      px: 3.5,
                      py: 1.2,
                      fontWeight: 600,
                      fontSize: 13,
                      textTransform: 'none',
                      boxShadow: 'none',
                      border: '1px solid transparent',
                      '&:hover': { bgcolor: MONO.accentHover, boxShadow: 'none', borderColor: '#111' },
                    }}
                  >
                    Submit
                  </Button>
                  <Typography sx={{ fontSize: 12, color: 'rgba(17,17,17,.4)', lineHeight: 1.5 }}>
                    By submitting, you agree we may contact you about Kalnet products and services. You can unsubscribe at any time.
                  </Typography>
                </Stack>
              )}
            </Box>
          </Box>

          <Box sx={{ mt: { xs: 8, md: 12 } }}>
            <SectionLabel>What you get</SectionLabel>
            <Typography
              sx={{
                fontFamily: FONT_BRAND,
                fontSize: { xs: 24, md: 32 },
                fontWeight: 500,
                lineHeight: 1.1,
                letterSpacing: '-.02em',
                mb: 3,
                maxWidth: 520,
              }}
            >
              A clear next step after we hear from you
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 1.5 }}>
              {highlights.map(item => (
                <Box
                  key={item.title}
                  sx={{
                    borderRadius: 2,
                    border: `1px solid ${MONO.borderSoft}`,
                    bgcolor: MONO.surface,
                    p: 2.5,
                    transition: 'border-color 0.25s ease',
                    '&:hover': { borderColor: '#111' },
                  }}
                >
                  <Typography sx={{ fontFamily: FONT_BRAND, fontSize: 18, fontWeight: 500, mb: 1, letterSpacing: '-.01em' }}>{item.title}</Typography>
                  <Typography sx={{ color: MONO.muted, fontSize: 14, lineHeight: 1.55 }}>{item.description}</Typography>
                </Box>
              ))}
            </Box>
          </Box>

          <Box
            data-nav-theme="dark"
            sx={{
              mt: { xs: 8, md: 12 },
              borderRadius: 2,
              border: '1px solid rgba(255,255,255,.08)',
              bgcolor: MONO.dark,
              p: { xs: 3, md: 4 },
            }}
          >
            <Typography sx={{ fontSize: 12, fontWeight: 500, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,.38)', mb: 2 }}>
              At a glance
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
                gap: { xs: 2, md: 3 },
              }}
            >
              {stats.map((row, i) => (
                <Box
                  key={row.label}
                  sx={{
                    borderTop: i < 2 ? 'none' : { xs: '1px solid rgba(255,255,255,.1)', md: 'none' },
                    pt: i < 2 ? 0 : { xs: 2, md: 0 },
                    borderLeft: { md: i === 0 ? 'none' : '1px solid rgba(255,255,255,.1)' },
                    pl: { md: i === 0 ? 0 : 3 },
                  }}
                >
                  <Typography sx={{ fontFamily: FONT_BRAND, fontSize: { xs: 28, md: 36 }, fontWeight: 500, letterSpacing: '-.03em', color: '#fff', lineHeight: 1 }}>
                    {row.value}
                  </Typography>
                  <Typography sx={{ fontSize: 12, color: MONO.darkMuted, mt: 0.8, letterSpacing: '.04em', textTransform: 'uppercase' }}>{row.label}</Typography>
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
