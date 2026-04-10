import { Box, Container, Typography, Stack } from '@mui/material'

const FONT_BRAND = "'Chillax', 'Inter', sans-serif"

export default function SiteFooter() {
  return (
    <Box component="footer" sx={{ bgcolor: '#000', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      {/* SEO block */}
      <Container maxWidth="md" sx={{ pt: 10, pb: 4, textAlign: 'center' }}>
        <Typography sx={{ color: 'rgba(255,255,255,.2)', fontSize: 13, lineHeight: 1.8, maxWidth: 640, mx: 'auto' }}>
          Kalnet is a powerful CRM and ERP software platform designed to help businesses manage operations, customer relationships, finance, and workflows in one place. Our business management system is built for scalability, automation, and efficiency across industries.
        </Typography>
      </Container>
      
      {/* Massive KALNET watermark — outlined, full-width */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pt: 6, pb: 6, overflow: 'hidden' }}>
        <Typography sx={{
          fontSize: { xs: '28vw', md: '20vw' }, fontWeight: 700,
          color: 'transparent', letterSpacing: '-0.02em',
          fontFamily: FONT_BRAND, lineHeight: 1, userSelect: 'none',
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
