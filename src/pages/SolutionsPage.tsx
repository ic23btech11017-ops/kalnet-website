import { Box, Stack, Typography, Button } from '@mui/material'
import { ArrowRight } from 'lucide-react'
import { Link as RouterLink } from 'react-router-dom'
import BrandedPageLayout from '../components/layout/BrandedPageLayout'
import { MediaPlaceholder, StatStrip } from '../components/content/PageBlocks'
import { PLATFORM_SOLUTIONS } from '../components/content/PlatformCapabilities'
import { generateSlug } from './ModuleDetailPage'

export default function SolutionsPage() {
  const coreCategory = PLATFORM_SOLUTIONS[0];
  const remainingCategories = PLATFORM_SOLUTIONS.slice(1);

  return (
    <BrandedPageLayout
      eyebrow="COMPLETE PLATFORM ECOSYSTEM"
      title="KALNET Solutions"
      description="Discover 30+ integrated solutions across 8 categories designed to power your entire enterprise operations."
    >
      <StatStrip
        items={[
          { label: 'Solution Groups', value: '8' },
          { label: 'Automation Modules', value: '30+' },
          { label: 'Integrations', value: '40+' },
          { label: 'Reporting Layers', value: 'Real-time' },
        ]}
      />

      {/* --- Top Section: Core Platform + Media Placeholder --- */}
      <Box sx={{ mt: 5, mb: 10 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
          <Box sx={{ width: 44, height: 44, borderRadius: 2.5, bgcolor: coreCategory.accent + '20', color: coreCategory.accent, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <coreCategory.Icon size={24} />
          </Box>
          <Box>
            <Typography sx={{ fontSize: { xs: 24, md: 28 }, fontWeight: 800, color: '#0f172a', letterSpacing: '-.02em', lineHeight: 1.1 }}>
              {coreCategory.category}
            </Typography>
            <Typography sx={{ fontSize: 14, color: '#64748b', fontWeight: 600 }}>{coreCategory.modules.length} solutions</Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: 4 }}>
          {/* Left Side: Solution Cards */}
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, alignContent: 'start', gap: 2.5 }}>
            {coreCategory.modules.map((mod, idx) => (
              <Box key={idx} component={RouterLink} to={`/module/${generateSlug(mod.title)}`} sx={{ 
                p: 3, bgcolor: '#f8fafc', borderRadius: 4, border: '1px solid #e2e8f0', textDecoration: 'none',
                transition: 'all .25s ease', '&:hover': { borderColor: coreCategory.accent, boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)', transform: 'translateY(-2px)' }
              }}>
                <Typography sx={{ fontSize: 16, fontWeight: 700, mb: 1, color: '#1e293b' }}>
                  {mod.title}
                </Typography>
                <Typography sx={{ fontSize: 13, color: '#64748b', lineHeight: 1.6, mb: 2 }}>
                  {mod.desc}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer', color: coreCategory.accent, '&:hover .arrow': { transform: 'translateX(4px)' } }}>
                  <Typography sx={{ fontSize: 13, fontWeight: 700 }}>Learn more</Typography>
                  <ArrowRight className="arrow" size={14} style={{ transition: 'transform .2s ease' }} />
                </Box>
              </Box>
            ))}
          </Box>
          {/* Right Side: Visual */}
          <MediaPlaceholder
            title="Core Platform Walkthrough"
            subtitle="Dashboard interface, real-time sync metrics, and data flow architecture."
          />
        </Box>
      </Box>

      {/* --- Middle Sections: Remaining 7 Categories Stacked --- */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 8, md: 12 }, mb: 10 }}>
        {remainingCategories.map((cat, i) => (
          <Box key={i}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
              <Box sx={{ width: 48, height: 48, borderRadius: 3, bgcolor: cat.accent + '15', color: cat.accent, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <cat.Icon size={26} />
              </Box>
              <Box>
                <Typography sx={{ fontSize: { xs: 26, md: 32 }, fontWeight: 800, color: '#0f172a', letterSpacing: '-.02em', lineHeight: 1.1 }}>
                  {cat.category}
                </Typography>
                <Typography sx={{ fontSize: 14, color: '#64748b', fontWeight: 600 }}>{cat.modules.length} solutions</Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, minmax(0, 1fr))' }, gap: 3 }}>
              {cat.modules.map((mod, idx) => (
                <Box key={idx} component={RouterLink} to={`/module/${generateSlug(mod.title)}`} sx={{ 
                  p: 3.5, bgcolor: '#f8fafc', borderRadius: 4, border: '1px solid #e2e8f0', textDecoration: 'none',
                  transition: 'all .25s ease', '&:hover': { borderColor: cat.accent, boxShadow: '0 12px 30px -5px rgba(0,0,0,0.06)', transform: 'translateY(-3px)' },
                  display: 'flex', flexDirection: 'column'
                }}>
                  <Typography sx={{ fontSize: 18, fontWeight: 800, mb: 1.5, color: '#0f172a' }}>
                    {mod.title}
                  </Typography>
                  <Typography sx={{ fontSize: 14.5, color: '#475569', lineHeight: 1.6, flexGrow: 1 }}>
                    {mod.desc}
                  </Typography>
                  <Box sx={{ mt: 3, display: 'inline-flex', alignItems: 'center', gap: 1, cursor: 'pointer', color: cat.accent, '&:hover .arrow': { transform: 'translateX(4px)' } }}>
                    <Typography sx={{ fontSize: 14, fontWeight: 800 }}>Learn more</Typography>
                    <ArrowRight className="arrow" size={16} style={{ transition: 'transform .2s ease' }} />
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>

      {/* --- Detailed Strategy / Bottom CTA --- */}
      <Box sx={{ mt: 8, borderRadius: 5, p: { xs: 4, md: 8 }, bgcolor: '#101828', color: '#fff', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle background glow effect simulating KALNET's aesthetic */}
        <Box sx={{ position: 'absolute', top: -100, left: '50%', transform: 'translateX(-50%)', width: 600, height: 600, bgcolor: 'rgba(13, 115, 119, 0.15)', filter: 'blur(100px)', borderRadius: '50%', pointerEvents: 'none' }} />
        
        <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 800, mx: 'auto' }}>
          <Typography sx={{ fontSize: { xs: 32, md: 48 }, fontWeight: 800, letterSpacing: '-.03em', mb: 2, lineHeight: 1.1 }}>
            Need a Custom Solution?
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,.7)', fontSize: { xs: 16, md: 18 }, lineHeight: 1.6, mb: 6, maxWidth: 640, mx: 'auto' }}>
            Our platform is highly configurable. Let's discuss how we can tailor KALNET modules to your specific enterprise architecture and requirements.
          </Typography>
          
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2.5} justifyContent="center" alignItems="center">
            <Button component={RouterLink} to="/request-demo" variant="contained" sx={{ 
              px: { xs: 4, md: 5 }, py: { xs: 1.8, md: 2 }, fontSize: 16, fontWeight: 800, 
              bgcolor: '#0D7377', color: '#fff', borderRadius: '999px',
              boxShadow: '0 4px 20px rgba(13,115,119,.4)',
              '&:hover': { 
                bgcolor: '#14FFEC', 
                color: '#000', 
                boxShadow: '0 8px 32px rgba(20,255,236,.35)', 
                transform: 'translateY(-2px)' 
              }, transition: 'all .25s ease'
            }}>
              Request Demo <ArrowRight size={18} style={{ marginLeft: 8 }} />
            </Button>
            <Button component={RouterLink} to="/contact" variant="outlined" sx={{ 
              px: { xs: 4, md: 5 }, py: { xs: 1.8, md: 2 }, fontSize: 16, fontWeight: 700, 
              color: '#fff', borderColor: 'rgba(255,255,255,.2)', borderWidth: 2,
              borderRadius: '999px', 
              '&:hover': { 
                borderColor: '#14FFEC', 
                color: '#14FFEC', 
                bgcolor: 'rgba(20,255,236,.06)', 
                borderWidth: 2 
              }, transition: 'all .25s ease'
            }}>
              Talk to Sales
            </Button>
          </Stack>
        </Box>
      </Box>

    </BrandedPageLayout>
  )
}
