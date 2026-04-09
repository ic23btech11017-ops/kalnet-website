import type { LucideIcon } from 'lucide-react'
import {
  Activity,
  BarChart3,
  BookOpen,
  Building2,
  Building,
  Factory,
  Hotel,
  Megaphone,
  Shield,
  ShoppingCart,
  Briefcase,
  Layers,
  LineChart,
  ClipboardCheck,
  Users,
} from 'lucide-react'

export type MenuItem = {
  title: string
  description: string
  slug: string
  href: string
  icon: LucideIcon
}

export type MenuSection = {
  label: string
  items: MenuItem[]
}

export const solutionsMenuSections: MenuSection[] = [
  {
    label: 'Core Platform',
    items: [
      { title: 'Integration Hub', description: 'Connect your ecosystem', slug: 'integration-hub', href: '/solutions/integration-hub', icon: Layers },
      { title: 'Project Management', description: 'Unified workspace for teams', slug: 'project-management', href: '/solutions/project-management', icon: Briefcase },
      { title: 'AI & Intelligence', description: 'Predictive analytics and insights', slug: 'ai-intelligence', href: '/solutions/ai-intelligence', icon: LineChart },
    ],
  },
  {
    label: 'Finance & Governance',
    items: [
      { title: 'Finance & Accounting', description: 'GST, invoicing and reporting', slug: 'finance-accounting', href: '/solutions/finance-accounting', icon: BarChart3 },
      { title: 'HRMS & Payroll', description: 'Global workforce management', slug: 'hrms-payroll', href: '/solutions/hrms-payroll', icon: Users },
      { title: 'Compliance & Audit', description: 'Risk mitigation and security', slug: 'compliance-audit', href: '/solutions/compliance-audit', icon: ClipboardCheck },
    ],
  },
]

export const industriesMenuItems: MenuItem[] = [
  { title: 'Real Estate & Built Environment', description: '10 solutions', slug: 'real-estate', href: '/industries/real-estate', icon: Building2 },
  { title: 'Professional Services', description: '9 solutions', slug: 'professional-services', href: '/industries/professional-services', icon: Briefcase },
  { title: 'Education & Research', description: '10 solutions', slug: 'education-research', href: '/industries/education-research', icon: BookOpen },
  { title: 'Healthcare & Life Sciences', description: '9 solutions', slug: 'healthcare-life-sciences', href: '/industries/healthcare-life-sciences', icon: Activity },
  { title: 'Manufacturing & Industrial', description: '9 solutions', slug: 'manufacturing-industrial', href: '/industries/manufacturing-industrial', icon: Factory },
  { title: 'IT, SaaS & Technology', description: '9 solutions', slug: 'it-saas-technology', href: '/industries/it-saas-technology', icon: Shield },
  { title: 'Financial Services & FinTech', description: '9 solutions', slug: 'fintech', href: '/industries/fintech', icon: LineChart },
  { title: 'Retail, E-Commerce & Distribution', description: '8 solutions', slug: 'retail-ecommerce-distribution', href: '/industries/retail-ecommerce-distribution', icon: ShoppingCart },
  { title: 'Media, Marketing & Creative', description: '8 solutions', slug: 'media-marketing-creative', href: '/industries/media-marketing-creative', icon: Megaphone },
]

export const topbarLinks = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Partners', href: '/partners' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blogs', href: '/blogs' },
]

export const solutionsHighlight = {
  title: 'Enterprise Intelligence',
  description: 'Our modular approach handles 25+ business solutions and helps you build the right system for your workflow.',
  href: '/solutions',
}

export const allSolutionsItems = solutionsMenuSections.flatMap(section => section.items)
export const allIndustriesItems = industriesMenuItems

export const industryHeroCards = [
  { title: 'Healthcare Management', description: 'Patient records, billing, pharmacy, and appointments.', href: '/industries/healthcare-life-sciences', icon: Activity },
  { title: 'Hotel Management', description: 'Reservations, billing, housekeeping, and guest operations.', href: '/industries/hospitality', icon: Hotel },
  { title: 'Education Operations', description: 'Student lifecycle, fees, attendance, and analytics.', href: '/industries/education-research', icon: BookOpen },
  { title: 'Enterprise Operations', description: 'Scalable CRM + ERP systems for modern organizations.', href: '/industries/professional-services', icon: Building },
]
