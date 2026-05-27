export const hero = {
  eyebrow: 'Mateo Garcia / Senior Software Engineer',
  title: 'I build the part that makes the rest easier to reason about.',
  body: 'Most of my work starts with a rough sentence: access is confusing, the CMS is lying, reporting is slow, launches are getting risky. I like turning that sentence into software the team can actually live with.',
  ledger: [
    'Identity and access when the rules keep changing.',
    'Legacy CMS behavior made less mysterious.',
    'Campaign systems and launches that need calm decisions.',
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
  'I am not trying to make every project sound dramatic. A lot of good engineering is just staying with the messy part long enough to stop guessing.',
  'I ask where the truth lives, what people are working around, and which decision will make the next release less painful. Then I build the boring, durable thing.',
] as const

export const chapters = ['Start', 'Shape', 'Work', 'Tools', 'Note'] as const

export const assets = {
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
    proof: ['FusionAuth', 'Apollo Federation', 'campaign reporting'],
    summary:
      'This is the kind of work where small access decisions become product decisions. I have been working through orders, line items, products, reports, identity, permissions, and the client-facing material around them.',
    title: 'AdCellerant',
  },
  {
    company: 'Gorilla Logic / Evolve',
    dates: 'Apr 2022 - Sep 2024',
    proof: ['WordPress', 'Salesforce', 'image-heavy product surfaces'],
    summary:
      'The product looked simple from the outside: find a place, book it, trust the photos. Underneath, a legacy CMS and Salesforce integration had their own history. I spent a lot of time making the invisible parts behave.',
    title: 'Evolve',
  },
  {
    company: 'Matter Supply / Netflix',
    dates: 'Nov 2021 - Apr 2022',
    proof: ['multilingual launches', 'tight timelines', 'distributed handoff'],
    summary:
      'Two promotional sites, six languages, people in different countries, and no room for clever chaos. The job was to keep the build clean enough that the launch stayed boring.',
    title: 'Netflix promotional sites',
  },
  {
    company: 'Huge / Stellantis',
    dates: 'Jun 2020 - Nov 2021',
    proof: ['Preact', 'data-driven banners', 'production automation'],
    summary:
      'There was too much repeated manual production. I helped turn that into a lightweight rendering and automation path so the team could generate campaign assets from data instead of dragging work around by hand.',
    title: 'Stellantis',
  },
  {
    company: 'Globant / Pragma',
    dates: 'May 2019 - Jun 2020',
    proof: ['React', 'Drupal', 'authenticated campaign apps'],
    summary:
      'Early work had a lot of constraints: banking SPAs inside Drupal, campaign apps with authenticated games, and a team learning React while moving away from older habits.',
    title: 'Banco Santander and campaign systems',
  },
] as const

export const toolGroups = [
  {
    note: 'The default language for product work, with Python and SQL when the problem is closer to data or automation.',
    label: 'Languages',
    tools: ['TypeScript', 'JavaScript', 'Python', 'SQL'],
  },
  {
    note: 'Where I spend most of the visible time: product surfaces, campaign pages, booking flows, and internal tools.',
    label: 'Frontend',
    tools: ['React', 'Next.js', 'Preact', 'React Native', 'Storybook'],
  },
  {
    note: 'Enough backend to own real workflows instead of throwing problems over a wall.',
    label: 'Backend',
    tools: ['Node.js', 'NestJS', 'Express', 'FastAPI', 'BullMQ'],
  },
  {
    note: 'The systems behind the screen: relational data, cached state, search, and queues when the product needs them.',
    label: 'Data',
    tools: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch'],
  },
  {
    note: 'The places where product language has to become enforceable rules.',
    label: 'APIs and identity',
    tools: ['REST', 'GraphQL', 'Apollo Federation', 'OAuth 2.0', 'FusionAuth'],
  },
  {
    note: 'Not a separate phase. Part of making the work understandable after it leaves the branch.',
    label: 'Delivery',
    tools: ['AWS', 'GCloud', 'Docker', 'Cloudflare', 'Datadog', 'Playwright'],
  },
  {
    note: 'Where older content systems and business platforms meet the actual product.',
    label: 'Platforms',
    tools: ['WordPress', 'Strapi', 'Drupal', 'Salesforce', 'Stripe', 'Shopify'],
  },
] as const
