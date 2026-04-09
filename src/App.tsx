import { Box, Button, Container, Stack, Typography, ThemeProvider, createTheme } from '@mui/material'
import { motion, useMotionTemplate, useMotionValue, useSpring, useInView } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import type { MouseEvent as ReactMouseEvent } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import {
  Layers, Headphones,
  Zap, Shield, BarChart3, ArrowRight, Users,
  GraduationCap, Heart, Building2, Hotel,
  Target, GitBranch, Package, Lock, Settings, Workflow,
  Plug, Database, Rocket, Eye, Clock, Globe,
  Play, Image as ImageIcon, Monitor
} from 'lucide-react'

/* ─── Font ─── */
const FONT_DISPLAY = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
const FONT_BODY = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
const FONT_BRAND = "'Chillax', 'Inter', sans-serif"

/* ─── Theme (Light-first) ─── */
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#0D7377', light: '#14FFEC', dark: '#085255' },
    background: { default: '#ffffff', paper: '#f5f5f7' },
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

/* ─── Data ─── */
const INDUSTRIES = [
  {
    title: 'Healthcare',
    desc: 'Patient records, billing, pharmacy, and appointment management — all in one system.',
    cta: 'KALNET FOR HEALTHCARE',
    Icon: Heart,
    link: '/healthcare-erp',
    color: '#e0f7fa',
  },
  {
    title: 'Hospitality',
    desc: 'Hotel management, booking engines, multi-property operations, and guest experiences.',
    cta: 'KALNET FOR HOSPITALITY',
    Icon: Hotel,
    link: '/hotel-management-system',
    color: '#e0f2f1',
  },
  {
    title: 'Education',
    desc: 'Student management, attendance, fee tracking, and performance analytics.',
    cta: 'KALNET FOR EDUCATION',
    Icon: GraduationCap,
    link: '/coaching-erp',
    color: '#e8eaf6',
  },
  {
    title: 'Enterprise',
    desc: 'Custom CRM and ERP systems tailored for any business model and workflow.',
    cta: 'KALNET FOR ENTERPRISE',
    Icon: Building2,
    link: '/industries',
    color: '#fff3e0',
  },
]

const PRODUCTS = [
  {
    tag: 'CRM',
    title: 'Manage your entire customer lifecycle',
    desc: 'Track leads, close deals, and nurture relationships with a powerful CRM that adapts to your sales process. From first contact to long-term retention.',
    cta: 'Customer Relationship Management',
    link: '/crm-system',
    accent: '#c8f5f0',
    Icon: Target,
  },
  {
    tag: 'ERP',
    title: 'Run operations from one dashboard',
    desc: 'Unify finance, HR, inventory, and workflows in a single system. Get real-time visibility across every department without switching between tools.',
    cta: 'Enterprise Resource Planning',
    link: '/erp-system',
    accent: '#d6eff5',
    Icon: Layers,
  },
  {
    tag: 'FINANCE',
    title: 'Automated invoicing and financial tracking',
    desc: 'Handle billing, payments, tax calculations, and financial reporting. Reduce manual accounting work and get accurate insights instantly.',
    cta: 'Finance & Billing System',
    link: '/finance-billing',
    accent: '#e0d4f5',
    Icon: BarChart3,
  },
  {
    tag: 'AUTOMATION',
    title: 'Automate repetitive business processes',
    desc: 'Build custom workflows that trigger actions automatically. Reduce human error, save time, and let your team focus on what matters.',
    cta: 'Workflow Automation',
    link: '/workflow-automation',
    accent: '#d4f5c8',
    Icon: Workflow,
  },
]

const STATS = [
  { num: 5, suffix: '+', label: 'Institutions trust Kalnet', Icon: Users },
  { num: 24, suffix: 'h', label: 'Average deployment time', Icon: Clock },
  { num: 15, suffix: '+', label: 'Industries served', Icon: Globe },
  { num: 30, suffix: '+', label: 'Software modules', Icon: Shield },
]

const STEPS = [
  { step: '01', title: 'Understand Your Business', desc: 'We analyze your workflows, challenges, and requirements to identify what your system needs.', Icon: Eye },
  { step: '02', title: 'Configure Your Platform', desc: 'We customize CRM, ERP modules, dashboards, and workflows tailored to your operations.', Icon: Settings },
  { step: '03', title: 'Integrate Your Tools', desc: 'We connect third-party services like payments, communication tools, and external systems.', Icon: Plug },
  { step: '04', title: 'Data Setup & Backend', desc: 'We handle data entry, migration, and backend setup so everything is ready from day one.', Icon: Database },
  { step: '05', title: 'Go Live in 24 Hours', desc: 'Your system is deployed and ready to use — no long development cycles.', Icon: Rocket },
]

const WHY_ITEMS = [
  { title: 'All-in-one CRM & ERP platform', desc: 'No more juggling between 5 different apps. Everything runs from one dashboard.', Icon: Layers, link: '/crm-erp-platform' },
  { title: 'Fully customizable to your needs', desc: 'Every module, workflow, and dashboard adapts to how your business operates.', Icon: Settings, link: '/customization' },
  { title: 'Fast deployment within 24 hours', desc: 'Your complete system is configured, tested, and live in under a day.', Icon: Zap, link: '/fast-deployment' },
  { title: 'Scalable as your business grows', desc: 'Start with what you need, add modules as you expand — no migration hassle.', Icon: BarChart3, link: '/scalable-platform' },
  { title: 'Industry-specific solutions', desc: 'Purpose-built for Healthcare, Hospitality, Education, and more.', Icon: Building2, link: '/industries' },
  { title: 'Dedicated support', desc: 'A real team behind you — not just a chatbot. We are your technology partner.', Icon: Headphones, link: '/support' },
]

const FEATURES = [
  { title: 'Lead Management', Icon: Target, link: '/lead-management' },
  { title: 'Sales Pipeline Tracking', Icon: GitBranch, link: '/sales-pipeline-tracking' },
  { title: 'Inventory Management', Icon: Package, link: '/inventory-management' },
  { title: 'Financial Reports & Analytics', Icon: BarChart3, link: '/financial-reports-analytics' },
  { title: 'Role-Based Access Control', Icon: Lock, link: '/role-based-access-control' },
  { title: 'Workflow Automation', Icon: Workflow, link: '/workflow-automation' },
  { title: 'Multi-Department Coordination', Icon: Users, link: '/multi-department-coordination' },
]

/* ─── App ─── */
function App() {
  const [navScrolled, setNavScrolled] = useState(false)
  const cursorX = useMotionValue(50)
  const cursorY = useMotionValue(40)


  const smoothX = useSpring(cursorX, { stiffness: 50, damping: 28, mass: 0.8 })
  const smoothY = useSpring(cursorY, { stiffness: 50, damping: 28, mass: 0.8 })
  const spotlightLeft = useMotionTemplate`${smoothX}%`
  const spotlightTop = useMotionTemplate`${smoothY}%`

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
        bgcolor: navScrolled ? 'rgba(10,10,10,.95)' : 'rgba(10,10,10,.92)',
        backdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,.08)',
        borderRadius: '999px', transition: 'all .3s ease',
        boxShadow: navScrolled ? '0 8px 32px rgba(0,0,0,.45)' : '0 4px 20px rgba(0,0,0,.25)',
      }}>
        <Container maxWidth={false} sx={{ py: 1.2, px: { xs: 2.5, md: 3.5 }, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography sx={{ color: '#fff', fontWeight: 600, fontSize: 22, letterSpacing: '-.02em', fontFamily: FONT_BRAND }}>KALNET</Typography>
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

      {/* ═══════════ 1. HERO — MEWS-STYLE 2 CARDS ═══════════ */}
      <Box component="section" sx={{ bgcolor: '#fff', pt: { xs: 12, md: 14 }, pb: { xs: 4, md: 6 } }}>
        <Container maxWidth="xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2.5, minHeight: { md: '80vh' } }}>

              {/* LEFT CARD — Dark text card */}
              <Box
                onMouseMove={handleHeroMouse}
                onMouseLeave={() => { cursorX.set(50); cursorY.set(40) }}
                sx={{
                  position: 'relative', overflow: 'hidden',
                  bgcolor: '#0a0a0a', color: '#fff',
                  borderRadius: '16px',
                  p: { xs: 4, md: 6, lg: 7 },
                  display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                }}>
                {/* Subtle aurora inside the card */}
                <Box sx={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 60% at 20% 80%, rgba(13,115,119,.25) 0%, transparent 55%)', zIndex: 0 }} />
                <Box sx={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 40% 30% at 10% 60%, rgba(20,255,236,.08) 0%, transparent 40%)', zIndex: 0 }} />
                {/* Spotlight */}
                <motion.div style={{ position: 'absolute', left: spotlightLeft, top: spotlightTop, width: 400, height: 400, transform: 'translate(-50%,-50%)', borderRadius: '50%', pointerEvents: 'none', background: 'radial-gradient(circle, rgba(20,255,236,.06) 0%, transparent 55%)', filter: 'blur(30px)', zIndex: 0 }} />

                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 4 }}>
                    <Box sx={{ width: 32, height: 32, borderRadius: '10px', bgcolor: 'rgba(13,115,119,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Layers size={16} color="#14FFEC" />
                    </Box>
                    <Typography sx={{ fontSize: 13, fontWeight: 700, letterSpacing: '.06em', color: 'rgba(255,255,255,.4)' }}>
                      BUSINESS OPERATING SYSTEM
                    </Typography>
                  </Box>

                  <Typography sx={{ fontSize: { xs: 36, md: 48, lg: 56 }, fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.035em', mb: 3, fontFamily: FONT_DISPLAY }}>
                    Run your entire business from{' '}
                    <Box component="span" sx={{ color: '#14FFEC' }}>one platform</Box>
                  </Typography>

                  <Typography sx={{ color: 'rgba(255,255,255,.5)', fontSize: { xs: 15, md: 17 }, lineHeight: 1.65, mb: 5, maxWidth: 460 }}>
                    Manage customers, automate operations, track finances, and scale effortlessly — whether you run a hospital, hotel, school, or enterprise.
                  </Typography>

                  <Stack direction="row" gap={2} flexWrap="wrap" sx={{ mb: 4 }}>
                    <Button href="https://www.kalnet.co/request-demo" variant="contained" size="large"
                      sx={{ px: 4, py: 1.6, fontSize: 15, bgcolor: '#0D7377', boxShadow: '0 4px 20px rgba(13,115,119,.4)',
                      '&:hover': { bgcolor: '#14FFEC', color: '#000', boxShadow: '0 8px 32px rgba(20,255,236,.35)', transform: 'translateY(-2px)' } }}>
                      Book a Demo
                      <ArrowRight size={16} style={{ marginLeft: 8 }} />
                    </Button>
                    <Button href="#solutions" variant="outlined" size="large"
                      sx={{ px: 3.5, py: 1.6, fontSize: 15, color: '#fff', borderColor: 'rgba(255,255,255,.2)', borderWidth: 2,
                      '&:hover': { borderColor: '#14FFEC', color: '#14FFEC', bgcolor: 'rgba(20,255,236,.06)', borderWidth: 2 } }}>
                      Explore Platform
                    </Button>
                  </Stack>

                  <Stack direction="row" spacing={{ xs: 2, md: 3 }} alignItems="center" flexWrap="wrap">
                    {[
                      { Icon: Shield, text: 'Enterprise-grade security' },
                      { Icon: Zap, text: 'Go live in 24 hours' },
                      { Icon: Users, text: 'Trusted by 5+ institutions' },
                    ].map((t, i) => (
                      <Stack key={i} direction="row" spacing={0.8} alignItems="center">
                        <t.Icon size={12} color="#0D7377" />
                        <Typography sx={{ fontSize: 11, fontWeight: 500, letterSpacing: '.02em', color: 'rgba(255,255,255,.3)' }}>{t.text}</Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Box>
              </Box>

              {/* RIGHT CARD — Media placeholder */}
              <Box sx={{
                borderRadius: '16px', overflow: 'hidden',
                bgcolor: '#f0f0f2',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexDirection: 'column', gap: 2,
                minHeight: { xs: 300, md: 'auto' },
                border: '1px solid #e5e7eb',
              }}>
                <Play size={56} color="rgba(0,0,0,.1)" />
                <Typography sx={{ color: 'rgba(0,0,0,.15)', fontSize: 15, fontWeight: 600 }}>
                  Product demo video
                </Typography>
              </Box>

            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* ═══════════ 2. SOCIAL PROOF BAR ═══════════ */}
      <Box component="section" sx={{ py: 5, bgcolor: '#f5f5f7', borderBottom: '1px solid #e5e7eb' }}>
        <Container maxWidth="lg">
          <Typography sx={{ textAlign: 'center', fontSize: 14, fontWeight: 500, color: '#9ca3af', mb: 4, letterSpacing: '.02em' }}>
            Trusted by schools, hospitals, and enterprises across India. <Box component="span" sx={{ color: '#0D7377', fontWeight: 700, cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}>Meet our customers.</Box>
          </Typography>
          <Box sx={{ overflow: 'hidden' }}>
            <Box sx={{ display: 'flex', gap: { xs: 6, md: 10 }, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
              {['Client A', 'Client B', 'Client C', 'Client D', 'Client E', 'Client F', 'Client G'].map((name, i) => (
                <Box key={i} sx={{
                  px: 3, py: 1.5,
                  bgcolor: 'rgba(0,0,0,.04)', borderRadius: 2,
                  display: 'flex', alignItems: 'center', gap: 1.5,
                }}>
                  <Box sx={{ width: 28, height: 28, borderRadius: '50%', bgcolor: 'rgba(0,0,0,.08)' }} />
                  <Typography sx={{ fontSize: 14, fontWeight: 700, color: 'rgba(0,0,0,.25)', letterSpacing: '.03em', fontFamily: FONT_DISPLAY }}>
                    {name}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ═══════════ 3. SOLUTIONS BY INDUSTRY ═══════════ */}
      <Box id="solutions" component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: '#f5f5f7' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '280px 1fr' }, gap: { xs: 4, md: 6 }, alignItems: 'start' }}>

            {/* Left heading */}
            <motion.div {...fadeUp}>
              <Box sx={{ position: { md: 'sticky' }, top: { md: 120 } }}>
                <Typography sx={{ fontSize: { xs: 34, md: 44 }, fontWeight: 800, color: '#0a1020', lineHeight: 1.08, fontFamily: FONT_DISPLAY }}>
                  See what Kalnet can do for you
                </Typography>
                <Typography sx={{ fontSize: 15, color: '#5f6b7a', mt: 2.5, lineHeight: 1.6 }}>
                  Purpose-built systems for every industry. Choose yours.
                </Typography>
              </Box>
            </motion.div>

            {/* Right — Industry cards grid */}
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
              {INDUSTRIES.map((ind, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                  <Box component="a" href={ind.link} className="industry-card" sx={{
                    display: 'flex', flexDirection: 'column',
                    height: '100%', borderRadius: '20px',
                    bgcolor: '#fff', border: '1px solid #e5e7eb',
                    textDecoration: 'none', overflow: 'hidden',
                    cursor: 'pointer',
                  }}>
                    {/* Media zone — top 60% */}
                    <Box sx={{
                      height: 200, bgcolor: ind.color,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      borderBottom: '1px solid rgba(0,0,0,.04)',
                    }}>
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                        <ImageIcon size={32} color="rgba(0,0,0,.12)" />
                        <Typography sx={{ fontSize: 12, color: 'rgba(0,0,0,.15)', fontWeight: 500 }}>
                          Industry screenshot
                        </Typography>
                      </Box>
                    </Box>

                    {/* Content zone — bottom 40% */}
                    <Box sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                        <Box sx={{ width: 32, height: 32, borderRadius: 2, bgcolor: 'rgba(13,115,119,.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <ind.Icon size={16} color="#0D7377" />
                        </Box>
                        <Typography sx={{ fontSize: 20, fontWeight: 800, color: '#0a1020', fontFamily: FONT_DISPLAY }}>{ind.title}</Typography>
                      </Box>
                      <Typography sx={{ fontSize: 14, color: '#6b7280', lineHeight: 1.6, mb: 2.5 }}>{ind.desc}</Typography>
                      <Typography sx={{ mt: 'auto', fontSize: 13, fontWeight: 800, letterSpacing: '.01em', color: '#0a1020' }}>
                        {ind.cta}
                        <Box component="span" className="industry-arrow" sx={{
                          display: 'inline-flex', alignItems: 'center',
                          opacity: 0, transform: 'translateX(-4px)',
                          transition: 'opacity .2s ease, transform .2s ease',
                        }}>
                          <ArrowRight size={14} style={{ marginLeft: 6, verticalAlign: 'text-bottom' }} />
                        </Box>
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ═══════════ 4. PRODUCT PLATFORM ═══════════ */}
      <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: '#0f0f0f', color: '#fff' }}>
        <Container maxWidth="lg">
          <motion.div {...fadeUp}>
            <Typography sx={{ fontSize: { xs: 34, md: 52 }, fontWeight: 800, fontFamily: FONT_DISPLAY, mb: 2, lineHeight: 1.1 }}>
              The platform behind it all
            </Typography>
            <Typography sx={{ fontSize: 17, color: 'rgba(255,255,255,.4)', mb: 8, maxWidth: 560 }}>
              One unified system powering CRM, ERP, finance, and automation across every industry you serve.
            </Typography>
          </motion.div>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {PRODUCTS.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Box className="product-card" sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr' },
                  borderRadius: '24px', overflow: 'hidden',
                  bgcolor: '#1a1a1a', border: '1px solid #252525',
                  minHeight: { md: 380 },
                }}>
                  {/* Text side */}
                  <Box sx={{
                    p: { xs: 4, md: 6 },
                    display: 'flex', flexDirection: 'column', justifyContent: 'center',
                    order: { xs: 1, md: i % 2 === 0 ? 0 : 1 },
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                      <Box sx={{ width: 36, height: 36, borderRadius: 2, bgcolor: '#252525', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <p.Icon size={18} color={p.accent} />
                      </Box>
                      <Typography sx={{ fontSize: 14, fontWeight: 800, letterSpacing: '.08em', color: 'rgba(255,255,255,.5)' }}>{p.tag}</Typography>
                    </Box>
                    <Typography sx={{ fontSize: { xs: 24, md: 30 }, fontWeight: 800, fontFamily: FONT_DISPLAY, lineHeight: 1.15, mb: 2 }}>
                      {p.title}
                    </Typography>
                    <Typography sx={{ fontSize: 15, color: 'rgba(255,255,255,.45)', lineHeight: 1.7, mb: 4, maxWidth: 420 }}>
                      {p.desc}
                    </Typography>
                    <Typography component="a" href={p.link} sx={{
                      fontSize: 14, fontWeight: 800, color: '#fff', textDecoration: 'none',
                      display: 'inline-flex', alignItems: 'center', gap: 1,
                      '&:hover': { color: '#14FFEC' },
                    }}>
                      {p.cta} <ArrowRight size={14} />
                    </Typography>
                  </Box>

                  {/* Media side */}
                  <Box sx={{
                    bgcolor: p.accent,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    order: { xs: 0, md: i % 2 === 0 ? 1 : 0 },
                    minHeight: { xs: 220, md: 'auto' },
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    {/* Decorative rounded corner notch (Mews signature) */}
                    <Box sx={{
                      position: 'absolute',
                      top: i % 2 === 0 ? 0 : 'auto',
                      bottom: i % 2 === 0 ? 'auto' : 0,
                      left: i % 2 === 0 ? 0 : 'auto',
                      right: i % 2 === 0 ? 'auto' : 0,
                      width: 60, height: 60,
                      bgcolor: '#1a1a1a',
                      borderRadius: i % 2 === 0 ? '0 0 24px 0' : '24px 0 0 0',
                    }} />

                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1.5 }}>
                      <Monitor size={40} color="rgba(0,0,0,.12)" />
                      <Typography sx={{ fontSize: 13, color: 'rgba(0,0,0,.18)', fontWeight: 500 }}>
                        Product screenshot
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ═══════════ 5. STATS BAR ═══════════ */}
      <Box component="section" sx={{ py: { xs: 8, md: 10 }, bgcolor: '#fff' }}>
        <Container maxWidth="lg">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Box sx={{
              display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
              bgcolor: '#f5f5f7', borderRadius: '16px', border: '1px solid #e5e7eb',
              overflow: 'hidden',
            }}>
              {STATS.map((s, i) => {
                const [count, setCount] = useState(0)
                const ref = useRef<HTMLDivElement>(null)
                const inView = useInView(ref, { once: true })
                useEffect(() => {
                  if (!inView) return
                  let start = 0
                  const end = s.num
                  const duration = 1200
                  const step = Math.max(1, Math.floor(end / (duration / 30)))
                  const timer = setInterval(() => {
                    start += step
                    if (start >= end) { setCount(end); clearInterval(timer) }
                    else setCount(start)
                  }, 30)
                  return () => clearInterval(timer)
                }, [inView])
                return (
                  <Box key={i} ref={ref} sx={{
                    textAlign: 'center', py: { xs: 4, md: 5 }, px: 3,
                    borderRight: { xs: i % 2 === 0 ? '1px solid #e5e7eb' : 'none', md: i < 3 ? '1px solid #e5e7eb' : 'none' },
                    borderBottom: { xs: i < 2 ? '1px solid #e5e7eb' : 'none', md: 'none' },
                  }}>
                    <Box sx={{ width: 40, height: 40, borderRadius: 2.5, bgcolor: 'rgba(13,115,119,.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 2 }}>
                      <s.Icon size={18} color="#0D7377" />
                    </Box>
                    <Typography sx={{ fontSize: { xs: 36, md: 48 }, fontWeight: 900, color: '#0a1020', fontFamily: FONT_DISPLAY, lineHeight: 1, mb: 1 }}>
                      {count}{s.suffix}
                    </Typography>
                    <Typography sx={{ fontSize: 13, color: '#6b7280', fontWeight: 500 }}>
                      {s.label}
                    </Typography>
                  </Box>
                )
              })}
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* ═══════════ 6. FEATURES ═══════════ */}
      <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: '#f5f5f7' }}>
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
            {FEATURES.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}>
                <Box component="a" href={f.link} sx={{
                  p: 3, bgcolor: '#fff', borderRadius: '16px', border: '1px solid #e5e7eb',
                  display: 'flex', alignItems: 'center', gap: 2, textDecoration: 'none', cursor: 'pointer',
                  transition: 'all .2s ease',
                  '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 8px 24px rgba(0,0,0,.06)', borderColor: '#0D7377' },
                }}>
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

      {/* ═══════════ 7. HOW IT WORKS (Dark BG) ═══════════ */}
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
            {STEPS.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Box sx={{
                  p: 3.5, bgcolor: '#1a1a1a', borderRadius: '16px', border: '1px solid #252525', height: '100%',
                  transition: 'all .25s',
                  '&:hover': { borderColor: '#0D7377', transform: 'translateY(-3px)' },
                }}>
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

      {/* ═══════════ 8. WHY KALNET ═══════════ */}
      <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: '#f5f5f7' }}>
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
            {WHY_ITEMS.map((w, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <Box component="a" href={w.link} sx={{
                  p: 4, bgcolor: '#fff', borderRadius: '20px', border: '1px solid #e5e7eb',
                  height: '100%', display: 'flex', gap: 3, alignItems: 'flex-start', textDecoration: 'none', cursor: 'pointer',
                  transition: 'all .25s ease',
                  '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 16px 48px rgba(0,0,0,.06)', borderColor: '#0D7377' },
                }}>
                  <Box sx={{ width: 48, height: 48, borderRadius: 3, bgcolor: 'rgba(13,115,119,.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, mt: 0.5 }}>
                    <w.Icon size={22} color="#0D7377" />
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: 17, fontWeight: 800, mb: 1, color: '#0a1020', fontFamily: FONT_DISPLAY }}>{w.title}</Typography>
                    <Typography sx={{ fontSize: 14, color: '#6b7280', lineHeight: 1.65 }}>{w.desc}</Typography>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ═══════════ 9. CTA SECTION ═══════════ */}
      <Box component="section" sx={{ py: { xs: 12, md: 16 }, position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #0D7377 0%, #085255 50%, #0a0a0a 100%)', zIndex: 0 }} />
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

      {/* ═══════════ 10. FOOTER ═══════════ */}
      <Box component="footer" sx={{ bgcolor: '#000', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        {/* SEO block */}
        <Container maxWidth="md" sx={{ pt: 10, pb: 4, textAlign: 'center' }}>
          <Typography sx={{ color: 'rgba(255,255,255,.2)', fontSize: 13, lineHeight: 1.8, maxWidth: 640, mx: 'auto' }}>
            Kalnet is a powerful CRM and ERP software platform designed to help businesses manage operations, customer relationships, finance, and workflows in one place. Our business management system is built for scalability, automation, and efficiency across industries.
          </Typography>
        </Container>
        {/* Massive KALNET watermark — outlined, full-width */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pt: 6, pb: 6, overflow: 'hidden' }}>
          <Typography sx={{
            fontSize: { xs: '28vw', md: '20vw' }, fontWeight: 700,
            color: 'transparent', letterSpacing: '-0.02em',
            fontFamily: FONT_BRAND, lineHeight: 1, userSelect: 'none',
            WebkitTextStroke: '1.5px rgba(255,255,255,.12)',
            whiteSpace: 'nowrap',
          }}>
            KALNET
          </Typography>
        </Box>
        {/* Bottom bar */}
        <Box sx={{ borderTop: '1px solid rgba(255,255,255,.08)', py: 3 }}>
          <Container maxWidth="lg">
            <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems="center" spacing={2}>
              <Typography sx={{ color: 'rgba(255,255,255,.4)', fontSize: 13 }}>
                &copy; 2026 <Box component="span" sx={{ fontWeight: 700, color: 'rgba(255,255,255,.6)' }}>KALNET Solutions Pvt. Ltd.</Box> All rights reserved.
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
