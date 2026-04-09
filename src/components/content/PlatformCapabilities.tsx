import { useState } from 'react'
import { Box, Typography, Container } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Box as BoxIcon, BarChart3, Users, Factory, 
  Database, Landmark, Briefcase, Shield, 
  ArrowRight
} from 'lucide-react'

// --- Data ---
export const PLATFORM_SOLUTIONS = [
  {
    category: "Core Platform",
    Icon: BoxIcon,
    accent: '#14FFEC',
    modules: [
      { title: "Integration Hub", desc: "Manage APIs, connectors, and real-time data synchronization across disparate systems." },
      { title: "ERP Core", desc: "Centralize management of orders, inventory levels, and production processes." },
      { title: "Project Management", desc: "Track project milestones, resource allocation, and risk assessment/mitigation." },
      { title: "Asset Lifecycle", desc: "Unified tracking for asset maintenance, AMC, and depreciation schedules." },
      { title: "Procurement & Spend", desc: "Streamline RFQs, Purchase Orders (POs), and multi-level approval workflows." },
      { title: "Vendor & Partner", desc: "Monitor vendor SLAs, performance metrics, and automated payout calculations." },
    ]
  },
  {
    category: "Finance & Governance",
    Icon: Landmark,
    accent: '#4FD1C5',
    modules: [
      { title: "Finance & Accounting", desc: "Comprehensive management of AR, AP, invoicing, and GST compliance." },
      { title: "Billing & Revenue", desc: "Manage subscription models, retainer-based billing, and recurring revenue streams." },
      { title: "Compliance & Audit", desc: "Maintain regulatory alignment through automated logs, evidence collection, and policy enforcement." },
      { title: "Tax & Statutory", desc: "Automated handling of GST, TDS filings, and ROC compliance." },
    ]
  },
  {
    category: "Sales & Customers",
    Icon: Users,
    accent: '#3182CE',
    modules: [
      { title: "CRM & Sales Pipeline", desc: "Manage deals, lead qualification, and contact relationships in a unified view." },
      { title: "Customer Experience", desc: "Integrated support ticketing, feedback collection systems, and self-service portals." },
      { title: "Partner / Franchise", desc: "Centralized management of partner networks, reporting, and commission payout structures." },
    ]
  },
  {
    category: "Industry Execution",
    Icon: Factory,
    accent: '#2563EB',
    modules: [
      { title: "Operations (OMS)", desc: "Industry-specific configured workflows for order management and fulfillment." },
      { title: "Supply Chain & Inventory", desc: "Comprehensive warehouse management, real-time stock tracking, and logistics." },
      { title: "Production & Manufacturing", desc: "Detailed Bill of Materials (BOM), MRP, batch tracking, and quality control." },
      { title: "Facility & Maintenance", desc: "Manage physical sites, utility infrastructure, and service-level maintenance." },
    ]
  },
  {
    category: "Digital & Data",
    Icon: Database,
    accent: '#0D7377',
    modules: [
      { title: "Document & Records", desc: "Complete Document Management System (DMS) with versioning and e-signatures." },
      { title: "Workflow & Automation", desc: "Define complex business logic, approval triggers, and automated SLA tracking." },
      { title: "Data & Analytics", desc: "Real-time dashboards, KPI tracking, and custom business intelligence reporting." },
      { title: "AI & Intelligence", desc: "Advanced forecasting capabilities, AI-driven recommendations, and predictive analytics." },
    ]
  },
  {
    category: "Public Sector & Impact",
    Icon: BarChart3,
    accent: '#0ea5e9',
    modules: [
      { title: "Grants & Fund", desc: "Tracking of fund allocation, disbursement cycles, and financial utilization metrics." },
      { title: "Scheme / Program", desc: "Manage scheme implementation, beneficiary tracking, and Direct Benefit Transfer workflows." },
      { title: "Monitoring & Evaluation", desc: "Track program outcomes, collection of field data, and impact analytics." },
    ]
  },
  {
    category: "People & Workforce",
    Icon: Briefcase,
    accent: '#38A169',
    modules: [
      { title: "HRMS & Payroll", desc: "End-to-end employee lifecycle management, automated salary, and statutory tax compliance." },
      { title: "Resource & Capacity", desc: "Strategic resource planning, internal booking systems, and utilization rate monitoring." },
      { title: "Field Force", desc: "Real-time GPS tracking, mobile apps for field staff, and automated field reporting." },
    ]
  },
  {
    category: "Security & Platform",
    Icon: Shield,
    accent: '#085255',
    modules: [
      { title: "Identity & Security", desc: "Role-Based Access Control (RBAC), comprehensive audit logs, and multi-factor authentication." },
      { title: "Mobile & Portals", desc: "Purpose-built mobile interfaces and secure portals for staff, partners, and customers." },
      { title: "Platform Admin", desc: "Multi-tenant environment management, global system configurations, and settings." },
    ]
  }
];

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
                  {PLATFORM_SOLUTIONS[activeIdx].modules.map((mod, i) => (
                    <Box key={i} sx={{
                      p: 3, bgcolor: '#141414', borderRadius: 4, border: '1px solid #222',
                      transition: 'all .2s ease', '&:hover': { borderColor: '#444', bgcolor: '#1a1a1a', transform: 'translateY(-2px)' }
                    }}>
                      <Typography sx={{ fontSize: 16, fontWeight: 600, mb: 1.5, color: '#f5f5f7' }}>
                        {mod.title}
                      </Typography>
                      <Typography sx={{ fontSize: 13, color: 'rgba(255,255,255,.4)', lineHeight: 1.6 }}>
                        {mod.desc}
                      </Typography>
                      
                      <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer', '&:hover .arrow': { transform: 'translateX(4px)' }, '&:hover .text': { color: PLATFORM_SOLUTIONS[activeIdx].accent } }}>
                        <Typography className="text" sx={{ fontSize: 13, fontWeight: 500, color: '#888', transition: 'color .2s' }}>
                          Explore
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
