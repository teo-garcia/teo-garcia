export const hero = {
  eyebrow: 'Mateo Garcia / Senior Software Engineer',
  title: 'Calm software for messy places.',
  body: 'I work across the stack, but the useful part is quieter: understand the constraint, name what is really happening, and build the piece people can trust in production.',
  ledger: [
    'Identity and access work for teams that cannot afford confusion.',
    'Legacy CMS and product behavior turned into cleaner flows.',
    'Campaign systems, launches, and tooling shipped under real pressure.',
  ],
  links: [
    {
      href: 'mailto:juanmateogarcia96@gmail.com',
      label: 'Email me',
    },
    {
      href: 'https://linkedin.com/in/teogarcia0',
      label: 'LinkedIn',
    },
  ],
} as const

export const about = [
  'I like the part where the brief is still a little rough. Someone knows the system hurts, but the reason is spread across code, process, old decisions, and a few things nobody has written down.',
  'That is where I am useful: slow down enough to see the shape, then build with enough care that the next person does not have to guess.',
] as const

export const chapters = ['Start', 'Shape', 'Work', 'Tools', 'Note'] as const

export const work = [
  {
    company: 'Gorilla Logic / AdCellerant',
    dates: 'Sep 2024 - Present',
    proof: [
      'Identity and role-based access for a growing user base',
      'Federated GraphQL services across independently deployable backends',
      'Campaign setup, reporting, and client presentation workflows',
    ],
    summary:
      'Orders, line items, products, reports, identity, permissions, and client-facing material. The useful move is making access and campaign setup feel obvious.',
    title: 'Campaign systems with identity at the center',
  },
  {
    company: 'Gorilla Logic / Evolve',
    dates: 'Apr 2022 - Sep 2024',
    proof: [
      'Image loading and content delivery work for a visual product surface',
      'Reverse-engineered undocumented WordPress behavior into reliable flows',
      'Led Salesforce integration work and owned tech-lead decisions',
    ],
    summary:
      'Property search, booking surfaces, image-heavy pages, a legacy WordPress CMS, Salesforce consistency, and release choices that had to hold.',
    title: 'Travel product work under legacy constraints',
  },
  {
    company: 'Matter Supply / Netflix',
    dates: 'Nov 2021 - Apr 2022',
    proof: [
      'Two multilingual promotional sites for film and documentary launches',
      'Six-language delivery across Colombia and US collaborators',
      'Scope, handoff, and release discipline under tight timelines',
    ],
    summary:
      'Two multilingual launches, six languages, distributed collaborators, and a deadline that rewarded clear decisions more than clever ones.',
    title: 'Launch work without theatrics',
  },
  {
    company: 'Huge / Stellantis',
    dates: 'Jun 2020 - Nov 2021',
    proof: [
      'Preact introduced as a lightweight rendering path for banner workflows',
      'Dynamic campaign assets generated from data inputs at volume',
      'Automation reduced repetitive manual production work',
    ],
    summary:
      'A repetitive banner workflow became a production system: Preact, dynamic data, and automation replacing manual drag.',
    title: 'Turning campaign production into tooling',
  },
  {
    company: 'Globant / Pragma',
    dates: 'May 2019 - Jun 2020',
    proof: [
      'React SPAs inside Drupal constraints for Banco Santander',
      'Promotional campaign apps with authenticated games and incentives',
      'React training that helped move an internal team away from Angular.js',
    ],
    summary:
      'Banking SPAs inside Drupal, campaign apps, authenticated games, and React training while the local team changed direction.',
    title: 'Early systems, banking, and team lift',
  },
] as const

export const toolGroups = [
  {
    label: 'Languages I reach for',
    tools: ['TypeScript', 'JavaScript', 'Python', 'SQL'],
  },
  {
    label: 'Interfaces and product surfaces',
    tools: ['React', 'Next.js', 'Preact', 'React Native', 'Storybook'],
  },
  {
    label: 'Services and queues',
    tools: ['Node.js', 'NestJS', 'Express', 'FastAPI', 'BullMQ'],
  },
  {
    label: 'Data and search',
    tools: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch'],
  },
  {
    label: 'APIs, identity, and access',
    tools: ['REST', 'GraphQL', 'Apollo Federation', 'OAuth 2.0', 'FusionAuth'],
  },
  {
    label: 'Shipping and observability',
    tools: ['AWS', 'GCloud', 'Docker', 'Cloudflare', 'Datadog', 'Playwright'],
  },
  {
    label: 'CMS, commerce, and integrations',
    tools: ['WordPress', 'Strapi', 'Drupal', 'Salesforce', 'Stripe', 'Shopify'],
  },
] as const
