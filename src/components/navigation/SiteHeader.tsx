import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { ArrowRight, ChevronDown, Menu, X, Zap } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import {
  industriesMenuItems,
  solutionsHighlight,
  solutionsMenuSections,
  topbarLinks,
} from '../../data/navigationData'

const FONT_BRAND = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"

type MegaMenuType = 'solutions' | 'industries' | null

export default function SiteHeader() {
  const [activeMenu, setActiveMenu] = useState<MegaMenuType>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState<MegaMenuType>(null)
  const [navTheme, setNavTheme] = useState<'light' | 'dark'>('dark')
  const location = useLocation()
  const isDark = navTheme === 'dark'

  useEffect(() => {
    const detectTheme = () => {
      const probeX = Math.floor(window.innerWidth / 2)
      const probeY = 84
      const node = document.elementFromPoint(probeX, probeY) as HTMLElement | null
      const themedParent = node?.closest('[data-nav-theme]') as HTMLElement | null
      const detected = themedParent?.dataset.navTheme === 'dark' ? 'dark' : 'light'
      setNavTheme(prev => (prev === detected ? prev : detected))
    }

    detectTheme()
    window.addEventListener('scroll', detectTheme, { passive: true })
    window.addEventListener('resize', detectTheme)
    return () => {
      window.removeEventListener('scroll', detectTheme)
      window.removeEventListener('resize', detectTheme)
    }
  }, [])

  const isActive = useMemo(() => {
    return (href: string) => location.pathname === href || location.pathname.startsWith(`${href}/`)
  }, [location.pathname])

  return (
    <Box sx={{ position: 'fixed', top: 16, left: 0, right: 0, zIndex: 1300, display: 'flex', justifyContent: 'center' }}>
      <Box
        onMouseLeave={() => setActiveMenu(null)}
        sx={{ width: 'calc(100% - 48px)', maxWidth: 1024, position: 'relative' }}
      >
        <Box
          component="nav"
          sx={{
            bgcolor: isDark ? 'rgba(8, 20, 22, .86)' : 'rgba(255,255,255,.92)',
            backdropFilter: 'blur(20px)',
            borderRadius: '999px',
            border: isDark ? '1px solid rgba(255,255,255,.2)' : '1px solid #e7ecf4',
            boxShadow: isDark ? '0 8px 30px rgba(0,0,0,.35)' : '0 8px 30px rgba(17,24,39,.08)',
            transition: 'all .22s ease',
          }}
        >
          <Container maxWidth={false} sx={{ py: 0.8, px: { xs: 2.5, md: 3.5 }, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box component={RouterLink} to="/" sx={{ textDecoration: 'none' }}>
              <Typography sx={{ color: isDark ? '#f8fbfc' : '#0d1222', fontWeight: 600, fontSize: 32, letterSpacing: '-.02em', fontFamily: FONT_BRAND }}>
                KALNET
              </Typography>
            </Box>

            <Stack direction="row" spacing={3.5} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
              <Box
                onMouseEnter={() => setActiveMenu('solutions')}
                component={RouterLink}
                to="/solutions"
                sx={{ textDecoration: 'none', color: isActive('/solutions') ? '#14FFEC' : isDark ? 'rgba(255,255,255,.88)' : '#334155', display: 'inline-flex', alignItems: 'center', gap: .5, fontSize: 16, fontWeight: 500 }}
              >
                Solutions <ChevronDown size={14} />
              </Box>

              <Box
                onMouseEnter={() => setActiveMenu('industries')}
                component={RouterLink}
                to="/industries"
                sx={{ textDecoration: 'none', color: isActive('/industries') ? '#14FFEC' : isDark ? 'rgba(255,255,255,.88)' : '#334155', display: 'inline-flex', alignItems: 'center', gap: .5, fontSize: 16, fontWeight: 500 }}
              >
                Industries <ChevronDown size={14} />
              </Box>

              {topbarLinks.map(link => (
                <Box
                  key={link.href}
                  component={RouterLink}
                  to={link.href}
                  sx={{ textDecoration: 'none', color: isActive(link.href) ? '#14FFEC' : isDark ? 'rgba(255,255,255,.88)' : '#334155', fontSize: 16, fontWeight: 500 }}
                >
                  {link.label}
                </Box>
              ))}
            </Stack>

            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              size="small"
              sx={{ display: { xs: 'none', md: 'inline-flex' }, bgcolor: isDark ? '#14FFEC' : '#0D7377', color: isDark ? '#062022' : '#fff', fontWeight: 700, fontSize: 13, px: 3.6, py: 1.05, minWidth: 132, borderRadius: '999px', transition: 'all .2s ease', '&:hover': { bgcolor: isDark ? '#99fff6' : '#085255' } }}
            >
              Get Started
            </Button>

            <Button
              onClick={() => setMobileOpen(v => !v)}
              variant="text"
              sx={{ display: { xs: 'inline-flex', md: 'none' }, minWidth: 40, width: 40, height: 40, borderRadius: 2, color: isDark ? 'rgba(255,255,255,.9)' : '#1f2937' }}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </Button>
          </Container>
        </Box>

        {mobileOpen ? (
          <Box
            sx={{
              mt: 1.5,
              p: 2,
              borderRadius: 4,
              bgcolor: '#f9fbff',
              border: '1px solid #e4ebf7',
              boxShadow: '0 18px 35px rgba(17,24,39,.14)',
              display: { xs: 'block', md: 'none' },
            }}
          >
            <Stack spacing={1.1}>
              <Box
                onClick={() => setMobileSection(s => (s === 'solutions' ? null : 'solutions'))}
                sx={{ p: 1.3, borderRadius: 2, bgcolor: '#f2f6fc', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#1f2937', fontWeight: 700, fontSize: 15, cursor: 'pointer' }}
              >
                Solutions <ChevronDown size={15} />
              </Box>
              {mobileSection === 'solutions' ? (
                <Stack spacing={.5} sx={{ pl: 1 }}>
                  <Box component={RouterLink} to="/solutions" onClick={() => setMobileOpen(false)} sx={{ textDecoration: 'none', color: '#0D7377', fontWeight: 700, fontSize: 14, p: .7 }}>View all solutions</Box>
                  {solutionsMenuSections.flatMap(section => section.items).map(item => (
                    <Box key={item.slug} component={RouterLink} to={item.href} onClick={() => setMobileOpen(false)} sx={{ textDecoration: 'none', color: '#334155', fontSize: 14, p: .7 }}>
                      {item.title}
                    </Box>
                  ))}
                </Stack>
              ) : null}

              <Box
                onClick={() => setMobileSection(s => (s === 'industries' ? null : 'industries'))}
                sx={{ p: 1.3, borderRadius: 2, bgcolor: '#f2f6fc', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#1f2937', fontWeight: 700, fontSize: 15, cursor: 'pointer' }}
              >
                Industries <ChevronDown size={15} />
              </Box>
              {mobileSection === 'industries' ? (
                <Stack spacing={.5} sx={{ pl: 1 }}>
                  <Box component={RouterLink} to="/industries" onClick={() => setMobileOpen(false)} sx={{ textDecoration: 'none', color: '#0D7377', fontWeight: 700, fontSize: 14, p: .7 }}>View all industries</Box>
                  {industriesMenuItems.map(item => (
                    <Box key={item.slug} component={RouterLink} to={item.href} onClick={() => setMobileOpen(false)} sx={{ textDecoration: 'none', color: '#334155', fontSize: 14, p: .7 }}>
                      {item.title}
                    </Box>
                  ))}
                </Stack>
              ) : null}

              {topbarLinks.map(link => (
                <Box key={link.href} component={RouterLink} to={link.href} onClick={() => setMobileOpen(false)} sx={{ textDecoration: 'none', p: 1.2, borderRadius: 2, bgcolor: '#f2f6fc', color: '#334155', fontWeight: 600, fontSize: 14 }}>
                  {link.label}
                </Box>
              ))}

              <Button
                component={RouterLink}
                to="/contact"
                onClick={() => setMobileOpen(false)}
                variant="contained"
                size="small"
                sx={{ mt: .6, bgcolor: '#0D7377', color: '#fff', fontWeight: 700, fontSize: 13, px: 3.6, py: 1.05, minWidth: 132, borderRadius: '999px', '&:hover': { bgcolor: '#085255' } }}
              >
                Get Started
              </Button>
            </Stack>
          </Box>
        ) : null}

        {activeMenu === 'solutions' ? (
          <Box
            onMouseEnter={() => setActiveMenu('solutions')}
            sx={{
              mt: 2,
              borderRadius: 6,
              bgcolor: '#f9fbff',
              border: '1px solid #e4ebf7',
              boxShadow: '0 24px 50px rgba(17,24,39,.16)',
              p: { xs: 3, md: 4 },
              display: { xs: 'none', md: 'grid' },
              gridTemplateColumns: '1.05fr 1.05fr 1.2fr',
              gap: 3,
            }}
          >
            {solutionsMenuSections.map(section => (
              <Box key={section.label}>
                <Typography sx={{ fontSize: 12, fontWeight: 700, letterSpacing: '.14em', color: '#8b99b2', mb: 2.3 }}>
                  {section.label.toUpperCase()}
                </Typography>
                <Stack spacing={1.5}>
                  {section.items.map(item => (
                    <Box key={item.slug} component={RouterLink} to={item.href} onClick={() => setActiveMenu(null)} sx={{ textDecoration: 'none', display: 'flex', gap: 1.4, alignItems: 'flex-start', p: 1.3, borderRadius: 3, '&:hover': { bgcolor: 'rgba(13,115,119,.06)' }, '&:hover .menu-icon': { color: '#0D7377', bgcolor: 'rgba(13,115,119,.1)' } }}>
                      <Box className="menu-icon" sx={{ width: 36, height: 36, borderRadius: 2, bgcolor: '#edf2fa', color: '#475569', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all .25s ease' }}>
                        <item.icon size={18} />
                      </Box>
                      <Box>
                        <Typography sx={{ color: '#182033', fontWeight: 700, fontSize: 16 }}>{item.title}</Typography>
                        <Typography sx={{ color: '#71819c', fontSize: 14 }}>{item.description}</Typography>
                      </Box>
                    </Box>
                  ))}
                </Stack>
              </Box>
            ))}

            <Box sx={{ borderRadius: 4, border: '1px solid #e2e9f5', bgcolor: '#f5f8ff', p: 3.5, display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ width: 56, height: 56, borderRadius: 3, bgcolor: '#2563eb', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2.5 }}>
                <Zap size={24} />
              </Box>
              <Typography sx={{ fontSize: 36, fontWeight: 500, color: '#111b31', lineHeight: 1.05, mb: 1.2 }}>
                {solutionsHighlight.title}
              </Typography>
              <Typography sx={{ color: '#5b6f8d', fontSize: 15, lineHeight: 1.6, mb: 3.5 }}>
                {solutionsHighlight.description}
              </Typography>
              <Box component={RouterLink} to={solutionsHighlight.href} onClick={() => setActiveMenu(null)} sx={{ 
                textDecoration: 'none', color: '#0D7377', fontWeight: 400, fontSize: 24, display: 'inline-flex', alignItems: 'center', transition: 'color .2s ease',
                '&:hover': { color: '#095c5f' }, '&:hover .arrow': { transform: 'translateX(6px)' }
              }}>
                View all solutions <ArrowRight className="arrow" size={20} style={{ marginLeft: 8, transition: 'transform .3s ease' }} />
              </Box>
            </Box>
          </Box>
        ) : null}

        {activeMenu === 'industries' ? (
          <Box
            onMouseEnter={() => setActiveMenu('industries')}
            sx={{
              mt: 2,
              borderRadius: 6,
              bgcolor: '#f9fbff',
              border: '1px solid #e4ebf7',
              boxShadow: '0 24px 50px rgba(17,24,39,.16)',
              p: { xs: 3, md: 4 },
              display: { xs: 'none', md: 'block' },
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2.5 }}>
              <Typography sx={{ fontSize: 12, fontWeight: 700, letterSpacing: '.14em', color: '#8b99b2' }}>
                SECTORAL EXPERTISE
              </Typography>
              <Box component={RouterLink} to="/industries" onClick={() => setActiveMenu(null)} sx={{ 
                textDecoration: 'none', color: '#0D7377', fontWeight: 800, fontSize: 16, display: 'inline-flex', alignItems: 'center', transition: 'color .2s ease',
                '&:hover': { color: '#095c5f' }, '&:hover .arrow': { transform: 'translateX(4px)' }
              }}>
                View all industries <ArrowRight className="arrow" size={14} style={{ marginLeft: 6, transition: 'transform .3s ease' }} />
              </Box>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 2 }}>
              {industriesMenuItems.map(item => (
                <Box key={item.slug} component={RouterLink} to={item.href} onClick={() => setActiveMenu(null)} sx={{ textDecoration: 'none', display: 'flex', gap: 1.4, alignItems: 'center', p: 1.6, borderRadius: 3, '&:hover': { bgcolor: 'rgba(13,115,119,.06)' }, '&:hover .menu-icon': { color: '#0D7377', bgcolor: 'rgba(13,115,119,.1)' } }}>
                  <Box className="menu-icon" sx={{ width: 40, height: 40, borderRadius: 2.5, bgcolor: '#eef2f8', color: '#475569', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all .25s ease' }}>
                    <item.icon size={18} />
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#182033', fontWeight: 700, fontSize: 15, lineHeight: 1.3 }}>{item.title}</Typography>
                    <Typography sx={{ color: '#8ca0bd', fontSize: 13, fontWeight: 700, letterSpacing: '.04em', textTransform: 'uppercase' }}>{item.description}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        ) : null}
      </Box>
    </Box>
  )
}
