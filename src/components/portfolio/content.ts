export const hero = {
  eyebrow: 'Mateo Garcia',
  title: 'I build web software, mostly by making the problem less blurry.',
  body: 'I am a senior software engineer from Medellin. I like hard problems, but I like clear thinking more. The stack matters after the problem has a shape.',
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

export const work = [
  {
    company: 'Gorilla Logic / AdCellerant',
    dates: 'Sep 2024 - Present',
    summary:
      'Working on a digital marketing platform where agencies configure campaigns through orders, line items, products, reports, and client-facing material. I have been deep in auth, role-based access, identity workflows, federated GraphQL services, and full-stack product work around campaign setup.',
    title: 'AdCellerant',
  },
  {
    company: 'Gorilla Logic / Evolve',
    dates: 'Apr 2022 - Sep 2024',
    summary:
      'Worked on a vacation rental platform with a heavy content surface, property search, booking flows, and a legacy WordPress CMS that did not come with a useful map. I worked on image performance, CMS behavior, Salesforce integration, releases, and tech-lead decisions.',
    title: 'Evolve',
  },
  {
    company: 'Huge / Stellantis',
    dates: 'Jun 2020 - Nov 2021',
    summary:
      'Built high-volume digital campaign assets for automotive brands. The work was repetitive until it was treated as a system: dynamic data, Preact in the banner workflow, and automation to reduce manual production.',
    title: 'Stellantis',
  },
  {
    company: 'Matter Supply / Netflix',
    dates: 'Nov 2021 - Apr 2022',
    summary:
      'Built two multilingual promotional sites for Netflix productions under tight deadlines. The work was not about clever architecture; it was about clear handoffs, realistic scope, and shipping without drama.',
    title: 'Netflix promotional sites',
  },
]

export const tools = [
  'TypeScript',
  'React',
  'Astro',
  'Next.js',
  'Node.js',
  'NestJS',
  'FastAPI',
  'GraphQL',
  'PostgreSQL',
  'Redis',
  'Docker',
  'Cloudflare',
  'AWS',
  'Datadog',
  'Playwright',
  'Vitest',
  'Tailwind CSS',
  'GSAP',
]
