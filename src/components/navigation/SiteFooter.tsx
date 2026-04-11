import { Box, Container, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { Mail, MapPin } from 'lucide-react'

function FooterHeading({ title, dotColor }: { title: string; dotColor: string }) {
  return (
    <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 3 }}>
      <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: dotColor }} />
      <Typography sx={{ fontSize: 13, fontWeight: 700, letterSpacing: '.05em', color: '#fff' }}>
        {title}
      </Typography>
    </Stack>
  )
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Box>
      <Typography
        component={RouterLink}
        to={to}
        sx={{
          color: 'rgba(255,255,255,0.6)',
          fontSize: 14,
          textDecoration: 'none',
          transition: 'color 0.2s',
          '&:hover': { color: '#fff' },
        }}
      >
        {children}
      </Typography>
    </Box>
  )
}

export default function SiteFooter() {
  return (
    <Box component="footer" sx={{ bgcolor: '#0a0b0e', color: '#fff', pt: { xs: 8, md: 12 }, pb: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '2.5fr 1fr 1fr 1.5fr' },
            gap: { xs: 6, md: 4 },
          }}
        >
          {/* Column 1: Brand */}
          <Box sx={{ pr: { md: 6 } }}>
            <Typography
              sx={{
                fontFamily: "'Chillax', 'Inter', sans-serif",
                fontSize: 32,
                fontWeight: 800,
                color: '#fff',
                letterSpacing: '-.02em',
                lineHeight: 1,
                mb: 2.5,
              }}
            >
              KALNET
            </Typography>
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.5)',
                fontSize: 14,
                lineHeight: 1.6,
                mb: 4,
                maxWidth: 400,
              }}
            >
              Next-generation AI-powered Software platform serving 15+ industries with comprehensive business management solutions.
            </Typography>
            <Stack direction="row" spacing={1.5}>
              {/* Note: the user asked for X, Linkedin, Instagram, Tumblr-like icons. Using lucide replacements */}
              <Box
                component="a"
                href="#"
                target="_blank"
                sx={{
                  width: 36, height: 36, borderRadius: 2, border: '1px solid rgba(255,255,255,0.1)',
                  bgcolor: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.6)', transition: 'all 0.2s',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.08)', color: '#fff' },
                }}
              >
                {/* SVG for X (Twitter) */}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
              </Box>
              <Box
                component="a"
                href="#"
                target="_blank"
                sx={{
                  width: 36, height: 36, borderRadius: 2, border: '1px solid rgba(255,255,255,0.1)',
                  bgcolor: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.6)', transition: 'all 0.2s',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.08)', color: '#fff' },
                }}
              >
                {/* SVG for LinkedIn */}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Box>
              <Box
                component="a"
                href="#"
                target="_blank"
                sx={{
                  width: 36, height: 36, borderRadius: 2, border: '1px solid rgba(255,255,255,0.1)',
                  bgcolor: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.6)', transition: 'all 0.2s',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.08)', color: '#fff' },
                }}
              >
                {/* SVG for Instagram */}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </Box>
              <Box
                component="a"
                href="#"
                target="_blank"
                sx={{
                  width: 36, height: 36, borderRadius: 2, border: '1px solid rgba(255,255,255,0.1)',
                  bgcolor: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.6)', transition: 'all 0.2s',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.08)', color: '#fff' },
                }}
              >
                <Typography sx={{ fontWeight: 'bold', fontSize: 16, pb: 0.3 }}>t</Typography>
              </Box>
            </Stack>
          </Box>

          {/* Column 2: Solutions */}
          <Box>
            <FooterHeading title="SOLUTIONS" dotColor="#3B82F6" />
            <Stack spacing={2}>
              <FooterLink to="/solutions">All Solutions</FooterLink>
              <FooterLink to="/industries">Industries</FooterLink>
            </Stack>
          </Box>

          {/* Column 3: Company */}
          <Box>
            <FooterHeading title="COMPANY" dotColor="#10B981" />
            <Stack spacing={2}>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/partners">Partners</FooterLink>
              <FooterLink to="/careers">Careers</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </Stack>
          </Box>

          {/* Column 4: Resources */}
          <Box>
            <FooterHeading title="RESOURCES" dotColor="#8B5CF6" />
            <Stack spacing={2} sx={{ mb: 4 }}>
              <FooterLink to="/contact">Request Demo</FooterLink>
              <FooterLink to="/privacy">Privacy Policy</FooterLink>
              <FooterLink to="/terms">Terms of Service</FooterLink>
            </Stack>

            <Stack spacing={1.5}>
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <Mail size={16} color="rgba(255,255,255,0.4)" strokeWidth={1.5} />
                <Typography sx={{ fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>
                  hello@kalnet.co
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <MapPin size={16} color="rgba(255,255,255,0.4)" strokeWidth={1.5} />
                <Typography sx={{ fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>
                  Hyderabad, India
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Container>

      {/* Massive KALNET watermark — outlined, full-width */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pt: { xs: 8, md: 10 }, pb: 6, overflow: 'hidden' }}>
        <Typography sx={{
          fontSize: { xs: '28vw', md: '20vw' }, fontWeight: 700,
          color: 'transparent', letterSpacing: '-0.02em',
          fontFamily: "'Chillax', 'Inter', sans-serif", lineHeight: 1, userSelect: 'none',
          WebkitTextStroke: '1.5px rgba(255,255,255,.12)',
          whiteSpace: 'nowrap',
        }}>
          KALNET
        </Typography>
      </Box>

      {/* Bottom bar */}
      <Box sx={{ borderTop: '1px solid rgba(255,255,255,.08)', py: 3 }}>
        <Container maxWidth="lg">
          <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems="center" spacing={2}>
            <Typography sx={{ color: 'rgba(255,255,255,.4)', fontSize: 13 }}>
              &copy; 2026 <Box component="span" sx={{ fontWeight: 700, color: 'rgba(255,255,255,.6)' }}>KALNET Solutions Pvt. Ltd.</Box> All rights reserved.
            </Typography>
            <Stack direction="row" spacing={4}>
              {['Privacy', 'Terms', 'Sitemap'].map(l => (
                <Typography key={l} sx={{ color: 'rgba(255,255,255,.4)', fontSize: 13, cursor: 'pointer', '&:hover': { color: 'rgba(255,255,255,.7)' } }}>{l}</Typography>
              ))}
            </Stack>
            <Typography sx={{ color: 'rgba(255,255,255,.4)', fontSize: 13 }}>Made in India</Typography>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

