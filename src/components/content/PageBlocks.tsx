import { Box, Stack, Typography } from '@mui/material'
import { Image as ImageIcon, Play, ArrowRight } from 'lucide-react'
import { Link as RouterLink } from 'react-router-dom'

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
        border: '1px dashed #c9d4e4',
        borderRadius: 4,
        bgcolor: '#f7faff',
        minHeight: 240,
        p: { xs: 3, md: 4 },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1.5 }}>
        <Box sx={{ width: 34, height: 34, borderRadius: 2, bgcolor: '#e7eef9', color: '#334155', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ImageIcon size={17} />
        </Box>
        <Box sx={{ width: 34, height: 34, borderRadius: 2, bgcolor: '#e7eef9', color: '#334155', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Play size={17} />
        </Box>
      </Stack>
      <Typography sx={{ color: '#182033', fontSize: 18, fontWeight: 800, mb: .8, lineHeight: 1.25 }}>
        {title}
      </Typography>
      <Typography sx={{ color: '#607089', fontSize: 14, lineHeight: 1.55, maxWidth: 520 }}>
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
    <Box sx={{ border: '1px solid #e2e8f4', borderRadius: 4, p: 3, bgcolor: '#f9fbff', height: '100%' }}>
      <Typography sx={{ color: '#182033', fontSize: 19, fontWeight: 800, mb: 1.2, lineHeight: 1.25 }}>
        {title}
      </Typography>
      <Typography sx={{ color: '#607089', fontSize: 14, lineHeight: 1.55 }}>
        {description}
      </Typography>
      {cta && href ? (
        <Box component={RouterLink} to={href} sx={{ textDecoration: 'none', color: '#0D7377', fontWeight: 800, fontSize: 13, letterSpacing: '.05em', mt: 2, display: 'inline-flex', alignItems: 'center' }}>
          {cta} <ArrowRight size={14} style={{ marginLeft: 6 }} />
        </Box>
      ) : null}
    </Box>
  )
}

type StatStripProps = {
  items: Array<{ label: string; value: string }>
}

export function StatStrip({ items }: StatStripProps) {
  return (
    <Box sx={{ border: '1px solid #e2e8f4', borderRadius: 4, bgcolor: '#f9fbff', p: { xs: 2.5, md: 3 } }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: `repeat(${items.length}, minmax(0, 1fr))` }, gap: 2 }}>
        {items.map(item => (
          <Box key={item.label} sx={{ textAlign: 'center' }}>
            <Typography sx={{ color: '#0D7377', fontSize: { xs: 22, md: 26 }, fontWeight: 800, lineHeight: 1.1 }}>
              {item.value}
            </Typography>
            <Typography sx={{ color: '#607089', fontSize: 12, fontWeight: 600, letterSpacing: '.05em', textTransform: 'uppercase' }}>
              {item.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
