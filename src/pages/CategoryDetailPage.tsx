import { Box, Stack, Typography } from '@mui/material'
import { useMemo } from 'react'
import { Navigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import BrandedPageLayout from '../components/layout/BrandedPageLayout'
import { HighlightCard, MediaPlaceholder, StatStrip } from '../components/content/PageBlocks'
import { allIndustriesItems, allSolutionsItems } from '../data/navigationData'
import { industryDetailContent, solutionDetailContent } from '../data/pageContent'

type CategoryDetailPageProps = {
  type: 'solutions' | 'industries'
}

export default function CategoryDetailPage({ type }: CategoryDetailPageProps) {
  const { slug } = useParams()
  const item = useMemo(() => {
    const list = type === 'solutions' ? allSolutionsItems : allIndustriesItems
    return list.find(entry => entry.slug === slug)
  }, [slug, type])

  if (!item) {
    return <Navigate to={type === 'solutions' ? '/solutions' : '/industries'} replace />
  }

  const heading = item.title
  const content = type === 'solutions' ? solutionDetailContent[item.slug] : industryDetailContent[item.slug]

  const description = content?.summary ?? item.description

  const stats = content?.stats ?? (
    type === 'solutions'
      ? [
          { label: 'Implementation stages', value: '5' },
          { label: 'Core capabilities', value: '12+' },
          { label: 'Automation depth', value: 'Advanced' },
          { label: 'Reporting', value: 'Live' },
        ]
      : [
          { label: 'Key workflows', value: '10+' },
          { label: 'Role templates', value: '8+' },
          { label: 'Compliance fit', value: 'Configurable' },
          { label: 'Deployment model', value: 'Phased' },
        ]
  )

  const pillars = content?.pillars ?? [
    { title: 'Operational visibility', description: 'Track execution stages, workload distribution, and bottlenecks in one control layer.' },
    { title: 'Workflow automation', description: 'Remove repetitive handoffs through configurable triggers, forms, and status transitions.' },
    { title: 'Governance and control', description: 'Use role-based permissions, review checkpoints, and audit-ready reporting.' },
    { title: 'Scalable rollout', description: 'Adopt module-by-module to match team readiness and business priority.' },
  ]

  const workflow = content?.workflow ?? [
    'Discovery and process mapping',
    'Module configuration and permissions',
    'Data migration and verification',
    'Pilot rollout with key stakeholders',
    'Scale-up and optimization',
  ]

  const outcomes = content?.outcomes ?? ['Faster operational alignment', 'Lower manual process overhead', 'Improved visibility for leadership']

  const mediaTitle = content?.mediaTitle ?? `${heading} media placeholder`
  const mediaSubtitle = content?.mediaSubtitle ?? 'Reserve this for category-specific demos, UI captures, implementation maps, or explainer videos.'

  return (
    <BrandedPageLayout
      eyebrow={content?.eyebrow ?? (type === 'solutions' ? 'SOLUTION CATEGORY' : 'INDUSTRY CATEGORY')}
      title={heading}
      description={description}
    >
      <StatStrip items={stats} />

      <Box sx={{ mt: 3, display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1.15fr .85fr' }, gap: 3 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' }, gap: 2.2 }}>
          {pillars.map(pillar => (
            <HighlightCard key={pillar.title} title={pillar.title} description={pillar.description} />
          ))}
        </Box>
        <MediaPlaceholder title={mediaTitle} subtitle={mediaSubtitle} />
      </Box>

      <Box sx={{ mt: 3, border: '1px solid #e2e8f4', borderRadius: 4, p: { xs: 3, md: 4 }, bgcolor: '#f9fbff' }}>
        <Typography sx={{ color: '#1d293d', fontSize: { xs: 24, md: 32 }, fontWeight: 800, mb: 1.5 }}>
          Recommended implementation flow
        </Typography>
        <Stack spacing={1.3}>
          {workflow.map(step => (
            <Typography key={step} sx={{ color: '#5f7089', fontSize: 16, lineHeight: 1.65 }}>
              • {step}
            </Typography>
          ))}
        </Stack>
      </Box>

      <Box sx={{ mt: 3, border: '1px solid #e2e8f4', borderRadius: 4, p: { xs: 3, md: 4 }, bgcolor: '#f9fbff' }}>
        <Typography sx={{ color: '#1d293d', fontSize: { xs: 24, md: 32 }, fontWeight: 800, mb: 1.5 }}>
          Expected outcomes
        </Typography>
        <Stack spacing={1.3}>
          {outcomes.map(outcome => (
            <Typography key={outcome} sx={{ color: '#5f7089', fontSize: 16, lineHeight: 1.65 }}>
              • {outcome}
            </Typography>
          ))}
        </Stack>
      </Box>
    </BrandedPageLayout>
  )
}
