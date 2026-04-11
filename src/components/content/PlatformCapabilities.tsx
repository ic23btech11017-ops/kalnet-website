import { useState } from 'react'
import { Box, Typography, Container } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { PLATFORM_SOLUTIONS, solutionModulePath } from '../../data/platformSolutionsData'

export { PLATFORM_SOLUTIONS } from '../../data/platformSolutionsData'

export default function PlatformCapabilities() {
  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: '#0f0f0f', color: '#fff' }}>
      <Container maxWidth="lg">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Typography sx={{ fontSize: { xs: 30, md: 40 }, fontWeight: 600, fontFamily: "'SF Pro Display', sans-serif", mb: 2, lineHeight: 1.1 }}>
            Complete platform capabilities
          </Typography>
          <Typography sx={{ fontSize: 15, color: 'rgba(255,255,255,.4)', mb: 8, maxWidth: 560 }}>
            Explore our comprehensive suite of 30+ integrated modules across 8 core operational areas, built for unmatched scalability and automation.
          </Typography>
        </motion.div>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '300px 1fr' }, gap: { xs: 6, lg: 8 } }}>
          
          {/* Left Navigation (Sidebar) */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {PLATFORM_SOLUTIONS.map((cat, i) => {
              const isActive = activeIdx === i;
              return (
                <Box
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  sx={{
                    display: 'flex', alignItems: 'center', gap: 2, p: 2, cursor: 'pointer',
                    borderRadius: 3, transition: 'all .25s ease',
                    bgcolor: isActive ? 'rgba(255,255,255,.05)' : 'transparent',
                    border: '1px solid',
                    borderColor: isActive ? 'rgba(255,255,255,.1)' : 'transparent',
                    '&:hover': { bgcolor: isActive ? 'rgba(255,255,255,.05)' : 'rgba(255,255,255,.02)' }
                  }}
                >
                  <Box sx={{ 
                    width: 38, height: 38, borderRadius: 2, 
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    bgcolor: isActive ? 'rgba(255,255,255,.08)' : 'rgba(255,255,255,.03)',
                    transition: 'all .25s'
                  }}>
                    <cat.Icon size={18} color={isActive ? cat.accent : '#555'} />
                  </Box>
                  <Typography sx={{ 
                    fontSize: 15, fontWeight: isActive ? 600 : 400, 
                    color: isActive ? '#fff' : 'rgba(255,255,255,.4)',
                    transition: 'all .25s'
                  }}>
                    {cat.category}
                  </Typography>
                </Box>
              )
            })}
          </Box>

          {/* Right Content */}
          <Box sx={{ position: 'relative', minHeight: 400 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                transition={{ duration: 0.3 }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4, pb: 4, borderBottom: '1px solid rgba(255,255,255,.08)' }}>
                   <Box sx={{ width: 44, height: 44, borderRadius: 2.5, bgcolor: 'rgba(255,255,255,.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {(() => {
                      const ActiveIcon = PLATFORM_SOLUTIONS[activeIdx].Icon;
                      return <ActiveIcon size={20} color={PLATFORM_SOLUTIONS[activeIdx].accent} />;
                    })()}
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: 24, fontWeight: 600, fontFamily: "'SF Pro Display', sans-serif" }}>
                      {PLATFORM_SOLUTIONS[activeIdx].category}
                    </Typography>
                    <Typography sx={{ fontSize: 14, color: 'rgba(255,255,255,.4)', mt: 0.5 }}>
                      {PLATFORM_SOLUTIONS[activeIdx].modules.length} specialized modules
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
                  {PLATFORM_SOLUTIONS[activeIdx].modules.map(mod => (
                    <Box
                      key={mod.slug}
                      component={RouterLink}
                      to={solutionModulePath(PLATFORM_SOLUTIONS[activeIdx].categorySlug, mod.slug)}
                      sx={{
                        p: 3,
                        bgcolor: '#141414',
                        borderRadius: 4,
                        border: '1px solid #222',
                        textDecoration: 'none',
                        transition: 'all .2s ease',
                        '&:hover': { borderColor: '#444', bgcolor: '#1a1a1a', transform: 'translateY(-2px)' },
                      }}
                    >
                      <Typography sx={{ fontSize: 16, fontWeight: 600, mb: 1.5, color: '#f5f5f7' }}>{mod.title}</Typography>
                      <Typography sx={{ fontSize: 13, color: 'rgba(255,255,255,.4)', lineHeight: 1.6 }}>{mod.desc}</Typography>
                      <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', gap: 1, '&:hover .arrow': { transform: 'translateX(4px)' }, '&:hover .text': { color: PLATFORM_SOLUTIONS[activeIdx].accent } }}>
                        <Typography className="text" sx={{ fontSize: 13, fontWeight: 500, color: '#888', transition: 'color .2s' }}>
                          Learn more
                        </Typography>
                        <ArrowRight className="arrow" size={14} color="#888" style={{ transition: 'transform .2s' }} />
                      </Box>
                    </Box>
                  ))}
                </Box>
              </motion.div>
            </AnimatePresence>
          </Box>

        </Box>
      </Container>
    </Box>
  )
}
