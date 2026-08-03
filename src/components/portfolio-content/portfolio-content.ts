export const identity = {
  name: 'Mateo Garcia',
  role: 'Senior Software Engineer',
  github: 'https://github.com/teo-garcia',
  linkedin: 'https://linkedin.com/in/teogarcia0',
  email: 'juanmateogarcia96@gmail.com',
} as const

const codingStartYear = 2018
const codingYears = new Date().getFullYear() - codingStartYear
const smallNumberWords = [
  'Zero',
  'One',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
  'Ten',
  'Eleven',
  'Twelve',
  'Thirteen',
  'Fourteen',
  'Fifteen',
  'Sixteen',
  'Seventeen',
  'Eighteen',
  'Nineteen',
] as const
const tensWords = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty'] as const

function spellNumber(value: number) {
  if (value < 20) return smallNumberWords[value] ?? String(value)

  const tens = tensWords[Math.floor(value / 10)]
  const ones = value % 10

  return tens
    ? `${tens}${ones ? `-${smallNumberWords[ones]}` : ''}`
    : String(value)
}

const codingYearsLabel = spellNumber(codingYears)

export const hero = {
  eyebrow: 'Senior Software Engineer · Medellín',
  title: 'I make complicated software feel obvious.',
  body: `${codingYearsLabel} years shipping the unglamorous parts: auth, permissions, integrations, the legacy service nobody wants to open. I take them from the first whiteboard sketch to the end-to-end tests that keep them honest.`,
  readout: [
    { label: 'Coding', value: `${codingYears} yrs` },
    { label: 'Stops', value: '06' },
    { label: 'Based', value: 'Medellín, CO' },
    { label: 'Timezone', value: 'GMT-5' },
  ],
  links: [
    { href: `mailto:${identity.email}`, label: 'Start a conversation' },
    { href: identity.github, label: 'GitHub' },
  ],
} as const

export const navItems = [
  { href: '#questions', label: 'Q&A' },
  { href: '#work', label: 'Work' },
  { href: '#repos', label: 'Repos' },
  { href: '#stack', label: 'Stack' },
  { href: '#contact', label: 'Contact' },
] as const

export const chapters = [
  { href: '#intro', id: 'intro', label: 'Intro' },
  { href: '#questions', id: 'q&a', label: 'Q&A' },
  { href: '#work', id: 'work', label: 'Work' },
  { href: '#repos', id: 'repos', label: 'Repos' },
  { href: '#stack', id: 'stack', label: 'Stack' },
  { href: '#contact', id: 'talk', label: 'Talk' },
] as const

export const questions = {
  eyebrow: 'The Q&A',
  title: 'The part where you ask the questions',
  note: "Skip to the ones you actually care about. I won't be offended.",
  items: [
    {
      question: 'So what do you actually do?',
      answer:
        'I take the part of the product everyone describes with their hands — “the permissions thing,” “the sync thing” — and turn it into something you can point at in code.',
    },
    {
      question: 'Frontend or backend?',
      answer:
        'Frontend by reputation, both by necessity. I got tired of throwing problems over a wall and waiting two sprints, so I learned to own the whole path.',
    },
    {
      question: 'What are you actually good at?',
      answer:
        "Walking into a codebase with six years of decisions in it and working out which ones still make sense. That's most of the job, and nobody ever puts it in the job post.",
    },
    {
      question: "What's the catch?",
      answer:
        "I ask a lot of questions before I write anything. Some people read that as slow. It's reliably cheaper than building the wrong thing twice.",
    },
    {
      question: 'How far do you actually take a thing?',
      answer:
        'All of it. Planning and shaping it on a whiteboard, arguing about the schema, building it, shipping it, then writing the end-to-end tests that prove it still works three months later. Handing off a branch is not finishing.',
    },
    {
      question: 'Are you easy to work with?',
      answer:
        'Ask the designers and PMs. I am the engineer who actually shows up to their meetings and asks the annoying question early. Most of the bad decisions I have helped avoid came out of a conversation, not a code review.',
    },
    {
      question: 'Why should I care?',
      answer:
        "If you're still reading, something in your product is probably harder to change than it should be. I'm good at fixing that specific problem.",
    },
  ],
} as const

export const work = {
  eyebrow: 'Track record',
  title: "Where I've been",
  note: 'Six stops. Same job title, wildly different flavors of chaos.',
  items: [
    {
      years: "'24 — Now",
      company: 'AdCellerant',
      via: 'via Gorilla Logic',
      title: 'Global ad tech platform',
      summary:
        'Identity, permissions, orders, line items, reporting. On a platform like this, “who can see what” is not a settings page — it is the product. So I stopped treating access as plumbing and started treating it as a feature with opinions.',
      stack: [
        'TypeScript',
        'Java',
        'GraphQL',
        'Spring Boot',
        'Apollo Federation',
        'FusionAuth',
        'React',
      ],
    },
    {
      years: "'22 — '24",
      company: 'Evolve',
      via: 'via Gorilla Logic',
      title: 'Vacation rental marketplace',
      summary:
        'Search, discovery, booking, and a fifteen-year-old CMS wired to Salesforce behind a curtain. Most of the value there was not new features — it was making the invisible sync behavior something a human could trust.',
      stack: ['TypeScript', 'PHP', 'React', 'WordPress', 'Salesforce', 'REST'],
    },
    {
      years: "'21 — '22",
      company: 'Netflix',
      via: 'via Matter Supply',
      title: 'Promotional launch sites',
      summary:
        'Two launch sites, six languages, four timezones, and zero appetite for surprises. The entire job was keeping the build boring enough that launch day stayed uneventful. It did.',
      stack: ['TypeScript', 'React', 'Next.js', 'Strapi', 'i18n'],
    },
    {
      years: "'20 — '21",
      company: 'Stellantis',
      via: 'via Huge',
      title: 'Campaign automation',
      summary:
        'The team was hand-assembling hundreds of ad banners, every campaign. I helped replace the dragging-things-around with a rendering pipeline that takes data in and puts assets out. Nobody misses the old way.',
      stack: ['TypeScript', 'Preact', 'Build tooling', 'Automation'],
    },
    {
      years: "'19 — '20",
      company: 'Grupo Santander',
      via: 'via Globant',
      title: 'Digital banking',
      summary:
        'Banking SPAs living inside a Drupal shell, where every form was somebody’s actual money. Tight compliance, older stack, no room for improvisation — the kind of constraints that make you write things down before you write them in code.',
      stack: ['JavaScript', 'PHP', 'React', 'Drupal'],
    },
    {
      years: "'19 — '20",
      company: 'Familia',
      via: 'via Pragma',
      title: 'Retail & seasonal campaigns',
      summary:
        'Retail apps and seasonal promotion campaigns that had to be live on a date somebody had already put on television. Short cycles, real traffic spikes, and a team learning React in real time.',
      stack: ['JavaScript', 'React', 'Campaign apps'],
    },
  ],
} as const

export const repos = {
  eyebrow: 'The proof',
  title: 'Want to know what I can actually build?',
  note: 'Read the code. It argues better than I do.',
  body: 'I maintain a template ecosystem — 23 repos across frontend, backend, platform and shared config, all governed by a single document that decides what goes in and what stays out. It is the most honest résumé I have.',
  cta: { href: identity.github, label: 'Browse the repos' },
  base: 'https://github.com/teo-garcia',
  lanes: [
    {
      label: 'Frontend & apps',
      note: 'One shape, six ways to render it.',
      items: [
        'react-template-next',
        'react-template-astro',
        'react-template-rr',
        'react-template-tanstack-start',
        'angular-template-ssr',
        'react-native-template-expo',
      ],
    },
    {
      label: 'Backend services',
      note: 'Same contracts, different runtimes.',
      items: [
        'nest-template-monolith',
        'nest-template-microservice',
        'adonis-template-monolith',
        'fastapi-template-monolith',
        'fastapi-template-microservice',
        'django-template-monolith',
      ],
    },
    {
      label: 'Platform & infra',
      note: 'The part that decides whether any of it survives production.',
      items: [
        'microservices-template-stack',
        'observability-template-stack',
        'helm-template-baseline',
        'terraform-template-baseline',
      ],
    },
    {
      label: 'Shared config',
      note: 'Opinions, versioned once and installed everywhere.',
      items: [
        'tsconfig-shared',
        'eslint-config-shared',
        'prettier-config-shared',
        'vitest-config-shared',
        'ruff-config-shared',
        'mypy-config-shared',
        'pytest-config-shared',
      ],
    },
  ],
} as const

/*
 * Ordered deliberately: languages first, then what is built with them, then
 * what it runs on. `core` marks the tools I actually reach for by default.
 */
export const stack = {
  eyebrow: 'The toolkit',
  title: 'Languages first, then everything built on top',
  note: 'Grouped by what each thing actually is, not by how impressive it sounds.',
  groups: [
    {
      label: 'Languages',
      note: 'What I think in.',
      tools: ['TypeScript', 'Python', 'Java', 'SQL', 'GraphQL'],
    },
    {
      label: 'Frontend',
      note: 'Product surfaces, campaign pages, booking flows, internal tools.',
      tools: [
        'React',
        'Next.js',
        'Astro',
        'React Router',
        'TanStack Start',
        'Angular',
        'React Native',
        'Preact',
      ],
    },
    {
      label: 'Backend',
      note: 'Enough to own a workflow end to end instead of handing it off.',
      tools: [
        'NestJS',
        'Spring Boot',
        'Express',
        'FastAPI',
        'Django',
        'AdonisJS',
        'BullMQ',
      ],
    },
    {
      label: 'Data',
      note: 'Relational by default, everything else when the shape demands it.',
      tools: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch'],
    },
    {
      label: 'APIs & identity',
      note: 'Where product language has to become an enforceable rule.',
      tools: ['Apollo Federation', 'REST', 'OAuth 2.0', 'FusionAuth'],
    },
    {
      label: 'Testing',
      note: 'Written while the reasoning is still fresh, not bolted on later.',
      tools: ['Vitest', 'Playwright', 'Testing Library', 'pytest', 'Storybook'],
    },
    {
      label: 'CI & quality',
      note: 'The gates that catch things before a human has to.',
      tools: ['GitHub Actions', 'CircleCI', 'GitLab CI', 'Codacy', 'Unleash'],
    },
    {
      label: 'Cloud & observability',
      note: 'Shipping is not a separate phase, and neither is knowing it worked.',
      tools: [
        'Docker',
        'AWS',
        'GCloud',
        'Terraform',
        'Helm',
        'Cloudflare',
        'New Relic',
        'Datadog',
      ],
    },
    {
      label: 'Platforms',
      note: 'Somebody has to talk to these. Usually it pays for the roadmap.',
      tools: [
        'WordPress',
        'Drupal',
        'Salesforce',
        'Stripe',
        'Shopify',
        'Strapi',
      ],
    },
  ],
} as const

export const contact = {
  eyebrow: "Let's talk",
  title: 'Send me the messy version',
  body: 'Not the polished spec. The half-formed idea, the ticket that has been in the backlog for a year, the service everyone routes around. That is the interesting part, and it is usually the cheap part to fix.',
  cta: 'Email me',
  location: 'Medellín, Colombia · Remote friendly',
  details: [
    { href: `mailto:${identity.email}`, label: 'Email', value: identity.email },
    { href: identity.github, label: 'GitHub', value: 'github.com/teo-garcia' },
    {
      href: identity.linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/teogarcia0',
    },
  ],
} as const
