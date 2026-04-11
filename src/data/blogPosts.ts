export type BlogPostListItem = {
  slug: string
  title: string
  excerpt: string
}

export const blogPosts: BlogPostListItem[] = [
  {
    slug: 'enterprise-automation-guide',
    title: 'Enterprise Automation: A Practical Rollout Guide',
    excerpt: 'How to move from scattered tools to a unified operations stack without disruption.',
  },
  {
    slug: 'crm-erp-integration-playbook',
    title: 'CRM + ERP Integration Playbook',
    excerpt: 'A proven structure for syncing customer, sales, and finance workflows at scale.',
  },
  {
    slug: 'industry-specific-digital-transformation',
    title: 'Industry-Specific Digital Transformation',
    excerpt: 'Why generic software fails and how tailored systems accelerate operations.',
  },
]

export const blogPostSlugs = new Set(blogPosts.map(p => p.slug))
