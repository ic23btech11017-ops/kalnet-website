import { Box, Button, Container, Stack, Typography, ThemeProvider, createTheme, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion'
import { useEffect, useState, useRef, useCallback } from 'react'
import type { MouseEvent as ReactMouseEvent } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import {
  ChevronUp, Monitor, Smartphone, Layers, Settings, Code,
  Search, Headphones, CheckCircle, Star, HelpCircle,
  Mail, Zap, Eye, FileText, Sparkles,
  Shield, BarChart3, ClipboardList, Clock, Check, Brain,
  GraduationCap, Heart, Building2, Hotel, Factory, ShoppingCart, Landmark, CreditCard,
  ArrowRight, Users
} from 'lucide-react'

/* ─── Font family tokens ─── */
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
    h1: { fontFamily: FONT_DISPLAY, fontWeight: 800, letterSpacing: '-0.03em', fontOpticalSizing: 'auto' },
    h2: { fontFamily: FONT_DISPLAY, fontWeight: 800, letterSpacing: '-0.03em', fontOpticalSizing: 'auto' },
    h3: { fontFamily: FONT_DISPLAY, fontWeight: 700, letterSpacing: '-0.02em' },
    h4: { fontFamily: FONT_DISPLAY, fontWeight: 700, letterSpacing: '-0.02em' },
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
        width: 'calc(100% - 40px)', maxWidth: 1200, zIndex: 1200,
        bgcolor: navScrolled ? 'rgba(10,10,10,.88)' : 'rgba(15,15,15,.55)',
        backdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,.08)',
        borderRadius: '999px', transition: 'all .3s ease',
        boxShadow: navScrolled ? '0 8px 32px rgba(0,0,0,.4)' : 'none',
      }}>
        <Container maxWidth={false} sx={{ py: 1.2, px: { xs: 2.5, md: 3.5 }, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: 22, letterSpacing: '-.03em', fontFamily: FONT_DISPLAY }}>KALNET</Typography>
          <Stack direction="row" spacing={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
            {['Solutions', 'Industries', 'About', 'Careers'].map(l => (
              <Typography key={l} sx={{ color: 'rgba(255,255,255,.7)', fontSize: 14, fontWeight: 500, cursor: 'pointer', transition: 'color .2s', '&:hover': { color: '#14FFEC' } }}>{l}</Typography>
            ))}
          </Stack>
          <Button href="https://www.kalnet.co/request-demo" variant="contained" size="small"
            sx={{ bgcolor: '#0D7377', color: '#fff', fontWeight: 700, fontSize: 13, px: 3, '&:hover': { bgcolor: '#14FFEC', color: '#000' } }}>
            Request Demo
          </Button>
        </Container>
      </Box>

      {/* ═══════════ HERO (full-bleed) ═══════════ */}
      <Box component="section"
        onMouseMove={handleHeroMouse}
        onMouseLeave={() => { cursorX.set(50); cursorY.set(40) }}
        sx={{
          position: 'relative', minHeight: '100svh',
          overflow: 'hidden',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          pt: { xs: 16, md: 0 }, pb: { xs: 14, md: 6 },
          bgcolor: '#111', color: '#fff',
        }}>
        {/* Base: solid dark */}
        {/* Teal accent blobs scattered across the hero */}
        <Box sx={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle 600px at 20% 80%, rgba(13,115,119,.25) 0%, transparent 60%)', zIndex: 0 }} />
        <Box sx={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle 500px at 75% 20%, rgba(20,255,236,.08) 0%, transparent 55%)', zIndex: 0 }} />
        <Box sx={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle 400px at 50% 60%, rgba(13,115,119,.12) 0%, transparent 50%)', zIndex: 0 }} />
        <Box sx={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle 350px at 85% 70%, rgba(20,255,236,.06) 0%, transparent 45%)', zIndex: 0 }} />
        {/* Tech grid */}
        <motion.div style={{ position: 'absolute', inset: -40, x: gridX, y: gridY, pointerEvents: 'none', zIndex: 0, opacity: 0.04,
          background: 'repeating-linear-gradient(90deg, rgba(255,255,255,.25) 0 1px, transparent 1px 80px), repeating-linear-gradient(0deg, rgba(255,255,255,.25) 0 1px, transparent 1px 80px)', top: backgroundY }} />
        {/* Cursor spotlight */}
        <motion.div style={{ position: 'absolute', left: spotlightLeft, top: spotlightTop, width: 700, height: 700, transform: 'translate(-50%,-50%)', borderRadius: '50%', pointerEvents: 'none', background: 'radial-gradient(circle, rgba(20,255,236,.1) 0%, transparent 55%)', filter: 'blur(40px)', zIndex: 0 }} />
        {/* Bottom fade: black → grey → white */}
        <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 200, background: 'linear-gradient(to bottom, transparent 0%, #1a1a1a 30%, #3a3a3a 55%, #8a8a8a 72%, #d0d0d0 86%, #ffffff 100%)', zIndex: 0 }} />

        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} style={{ y: heroY, opacity: heroOpacity }}>
            {/* Badge */}
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 2.5, py: 0.8, borderRadius: 2, bgcolor: 'rgba(20,255,236,.08)', border: '1px solid rgba(20,255,236,.18)', mb: 4 }}>
              <Layers size={13} color="#14FFEC" />
              <Typography sx={{ color: '#14FFEC', fontSize: 12, letterSpacing: '.14em', fontWeight: 700 }}>THE DIGITAL OPERATING SYSTEM</Typography>
            </Box>

            <Typography sx={{ fontSize: { xs: 40, md: 68 }, fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.035em', mb: 3, fontFamily: FONT_DISPLAY }}>
              Run your entire business<br />on <Box component="span" sx={{ color: '#14FFEC' }}>one platform</Box>
            </Typography>

            <Typography sx={{ color: 'rgba(255,255,255,.6)', fontSize: { xs: 16, md: 18 }, lineHeight: 1.65, mb: 5, maxWidth: 520, mx: 'auto' }}>
              CRM, ERP, finance, HR, inventory, and automation — unified in a single platform purpose-built for modern enterprises.
            </Typography>

            <Stack direction="row" gap={2} justifyContent="center" flexWrap="wrap" sx={{ mb: 6 }}>
              <Button href="https://www.kalnet.co/request-demo" variant="contained" size="large"
                sx={{ px: 4.5, py: 1.6, fontSize: 15, bgcolor: '#0D7377', '&:hover': { bgcolor: '#14FFEC', color: '#000' } }}>
                Request a Demo
                <ArrowRight size={16} style={{ marginLeft: 8 }} />
              </Button>
              <Button href="#advantage" variant="outlined" size="large"
                sx={{ px: 3.5, py: 1.6, fontSize: 15, color: 'rgba(255,255,255,.85)', borderColor: 'rgba(255,255,255,.2)', borderWidth: '1.5px',
                '&:hover': { borderColor: 'rgba(255,255,255,.5)', bgcolor: 'rgba(255,255,255,.06)', borderWidth: '1.5px' } }}>
                See How It Works
              </Button>
            </Stack>

            {/* Trust strip */}
            <Stack direction="row" spacing={4} justifyContent="center" alignItems="center" flexWrap="wrap">
              {[
                { Icon: Shield, text: 'Enterprise-grade security' },
                { Icon: Users, text: 'Trusted by 150+ businesses' },
                { Icon: Zap, text: 'Deploy in 2 weeks' },
              ].map((t, i) => (
                <Stack key={i} direction="row" spacing={1} alignItems="center" sx={{ opacity: 0.45 }}>
                  <t.Icon size={14} />
                  <Typography sx={{ fontSize: 12, fontWeight: 500, letterSpacing: '.02em' }}>{t.text}</Typography>
                </Stack>
              ))}
            </Stack>
          </motion.div>
        </Container>
      </Box>

      {/* ═══════════ HEADLINE BANNER ═══════════ */}
      <Box component="section" sx={{ py: { xs: 6, md: 8 }, bgcolor: '#fff', textAlign: 'center' }}>
        <Container maxWidth="md">
          <motion.div {...fadeUp}>
            <Typography sx={{ fontSize: { xs: 28, md: 42 }, fontWeight: 800, color: '#1a1a2e', lineHeight: 1.2, fontFamily: FONT_DISPLAY }}>
              Manage your entire business from <Box component="span" sx={{ color: '#0D7377' }}>one dashboard</Box>
            </Typography>
            <Typography sx={{ fontSize: { xs: 15, md: 17 }, color: '#6b7280', mt: 2, lineHeight: 1.6 }}>
              CRM, ERP, finance, HR, inventory, and automation — unified in a single platform built for Indian enterprises.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* ═══════════ STATS ═══════════ */}
      <Box id="stats" component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#f5f6fa' }}>
        <Container maxWidth="lg">
          <motion.div {...fadeUp}>
          <Stack direction={{ xs: 'column', md: 'row' }} gap={6} alignItems="center">
            <Box sx={{ flex: 1 }}>
              <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, bgcolor: 'rgba(13,115,119,.08)', color: '#0D7377', px: 2, py: 0.8, borderRadius: 2, mb: 3, fontSize: 13, fontWeight: 700 }}>
                <Layers size={14} /> Kalnet in Numbers
              </Box>
              <Typography sx={{ fontSize: { xs: 30, md: 38 }, fontWeight: 800, color: '#1a1a2e', lineHeight: 1.2, mb: 1, fontFamily: FONT_DISPLAY }}>
                Trusted by Leading Enterprises
              </Typography>
              <Typography sx={{ fontSize: { xs: 22, md: 28 }, fontWeight: 500, color: '#9ca3af', lineHeight: 1.3 }}>
                Across India & Worldwide
              </Typography>
            </Box>
            <Box sx={{ flex: 1.2, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
              {[
                { num: 150, suffix: '+', label: 'Projects Completed', Icon: CheckCircle },
                { num: 95, suffix: '%', label: 'Client Success Rate', Icon: Star },
                { num: 24, suffix: '/7', label: 'Continuous Support', Icon: Headphones },
              ].map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <Box sx={{ p: 3, bgcolor: '#fff', borderRadius: 4, border: '1px solid #f0f0f0', height: '100%' }}>
                    <Box sx={{ width: 36, height: 36, borderRadius: '50%', bgcolor: 'rgba(13,115,119,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2.5 }}>
                      <s.Icon size={18} color="#0D7377" />
                    </Box>
                    <Typography sx={{ fontSize: 30, fontWeight: 800, color: '#1a1a2e', mb: 0.3, fontFamily: FONT_DISPLAY }}>
                      <CountUp target={s.num} suffix={s.suffix} />
                    </Typography>
                    <Typography sx={{ fontSize: 13, color: '#9ca3af', fontWeight: 500 }}>{s.label}</Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Stack>
          </motion.div>
        </Container>
      </Box>

      {/* ═══════════ CURRENT LANDSCAPE vs KALNET ADVANTAGE ═══════════ */}
      <Box id="advantage" component="section" sx={{ py: { xs: 8, md: 14 }, bgcolor: '#fff' }}>
        <Container maxWidth="lg">
          <motion.div {...fadeUp}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 0, borderRadius: 5, overflow: 'hidden', border: '1px solid #e5e7eb' }}>
            {/* Left — Current Landscape */}
            <Box sx={{ p: { xs: 4, md: 6 }, bgcolor: '#fafafa' }}>
              <Typography sx={{ fontSize: 11, fontWeight: 700, letterSpacing: '.14em', color: '#9ca3af', mb: 3 }}>CURRENT LANDSCAPE</Typography>
              <Typography sx={{ fontSize: { xs: 26, md: 32 }, fontWeight: 800, color: '#1a1a2e', mb: 2, lineHeight: 1.2, fontFamily: FONT_DISPLAY }}>
                Manual work, scattered data
              </Typography>
              <Typography sx={{ color: '#6b7280', fontSize: 15, lineHeight: 1.6, mb: 5 }}>
                Hours wasted on repetitive tasks, jumping between systems, and chasing information across departments.
              </Typography>
              <Stack spacing={2}>
                {[
                  { Icon: ClipboardList, text: 'Scattered spreadsheets' },
                  { Icon: Mail, text: 'Endless email chains' },
                  { Icon: Clock, text: 'Manual data entry' },
                ].map((item, i) => (
                  <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2.5, bgcolor: '#fff', borderRadius: 3, border: '1px solid #f0f0f0' }}>
                    <Box sx={{ width: 40, height: 40, borderRadius: 2.5, bgcolor: '#f5f6fa', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <item.Icon size={18} color="#9ca3af" />
                    </Box>
                    <Typography sx={{ fontSize: 15, fontWeight: 600, color: '#4b5563' }}>{item.text}</Typography>
                  </Box>
                ))}
              </Stack>
            </Box>

            {/* Right — Kalnet Advantage */}
            <Box sx={{ p: { xs: 4, md: 6 }, bgcolor: '#0f1729', color: '#fff' }}>
              <Typography sx={{ fontSize: 11, fontWeight: 700, letterSpacing: '.14em', color: '#14FFEC', mb: 3 }}>THE KALNET ADVANTAGE</Typography>
              <Typography sx={{ fontSize: { xs: 26, md: 32 }, fontWeight: 800, mb: 2, lineHeight: 1.2, fontFamily: FONT_DISPLAY }}>
                One AI workspace for everything
              </Typography>
              <Typography sx={{ color: 'rgba(255,255,255,.6)', fontSize: 15, lineHeight: 1.6, mb: 5 }}>
                A unified platform where operations, data, and insights come together — powered by intelligent automation.
              </Typography>
              <Stack spacing={2}>
                {[
                  { Icon: Zap, text: 'AI-powered automation' },
                  { Icon: BarChart3, text: 'Real-time insights' },
                  { Icon: Shield, text: 'Enterprise security' },
                ].map((item, i) => (
                  <Box key={i} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2, p: 2.5, bgcolor: 'rgba(255,255,255,.04)', borderRadius: 3, border: '1px solid rgba(255,255,255,.08)' }}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Box sx={{ width: 40, height: 40, borderRadius: 2.5, bgcolor: 'rgba(20,255,236,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <item.Icon size={18} color="#14FFEC" />
                      </Box>
                      <Typography sx={{ fontSize: 15, fontWeight: 600 }}>{item.text}</Typography>
                    </Stack>
                    <Check size={18} color="#14FFEC" />
                  </Box>
                ))}
              </Stack>
            </Box>
          </Box>
          </motion.div>
        </Container>
      </Box>

      {/* ═══════════ AI CAPABILITIES (Feature Cards) ═══════════ */}
      <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: '#f5f6fa' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, bgcolor: 'rgba(13,115,119,.08)', color: '#0D7377', px: 2, py: 0.8, borderRadius: 2, mb: 3, fontSize: 13, fontWeight: 700 }}>
              <Brain size={14} /> Platform Intelligence
            </Box>
            <Typography sx={{ fontSize: { xs: 32, md: 46 }, fontWeight: 800, color: '#1a1a2e', fontFamily: FONT_DISPLAY }}>
              Automate decisions with built-in AI
            </Typography>
            <Typography sx={{ fontSize: 17, color: '#6b7280', mt: 2, maxWidth: 620, mx: 'auto', lineHeight: 1.6 }}>
              From predictive analytics to natural language queries — intelligence is embedded in every module.
            </Typography>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 3 }}>
            {[
              { title: 'Natural Language Interface', desc: 'Ask questions in plain English. Get reports, data, and insights without writing a single query.', Icon: Search },
              { title: 'Predictive Intelligence', desc: 'Forecast dropout risk, patient outcomes, or sales trends before they become problems.', Icon: BarChart3 },
              { title: 'Workflow Automation', desc: 'Automate approvals, notifications, and routine tasks. Reduce manual work by up to 70%.', Icon: Zap },
              { title: 'Anomaly Detection', desc: 'Identify unusual patterns in real-time — from billing discrepancies to attendance fraud.', Icon: Eye },
              { title: 'Document Intelligence', desc: 'Extract data from documents, receipts, and forms automatically with AI-powered OCR.', Icon: FileText },
              { title: 'Smart Recommendations', desc: 'Get AI-suggested optimizations for resources, inventory, and operational efficiency.', Icon: Sparkles },
            ].map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <Box sx={{ p: 4, bgcolor: '#fff', borderRadius: 4, border: '1px solid #f0f0f0', height: '100%', transition: 'all .25s', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 12px 32px rgba(0,0,0,.06)' } }}>
                  <Box sx={{ width: 44, height: 44, borderRadius: 3, bgcolor: i === 5 ? '#FEF9C3' : 'rgba(13,115,119,.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3, color: i === 5 ? '#d97706' : '#0D7377' }}>
                    <f.Icon size={20} />
                  </Box>
                  <Typography sx={{ fontSize: 18, fontWeight: 800, mb: 1.5, color: '#1a1a2e', fontFamily: FONT_DISPLAY }}>{f.title}</Typography>
                  <Typography sx={{ fontSize: 14, color: '#6b7280', lineHeight: 1.65 }}>{f.desc}</Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ═══════════ PLATFORM MODULES (Dark) ═══════════ */}
      <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: '#111111', color: '#fff', borderRadius: { xs: 0, md: '40px 40px 0 0' } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 2, py: 1, bgcolor: '#1e1e1e', border: '1px solid #333', borderRadius: 2, mb: 3, fontSize: 13, fontWeight: 600 }}>
              <Layers size={14} color="#14FFEC" /> Platform Modules
            </Box>
            <Typography sx={{ fontSize: { xs: 32, md: 48 }, fontWeight: 800, fontFamily: FONT_DISPLAY }}>
              Replace 5 tools with <Box component="span" sx={{ color: '#14FFEC' }}>one platform</Box>
            </Typography>
            <Typography sx={{ fontSize: 17, color: 'rgba(255,255,255,.5)', mt: 2, maxWidth: 560, mx: 'auto', lineHeight: 1.6 }}>
              Stop juggling disconnected software. Kalnet brings CRM, ERP, finance, HR, and inventory into a single system.
            </Typography>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2.5 }}>
            {[
              { title: 'CRM Software', desc: 'Manage leads, deals, and customer relationships with smart pipelines and automation.', Icon: Monitor },
              { title: 'ERP Software', desc: 'Unified resource planning across finance, inventory, HR, and procurement.', Icon: Layers },
              { title: 'Finance & Billing', desc: 'Automated invoicing, payment tracking, and real-time financial reporting.', Icon: BarChart3 },
              { title: 'HR & Payroll', desc: 'Employee management, attendance tracking, payroll processing, and compliance.', Icon: Smartphone },
              { title: 'Inventory Management', desc: 'Real-time stock levels, automated reordering, and multi-warehouse support.', Icon: Settings },
              { title: 'Workflow Automation', desc: 'Build custom workflows, automate approvals, and eliminate repetitive processes.', Icon: Code },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Box sx={{ p: 4, bgcolor: '#1a1a1a', borderRadius: 4, border: '1px solid #252525', height: '100%', transition: 'all .25s', '&:hover': { borderColor: '#0D7377', transform: 'translateY(-4px)' } }}>
                  <Box sx={{ width: 44, height: 44, borderRadius: 2.5, bgcolor: '#252525', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3.5, color: '#fff' }}>
                    <s.Icon size={20} />
                  </Box>
                  <Typography sx={{ fontSize: 20, fontWeight: 800, mb: 1.5, fontFamily: FONT_DISPLAY }}>{s.title}</Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,.5)', fontSize: 14, lineHeight: 1.6 }}>{s.desc}</Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ═══════════ INDUSTRY SOLUTIONS (Light) ═══════════ */}
      <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: '#fff' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography sx={{ fontSize: 11, fontWeight: 700, letterSpacing: '.14em', color: '#0D7377', mb: 2 }}>INDUSTRY-READY</Typography>
            <Typography sx={{ fontSize: { xs: 32, md: 46 }, fontWeight: 800, color: '#1a1a2e', fontFamily: FONT_DISPLAY }}>
              Not generic tools — purpose-built systems
            </Typography>
            <Typography sx={{ fontSize: 17, color: '#6b7280', mt: 2, maxWidth: 600, mx: 'auto', lineHeight: 1.6 }}>
              Unlike one-size-fits-all platforms, Kalnet delivers industry-specific modules with workflows designed for your sector.
            </Typography>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' }, gap: 2.5 }}>
            {[
              { title: 'Education', desc: 'Schools, colleges & coaching', Icon: GraduationCap },
              { title: 'Healthcare', desc: 'Hospitals & clinics', Icon: Heart },
              { title: 'Real Estate', desc: 'Property & agents', Icon: Building2 },
              { title: 'Hospitality', desc: 'Hotels & restaurants', Icon: Hotel },
              { title: 'Manufacturing', desc: 'Industry & production', Icon: Factory },
              { title: 'Retail', desc: 'Stores & e-commerce', Icon: ShoppingCart },
              { title: 'Government', desc: 'Public sector & NGOs', Icon: Landmark },
              { title: 'Finance', desc: 'Banking & insurance', Icon: CreditCard },
            ].map((ind, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}>
                <Box sx={{ p: 3.5, bgcolor: '#fafafa', borderRadius: 4, border: '1px solid #f0f0f0', textAlign: 'center', transition: 'all .25s', cursor: 'pointer', '&:hover': { bgcolor: '#0D7377', color: '#fff', borderColor: '#0D7377', transform: 'translateY(-4px)', '& .ind-desc': { color: 'rgba(255,255,255,.7)' }, '& .ind-icon': { bgcolor: 'rgba(255,255,255,.15)', color: '#fff' } } }}>
                  <Box className="ind-icon" sx={{ width: 48, height: 48, borderRadius: 3, bgcolor: 'rgba(13,115,119,.06)', color: '#0D7377', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', mb: 2, transition: 'all .25s' }}>
                    <ind.Icon size={22} />
                  </Box>
                  <Typography sx={{ fontSize: 16, fontWeight: 800, mb: 0.5, fontFamily: FONT_DISPLAY }}>{ind.title}</Typography>
                  <Typography className="ind-desc" sx={{ fontSize: 13, color: '#9ca3af', transition: 'color .25s' }}>{ind.desc}</Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ═══════════ TOOLS & INTEGRATIONS ═══════════ */}
      <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: '#f5f6fa', position: 'relative', overflow: 'hidden' }}>
        <Container maxWidth="lg" sx={{ position: 'relative', minHeight: 480, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{ position: 'relative', zIndex: 10, mb: 4 }}>
            <Box sx={{ width: 80, height: 80, borderRadius: 3, bgcolor: '#0D7377', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 60px rgba(13,115,119,.3)' }}>
              <Typography sx={{ color: '#14FFEC', fontSize: 28, fontWeight: 900, letterSpacing: '-0.04em', fontFamily: FONT_DISPLAY }}>K</Typography>
            </Box>
          </Box>
          <Typography sx={{ fontSize: { xs: 28, md: 40 }, fontWeight: 800, color: '#1a1a2e', textAlign: 'center', mb: 0.5, fontFamily: FONT_DISPLAY }}>We rely on reliable tools to</Typography>
          <Typography sx={{ fontSize: { xs: 28, md: 40 }, fontWeight: 800, color: '#9ca3af', textAlign: 'center', fontStyle: 'italic', fontFamily: FONT_DISPLAY }}>build high-quality products</Typography>
          {[
            { label: 'JS', bg: '#f7df1e', color: '#000', top: '5%', left: '18%' },
            { label: 'Ai', bg: '#ff6c37', color: '#fff', top: '6%', left: '38%' },
            { label: 'Fg', bg: '#a259ff', color: '#fff', top: '3%', right: '35%' },
            { label: '<>', bg: '#61dafb', color: '#000', top: '8%', right: '12%' },
            { label: 'H5', bg: '#e34f26', color: '#fff', top: '30%', left: '22%' },
            { label: 'A', bg: '#dd0031', color: '#fff', top: '22%', right: '28%' },
            { label: 'GH', bg: '#181717', color: '#fff', top: '42%', left: '8%' },
            { label: 'V', bg: '#4fc08d', color: '#fff', bottom: '28%', left: '20%' },
            { label: 'Ps', bg: '#31a8ff', color: '#fff', bottom: '18%', left: '28%' },
            { label: 'Fl', bg: '#02569b', color: '#fff', bottom: '10%', right: '42%' },
            { label: 'iOS', bg: '#000', color: '#fff', top: '18%', right: '8%' },
            { label: 'php', bg: '#777bb4', color: '#fff', bottom: '8%', left: '10%' },
            { label: 'NJ', bg: '#339933', color: '#fff', top: '12%', right: '18%' },
            { label: 'And', bg: '#3ddc84', color: '#000', bottom: '32%', right: '8%' },
          ].map((t, i) => (
            <motion.div key={i} animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3.5 + (i % 4), delay: i * 0.15 }}
              style={{ position: 'absolute', top: t.top, left: t.left, right: t.right, bottom: t.bottom, zIndex: 5 }}>
              <Box sx={{ width: 40, height: 40, borderRadius: 2, bgcolor: t.bg, color: t.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800, boxShadow: '0 4px 16px rgba(0,0,0,.08)' }}>
                {t.label}
              </Box>
            </motion.div>
          ))}
        </Container>
      </Box>

      {/* ═══════════ TESTIMONIALS ═══════════ */}
      <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: '#fff' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 7 }}>
            <Typography sx={{ fontSize: { xs: 32, md: 46 }, fontWeight: 800, color: '#1a1a2e', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, fontFamily: FONT_DISPLAY }}>
              What Our
              <Box sx={{ bgcolor: '#d97706', color: '#fff', width: 44, height: 44, borderRadius: 2, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, fontWeight: 900 }}>"</Box>
              Clients Say
            </Typography>
          </Box>
        </Container>
        <Box sx={{ overflowX: 'auto', pb: 3, px: { xs: 2, md: 8 }, '&::-webkit-scrollbar': { display: 'none' } }}>
          <Stack direction="row" spacing={3} sx={{ minWidth: 'max-content', px: { md: 6 } }}>
            {[
              { type: 'School Management System', quote: "Kalnet replaced 4 different tools we were using. Everything from attendance to fee collection is now in one dashboard. Our admin overhead dropped by 60%.", name: 'Rajesh M.', role: 'School Director' },
              { type: 'Hospital ERP Platform', quote: "The healthcare module understood our exact workflow. Patient records, billing, pharmacy — all integrated. Implementation took just 3 weeks.", name: 'Dr. Priya S.', role: 'Hospital Administrator' },
              { type: 'Real Estate CRM', quote: "Lead tracking and deal management became effortless. Our agents close 35% more deals now with the automated follow-up system.", name: 'Arjun K.', role: 'Broker, PropFirst' },
              { type: 'Retail Operations', quote: "Inventory management across 12 stores, unified billing, employee tracking — Kalnet handles it all. Best investment we've made.", name: 'Sneha R.', role: 'Operations Head' },
            ].map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Box sx={{ width: 340, p: 4, bgcolor: '#fff', borderRadius: 4, border: '1px solid #f0f0f0', boxShadow: '0 4px 20px rgba(0,0,0,.03)' }}>
                  <Typography sx={{ fontSize: 12, color: '#9ca3af', mb: 0.5 }}>Project Type</Typography>
                  <Typography sx={{ fontSize: 14, fontWeight: 700, color: '#1a1a2e', mb: 3 }}>{t.type}</Typography>
                  <Typography sx={{ color: '#d97706', fontSize: 32, lineHeight: 1, mb: 1.5, fontWeight: 800 }}>"</Typography>
                  <Typography sx={{ color: '#4b5563', fontSize: 15, lineHeight: 1.65, mb: 4 }}>{t.quote}</Typography>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box sx={{ width: 42, height: 42, borderRadius: '50%', bgcolor: '#e5e7eb' }} />
                    <Box>
                      <Typography sx={{ fontWeight: 700, fontSize: 14, color: '#1a1a2e' }}>{t.name}</Typography>
                      <Typography sx={{ fontSize: 13, color: '#9ca3af' }}>{t.role}</Typography>
                    </Box>
                  </Stack>
                </Box>
              </motion.div>
            ))}
          </Stack>
        </Box>
        <Container maxWidth="lg" sx={{ mt: 3 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Box sx={{ width: 40, height: 4, bgcolor: '#0D7377', borderRadius: 2 }} />
              <Box sx={{ width: 80, height: 4, bgcolor: '#e5e7eb', borderRadius: 2 }} />
              <Typography sx={{ fontSize: 13, color: '#9ca3af', fontWeight: 600 }}>1 of 3</Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              {[false, true].map((active, i) => (
                <Box key={i} sx={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', '&:hover': { borderColor: '#0D7377' } }}>
                  <ChevronUp size={16} style={{ transform: i === 0 ? 'rotate(-90deg)' : 'rotate(90deg)' }} color={active ? '#1a1a2e' : '#9ca3af'} />
                </Box>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* ═══════════ FAQ (Dark) ═══════════ */}
      <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: '#111111', color: '#fff', borderRadius: { xs: 4, md: 6 }, mx: { xs: 1, md: 3 }, mb: 2 }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', mb: 7 }}>
            <Typography sx={{ fontSize: { xs: 30, md: 44 }, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, fontFamily: FONT_DISPLAY }}>
              Frequently Asked Questions
              <Box sx={{ bgcolor: '#84cc16', p: 1, borderRadius: '50%', display: 'inline-flex', transform: 'rotate(10deg)' }}><HelpCircle size={22} /></Box>
            </Typography>
          </Box>
          <Box sx={{ borderRadius: 4, overflow: 'hidden', border: '1px solid #222' }}>
            {[
              { q: 'How long does it take to deploy KALNET?', a: 'Most deployments are completed within 2-4 weeks. We handle data migration, user onboarding, and customization as part of the setup process.' },
              { q: 'What industries does KALNET support?', a: 'We support 15+ industries including Education, Healthcare, Real Estate, Hospitality, Manufacturing, Retail, Government, and more with purpose-built modules.' },
              { q: 'Can KALNET replace our existing CRM and ERP?', a: 'Yes. Kalnet is designed as a unified replacement for fragmented tools. Most clients consolidate 3-5 separate systems into one Kalnet platform.' },
              { q: 'Do you provide post-launch support?', a: 'Absolutely. We provide 24/7 support, regular updates, and a dedicated account manager for enterprise clients.' },
              { q: 'How do you ensure data security?', a: 'We use AES-256 encryption, role-based access controls, regular security audits, and are hosted on enterprise-grade cloud infrastructure.' },
            ].map((f, i) => (
              <Accordion key={i} defaultExpanded={i === 0} sx={{ bgcolor: '#1a1a1a', color: '#fff', '&:before': { display: 'none' }, borderBottom: i < 4 ? '1px solid #252525' : 'none', m: '0 !important' }}>
                <AccordionSummary expandIcon={<ChevronUp size={18} color="rgba(255,255,255,.5)" />} sx={{ px: 3, py: 1 }}>
                  <Typography sx={{ fontWeight: 600, fontSize: 15 }}>{f.q}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 3, pb: 3, color: 'rgba(255,255,255,.6)', fontSize: 14, lineHeight: 1.65 }}>
                  {f.a}
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ═══════════ CONTACT FORM ═══════════ */}
      <Box component="section" sx={{ py: { xs: 12, md: 16 }, position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, #f5f6fa 0%, #e0f2f1 40%, #a7f3d0 100%)', zIndex: 0 }} />
        <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <Typography sx={{ fontSize: { xs: 40, md: 56 }, fontWeight: 800, color: '#1a1a2e', mb: 2, fontFamily: FONT_DISPLAY }}>Ready to Grow?</Typography>
          <Typography sx={{ fontSize: 17, color: '#4b5563', mb: 7, lineHeight: 1.6 }}>Get in touch with us and let's discuss how we can support your goals.</Typography>
          <Box sx={{ p: { xs: 4, md: 5 }, bgcolor: '#fff', borderRadius: 4, boxShadow: '0 16px 48px rgba(13,115,119,.08)', textAlign: 'left' }}>
            <Stack spacing={3}>
              <Box>
                <Typography sx={{ fontSize: 14, fontWeight: 700, color: '#1a1a2e', mb: 1 }}>Full Name</Typography>
                <Box component="input" placeholder="Enter your name" sx={{ width: '100%', p: 2, borderRadius: 3, border: '1px solid #e5e7eb', outline: 'none', fontFamily: 'inherit', fontSize: 15, bgcolor: '#fafafa', '&:focus': { borderColor: '#0D7377' } }} />
              </Box>
              <Box>
                <Typography sx={{ fontSize: 14, fontWeight: 700, color: '#1a1a2e', mb: 1 }}>Email Address</Typography>
                <Box component="input" placeholder="Enter your email" sx={{ width: '100%', p: 2, borderRadius: 3, border: '1px solid #e5e7eb', outline: 'none', fontFamily: 'inherit', fontSize: 15, bgcolor: '#fafafa', '&:focus': { borderColor: '#0D7377' } }} />
              </Box>
              <Box>
                <Typography sx={{ fontSize: 14, fontWeight: 700, color: '#1a1a2e', mb: 1 }}>Messages</Typography>
                <Box component="textarea" rows={4} placeholder="Your message here..." sx={{ width: '100%', p: 2, borderRadius: 3, border: '1px solid #e5e7eb', outline: 'none', fontFamily: 'inherit', fontSize: 15, bgcolor: '#fafafa', resize: 'none', '&:focus': { borderColor: '#0D7377' } }} />
              </Box>
              <Button variant="contained" fullWidth size="large" sx={{ py: 1.8, fontSize: 16, mt: 1 }}>Send</Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* ═══════════ DARK FOOTER ═══════════ */}
      <Box component="footer" sx={{ bgcolor: '#0a0a0a', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        {/* Massive KALNET watermark */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pt: { xs: 10, md: 16 }, pb: { xs: 4, md: 6 }, position: 'relative' }}>
          <Typography sx={{
            fontSize: { xs: '20vw', md: '16vw' },
            fontWeight: 900,
            color: 'rgba(255,255,255,.06)',
            letterSpacing: '-0.04em',
            fontFamily: FONT_DISPLAY,
            lineHeight: 1,
            userSelect: 'none',
          }}>
            KALNET
          </Typography>
        </Box>

        {/* Bottom bar */}
        <Box sx={{ borderTop: '1px solid rgba(255,255,255,.08)', py: 3 }}>
          <Container maxWidth="lg">
            <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems="center" spacing={2}>
              <Typography sx={{ color: 'rgba(255,255,255,.4)', fontSize: 13 }}>
                © 2026 <Box component="span" sx={{ fontWeight: 700, color: 'rgba(255,255,255,.6)' }}>TAYOG Pvt. Ltd.</Box> All rights reserved.
              </Typography>
              <Stack direction="row" spacing={4}>
                {['Privacy', 'Terms', 'Sitemap'].map(l => (
                  <Typography key={l} sx={{ color: 'rgba(255,255,255,.4)', fontSize: 13, cursor: 'pointer', '&:hover': { color: '#14FFEC' } }}>{l}</Typography>
                ))}
              </Stack>
              <Typography sx={{ color: 'rgba(255,255,255,.4)', fontSize: 13 }}>
                Made in India
              </Typography>
            </Stack>
          </Container>
        </Box>
      </Box>

    </Box>
    </ThemeProvider>
  )
}

/* ─── CountUp Component ─── */
function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  const startCounting = useCallback(() => {
    if (hasStarted) return
    setHasStarted(true)
    const duration = 1800
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
  }, [target, hasStarted])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) startCounting() },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [startCounting])

  return <span ref={ref}>{count}{suffix}</span>
}

export default App
