export type StaticPageKey = 'partners' | 'careers' | 'about' | 'contact'

type StaticPageContent = {
  eyebrow: string
  title: string
  description: string
  highlights: Array<{ title: string; description: string }>
  stats: Array<{ label: string; value: string }>
}

export const staticPageContent: Record<StaticPageKey, StaticPageContent> = {
  partners: {
    eyebrow: 'PARTNER NETWORK',
    title: 'Partners',
    description: 'Collaborate with Kalnet to deliver modern operating systems for clients across industries.',
    highlights: [
      { title: 'Implementation Partners', description: 'Consulting and service firms that lead deployment and change management for client teams.' },
      { title: 'Technology Partners', description: 'Integrate payment, communication, analytics, and data systems into one connected solution.' },
      { title: 'Channel Partners', description: 'Extend Kalnet to new markets with supported go-to-market material and sales enablement.' },
    ],
    stats: [
      { label: 'Partner Types', value: '3' },
      { label: 'Integration Modules', value: '25+' },
      { label: 'Support Coverage', value: '24/7' },
      { label: 'Joint Rollouts', value: '100+' },
    ],
  },
  careers: {
    eyebrow: 'WORK WITH US',
    title: 'Careers',
    description: 'Build products that simplify mission-critical workflows for modern businesses.',
    highlights: [
      { title: 'Product & Engineering', description: 'Work on scalable frontend and platform experiences across CRM, ERP, and automation modules.' },
      { title: 'Implementation & Success', description: 'Help customers adopt Kalnet workflows and drive business outcomes post-launch.' },
      { title: 'Growth & Partnerships', description: 'Expand Kalnet across verticals through strategic marketing and collaboration programs.' },
    ],
    stats: [
      { label: 'Open Teams', value: '6' },
      { label: 'Learning Budget', value: 'Annual' },
      { label: 'Work Model', value: 'Hybrid' },
      { label: 'Hiring Stages', value: '4' },
    ],
  },
  about: {
    eyebrow: 'OUR STORY',
    title: 'About Kalnet',
    description: 'Kalnet builds configurable CRM, ERP, and automation systems for ambitious organizations.',
    highlights: [
      { title: 'Mission', description: 'Reduce operational complexity by unifying customer, finance, and process workflows.' },
      { title: 'Vision', description: 'Become the global standard for modular business operating systems.' },
      { title: 'Approach', description: 'Design practical, adaptable systems shaped around real-world team operations.' },
    ],
    stats: [
      { label: 'Industries Served', value: '15+' },
      { label: 'Core Modules', value: '30+' },
      { label: 'Countries', value: '12+' },
      { label: 'Client Teams', value: '150+' },
    ],
  },
  contact: {
    eyebrow: "LET'S TALK",
    title: 'Contact',
    description: 'Share your business goals and we will map the right CRM + ERP architecture for your workflows.',
    highlights: [
      { title: 'Discovery Session', description: 'Discuss process gaps, goals, and expected outcomes with our solution team.' },
      { title: 'Implementation Blueprint', description: 'Receive a practical rollout structure with modules and milestones.' },
      { title: 'Ongoing Support', description: 'Plan onboarding and post-launch optimization for your team and stakeholders.' },
    ],
    stats: [
      { label: 'Response Time', value: '< 24h' },
      { label: 'Onboarding Support', value: 'Included' },
      { label: 'Consultation Mode', value: 'Remote' },
      { label: 'Coverage', value: 'Global' },
    ],
  },
}

export const capabilityBlocks = [
  {
    title: 'Workflow Visibility',
    description: 'Track every stage of execution with dashboard-level clarity for leadership and operations.',
  },
  {
    title: 'Cross-Team Coordination',
    description: 'Keep departments aligned through shared records, role-based workflows, and automated handoffs.',
  },
  {
    title: 'Governed Data Operations',
    description: 'Standardize data quality, security controls, and compliance-ready reporting across teams.',
  },
]

type CategoryDetailContent = {
  eyebrow: string
  summary: string
  stats: Array<{ label: string; value: string }>
  pillars: Array<{ title: string; description: string }>
  workflow: string[]
  outcomes: string[]
  mediaTitle: string
  mediaSubtitle: string
}

export const solutionDetailContent: Record<string, CategoryDetailContent> = {
  'integration-hub': {
    eyebrow: 'SOLUTION CATEGORY',
    summary: 'Unify third-party tools, internal apps, and partner systems through governed data exchange and workflow connectors.',
    stats: [
      { label: 'Connector patterns', value: '40+' },
      { label: 'Sync modes', value: 'Real-time' },
      { label: 'Validation rules', value: 'Configurable' },
      { label: 'Audit trails', value: 'Built-in' },
    ],
    pillars: [
      { title: 'API and webhook orchestration', description: 'Coordinate inbound and outbound events across CRM, ERP, and external services.' },
      { title: 'Data transformation layer', description: 'Map schemas and normalize payloads before records reach operational modules.' },
      { title: 'Error and retry governance', description: 'Monitor failed syncs, apply fallback logic, and maintain operational continuity.' },
      { title: 'Security by design', description: 'Enforce scoped access, encrypted transfer, and traceability at every integration point.' },
    ],
    workflow: [
      'Map source and destination systems',
      'Configure integration flows and triggers',
      'Run staged sync validation',
      'Monitor and optimize connector health',
    ],
    outcomes: ['Faster data availability across teams', 'Reduced manual data transfer effort', 'Higher confidence in cross-system reporting'],
    mediaTitle: 'Integration architecture placeholder',
    mediaSubtitle: 'Place system diagrams, connector maps, and API workflow videos here.',
  },
  'project-management': {
    eyebrow: 'SOLUTION CATEGORY',
    summary: 'Coordinate teams, timelines, dependencies, and delivery checkpoints in one unified operational workspace.',
    stats: [
      { label: 'Team workspaces', value: 'Multi' },
      { label: 'Task automations', value: '20+' },
      { label: 'Timeline views', value: 'Flexible' },
      { label: 'Ownership control', value: 'Role-based' },
    ],
    pillars: [
      { title: 'Structured execution boards', description: 'Track progress by milestone, workstream, and delivery owner in real time.' },
      { title: 'Dependency-aware planning', description: 'Prevent bottlenecks by sequencing work with clear prerequisite and impact mapping.' },
      { title: 'Cross-functional visibility', description: 'Align operations, finance, and leadership on status, risk, and resource utilization.' },
      { title: 'Review and approval gates', description: 'Standardize decision points before moving projects into the next phase.' },
    ],
    workflow: ['Define project blueprints', 'Assign owners and SLA timelines', 'Automate stage transitions', 'Track delivery quality and cycle time'],
    outcomes: ['Improved delivery predictability', 'Less rework from missed handoffs', 'Clear accountability at every stage'],
    mediaTitle: 'Project operations placeholder',
    mediaSubtitle: 'Use this for sprint board visuals, timeline demos, and workflow snapshots.',
  },
  'ai-intelligence': {
    eyebrow: 'SOLUTION CATEGORY',
    summary: 'Convert operational data into decision-ready insights through predictive analysis and role-specific intelligence views.',
    stats: [
      { label: 'Insight dashboards', value: '12+' },
      { label: 'Forecast models', value: 'Adaptive' },
      { label: 'Alert rules', value: 'Custom' },
      { label: 'Data windows', value: 'Historical + Live' },
    ],
    pillars: [
      { title: 'Predictive trend signals', description: 'Spot demand, risk, and workload trends before they impact execution outcomes.' },
      { title: 'Decision support panels', description: 'Serve contextual recommendations to managers and operators based on workflow state.' },
      { title: 'Performance anomaly detection', description: 'Automatically highlight process deviations and quality regressions.' },
      { title: 'Insight-to-action workflows', description: 'Trigger next-step actions directly from analytics findings.' },
    ],
    workflow: ['Define priority decision areas', 'Connect and shape data sources', 'Configure insight panels and alerts', 'Continuously tune model behavior'],
    outcomes: ['Faster strategic decisions', 'Early risk identification', 'Higher process efficiency through guided actions'],
    mediaTitle: 'AI insights placeholder',
    mediaSubtitle: 'Keep this for dashboard captures, model explainers, and analytics walkthrough videos.',
  },
  'finance-accounting': {
    eyebrow: 'SOLUTION CATEGORY',
    summary: 'Control invoicing, receivables, payables, and reporting with compliant and audit-ready financial workflows.',
    stats: [
      { label: 'Finance workflows', value: '15+' },
      { label: 'Report packs', value: 'Automated' },
      { label: 'Tax handling', value: 'Structured' },
      { label: 'Reconciliation', value: 'Rule-driven' },
    ],
    pillars: [
      { title: 'Invoice lifecycle automation', description: 'Generate, approve, and track invoices with configurable state-based controls.' },
      { title: 'Collections and receivable visibility', description: 'Monitor dues by aging buckets and trigger follow-up workflows automatically.' },
      { title: 'Spend governance', description: 'Apply budget checks and authorization policies for procurement and payments.' },
      { title: 'Reporting and compliance support', description: 'Publish finance summaries and audit extracts through consistent templates.' },
    ],
    workflow: ['Configure chart and policy rules', 'Automate billing and collection flows', 'Set reconciliation checkpoints', 'Publish period reports'],
    outcomes: ['Fewer manual accounting steps', 'Improved cashflow visibility', 'Faster close cycles with stronger controls'],
    mediaTitle: 'Finance workflow placeholder',
    mediaSubtitle: 'Add invoicing UI, reporting charts, and reconciliation process media assets here.',
  },
  'hrms-payroll': {
    eyebrow: 'SOLUTION CATEGORY',
    summary: 'Manage employee lifecycle, attendance, compensation, and payroll governance from a single operations layer.',
    stats: [
      { label: 'HR processes', value: '20+' },
      { label: 'Payroll cycles', value: 'Automated' },
      { label: 'Policy controls', value: 'Configurable' },
      { label: 'Approval ladders', value: 'Multi-level' },
    ],
    pillars: [
      { title: 'Employee record centralization', description: 'Keep onboarding, role history, and compliance documentation in one source of truth.' },
      { title: 'Attendance and leave intelligence', description: 'Track time, shifts, and leave with policy-aware calculations.' },
      { title: 'Payroll orchestration', description: 'Automate earnings, deductions, and payouts with review checkpoints.' },
      { title: 'Manager self-service workflows', description: 'Enable teams to process routine HR actions through structured approvals.' },
    ],
    workflow: ['Define policy and payroll rules', 'Enable attendance and leave engines', 'Run payroll simulations', 'Execute and audit monthly cycles'],
    outcomes: ['Lower payroll errors', 'Faster HR operations', 'Transparent workforce governance'],
    mediaTitle: 'HR and payroll placeholder',
    mediaSubtitle: 'Use for HR dashboard media, payroll run views, and employee workflow demonstrations.',
  },
  'compliance-audit': {
    eyebrow: 'SOLUTION CATEGORY',
    summary: 'Operationalize compliance monitoring, control testing, and audit preparedness through structured governance workflows.',
    stats: [
      { label: 'Control libraries', value: 'Configurable' },
      { label: 'Review frequency', value: 'Scheduled' },
      { label: 'Evidence trails', value: 'Centralized' },
      { label: 'Risk registers', value: 'Live' },
    ],
    pillars: [
      { title: 'Control management', description: 'Define and assign controls with accountable owners and policy references.' },
      { title: 'Risk tracking engine', description: 'Capture risk severity, mitigation status, and business impact across departments.' },
      { title: 'Evidence collection workflows', description: 'Store artifacts and review records for each audit cycle in a single repository.' },
      { title: 'Audit readiness dashboard', description: 'Track gaps, due actions, and compliance health before review windows.' },
    ],
    workflow: ['Model controls and review schedules', 'Assign risk owners and mitigation plans', 'Collect evidence continuously', 'Prepare and publish audit summary'],
    outcomes: ['Improved compliance posture', 'Reduced audit preparation effort', 'Faster issue remediation cycles'],
    mediaTitle: 'Compliance operations placeholder',
    mediaSubtitle: 'Place compliance matrix visuals, control dashboards, and audit walkthrough media here.',
  },
}

export const industryDetailContent: Record<string, CategoryDetailContent> = {
  'real-estate': {
    eyebrow: 'INDUSTRY CATEGORY',
    summary: 'Digitize property lifecycle operations from lead capture and documentation to contract execution and post-sale service.',
    stats: [
      { label: 'Property workflows', value: '12+' },
      { label: 'Sales visibility', value: 'Live' },
      { label: 'Document flows', value: 'Automated' },
      { label: 'Compliance readiness', value: 'Built-in' },
    ],
    pillars: [
      { title: 'Lead-to-booking pipeline', description: 'Track inquiries, site visits, negotiations, and booking conversions in one flow.' },
      { title: 'Documentation orchestration', description: 'Coordinate KYC, agreements, and financial paperwork with stage-based checks.' },
      { title: 'Collection tracking', description: 'Monitor payment milestones and pending amounts by project and unit.' },
      { title: 'Post-sale service control', description: 'Manage handover actions and service requests through a centralized queue.' },
    ],
    workflow: ['Capture and qualify demand', 'Drive booking and documentation', 'Track payment milestones', 'Coordinate handover and support'],
    outcomes: ['Higher conversion consistency', 'Faster contract cycle', 'Improved buyer communication'],
    mediaTitle: 'Real estate operations placeholder',
    mediaSubtitle: 'Use this for property sales dashboards, funnel reports, and service request media.',
  },
  'professional-services': {
    eyebrow: 'INDUSTRY CATEGORY',
    summary: 'Manage clients, projects, billing, and resource plans with delivery-focused operational visibility.',
    stats: [
      { label: 'Client workflows', value: '10+' },
      { label: 'Resource utilization', value: 'Tracked' },
      { label: 'Project governance', value: 'Structured' },
      { label: 'Billing sync', value: 'Integrated' },
    ],
    pillars: [
      { title: 'Engagement lifecycle control', description: 'Track proposals, onboarding, execution, and renewal cycles per client account.' },
      { title: 'Resource and capacity planning', description: 'Allocate teams based on skills, timelines, and project priorities.' },
      { title: 'Delivery and margin visibility', description: 'Monitor milestone status, utilization, and effort-to-revenue patterns.' },
      { title: 'Invoice alignment with delivery', description: 'Connect timesheets and milestone completion to billing workflows.' },
    ],
    workflow: ['Scope and onboard clients', 'Plan resources and milestones', 'Track delivery quality', 'Close billing and renewals'],
    outcomes: ['Better project profitability', 'Improved client retention', 'Predictable delivery timelines'],
    mediaTitle: 'Professional services placeholder',
    mediaSubtitle: 'Keep project timeline visuals, capacity reports, and client success dashboards here.',
  },
  'education-research': {
    eyebrow: 'INDUSTRY CATEGORY',
    summary: 'Streamline admissions, academic operations, fee tracking, and institution-wide communication in one platform.',
    stats: [
      { label: 'Academic workflows', value: '14+' },
      { label: 'Student lifecycle', value: 'End-to-end' },
      { label: 'Fee visibility', value: 'Live' },
      { label: 'Performance insights', value: 'Continuous' },
    ],
    pillars: [
      { title: 'Admissions and enrollment flow', description: 'Manage inquiries, applications, reviews, and confirmations through a structured pipeline.' },
      { title: 'Classroom and attendance operations', description: 'Track schedules, attendance, and class-level outcomes in real time.' },
      { title: 'Fee and financial administration', description: 'Automate fee plans, reminders, receipts, and dues monitoring.' },
      { title: 'Academic performance intelligence', description: 'Measure progress and identify intervention areas across student segments.' },
    ],
    workflow: ['Manage admission pipeline', 'Run daily academic operations', 'Track fees and dues', 'Review performance and interventions'],
    outcomes: ['Reduced administrative load', 'Improved student communication', 'Better academic outcome tracking'],
    mediaTitle: 'Education system placeholder',
    mediaSubtitle: 'Use for LMS-like dashboards, fee reports, and student progress visuals.',
  },
  'healthcare-life-sciences': {
    eyebrow: 'INDUSTRY CATEGORY',
    summary: 'Coordinate patient administration, care workflows, billing, and compliance operations with secure data controls.',
    stats: [
      { label: 'Care workflows', value: '12+' },
      { label: 'Record integrity', value: 'Governed' },
      { label: 'Billing operations', value: 'Integrated' },
      { label: 'Compliance trails', value: 'Audit-ready' },
    ],
    pillars: [
      { title: 'Patient journey coordination', description: 'Track registration, appointments, consultation, and follow-up actions end-to-end.' },
      { title: 'Clinical and admin alignment', description: 'Unify operational tasks between front desk, clinical teams, and finance units.' },
      { title: 'Billing and payment workflows', description: 'Automate bill generation, approvals, and payment status tracking.' },
      { title: 'Data security and access controls', description: 'Apply role-based restrictions and record-level visibility controls for sensitive data.' },
    ],
    workflow: ['Set patient intake flow', 'Standardize care and admin tasks', 'Enable billing controls', 'Monitor compliance and service quality'],
    outcomes: ['Faster patient service cycles', 'Reduced administrative errors', 'Improved billing turnaround'],
    mediaTitle: 'Healthcare operations placeholder',
    mediaSubtitle: 'Place patient flow diagrams, billing UI captures, and care dashboard visuals here.',
  },
  'manufacturing-industrial': {
    eyebrow: 'INDUSTRY CATEGORY',
    summary: 'Improve production planning, inventory movement, quality checks, and dispatch operations through integrated workflows.',
    stats: [
      { label: 'Production workflows', value: '11+' },
      { label: 'Inventory visibility', value: 'Real-time' },
      { label: 'Quality checkpoints', value: 'Mapped' },
      { label: 'Dispatch controls', value: 'Automated' },
    ],
    pillars: [
      { title: 'Production scheduling control', description: 'Align manufacturing plans with capacity, material availability, and demand signals.' },
      { title: 'Inventory and procurement sync', description: 'Track stock movement and trigger procurement actions through threshold logic.' },
      { title: 'Quality governance workflows', description: 'Run inspection gates and non-conformance management through structured actions.' },
      { title: 'Order fulfillment orchestration', description: 'Coordinate packaging, dispatch, and delivery handoff with end-to-end tracking.' },
    ],
    workflow: ['Plan production cycles', 'Control material and inventory', 'Run quality checkpoints', 'Execute dispatch and fulfillment'],
    outcomes: ['Lower production delays', 'Higher inventory accuracy', 'Better on-time dispatch performance'],
    mediaTitle: 'Manufacturing flow placeholder',
    mediaSubtitle: 'Use for production board visuals, inventory maps, and fulfillment process media.',
  },
  'it-saas-technology': {
    eyebrow: 'INDUSTRY CATEGORY',
    summary: 'Align product, support, success, and finance operations to scale SaaS and technology businesses efficiently.',
    stats: [
      { label: 'Ops modules', value: '10+' },
      { label: 'Support workflows', value: 'Centralized' },
      { label: 'Subscription control', value: 'Flexible' },
      { label: 'Performance views', value: 'Live' },
    ],
    pillars: [
      { title: 'Customer lifecycle orchestration', description: 'Track onboarding, adoption, renewals, and expansion opportunities systematically.' },
      { title: 'Ticket and support alignment', description: 'Coordinate issue handling across support, product, and engineering teams.' },
      { title: 'Subscription and revenue operations', description: 'Manage billing plans, renewals, and revenue workflows through a single system.' },
      { title: 'Operational analytics', description: 'Expose retention, response, and delivery signals for executive decision-making.' },
    ],
    workflow: ['Map customer lifecycle stages', 'Integrate support and product workflows', 'Automate billing and renewals', 'Track growth and retention signals'],
    outcomes: ['Improved retention operations', 'Faster support resolution cycles', 'Better revenue workflow predictability'],
    mediaTitle: 'SaaS operations placeholder',
    mediaSubtitle: 'Place lifecycle dashboards, support analytics, and renewal workflow visuals here.',
  },
  fintech: {
    eyebrow: 'INDUSTRY CATEGORY',
    summary: 'Run customer onboarding, risk controls, transaction operations, and service workflows with structured governance.',
    stats: [
      { label: 'Risk workflows', value: 'Configurable' },
      { label: 'Customer checks', value: 'Automated' },
      { label: 'Transaction visibility', value: 'Live' },
      { label: 'Audit readiness', value: 'Continuous' },
    ],
    pillars: [
      { title: 'Onboarding and verification', description: 'Manage KYC, approvals, and account activation through controlled process stages.' },
      { title: 'Risk and compliance operations', description: 'Track risk flags, policy checks, and review escalations in real time.' },
      { title: 'Transaction and settlement monitoring', description: 'Observe flow performance and exception handling with operational clarity.' },
      { title: 'Service and issue management', description: 'Resolve support and dispute workflows through SLA-driven processes.' },
    ],
    workflow: ['Configure customer onboarding checks', 'Enable risk and policy controls', 'Monitor transaction operations', 'Close service and compliance loops'],
    outcomes: ['Stronger risk governance', 'Faster onboarding throughput', 'Higher transaction process confidence'],
    mediaTitle: 'FinTech operations placeholder',
    mediaSubtitle: 'Use for risk dashboards, onboarding flow visuals, and transaction monitoring media.',
  },
  'retail-ecommerce-distribution': {
    eyebrow: 'INDUSTRY CATEGORY',
    summary: 'Coordinate catalog, orders, inventory, fulfillment, and post-purchase workflows across retail and distribution channels.',
    stats: [
      { label: 'Order workflows', value: 'End-to-end' },
      { label: 'Inventory sync', value: 'Real-time' },
      { label: 'Channel coverage', value: 'Omnichannel' },
      { label: 'Fulfillment control', value: 'Automated' },
    ],
    pillars: [
      { title: 'Order lifecycle visibility', description: 'Track order states from confirmation to dispatch and delivery updates.' },
      { title: 'Inventory and warehouse coordination', description: 'Keep stock levels accurate across stores, warehouses, and online channels.' },
      { title: 'Fulfillment workflow control', description: 'Manage pick-pack-ship actions with exception and delay handling.' },
      { title: 'Post-purchase service operations', description: 'Handle return, exchange, and refund workflows with structured SLAs.' },
    ],
    workflow: ['Sync products and channels', 'Control inventory and allocation', 'Run fulfillment pipelines', 'Manage returns and support'],
    outcomes: ['Fewer fulfillment gaps', 'Improved stock accuracy', 'Better customer post-purchase experience'],
    mediaTitle: 'Retail operations placeholder',
    mediaSubtitle: 'Place order dashboard visuals, warehouse process maps, and returns flow media here.',
  },
  'media-marketing-creative': {
    eyebrow: 'INDUSTRY CATEGORY',
    summary: 'Manage campaign planning, creative approvals, client reporting, and delivery operations in one workspace.',
    stats: [
      { label: 'Campaign workflows', value: '10+' },
      { label: 'Approval chains', value: 'Structured' },
      { label: 'Performance reporting', value: 'Automated' },
      { label: 'Client visibility', value: 'Shared' },
    ],
    pillars: [
      { title: 'Campaign orchestration', description: 'Coordinate planning, content production, launches, and optimization tasks.' },
      { title: 'Creative review operations', description: 'Handle drafts, approvals, and revision history with role-based governance.' },
      { title: 'Client communication and reporting', description: 'Deliver transparent status and outcome reports through structured dashboards.' },
      { title: 'Performance operations loop', description: 'Connect campaign metrics to execution adjustments and next-step planning.' },
    ],
    workflow: ['Plan campaigns and deliverables', 'Run creative approval pipelines', 'Track outcomes and insights', 'Align client reporting and renewals'],
    outcomes: ['Faster campaign execution', 'Clearer approval accountability', 'More actionable performance reporting'],
    mediaTitle: 'Creative operations placeholder',
    mediaSubtitle: 'Use this for campaign board visuals, approval flow examples, and reporting snapshots.',
  },
}
