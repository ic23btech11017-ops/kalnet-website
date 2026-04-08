import { Box, Button, Container, Stack, Typography, ThemeProvider, createTheme } from '@mui/material'
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion'
import { useEffect, useState } from 'react'
import type { MouseEvent as ReactMouseEvent } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import {
  Layers, Headphones,
  Zap, Eye, Shield, BarChart3, ArrowRight, Users,
  GraduationCap, Heart, Building2, Hotel,
  Target, GitBranch, Package, Lock, Settings, Workflow,
  Plug, Database, Rocket
} from 'lucide-react'

/* ─── Font ─── */
const FONT_DISPLAY = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
const FONT_BODY = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"

/* ─── Theme ─── */
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#0D7377', light: '#14FFEC', dark: '#085255' },
    background: { default: '#ffffff', paper: '#f5f6fa' },
    text: { primary: '#1a1a2e', secondary: '#6b7280' },
  },
  typography: {
    fontFamily: FONT_BODY,
    allVariants: { letterSpacing: '-0.01em' },
    button: { textTransform: 'none' as const, fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 999, textTransform: 'none', padding: '12px 28px', fontWeight: 700, fontSize: 15, transition: 'all .2s ease', fontFamily: FONT_BODY },
        contained: { backgroundColor: '#0D7377', color: '#fff', boxShadow: 'none', '&:hover': { backgroundColor: '#085255', boxShadow: '0 8px 24px rgba(13,115,119,.3)', transform: 'translateY(-1px)' } },
        outlined: { borderColor: '#0D7377', borderWidth: 2, color: '#0D7377', '&:hover': { borderWidth: 2, borderColor: '#085255', backgroundColor: 'rgba(13,115,119,.04)' } },
      },
    },
  },
})

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.15 }, transition: { duration: 0.55 } }

/* ─── App ─── */
function App() {
  const [navScrolled, setNavScrolled] = useState(false)
  const cursorX = useMotionValue(50)
  const cursorY = useMotionValue(40)
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 0.15], [0, 80])
  const backgroundY = useTransform(scrollYProgress, [0, 0.3], [0, 200])
  const smoothX = useSpring(cursorX, { stiffness: 50, damping: 28, mass: 0.8 })
  const smoothY = useSpring(cursorY, { stiffness: 50, damping: 28, mass: 0.8 })
  const spotlightLeft = useMotionTemplate`${smoothX}%`
  const spotlightTop = useMotionTemplate`${smoothY}%`
  const gridX = useTransform(smoothX, v => (v - 50) * 0.6)
  const gridY = useTransform(smoothY, v => (v - 50) * 0.6)

  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true, duration: 1.2, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
    const onScroll = () => setNavScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { lenis.destroy(); window.removeEventListener('scroll', onScroll) }
  }, [])

  const handleHeroMouse = (e: ReactMouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    cursorX.set(((e.clientX - rect.left) / rect.width) * 100)
    cursorY.set(((e.clientY - rect.top) / rect.height) * 100)
  }

  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ bgcolor: '#fff', color: '#1a1a2e', minHeight: '100vh' }}>

      {/* ═══════════ NAVBAR ═══════════ */}
      <Box component="nav" sx={{
        position: 'fixed', top: 16, left: '50%', transform: 'translateX(-50%)',
        width: 'calc(100% - 48px)', maxWidth: 880, zIndex: 1200,
        bgcolor: navScrolled ? 'rgba(10,10,10,.9)' : 'rgba(15,15,15,.6)',
        backdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,.08)',
        borderRadius: '999px', transition: 'all .3s ease',
        boxShadow: navScrolled ? '0 8px 32px rgba(0,0,0,.45)' : '0 4px 20px rgba(0,0,0,.25)',
      }}>
        <Container maxWidth={false} sx={{ py: 1.2, px: { xs: 2.5, md: 3.5 }, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: 22, letterSpacing: '-.03em', fontFamily: FONT_DISPLAY }}>KALNET</Typography>
          <Stack direction="row" spacing={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
            {['Platform', 'Industries', 'About', 'Contact'].map(l => (
              <Typography key={l} sx={{ color: 'rgba(255,255,255,.7)', fontSize: 14, fontWeight: 500, cursor: 'pointer', transition: 'color .2s', '&:hover': { color: '#14FFEC' } }}>{l}</Typography>
            ))}
          </Stack>
          <Button href="https://www.kalnet.co/request-demo" variant="contained" size="small"
            sx={{ bgcolor: '#0D7377', color: '#fff', fontWeight: 700, fontSize: 13, px: 3, '&:hover': { bgcolor: '#14FFEC', color: '#000' } }}>
            Get a Demo
          </Button>
        </Container>
      </Box>

      {/* ═══════════ 1. HERO ═══════════ */}
      <Box component="section"
        onMouseMove={handleHeroMouse}
        onMouseLeave={() => { cursorX.set(50); cursorY.set(40) }}
        sx={{
          position: 'relative', minHeight: '100svh', overflow: 'hidden',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          pt: { xs: 14, md: 12 }, pb: { xs: 14, md: 6 },
          bgcolor: '#111', color: '#fff',
        }}>
        {/* Aurora gradient */}
        <Box sx={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 70% at 65% 25%, rgba(13,115,119,.55) 0%, transparent 60%)', zIndex: 0 }} />
        <Box sx={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 75% 15%, rgba(20,255,236,.2) 0%, transparent 50%)', zIndex: 0 }} />
        <Box sx={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 50% 60% at 55% 40%, rgba(13,115,119,.3) 0%, transparent 55%)', zIndex: 0 }} />
        <Box sx={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 40% 35% at 80% 35%, rgba(20,255,236,.12) 0%, transparent 45%)', zIndex: 0 }} />
        <Box sx={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle 300px at 30% 70%, rgba(13,115,119,.15) 0%, transparent 50%)', zIndex: 0 }} />
        {/* Grid */}
        <motion.div style={{ position: 'absolute', inset: -40, x: gridX, y: gridY, pointerEvents: 'none', zIndex: 0, opacity: 0.04,
          background: 'repeating-linear-gradient(90deg, rgba(255,255,255,.25) 0 1px, transparent 1px 80px), repeating-linear-gradient(0deg, rgba(255,255,255,.25) 0 1px, transparent 1px 80px)', top: backgroundY }} />
        {/* Spotlight */}
        <motion.div style={{ position: 'absolute', left: spotlightLeft, top: spotlightTop, width: 700, height: 700, transform: 'translate(-50%,-50%)', borderRadius: '50%', pointerEvents: 'none', background: 'radial-gradient(circle, rgba(20,255,236,.1) 0%, transparent 55%)', filter: 'blur(40px)', zIndex: 0 }} />

        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} style={{ y: heroY, opacity: heroOpacity }}>
            <Typography sx={{ color: 'rgba(255,255,255,.4)', fontSize: 12, letterSpacing: '.16em', fontWeight: 600, mb: 3 }}>
              CRM &bull; ERP &bull; AUTOMATION &bull; INDUSTRY SYSTEMS
            </Typography>

            <Typography sx={{ fontSize: { xs: 36, md: 60 }, fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.035em', mb: 3, fontFamily: FONT_DISPLAY }}>
              All-in-one CRM & ERP<br />platform for <Box component="span" sx={{ color: '#14FFEC' }}>modern businesses</Box>
            </Typography>

            <Typography sx={{ color: 'rgba(255,255,255,.55)', fontSize: { xs: 16, md: 18 }, lineHeight: 1.65, mb: 5, maxWidth: 520, mx: 'auto' }}>
              Manage customers, operations, finance, and workflows in one unified system built for growing companies.
            </Typography>

            <Stack direction="row" gap={2} justifyContent="center" flexWrap="wrap" sx={{ mb: 5 }}>
              <Button href="https://www.kalnet.co/request-demo" variant="contained" size="large"
                sx={{ px: 5, py: 1.8, fontSize: 16, bgcolor: '#0D7377', boxShadow: '0 4px 20px rgba(13,115,119,.4)',
                '&:hover': { bgcolor: '#14FFEC', color: '#000', boxShadow: '0 8px 32px rgba(20,255,236,.35)', transform: 'translateY(-2px)' } }}>
                Get a Demo
                <ArrowRight size={16} style={{ marginLeft: 8 }} />
              </Button>
              <Button href="#modules" variant="outlined" size="large"
                sx={{ px: 4, py: 1.8, fontSize: 16, color: '#fff', borderColor: 'rgba(255,255,255,.25)', borderWidth: 2,
                '&:hover': { borderColor: '#14FFEC', color: '#14FFEC', bgcolor: 'rgba(20,255,236,.06)', borderWidth: 2 } }}>
                Explore Platform
              </Button>
            </Stack>

            <Stack direction="row" spacing={{ xs: 2, md: 4 }} justifyContent="center" alignItems="center" flexWrap="wrap">
              {[
                { Icon: Shield, text: 'Enterprise-grade security' },
                { Icon: Zap, text: 'Go live in 24 hours' },
                { Icon: Users, text: 'Trusted by 150+ businesses' },
              ].map((t, i) => (
                <Stack key={i} direction="row" spacing={1} alignItems="center">
                  <t.Icon size={13} color="#0D7377" />
                  <Typography sx={{ fontSize: 12, fontWeight: 500, letterSpacing: '.02em', color: 'rgba(255,255,255,.4)' }}>{t.text}</Typography>
                </Stack>
              ))}
            </Stack>
          </motion.div>
        </Container>
      </Box>

      {/* ═══════════ 2. PRODUCT MODULES ═══════════ */}
      <Box id="modules" component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: '#fff' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <motion.div {...fadeUp}>
              <Typography sx={{ fontSize: 11, fontWeight: 700, letterSpacing: '.14em', color: '#0D7377', mb: 2 }}>PLATFORM</Typography>
              <Typography sx={{ fontSize: { xs: 32, md: 46 }, fontWeight: 800, color: '#1a1a2e', fontFamily: FONT_DISPLAY }}>
                Everything you need to run your business
              </Typography>
            </motion.div>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' }, gap: 3 }}>
            {[
              { title: 'CRM System', desc: 'Manage leads, customers, and sales pipelines in one place.', Icon: Target, featured: true },
              { title: 'ERP System', desc: 'Control operations, finance, and internal workflows.', Icon: Layers, featured: false },
              { title: 'Finance & Billing', desc: 'Handle invoices, payments, and financial tracking with ease.', Icon: BarChart3, featured: false },
              { title: 'HR & Workforce', desc: 'Manage employees, roles, and payroll efficiently.', Icon: Users, featured: false },
              { title: 'Workflow Automation', desc: 'Automate repetitive processes and improve efficiency.', Icon: Workflow, featured: false },
              { title: 'Industry Solutions', desc: 'Pre-built systems tailored for your business domain.', Icon: Building2, featured: false },
            ].map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <Box sx={{
                  p: 4, borderRadius: 4, height: '100%', transition: 'all .25s',
                  bgcolor: m.featured ? '#111' : '#fafafa',
                  border: m.featured ? '1px solid #333' : '1px solid #f0f0f0',
                  '&:hover': { transform: 'translateY(-4px)', boxShadow: m.featured ? '0 16px 40px rgba(0,0,0,.3)' : '0 12px 32px rgba(0,0,0,.06)', borderColor: '#0D7377' },
                }}>
                  <Box sx={{ width: 48, height: 48, borderRadius: 3, bgcolor: m.featured ? 'rgba(20,255,236,.15)' : 'rgba(13,115,119,.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
                    <m.Icon size={22} color={m.featured ? '#14FFEC' : '#0D7377'} />
                  </Box>
                  <Typography sx={{ fontSize: 19, fontWeight: 800, mb: 1.5, color: m.featured ? '#fff' : '#1a1a2e', fontFamily: FONT_DISPLAY }}>{m.title}</Typography>
                  <Typography sx={{ fontSize: 14, color: m.featured ? 'rgba(255,255,255,.55)' : '#6b7280', lineHeight: 1.65 }}>{m.desc}</Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ═══════════ 3. INDUSTRY SECTION ═══════════ */}
      <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: '#f5f6fa' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <motion.div {...fadeUp}>
              <Typography sx={{ fontSize: 11, fontWeight: 700, letterSpacing: '.14em', color: '#0D7377', mb: 2 }}>INDUSTRY-READY</Typography>
              <Typography sx={{ fontSize: { xs: 32, md: 46 }, fontWeight: 800, color: '#1a1a2e', fontFamily: FONT_DISPLAY }}>
                Built for your industry
              </Typography>
              <Typography sx={{ fontSize: 17, color: '#6b7280', mt: 2, maxWidth: 520, mx: 'auto', lineHeight: 1.6 }}>
                Pre-built, customizable systems designed for real-world business needs.
              </Typography>
            </motion.div>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' }, gap: 3 }}>
            {[
              { title: 'Healthcare Management System', desc: 'Patient records, billing, pharmacy, and appointments.', Icon: Heart, link: '/healthcare-erp' },
              { title: 'Hotel Management ERP', desc: 'Reservations, billing, housekeeping, and guest services.', Icon: Hotel, link: '/hotel-management-system' },
              { title: 'Coaching Institute ERP', desc: 'Student management, fees, attendance, and performance.', Icon: GraduationCap, link: '/coaching-erp' },
              { title: 'Cybersecurity Management', desc: 'Compliance tracking, risk assessment, and audit systems.', Icon: Shield, link: '/cybersecurity' },
            ].map((ind, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <Box sx={{ p: 4, bgcolor: '#fff', borderRadius: 4, border: '1px solid #f0f0f0', height: '100%', transition: 'all .25s', cursor: 'pointer',
                  '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 12px 32px rgba(0,0,0,.06)', borderColor: '#0D7377' } }}>
                  <Box sx={{ width: 48, height: 48, borderRadius: 3, bgcolor: 'rgba(13,115,119,.06)', color: '#0D7377', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
                    <ind.Icon size={22} />
                  </Box>
                  <Typography sx={{ fontSize: 17, fontWeight: 800, mb: 1, color: '#1a1a2e', fontFamily: FONT_DISPLAY }}>{ind.title}</Typography>
                  <Typography sx={{ fontSize: 14, color: '#6b7280', lineHeight: 1.6 }}>{ind.desc}</Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
          <motion.div {...fadeUp}>
            <Box sx={{ textAlign: 'center', mt: 6 }}>
              <Button href="https://www.kalnet.co/industries" variant="contained" size="large"
                sx={{ px: 5, py: 1.8, fontSize: 16, bgcolor: '#0D7377', boxShadow: '0 4px 20px rgba(13,115,119,.35)',
                '&:hover': { bgcolor: '#14FFEC', color: '#000', boxShadow: '0 8px 32px rgba(20,255,236,.3)' } }}>
                Explore All Industries
                <ArrowRight size={18} style={{ marginLeft: 8 }} />
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* ═══════════ 4. FEATURES ═══════════ */}
      <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: '#fff' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <motion.div {...fadeUp}>
              <Typography sx={{ fontSize: 11, fontWeight: 700, letterSpacing: '.14em', color: '#0D7377', mb: 2 }}>FEATURES</Typography>
              <Typography sx={{ fontSize: { xs: 32, md: 46 }, fontWeight: 800, color: '#1a1a2e', fontFamily: FONT_DISPLAY }}>
                Powerful features to simplify your operations
              </Typography>
            </motion.div>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' }, gap: 2.5 }}>
            {[
              { title: 'Lead Management', Icon: Target },
              { title: 'Sales Pipeline Tracking', Icon: GitBranch },
              { title: 'Inventory Management', Icon: Package },
              { title: 'Financial Reports & Analytics', Icon: BarChart3 },
              { title: 'Role-Based Access Control', Icon: Lock },
              { title: 'Workflow Automation', Icon: Workflow },
              { title: 'Multi-Department Coordination', Icon: Users },
            ].map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}>
                <Box sx={{ p: 3, bgcolor: '#fafafa', borderRadius: 4, border: '1px solid #f0f0f0', display: 'flex', alignItems: 'center', gap: 2, transition: 'all .2s',
                  '&:hover': { bgcolor: '#fff', boxShadow: '0 4px 16px rgba(0,0,0,.04)', borderColor: '#0D7377' } }}>
                  <Box sx={{ width: 40, height: 40, borderRadius: 2.5, bgcolor: 'rgba(13,115,119,.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <f.Icon size={18} color="#0D7377" />
                  </Box>
                  <Typography sx={{ fontSize: 15, fontWeight: 700, color: '#1a1a2e' }}>{f.title}</Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ═══════════ 5. POSITIONING BLOCK ═══════════ */}
      <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: '#111', color: '#fff', borderRadius: { xs: 0, md: '40px 40px 0 0' } }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <motion.div {...fadeUp}>
            <Typography sx={{ fontSize: { xs: 28, md: 42 }, fontWeight: 800, lineHeight: 1.2, mb: 3, fontFamily: FONT_DISPLAY }}>
              Not just software.<br /><Box component="span" sx={{ color: '#14FFEC' }}>Your complete business operating system.</Box>
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,.55)', fontSize: { xs: 16, md: 18 }, lineHeight: 1.7, mb: 4, maxWidth: 600, mx: 'auto' }}>
              Kalnet combines CRM, ERP, and automation into one unified platform, helping businesses streamline operations, manage customers, and scale efficiently without complexity.
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,.35)', fontSize: 15, fontStyle: 'italic', maxWidth: 540, mx: 'auto' }}>
              Unlike traditional tools, Kalnet adapts to your business instead of forcing you to adapt to the software.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* ═══════════ 6. HOW IT WORKS ═══════════ */}
      <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: '#111', color: '#fff' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <motion.div {...fadeUp}>
              <Typography sx={{ fontSize: 11, fontWeight: 700, letterSpacing: '.14em', color: '#14FFEC', mb: 2 }}>PROCESS</Typography>
              <Typography sx={{ fontSize: { xs: 32, md: 46 }, fontWeight: 800, fontFamily: FONT_DISPLAY }}>
                How Kalnet works
              </Typography>
              <Typography sx={{ color: 'rgba(255,255,255,.45)', fontSize: 17, mt: 2, maxWidth: 540, mx: 'auto' }}>
                From understanding your business to delivering a fully functional system — all within 24 hours.
              </Typography>
            </motion.div>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(5, 1fr)' }, gap: 2.5 }}>
            {[
              { step: '01', title: 'Understand Your Business', desc: 'We analyze your workflows, challenges, and requirements to identify what your system needs.', Icon: Eye },
              { step: '02', title: 'Configure Your Platform', desc: 'We customize CRM, ERP modules, dashboards, and workflows tailored to your operations.', Icon: Settings },
              { step: '03', title: 'Integrate Your Tools', desc: 'We connect third-party services like payments, communication tools, and external systems.', Icon: Plug },
              { step: '04', title: 'Data Setup & Backend', desc: 'We handle data entry, migration, and backend setup so everything is ready from day one.', Icon: Database },
              { step: '05', title: 'Go Live in 24 Hours', desc: 'Your system is deployed and ready to use — no long development cycles.', Icon: Rocket },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Box sx={{ p: 3.5, bgcolor: '#1a1a1a', borderRadius: 4, border: '1px solid #252525', height: '100%', transition: 'all .25s',
                  '&:hover': { borderColor: '#0D7377', transform: 'translateY(-3px)' } }}>
                  <Typography sx={{ fontSize: 13, fontWeight: 800, color: '#0D7377', mb: 2 }}>{s.step}</Typography>
                  <Box sx={{ width: 40, height: 40, borderRadius: 2.5, bgcolor: '#252525', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2.5 }}>
                    <s.Icon size={18} color="#14FFEC" />
                  </Box>
                  <Typography sx={{ fontSize: 16, fontWeight: 800, mb: 1.5, fontFamily: FONT_DISPLAY }}>{s.title}</Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,.45)', fontSize: 13, lineHeight: 1.6 }}>{s.desc}</Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
          <motion.div {...fadeUp}>
            <Box sx={{ textAlign: 'center', mt: 6 }}>
              <Typography sx={{ color: 'rgba(255,255,255,.35)', fontSize: 14, mb: 4 }}>
                No complex setup. No delays. Just a ready-to-use system tailored to your business.
              </Typography>
              <Button href="https://www.kalnet.co/request-demo" variant="contained" size="large"
                sx={{ px: 4.5, py: 1.6, bgcolor: '#0D7377', '&:hover': { bgcolor: '#14FFEC', color: '#000' } }}>
                Get Your System Setup in 24 Hours
                <ArrowRight size={16} style={{ marginLeft: 8 }} />
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* ═══════════ 7. WHY KALNET ═══════════ */}
      <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: '#fff' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <motion.div {...fadeUp}>
              <Typography sx={{ fontSize: 11, fontWeight: 700, letterSpacing: '.14em', color: '#0D7377', mb: 2 }}>WHY KALNET</Typography>
              <Typography sx={{ fontSize: { xs: 32, md: 46 }, fontWeight: 800, color: '#1a1a2e', fontFamily: FONT_DISPLAY }}>
                Why businesses choose Kalnet
              </Typography>
            </motion.div>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 3 }}>
            {[
              { title: 'All-in-one CRM & ERP platform', desc: 'No more juggling between 5 different apps. Everything runs from one dashboard.', Icon: Layers },
              { title: 'Fully customizable to your needs', desc: 'Every module, workflow, and dashboard adapts to how your business operates.', Icon: Settings },
              { title: 'Fast deployment within 24 hours', desc: 'Your complete system is configured, tested, and live in under a day.', Icon: Zap },
              { title: 'Scalable as your business grows', desc: 'Start with what you need, add modules as you expand — no migration hassle.', Icon: BarChart3 },
              { title: 'Industry-specific solutions', desc: 'Purpose-built for Healthcare, Hospitality, Education, and more.', Icon: Building2 },
              { title: 'Dedicated support', desc: 'A real team behind you — not just a chatbot. We are your technology partner.', Icon: Headphones },
            ].map((w, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <Box sx={{ p: 4, bgcolor: '#fafafa', borderRadius: 4, border: '1px solid #f0f0f0', height: '100%', display: 'flex', gap: 3, alignItems: 'flex-start' }}>
                  <Box sx={{ width: 44, height: 44, borderRadius: 3, bgcolor: 'rgba(13,115,119,.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, mt: 0.5 }}>
                    <w.Icon size={20} color="#0D7377" />
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: 16, fontWeight: 800, mb: 1, color: '#1a1a2e', fontFamily: FONT_DISPLAY }}>{w.title}</Typography>
                    <Typography sx={{ fontSize: 14, color: '#6b7280', lineHeight: 1.6 }}>{w.desc}</Typography>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ═══════════ 8. CTA SECTION ═══════════ */}
      <Box component="section" sx={{ py: { xs: 12, md: 16 }, position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #0D7377 0%, #085255 50%, #111 100%)', zIndex: 0 }} />
        <Box sx={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle 500px at 80% 30%, rgba(20,255,236,.15) 0%, transparent 50%)', zIndex: 0 }} />
        <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div {...fadeUp}>
            <Typography sx={{ fontSize: { xs: 32, md: 48 }, fontWeight: 800, color: '#fff', mb: 3, fontFamily: FONT_DISPLAY }}>
              Ready to streamline your business?
            </Typography>
            <Typography sx={{ fontSize: 17, color: 'rgba(255,255,255,.6)', mb: 6, lineHeight: 1.6 }}>
              Get started with a powerful CRM & ERP system tailored to your business needs.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} gap={2} justifyContent="center">
              <Button href="https://www.kalnet.co/request-demo" variant="contained" size="large"
                sx={{ px: 5, py: 1.8, fontSize: 16, bgcolor: '#fff', color: '#0D7377', '&:hover': { bgcolor: '#14FFEC', color: '#000' } }}>
                Book a Demo
              </Button>
              <Button href="https://www.kalnet.co/contact" variant="outlined" size="large"
                sx={{ px: 4, py: 1.8, fontSize: 16, color: '#fff', borderColor: 'rgba(255,255,255,.3)', borderWidth: '1.5px',
                '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,.08)', borderWidth: '1.5px' } }}>
                Get Free Consultation
              </Button>
            </Stack>
          </motion.div>
        </Container>
      </Box>

      {/* ═══════════ 9. FOOTER ═══════════ */}
      <Box component="footer" sx={{ bgcolor: '#0a0a0a', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        {/* SEO block */}
        <Container maxWidth="md" sx={{ pt: 8, pb: 4, textAlign: 'center' }}>
          <Typography sx={{ color: 'rgba(255,255,255,.2)', fontSize: 13, lineHeight: 1.8, maxWidth: 640, mx: 'auto' }}>
            Kalnet is a powerful CRM and ERP software platform designed to help businesses manage operations, customer relationships, finance, and workflows in one place. Our business management system is built for scalability, automation, and efficiency across industries.
          </Typography>
        </Container>
        {/* Massive KALNET watermark */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pt: 4, pb: 4, position: 'relative' }}>
          <Typography sx={{
            fontSize: { xs: '20vw', md: '16vw' }, fontWeight: 900,
            color: 'rgba(255,255,255,.04)', letterSpacing: '-0.04em',
            fontFamily: FONT_DISPLAY, lineHeight: 1, userSelect: 'none',
          }}>
            KALNET
          </Typography>
        </Box>
        {/* Bottom bar */}
        <Box sx={{ borderTop: '1px solid rgba(255,255,255,.08)', py: 3 }}>
          <Container maxWidth="lg">
            <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems="center" spacing={2}>
              <Typography sx={{ color: 'rgba(255,255,255,.4)', fontSize: 13 }}>
                &copy; 2026 <Box component="span" sx={{ fontWeight: 700, color: 'rgba(255,255,255,.6)' }}>TAYOG Pvt. Ltd.</Box> All rights reserved.
              </Typography>
              <Stack direction="row" spacing={4}>
                {['Privacy', 'Terms', 'Sitemap'].map(l => (
                  <Typography key={l} sx={{ color: 'rgba(255,255,255,.4)', fontSize: 13, cursor: 'pointer', '&:hover': { color: '#14FFEC' } }}>{l}</Typography>
                ))}
              </Stack>
              <Typography sx={{ color: 'rgba(255,255,255,.4)', fontSize: 13 }}>Made in India</Typography>
            </Stack>
          </Container>
        </Box>
      </Box>

    </Box>
    </ThemeProvider>
  )
}

export default App

