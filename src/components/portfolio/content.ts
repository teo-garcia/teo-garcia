export const hero = {
  eyebrow: 'I build systems that move product forward',
  name: 'Mateo Garcia',
  role: 'Senior Software Engineer',
  title: 'I build the part that makes the rest easier to reason about.',
  body: 'I work across the stack to turn ambiguous product problems into clear, durable software.',
  ledger: [
    'Understand the real problem',
    'Design for clarity and scale',
    'Build with care and iterate',
  ],
  links: [
    {
      href: 'mailto:juanmateogarcia96@gmail.com',
      label: "Let's talk",
    },
    {
      href: 'https://linkedin.com/in/teogarcia0',
      label: 'LinkedIn',
    },
  ],
} as const

export const navItems = [
  { href: '#work', label: 'Work' },
  { href: '#approach', label: 'Approach' },
  { href: '#stack', label: 'Stack' },
  { href: '#about', label: 'About' },
] as const

export const about = {
  eyebrow: 'Approach',
  note: 'Not a process. Just how I think and work.',
  title:
    'I ask a lot of questions up front. I like to understand the constraints, the users, and the business. Then I focus on what actually moves the needle.',
  body: 'I iterate, get feedback early, and keep the codebase healthy along the way.',
} as const

export const chapters = ['Start', 'Shape', 'Work', 'Tools', 'Note'] as const

export const assets = {
  botanicalBand: {
    alt: 'Pencil drawing of a leafy branch over a dark field.',
    src: '/images/portfolio/editorial-botanical-band.png',
  },
  lighthouseContact: {
    alt: 'Pencil drawing of a coastal lighthouse with mist and waves.',
    src: '/images/portfolio/editorial-lighthouse-contact.png',
  },
  mountainHero: {
    alt: 'Pencil drawing of a mountain peak with mist and field-journal marks.',
    src: '/images/portfolio/editorial-mountain-hero.png',
  },
  fern: {
    alt: 'Pencil drawing of ferns, branches, river stones, and soft mist.',
    src: '/images/portfolio/pencil-fern-river.png',
  },
  leafSystem: {
    alt: 'Pencil drawing of leaves, roots, stones, and mountain contour lines.',
    src: '/images/portfolio/pencil-leaf-system.png',
  },
  mountain: {
    alt: 'Pencil drawing of misty mountain ridges and thin trees.',
    src: '/images/portfolio/pencil-mountain-hero.png',
  },
} as const

export const work = [
  {
    company: 'Gorilla Logic / AdCellerant',
    dates: 'Sep 2024 - Present',
    proof: 'FusionAuth / Apollo Federation / campaign reporting',
    summary:
      'Identity, permissions, orders, line items, products, reporting, and the client-facing details around them. Small access decisions became product decisions, so the work had to stay explicit.',
    title: 'Global ad tech platform',
  },
  {
    company: 'Gorilla Logic / Evolve',
    dates: 'Apr 2022 - Sep 2024',
    proof: 'WordPress / Salesforce / image-heavy product surfaces',
    summary:
      'Search, discovery, booking surfaces, and a legacy CMS with Salesforce behind it. A lot of the value was making the invisible sync behavior easier to trust.',
    title: 'Vacation rental marketplace',
  },
  {
    company: 'Matter Supply / Netflix',
    dates: 'Nov 2021 - Apr 2022',
    proof: 'multilingual launches / tight timelines / distributed handoff',
    summary:
      'Two promotional sites, six languages, people in different countries, and no room for clever chaos. The job was to keep the build clean enough that the launch stayed boring.',
    title: 'Netflix promotional sites',
  },
  {
    company: 'Huge / Stellantis',
    dates: 'Jun 2020 - Nov 2021',
    proof: 'Preact / data-driven banners / production automation',
    summary:
      'There was too much repeated manual production. I helped turn that into a lightweight rendering and automation path so the team could generate campaign assets from data instead of dragging work around by hand.',
    title: 'Automated campaign systems',
  },
  {
    company: 'Globant / Pragma',
    dates: 'May 2019 - Jun 2020',
    proof: 'React / Drupal / authenticated campaign apps',
    summary:
      'Early work had a lot of constraints: banking SPAs inside Drupal, campaign apps with authenticated games, and a team learning React while moving away from older habits.',
    title: 'Digital banking and campaign apps',
  },
] as const

export const toolGroups = [
  {
    note: 'The default language for product work, with Python and SQL when the problem is closer to data or automation.',
    label: 'Languages',
    tools: 'TypeScript, JavaScript, Python, SQL',
  },
  {
    note: 'Where I spend most of the visible time: product surfaces, campaign pages, booking flows, and internal tools.',
    label: 'Frontend',
    tools: 'React, Next.js, Preact, React Native, Storybook, Playwright',
  },
  {
    note: 'Enough backend to own real workflows instead of throwing problems over a wall.',
    label: 'Backend',
    tools: 'Node.js, NestJS, Express, FastAPI, BullMQ, GraphQL',
  },
  {
    note: 'The systems behind the screen: relational data, cached state, search, and queues when the product needs them.',
    label: 'Data',
    tools: 'PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch',
  },
  {
    note: 'The places where product language has to become enforceable rules.',
    label: 'APIs and identity',
    tools: 'REST, GraphQL, Apollo Federation, OAuth 2.0, FusionAuth',
  },
  {
    note: 'Not a separate phase. Part of making the work understandable after it leaves the branch.',
    label: 'Delivery',
    tools: 'AWS, GCloud, Docker, Cloudflare, Datadog, GitHub Actions',
  },
  {
    note: 'Where older content systems and business platforms meet the actual product.',
    label: 'Platforms',
    tools: 'WordPress, Strapi, Drupal, Salesforce, Stripe, Shopify',
  },
] as const

export const contact = {
  email: 'juanmateogarcia96@gmail.com',
  location: 'Medellin, Colombia / Remote friendly',
  phone: '+57 350 793 0191',
  site: 'teo-garcia.vercel.app',
  social: 'linkedin.com/in/teogarcia0',
} as const
