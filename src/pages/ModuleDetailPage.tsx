import { Box, Stack, Typography, Button } from '@mui/material'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { useMemo } from 'react'
import { Navigate, useParams, Link as RouterLink } from 'react-router-dom'
import BrandedPageLayout from '../components/layout/BrandedPageLayout'
import { HighlightCard, MediaPlaceholder, StatStrip } from '../components/content/PageBlocks'
import { PLATFORM_SOLUTIONS } from '../components/content/PlatformCapabilities'

export const generateSlug = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')

export default function ModuleDetailPage() {
  const { slug } = useParams()

  const moduleData = useMemo(() => {
    for (const cat of PLATFORM_SOLUTIONS) {
      for (const mod of cat.modules) {
        if (generateSlug(mod.title) === slug) {
          return { category: cat, module: mod }
        }
      }
    }
    return null
  }, [slug])

  if (!moduleData) {
    return <Navigate to="/solutions" replace />
  }

  const { category, module } = moduleData

  return (
    <BrandedPageLayout
      eyebrow={category.category.toUpperCase()}
      title={module.title}
      description={module.desc}
    >
      <StatStrip
        items={[
          { label: 'Deployment speed', value: 'Rapid' },
          { label: 'Integration', value: 'API-Ready' },
          { label: 'Workflows', value: 'Automated' },
          { label: 'Security', value: 'Enterprise' },
        ]}
      />

      <Box sx={{ mt: 3, display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1.15fr .85fr' }, gap: 3 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' }, gap: 2.2 }}>
            <HighlightCard 
              title="Centralized Operations" 
              description={`Unify all ${module.title.toLowerCase()} processes into a single dashboard to reduce manual handoffs.`} 
            />
            <HighlightCard 
              title="Real-Time Analytics" 
              description="Get instant visibility into KPIs, identifying bottlenecks before they impact your business." 
            />
            <HighlightCard 
              title="Automated Workflows" 
              description="Configure trigger-based rules to completely automate repetitive administrative tasks." 
            />
            <HighlightCard 
              title="Scalable Architecture" 
              description="Deploy this module standalone or seamlessly connected to your existing core ecosystem." 
            />
        </Box>
        <MediaPlaceholder 
          title={`${module.title} Interface`} 
          subtitle={`Interactive walkthrough displaying the core capabilities and workflows of the ${module.title} module.`} 
        />
      </Box>

      {/* --- Why Choose Section --- */}
      <Box sx={{ mt: 3, border: '1px solid #e2e8f4', borderRadius: 4, p: { xs: 3, md: 4 }, bgcolor: '#f9fbff' }}>
        <Typography sx={{ color: '#1d293d', fontSize: { xs: 24, md: 32 }, fontWeight: 800, mb: 2 }}>
          Why choose KALNET {module.title}?
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
          {[
            'Eliminates data silos across departments',
            'Reduces process completion time by up to 40%',
            'Compliance is implicitly built into workflows',
            'Requires zero technical expertise to manage daily',
            'Seamlessly synchronizes with the rest of the KALNET ecosystem',
            'Role-based access controls pre-configured',
          ].map(benefit => (
            <Box key={benefit} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
              <Box sx={{ mt: 0.3, color: category.accent }}><CheckCircle2 size={18} /></Box>
              <Typography sx={{ color: '#5f7089', fontSize: 16, lineHeight: 1.5 }}>{benefit}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* --- Bottom CTA Prompter --- */}
      <Box sx={{ mt: 3, borderRadius: 4, p: { xs: 3, md: 4 }, bgcolor: '#101828', color: '#fff' }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'flex-start', md: 'center' }, justifyContent: 'space-between', gap: 3 }}>
          <Box>
            <Typography sx={{ fontSize: { xs: 22, md: 30 }, fontWeight: 800, letterSpacing: '-.02em', mb: 1.2 }}>
              Ready to deploy {module.title}?
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,.72)', fontSize: 14.5, lineHeight: 1.65, maxWidth: 660 }}>
              Speak with our architecture team to see a personalized demo of this module customized for your operations.
            </Typography>
          </Box>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} flexShrink={0}>
            <Button component={RouterLink} to="/request-demo" variant="contained" sx={{ 
              px: { xs: 3, md: 4 }, py: 1.5, fontSize: 16, fontWeight: 800, 
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
              px: { xs: 3, md: 4 }, py: 1.5, fontSize: 16, fontWeight: 700, 
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
