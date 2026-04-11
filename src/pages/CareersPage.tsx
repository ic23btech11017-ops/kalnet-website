import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material'
import type { FormEvent } from 'react'
import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import SiteFooter from '../components/navigation/SiteFooter'
import SiteHeader from '../components/navigation/SiteHeader'

const FONT_BRAND = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"

const MONO = {
  page: '#f5f5f5',
  pageGrey: '#ebebeb',
  surface: '#ffffff',
  surfaceSoft: '#f4f4f4',
  text: '#111111',
  muted: 'rgba(17,17,17,.55)',
  mutedStrong: 'rgba(17,17,17,.72)',
  border: 'rgba(17,17,17,.10)',
  accent: '#D6E6FF',
  accentHover: '#C2D9FF',
  accentText: '#111',
}

const ABOUT_MAX = 1000

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

const whyHere = [
  {
    title: 'High-impact work',
    body: 'Build enterprise software used across education, healthcare, government, and commercial teams.',
  },
  {
    title: 'Collaborative culture',
    body: 'Ideas over hierarchy, feedback over ego, and growth over comfort.',
  },
  {
    title: 'Global exposure',
    body: 'Work with clients and partners across regions and time zones.',
  },
  {
    title: 'Career growth',
    body: 'Mentorship, learning budgets, and clear paths as the company scales.',
  },
]

const positionOptions = [
  { value: '', label: 'Select a position' },
  { value: 'engineering', label: 'Software engineering' },
  { value: 'product-design', label: 'Product and design' },
  { value: 'implementation', label: 'Implementation and customer success' },
  { value: 'sales-partnerships', label: 'Sales and partnerships' },
  { value: 'operations', label: 'Operations' },
  { value: 'other', label: 'Other / general interest' },
]

const experienceOptions = [
  { value: '', label: 'Select level' },
  { value: 'intern-early', label: 'Intern / early career' },
  { value: '1-3', label: '1–3 years' },
  { value: '4-7', label: '4–7 years' },
  { value: '8-plus', label: '8+ years' },
  { value: 'leadership', label: 'Leadership' },
]

function NativeFieldLabel({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <Typography component="label" sx={{ display: 'block', fontSize: 13, fontWeight: 500, mb: 0.75, color: MONO.text }}>
      {children}
      {required ? (
        <Box component="span" sx={{ color: 'rgba(17,17,17,.45)', fontWeight: 400 }}>
          {' '}
          *
        </Box>
      ) : null}
    </Typography>
  )
}

const nativeSelectSx = {
  width: '100%',
  py: 1.35,
  px: 1.5,
  borderRadius: 2,
  border: `1px solid rgba(17,17,17,.12)`,
  bgcolor: '#fff',
  fontSize: 14,
  fontFamily: 'inherit',
  color: MONO.text,
  boxSizing: 'border-box' as const,
  '&:focus': {
    outline: 'none',
    borderColor: '#111',
  },
}

export default function CareersPage() {
  const [sent, setSent] = useState(false)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [position, setPosition] = useState('')
  const [experience, setExperience] = useState('')
  const [location, setLocation] = useState('')
  const [portfolioUrl, setPortfolioUrl] = useState('')
  const [resumeLink, setResumeLink] = useState('')
  const [about, setAbout] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  function resetForm() {
    setSent(false)
    setFullName('')
    setEmail('')
    setPhone('')
    setPosition('')
    setExperience('')
    setLocation('')
    setPortfolioUrl('')
    setResumeLink('')
    setAbout('')
  }

  return (
    <Box data-nav-theme="light" sx={{ bgcolor: MONO.page, color: MONO.text, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SiteHeader />

      <Box component="main" sx={{ flexGrow: 1 }}>
        <Box sx={{ pt: { xs: 16, md: 22 }, pb: { xs: 6, md: 10 } }}>
          <Container maxWidth="lg">
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={8} alignItems="center">
              <Box sx={{ flex: 1, maxWidth: 640 }}>
                <SectionLabel>We&apos;re hiring</SectionLabel>
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
                  Build the future of enterprise tech
                </Typography>
                <Typography sx={{ color: MONO.muted, fontSize: { xs: 15, md: 18 }, lineHeight: 1.65 }}>
                  Kalnet is transforming how education, healthcare, and enterprise organisations operate. If you&apos;re passionate about solving hard problems, we&apos;d love to meet you.
                </Typography>
              </Box>
              <Box sx={{ flex: 1, display: { xs: 'none', md: 'block' } }}>
                <Box
                  component="img"
                  src="/images/undraw_online-resume_z4sp.svg"
                  alt="Kalnet Careers"
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

        <Box sx={{ bgcolor: MONO.pageGrey, py: { xs: 8, md: 12 }, borderTop: `1px solid ${MONO.border}`, borderBottom: `1px solid ${MONO.border}` }}>
          <Container maxWidth="lg">
            <Typography
              component="h2"
              sx={{
                fontFamily: FONT_BRAND,
                fontSize: { xs: 24, md: 32 },
                fontWeight: 500,
                lineHeight: 1.1,
                letterSpacing: '-.02em',
                mb: 1,
              }}
            >
              Why you&apos;ll love working here
            </Typography>
            <Typography sx={{ color: MONO.muted, fontSize: 16, lineHeight: 1.6, maxWidth: 560, mb: { xs: 4, md: 5 } }}>
              Small team, outsized impact — and the problems we tackle are anything but boring.
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 1.5 }}>
              {whyHere.map(item => (
                <Box
                  key={item.title}
                  sx={{
                    borderRadius: 2,
                    border: `1px solid rgba(17,17,17,.12)`,
                    bgcolor: MONO.surface,
                    p: 2.5,
                    transition: 'border-color 0.2s ease',
                    '&:hover': { borderColor: MONO.text },
                  }}
                >
                  <Typography sx={{ fontFamily: FONT_BRAND, fontSize: 18, fontWeight: 500, letterSpacing: '-.01em', mb: 1 }}>{item.title}</Typography>
                  <Typography sx={{ color: MONO.mutedStrong, fontSize: 14, lineHeight: 1.55 }}>{item.body}</Typography>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        <Box sx={{ py: { xs: 8, md: 12 } }}>
          <Container maxWidth="md">
            <SectionLabel>Apply now</SectionLabel>
            <Typography sx={{ fontFamily: FONT_BRAND, fontSize: { xs: 24, md: 30 }, fontWeight: 500, letterSpacing: '-.02em', mb: 1 }}>
              Tell us about yourself
            </Typography>
            <Typography sx={{ color: MONO.muted, fontSize: 16, lineHeight: 1.6, mb: 4 }}>
              We&apos;ll reach out when a matching role opens up. You can also{' '}
              <Typography component={RouterLink} to="/contact" sx={{ color: MONO.text, fontWeight: 600, textDecoration: 'none', borderBottom: '1px solid rgba(17,17,17,.35)' }}>
                contact us
              </Typography>{' '}
              for general questions.
            </Typography>

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
              {sent ? (
                <Box sx={{ py: 1 }}>
                  <Typography sx={{ fontFamily: FONT_BRAND, fontSize: { xs: 20, md: 22 }, fontWeight: 500, mb: 1.5 }}>
                    Application received
                  </Typography>
                  <Typography sx={{ color: MONO.muted, fontSize: 15, lineHeight: 1.65, mb: 2 }}>
                    This preview does not submit to a server yet. Please email{' '}
                    <Box component="span" sx={{ fontWeight: 600, color: MONO.text }}>
                      careers@kalnet.co
                    </Box>{' '}
                    with your CV or share the same details there.
                  </Typography>
                  <Button
                    type="button"
                    variant="outlined"
                    onClick={resetForm}
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
                    Submit another application
                  </Button>
                </Box>
              ) : (
                <Stack spacing={2.2}>
                  <TextField
                    required
                    label="Full name"
                    name="fullName"
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    fullWidth
                    sx={fieldSx}
                  />
                  <TextField
                    required
                    type="email"
                    label="Email address"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    fullWidth
                    sx={fieldSx}
                  />
                  <TextField
                    required
                    type="tel"
                    label="Phone number"
                    name="phone"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    fullWidth
                    sx={fieldSx}
                  />

                  <Box>
                    <NativeFieldLabel required>Position of interest</NativeFieldLabel>
                    <Box
                      component="select"
                      required
                      name="position"
                      value={position}
                      onChange={e => setPosition(e.target.value)}
                      sx={nativeSelectSx}
                    >
                      {positionOptions.map(opt => (
                        <option key={opt.value || 'empty'} value={opt.value} disabled={opt.value === ''}>
                          {opt.label}
                        </option>
                      ))}
                    </Box>
                  </Box>

                  <Box>
                    <NativeFieldLabel required>Experience level</NativeFieldLabel>
                    <Box
                      component="select"
                      required
                      name="experience"
                      value={experience}
                      onChange={e => setExperience(e.target.value)}
                      sx={nativeSelectSx}
                    >
                      {experienceOptions.map(opt => (
                        <option key={opt.value || 'empty'} value={opt.value} disabled={opt.value === ''}>
                          {opt.label}
                        </option>
                      ))}
                    </Box>
                  </Box>

                  <TextField label="Current location" name="location" value={location} onChange={e => setLocation(e.target.value)} fullWidth sx={fieldSx} />
                  <TextField
                    label="LinkedIn / portfolio URL"
                    name="portfolioUrl"
                    value={portfolioUrl}
                    onChange={e => setPortfolioUrl(e.target.value)}
                    fullWidth
                    sx={fieldSx}
                  />
                  <TextField
                    required
                    label="Resume Google Drive link"
                    name="resumeLink"
                    value={resumeLink}
                    onChange={e => setResumeLink(e.target.value)}
                    placeholder="https://drive.google.com/..."
                    fullWidth
                    sx={fieldSx}
                  />

                  <Box>
                    <TextField
                      label="About yourself"
                      name="about"
                      value={about}
                      onChange={e => setAbout(e.target.value.slice(0, ABOUT_MAX))}
                      multiline
                      minRows={5}
                      fullWidth
                      sx={fieldSx}
                      inputProps={{ maxLength: ABOUT_MAX }}
                    />
                    <Typography sx={{ fontSize: 12, color: 'rgba(17,17,17,.45)', mt: 0.75, textAlign: 'right' }}>
                      {about.length} / {ABOUT_MAX}
                    </Typography>
                  </Box>

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
                    Submit application
                  </Button>
                  <Typography sx={{ fontSize: 12, color: 'rgba(17,17,17,.4)', lineHeight: 1.5 }}>
                    Fields marked * are required. Your data is kept confidential.
                  </Typography>
                </Stack>
              )}
            </Box>
          </Container>
        </Box>

        <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: MONO.surfaceSoft, borderTop: `1px solid ${MONO.border}` }}>
          <Container maxWidth="md">
            <Typography sx={{ fontSize: 14, color: MONO.muted, lineHeight: 1.65, textAlign: 'center' }}>
              We hire on a rolling basis across product, engineering, and customer-facing roles. No suitable opening today? We still read every application.
            </Typography>
          </Container>
        </Box>
      </Box>

      <SiteFooter />
    </Box>
  )
}
