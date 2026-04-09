import { Box, Container, Typography } from '@mui/material'
import type { ReactNode } from 'react'
import SiteHeader from '../navigation/SiteHeader'
import SiteFooter from '../navigation/SiteFooter'

const FONT_SF = "'SF Pro Display', 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"

type BrandedPageLayoutProps = {
  eyebrow?: string
  title: string
  description: string
  children?: ReactNode
}

export default function BrandedPageLayout({ eyebrow, title, description, children }: BrandedPageLayoutProps) {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#fff', fontFamily: FONT_SF }}>
      <SiteHeader />
      <Box sx={{ pt: { xs: 14, md: 18 }, pb: { xs: 8, md: 12 }, bgcolor: '#f5f5f7', fontFamily: FONT_SF }}>
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
          {eyebrow ? (
            <Typography sx={{ fontSize: 11, fontWeight: 700, letterSpacing: '.14em', color: '#0D7377', mb: 2 }}>
              {eyebrow}
            </Typography>
          ) : null}
          <Typography sx={{ fontSize: { xs: 32, md: 52 }, fontWeight: 800, letterSpacing: '-.03em', color: '#11182b', mb: 2, lineHeight: 1.05 }}>
            {title}
          </Typography>
          <Typography sx={{ maxWidth: 760, mx: 'auto', color: '#52627a', fontSize: { xs: 15, md: 17 }, lineHeight: 1.6 }}>
            {description}
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 }, fontFamily: FONT_SF }}>
        {children}
      </Container>

      <SiteFooter />
    </Box>
  )
}
