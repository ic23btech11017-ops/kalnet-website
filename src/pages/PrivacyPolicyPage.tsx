import { Box, Container, Typography } from '@mui/material'
import SiteFooter from '../components/navigation/SiteFooter'
import SiteHeader from '../components/navigation/SiteHeader'
import { FONT_BRAND, MONO } from '../theme/marketingMono'

export default function PrivacyPolicyPage() {
  return (
    <Box data-nav-theme="light" sx={{ bgcolor: MONO.page, color: MONO.text, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SiteHeader />
      <Box component="main" sx={{ flexGrow: 1, pt: { xs: 16, md: 22 }, pb: { xs: 8, md: 12 } }}>
        <Container maxWidth="md">
          <Typography component="h1" sx={{ fontFamily: FONT_BRAND, fontSize: { xs: 32, md: 40 }, fontWeight: 600, letterSpacing: '-.02em', mb: 2 }}>
            Privacy Policy
          </Typography>
          <Typography sx={{ color: MONO.muted, fontSize: 15, lineHeight: 1.7, mb: 4 }}>
            This page is a placeholder for your legal privacy policy. Replace this copy with language reviewed by counsel before production use.
          </Typography>
          <Typography sx={{ fontSize: 15, lineHeight: 1.75, color: MONO.text }}>
            Kalnet is committed to protecting your privacy. A full policy will describe what data we collect, how we use it, retention, subprocessors, and your
            rights. Contact us through the site if you have questions in the meantime.
          </Typography>
        </Container>
      </Box>
      <SiteFooter />
    </Box>
  )
}
