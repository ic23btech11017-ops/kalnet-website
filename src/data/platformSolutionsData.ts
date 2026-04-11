import type { LucideIcon } from 'lucide-react'
import {
  BarChart3,
  Box as BoxIcon,
  Briefcase,
  Database,
  Factory,
  Landmark,
  Shield,
  Users,
} from 'lucide-react'

/** Matches kalnet.co/solutions paths: /solutions/{categorySlug}/{moduleSlug} */
export type SolutionModule = {
  title: string
  desc: string
  slug: string
  /** Short line shown on the all-solutions page (kalnet.co copy) */
  tagline: string
}

export type SolutionCategory = {
  category: string
  categorySlug: string
  Icon: LucideIcon
  accent: string
  modules: SolutionModule[]
}

export const PLATFORM_SOLUTIONS: SolutionCategory[] = [
  {
    category: 'Core Platform',
    categorySlug: 'core-platform',
    Icon: BoxIcon,
    accent: '#14FFEC',
    modules: [
      { title: 'Integration Hub', slug: 'integration-hub', tagline: 'APIs, connectors, data sync', desc: 'Manage APIs, connectors, and real-time data synchronization across disparate systems.' },
      { title: 'ERP Core', slug: 'erp-core', tagline: 'Orders, inventory, production', desc: 'Centralize management of orders, inventory levels, and production processes.' },
      { title: 'Project Management', slug: 'project-management', tagline: 'Milestones, resources, risks', desc: 'Track project milestones, resource allocation, and risk assessment and mitigation.' },
      { title: 'Asset Lifecycle', slug: 'asset-lifecycle', tagline: 'Maintenance, AMC, depreciation', desc: 'Unified tracking for asset maintenance, AMC, and depreciation schedules.' },
      { title: 'Procurement & Spend', slug: 'procurement-spend', tagline: 'RFQ, POs, approvals', desc: 'Streamline RFQs, purchase orders, and multi-level approval workflows.' },
      { title: 'Vendor & Partner', slug: 'vendor-partner', tagline: 'SLAs, performance, payouts', desc: 'Monitor vendor SLAs, performance metrics, and automated payout calculations.' },
    ],
  },
  {
    category: 'Finance & Governance',
    categorySlug: 'finance-governance',
    Icon: Landmark,
    accent: '#4FD1C5',
    modules: [
      { title: 'Finance & Accounting', slug: 'finance-accounting', tagline: 'AR/AP, invoicing, GST', desc: 'Comprehensive management of AR, AP, invoicing, and GST compliance.' },
      { title: 'Billing & Revenue', slug: 'billing-revenue', tagline: 'Subscriptions, retainers, recurring revenue', desc: 'Manage subscription models, retainer-based billing, and recurring revenue streams.' },
      { title: 'Compliance & Audit', slug: 'compliance-audit', tagline: 'Regulations, evidence, logs', desc: 'Maintain regulatory alignment through automated logs, evidence collection, and policy enforcement.' },
      { title: 'Tax & Statutory', slug: 'tax-statutory', tagline: 'GST, TDS, ROC', desc: 'Automated handling of GST, TDS filings, and ROC compliance.' },
    ],
  },
  {
    category: 'Sales & Customers',
    categorySlug: 'sales-customers',
    Icon: Users,
    accent: '#3182CE',
    modules: [
      { title: 'CRM & Sales Pipeline', slug: 'crm-sales-pipeline', tagline: 'Leads, deals, renewals', desc: 'Manage deals, lead qualification, and contact relationships in a unified view.' },
      { title: 'Customer Experience', slug: 'customer-experience', tagline: 'Portals, tickets, feedback', desc: 'Integrated support ticketing, feedback collection, and self-service portals.' },
      { title: 'Partner / Franchise', slug: 'partner-franchise', tagline: 'Networks, reporting, commissions', desc: 'Centralized management of partner networks, reporting, and commission payout structures.' },
    ],
  },
  {
    category: 'Industry Execution',
    categorySlug: 'industry-execution',
    Icon: Factory,
    accent: '#2563EB',
    modules: [
      { title: 'Operations (OMS)', slug: 'operations-oms', tagline: 'Order management and fulfilment', desc: 'Industry-specific configured workflows for order management and fulfillment.' },
      { title: 'Supply Chain & Inventory', slug: 'supply-chain-inventory', tagline: 'Warehouses, stock, logistics', desc: 'Comprehensive warehouse management, real-time stock tracking, and logistics.' },
      { title: 'Production & Manufacturing', slug: 'production-manufacturing', tagline: 'BOM, MRP, batches, quality', desc: 'Detailed bill of materials, MRP, batch tracking, and quality control.' },
      { title: 'Facility & Maintenance', slug: 'facility-maintenance', tagline: 'Buildings, utilities, services', desc: 'Manage physical sites, utility infrastructure, and service-level maintenance.' },
    ],
  },
  {
    category: 'Digital & Data',
    categorySlug: 'digital-data',
    Icon: Database,
    accent: '#0D7377',
    modules: [
      { title: 'Document & Records', slug: 'document-records', tagline: 'DMS, versioning, e-sign', desc: 'Complete document management with versioning and e-signatures.' },
      { title: 'Workflow & Automation', slug: 'workflow-automation', tagline: 'Approvals, rules, SLAs', desc: 'Define complex business logic, approval triggers, and automated SLA tracking.' },
      { title: 'Data & Analytics', slug: 'data-analytics', tagline: 'Dashboards, KPIs, reporting', desc: 'Real-time dashboards, KPI tracking, and custom business intelligence reporting.' },
      { title: 'AI & Intelligence', slug: 'ai-intelligence', tagline: 'Forecasting, recommendations, predictions', desc: 'Advanced forecasting, AI-driven recommendations, and predictive analytics.' },
    ],
  },
  {
    category: 'Public Sector & Impact',
    categorySlug: 'public-sector-impact',
    Icon: BarChart3,
    accent: '#0ea5e9',
    modules: [
      { title: 'Grants & Fund', slug: 'grants-fund', tagline: 'Allocation, disbursement, utilization', desc: 'Tracking of fund allocation, disbursement cycles, and financial utilization metrics.' },
      { title: 'Scheme / Program', slug: 'scheme-program', tagline: 'Implementation, beneficiaries, DBT', desc: 'Manage scheme implementation, beneficiary tracking, and Direct Benefit Transfer workflows.' },
      { title: 'Monitoring & Evaluation', slug: 'monitoring-evaluation', tagline: 'Outcomes, impact analytics', desc: 'Track program outcomes, field data collection, and impact analytics.' },
    ],
  },
  {
    category: 'People & Workforce',
    categorySlug: 'people-workforce',
    Icon: Briefcase,
    accent: '#38A169',
    modules: [
      { title: 'HRMS & Payroll', slug: 'hrms-payroll', tagline: 'Employees, attendance, statutory', desc: 'End-to-end employee lifecycle, payroll, and statutory tax compliance.' },
      { title: 'Resource & Capacity', slug: 'resource-capacity', tagline: 'Planning, booking, utilization', desc: 'Strategic resource planning, internal booking, and utilization monitoring.' },
      { title: 'Field Force', slug: 'field-force', tagline: 'GPS, field apps, reports', desc: 'Real-time GPS tracking, mobile apps for field staff, and automated field reporting.' },
    ],
  },
  {
    category: 'Security & Platform',
    categorySlug: 'security-platform',
    Icon: Shield,
    accent: '#085255',
    modules: [
      { title: 'Identity & Security', slug: 'identity-security', tagline: 'RBAC, audit logs', desc: 'Role-based access control, audit logs, and multi-factor authentication.' },
      { title: 'Mobile & Portals', slug: 'mobile-portals', tagline: 'Staff, partners, customers', desc: 'Purpose-built mobile interfaces and secure portals for staff, partners, and customers.' },
      { title: 'Platform Admin', slug: 'platform-admin', tagline: 'Multi-tenant, configuration', desc: 'Multi-tenant environment management, global system configurations, and settings.' },
    ],
  },
]

export function solutionModulePath(categorySlug: string, moduleSlug: string) {
  return `/solutions/${categorySlug}/${moduleSlug}`
}

export function findSolutionModule(categorySlug: string, moduleSlug: string) {
  const category = PLATFORM_SOLUTIONS.find(c => c.categorySlug === categorySlug)
  const module = category?.modules.find(m => m.slug === moduleSlug)
  if (!category || !module) return null
  return { category, module }
}

/** Old single-segment /solutions/:slug URLs → nested path */
export const LEGACY_SOLUTION_SLUG_REDIRECTS: Record<string, string> = {
  'integration-hub': solutionModulePath('core-platform', 'integration-hub'),
  'project-management': solutionModulePath('core-platform', 'project-management'),
  'ai-intelligence': solutionModulePath('digital-data', 'ai-intelligence'),
  'finance-accounting': solutionModulePath('finance-governance', 'finance-accounting'),
  'hrms-payroll': solutionModulePath('people-workforce', 'hrms-payroll'),
  'compliance-audit': solutionModulePath('finance-governance', 'compliance-audit'),
}

const titleToSlug = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')

/** Resolve /module/:slug (title-based) to canonical nested path */
export function legacyModulePathFromTitleSlug(titleSlug: string): string | null {
  for (const cat of PLATFORM_SOLUTIONS) {
    for (const mod of cat.modules) {
      if (titleToSlug(mod.title) === titleSlug) {
        return solutionModulePath(cat.categorySlug, mod.slug)
      }
    }
  }
  return null
}
