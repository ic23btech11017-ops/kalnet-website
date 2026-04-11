import { Box, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { FONT_BRAND, MONO } from '../../theme/marketingMono'

type MediaPlaceholderProps = {
  title?: string
  subtitle?: string
}

export function MediaPlaceholder({
  title = 'Product media placeholder',
  subtitle = 'Use this area for screenshots, walkthrough videos, or product visuals.',
}: MediaPlaceholderProps) {
  return (
    <Box
      sx={{
        border: `1px dashed ${MONO.border}`,
        borderRadius: 2,
        bgcolor: MONO.surfaceSoft,
        minHeight: 240,
        p: { xs: 3, md: 4 },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Typography
        sx={{
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: '.12em',
          textTransform: 'uppercase',
          color: 'rgba(17,17,17,.35)',
          mb: 1.5,
        }}
      >
        Media
      </Typography>
      <Typography sx={{ color: MONO.text, fontFamily: FONT_BRAND, fontSize: 18, fontWeight: 500, mb: 0.8, lineHeight: 1.25 }}>
        {title}
      </Typography>
      <Typography sx={{ color: MONO.muted, fontSize: 14, lineHeight: 1.55, maxWidth: 520 }}>
        {subtitle}
      </Typography>
    </Box>
  )
}

type HighlightCardProps = {
  title: string
  description: string
  cta?: string
  href?: string
}

export function HighlightCard({ title, description, cta, href }: HighlightCardProps) {
  return (
    <Box
      sx={{
        border: `1px solid rgba(17,17,17,.1)`,
        borderRadius: 2,
        p: 3,
        bgcolor: MONO.surface,
        height: '100%',
        transition: 'border-color 0.2s ease',
        '&:hover': { borderColor: MONO.text },
      }}
    >
      <Typography sx={{ color: MONO.text, fontFamily: FONT_BRAND, fontSize: 18, fontWeight: 500, mb: 1.2, lineHeight: 1.25 }}>
        {title}
      </Typography>
      <Typography sx={{ color: MONO.mutedStrong, fontSize: 14, lineHeight: 1.55 }}>
        {description}
      </Typography>
      {cta && href ? (
        <Typography
          component={RouterLink}
          to={href}
          sx={{
            textDecoration: 'none',
            color: MONO.text,
            fontWeight: 600,
            fontSize: 13,
            mt: 2,
            display: 'inline-block',
            borderBottom: '1px solid rgba(17,17,17,.35)',
            pb: 0.2,
            '&:hover': { borderBottomColor: '#111' },
          }}
        >
          {cta}
        </Typography>
      ) : null}
    </Box>
  )
}

type StatStripProps = {
  items: Array<{ label: string; value: string }>
}

export function StatStrip({ items }: StatStripProps) {
  return (
    <Box
      sx={{
        border: `1px solid rgba(17,17,17,.1)`,
        borderRadius: 2,
        bgcolor: MONO.surface,
        p: { xs: 2.5, md: 3 },
      }}
    >
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: `repeat(${items.length}, minmax(0, 1fr))` }, gap: 2 }}>
        {items.map((item, i) => (
          <Box
            key={item.label}
            sx={{
              textAlign: 'center',
              borderLeft: { md: i === 0 ? 'none' : `1px solid ${MONO.border}` },
              pl: { md: i === 0 ? 0 : 2 },
            }}
          >
            <Typography sx={{ fontFamily: FONT_BRAND, color: MONO.text, fontSize: { xs: 22, md: 28 }, fontWeight: 500, lineHeight: 1.1 }}>
              {item.value}
            </Typography>
            <Typography sx={{ color: MONO.muted, fontSize: 11, fontWeight: 500, letterSpacing: '.08em', textTransform: 'uppercase', mt: 0.5 }}>
              {item.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
