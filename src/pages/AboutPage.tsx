import { Box, Container, Typography } from '@mui/material'
import SiteHeader from '../components/navigation/SiteHeader'
import SiteFooter from '../components/navigation/SiteFooter'

// Monochrome color constants
const MONO = {
  bg: '#ffffff',
  surface: '#f9f9f9',
  surfaceHover: '#f0f0f0',
  textMain: '#111111',
  textMuted: '#666666',
  borderSoft: '#e0e0e0',
  borderHard: '#111111',
}

const FONT_BRAND = '"Inter", -apple-system, sans-serif'
const FONT_MONO = '"JetBrains Mono", source-code-pro, monospace'

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      sx={{
        color: MONO.textMuted,
        fontFamily: FONT_MONO,
        fontSize: 11,
        letterSpacing: '.12em',
        textTransform: 'uppercase',
        mb: 2,
        fontWeight: 500,
      }}
    >
      {children}
    </Typography>
  )
}

export default function AboutPage() {
  return (
    <Box sx={{ bgcolor: MONO.bg, color: MONO.textMain, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SiteHeader />

      <Box component="main" sx={{ flexGrow: 1, pt: { xs: 14, md: 20 }, pb: { xs: 8, md: 16 } }}>
        <Container maxWidth="lg">
          {/* HERO */}
          <Box sx={{ maxWidth: 800, mb: { xs: 12, md: 16 } }}>
            <Typography
              component="h1"
              sx={{
                fontFamily: FONT_BRAND,
                fontSize: { xs: 48, md: 72 },
                fontWeight: 600,
                lineHeight: 1.05,
                letterSpacing: '-.03em',
                mb: 4,
              }}
            >
              Building the Digital Backbone for Modern Organizations.
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 20, md: 24 },
                color: MONO.textMuted,
                lineHeight: 1.5,
                maxWidth: 600,
              }}
            >
              We are a team of engineers, designers, and problem solvers dedicated to simplifying complex operations for organizations across all industries.
            </Typography>
          </Box>

          {/* OUR STORY */}
          <Box sx={{ mb: { xs: 12, md: 16 } }}>
            <SectionLabel>Our Story</SectionLabel>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 5fr) minmax(0, 7fr)' }, gap: { xs: 6, md: 12 } }}>
              <Box>
                <Typography
                  sx={{
                    fontFamily: FONT_BRAND,
                    fontSize: { xs: 32, md: 48 },
                    fontWeight: 500,
                    lineHeight: 1.1,
                    letterSpacing: '-.02em',
                  }}
                >
                  Where It All Began
                </Typography>
                <Typography sx={{ color: MONO.textMuted, mt: 2, fontSize: 20, lineHeight: 1.4 }}>
                  From frustration to innovation, building India's enterprise backbone
                </Typography>
              </Box>
              <Box
                sx={{
                  p: 4,
                  bgcolor: MONO.surface,
                  border: `1px solid ${MONO.borderHard}`,
                  borderRadius: '14px',
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>Our Origin Story</Typography>
                <Typography sx={{ color: MONO.textMuted, fontSize: 16, lineHeight: 1.6, mb: 3 }}>
                  Founded by IIT alumni, KALNET was born out of a frustration with fragmented data silos. We saw organizations across industries struggling with disconnected systems and manual processes.
                </Typography>
                <Typography sx={{ color: MONO.textMuted, fontSize: 16, lineHeight: 1.6 }}>
                  What started as solving operational challenges has evolved into a comprehensive Operating System for organizations across 15+ industries.
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* FOUNDERS SPACE */}
          <Box sx={{ mb: { xs: 12, md: 16 } }}>
            <SectionLabel>Founders</SectionLabel>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' },
                gap: 6,
                maxWidth: { sm: 900 },
                mx: 'auto',
              }}
            >
              {[1, 2].map((founder) => (
                <Box key={founder}>
                  <Box
                    sx={{
                      width: '100%',
                      aspectRatio: '1 / 1',
                      bgcolor: MONO.surfaceHover,
                      border: `1px dashed ${MONO.borderHard}`,
                      borderRadius: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                    }}
                  >
                    <Typography sx={{ color: MONO.textMuted, fontFamily: FONT_MONO, fontSize: 12 }}>
                      [FOUNDER IMAGE PLACEHOLDER]
                    </Typography>
                  </Box>
                  <Typography sx={{ fontWeight: 600, fontSize: 24, textAlign: 'center' }}>Founder Name</Typography>
                  <Typography sx={{ color: MONO.textMuted, textAlign: 'center', fontSize: 18 }}>Co-Founder</Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* OUR MISSION */}
          <Box sx={{ mb: { xs: 12, md: 16 } }}>
            <SectionLabel>Our Mission</SectionLabel>
            <Typography
              sx={{
                fontFamily: FONT_BRAND,
                fontSize: { xs: 32, md: 56 },
                fontWeight: 500,
                lineHeight: 1.05,
                letterSpacing: '-.02em',
                mb: 6,
                maxWidth: 800,
              }}
            >
              Empower Growth Through Intelligence.
            </Typography>
            <Typography sx={{ color: MONO.textMuted, fontSize: 20, mb: 8, maxWidth: 600 }}>
              We believe every organization deserves access to world-class technology that drives efficiency, insights, and growth.
            </Typography>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 3 }}>
              {[
                { title: 'Simplify Complexity', desc: 'Turn chaotic workflows into streamlined, automated processes that save time and reduce errors.' },
                { title: 'Democratize Technology', desc: 'Make enterprise-grade tools accessible to every institution, regardless of size or budget.' },
                { title: 'Customer Obsession', desc: 'Build with empathy, listen to feedback, and deliver consistent value at every touchpoint.' },
              ].map((item) => (
                <Box
                  key={item.title}
                  sx={{
                    p: 4,
                    height: '100%',
                    border: `1px solid ${MONO.borderSoft}`,
                    bgcolor: MONO.surface,
                    borderRadius: '14px',
                    transition: 'border-color 0.2s',
                    "&:hover": { borderColor: MONO.borderHard },
                  }}
                >
                  <Typography sx={{ fontWeight: 600, fontSize: 20, mb: 1.5 }}>{item.title}</Typography>
                  <Typography sx={{ color: MONO.textMuted, lineHeight: 1.6 }}>{item.desc}</Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* OUR VALUES */}
          <Box>
            <SectionLabel>Our Values</SectionLabel>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 4fr) minmax(0, 8fr)' }, gap: { xs: 6, md: 12 } }}>
              <Box>
                <Typography
                  sx={{
                    fontFamily: FONT_BRAND,
                    fontSize: { xs: 32, md: 48 },
                    fontWeight: 500,
                    lineHeight: 1.1,
                    letterSpacing: '-.02em',
                  }}
                >
                  What Drives Us
                </Typography>
                <Typography sx={{ color: MONO.textMuted, mt: 2, fontSize: 18 }}>
                  The principles that guide every decision we make and every line of code we write.
                </Typography>
              </Box>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 4 }}>
                {[
                  { title: 'Innovation First', desc: 'We constantly push boundaries, leveraging AI and modern tech to solve tomorrow\'s problems today.' },
                  { title: 'Security & Privacy', desc: 'Bank-grade encryption and compliance standards protect your data at every layer.' },
                  { title: 'Customer Success', desc: 'Your growth is our mission. We provide 24/7 support and continuous improvements based on your feedback.' },
                  { title: 'Speed & Reliability', desc: '99.9% uptime with lightning-fast performance. We build systems you can depend on.' },
                  { title: 'Quality Engineering', desc: 'Clean code, comprehensive testing, and best practices ensure robust, maintainable solutions.' },
                  { title: 'Built for India', desc: 'Designed with local needs in mind, from multi-language support to India-specific compliance.' },
                ].map((value) => (
                  <Box key={value.title} sx={{ borderTop: `1px solid ${MONO.borderHard}`, pt: 2 }}>
                    <Typography sx={{ fontWeight: 600, fontSize: 18, mb: 1 }}>{value.title}</Typography>
                    <Typography sx={{ color: MONO.textMuted, fontSize: 15, lineHeight: 1.6 }}>{value.desc}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

        </Container>
      </Box>

      <SiteFooter />
    </Box>
  )
}
