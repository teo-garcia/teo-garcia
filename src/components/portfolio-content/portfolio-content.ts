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
  body: `${codingYearsLabel} years building software from unclear requirements to systems people can actually use. I work across the stack, care about how the whole thing fits together, and stay with the problem until it works.`,
  readout: [
    { label: 'Coding', value: `${codingYears} yrs` },
    { label: 'Stops', value: '06' },
    { label: 'Based', value: 'MDE, COL' },
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
  { href: '#community', label: 'Community' },
  { href: '#contact', label: 'Contact' },
] as const

export const chapters = [
  { href: '#intro', id: 'intro', label: 'Intro' },
  { href: '#questions', id: 'q&a', label: 'Q&A' },
  { href: '#work', id: 'work', label: 'Work' },
  { href: '#repos', id: 'repos', label: 'Repos' },
  { href: '#stack', id: 'stack', label: 'Stack' },
  { href: '#community', id: 'community', label: 'Community' },
  { href: '#contact', id: 'contact', label: 'Contact' },
] as const

export const questions = {
  eyebrow: 'The Q&A',
  title: 'The part where you ask the questions',
  note: "Skip to the ones you actually care about. I won't be offended.",
  items: [
    {
      question: 'So what do you actually do?',
      answer:
        'I build the load-bearing parts — auth, permissions, integrations, the service everyone quietly routes around. Unglamorous work that a surprising amount of the product depends on.',
    },
    {
      question: 'Frontend or backend?',
      answer:
        'Frontend by reputation, both by necessity. I got tired of throwing problems over a wall and waiting two sprints, so I learned to own the whole path.',
    },
    {
      question: "What's the part that isn't on the résumé?",
      answer:
        'Codebase archaeology. Walking into six years of accumulated decisions and working out which ones still make sense, which ones are load-bearing, and which ones everyone is scared of for no reason anymore.',
    },
    {
      question: 'How far do you take it?',
      answer:
        'All the way through. I shape the business requirement, work out the system, build what it needs across the stack, ship it, and make sure the complete user journey holds together. Handing off a branch is not finishing.',
    },
    {
      question: 'Does working across cultures actually change anything?',
      answer:
        'More than people admit. I have worked with Colombian, American and European teams, mostly distributed. The code is the easy part. What changes is how people say no, whether a risk gets raised in the meeting or in a DM afterwards, and whether silence means agreement or trouble. I read that before I push.',
    },
    {
      question: 'Are you easy to work with?',
      answer:
        'Ask the designers and PMs. I am the engineer who shows up to their meetings and asks the annoying question while it is still cheap to answer. Most of the bad decisions I helped avoid came out of a conversation, not a code review.',
    },
    {
      question: "What's the catch?",
      answer:
        'I ask a lot of questions before I write anything. Some people read that as slow. It is reliably cheaper than building the wrong thing twice.',
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
      title: 'Marketing platform',
      summary:
        'Maintaining and evolving a complex marketing platform across TypeScript, Python, and Java services. The work moves between React product surfaces and backend systems built with NestJS and Spring Boot.',
      stack: ['TypeScript', 'Python', 'Java', 'React', 'NestJS', 'Spring Boot'],
    },
    {
      years: "'22 — '24",
      company: 'Evolve',
      via: 'via Gorilla Logic',
      title: 'Customer booking application',
      summary:
        'Led development of the user-facing booking application, connecting a React and TypeScript experience with Express and NestJS services, WordPress, and Salesforce.',
      stack: [
        'TypeScript',
        'React',
        'Express',
        'NestJS',
        'WordPress',
        'Salesforce',
      ],
    },
    {
      years: "'21 — '22",
      company: 'Netflix',
      via: 'via Matter Supply',
      title: 'Stories about a changing planet',
      summary:
        "Created marketing websites for the Breaking Boundaries documentary and Don't Look Up — two Netflix productions about how we respond to a planet in trouble.",
      stack: ['TypeScript', 'React', 'Firebase', 'Strapi'],
    },
    {
      years: "'20 — '21",
      company: 'Stellantis',
      via: 'via Huge',
      title: 'Vehicle advertising at two scales',
      summary:
        'Built one-off vehicle banners with ambitious GSAP animation and deluxe assets, alongside a larger operation that turned complex spreadsheet permutations into many variations of an established rendering system.',
      stack: ['JavaScript', 'Preact', 'Vue', 'GSAP', 'Automation'],
    },
    {
      years: "'19 — '20",
      company: 'Grupo Santander',
      via: 'via Globant',
      title: 'Banking UI inside Drupal',
      summary:
        'Crafted banking interfaces inside a complex Drupal CMS, building the experience from React and Twig components while working within the platform around them.',
      stack: ['JavaScript', 'React', 'Twig', 'Drupal'],
    },
    {
      years: "'19 — '20",
      company: 'Familia',
      via: 'via Pragma',
      title: 'Retail promotions',
      summary:
        "Built promotional SPAs for high-demand retail campaigns and helped introduce React into the team's frontend work.",
      stack: ['JavaScript', 'React', 'Promotional SPAs'],
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
        'Express',
        'Spring Boot',
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
        'Firebase',
      ],
    },
  ],
} as const

export const community = {
  eyebrow: 'Off the clock',
  title: 'The part that was never a job',
  note: 'Open source, meetups, and a decent number of Saturdays.',
  body: 'I got into this because somebody took the time to explain it to me for free. Everything below is me trying to be that person for somebody else — and it is also why I keep my templates public. Code you cannot read is code nobody learns from.',
  cta: { href: identity.github, label: 'Everything I build in the open' },
  items: [
    {
      period: '2019 — 2021',
      role: 'Co-organizer',
      title: 'React Medellín',
      summary:
        'Ran the meetup with a small crew: finding venues, lining up speakers, and giving plenty of the talks myself — in a room, and later over a webcam. Free, every single time. We also brought in local companies so it had a budget and somewhere to come back to, instead of quietly dying the first month nobody sponsored it.',
      tags: ['Meetup organizing', 'Public speaking', 'Frontend teaching'],
    },
    {
      period: '2024 - 2025',
      role: 'Chapter lead',
      title: 'Women Who Code',
      summary:
        'Led the chapter at my company two years in a row, teaching frontend and backend to girls in at-risk situations. A lot of them had never opened a terminal before the first session. Some of them are writing production code now, which is the only metric from any of this that I actually care about.',
      tags: ['Mentoring', 'Frontend', 'Backend'],
    },
    {
      period: '2024',
      role: 'Volunteer',
      title: 'Saturdays with nothing to do with code',
      summary:
        'Sitting with people in retirement homes who mostly just want somebody to listen for an hour. Planting trees. Walking young people through what a career in this industry actually looks like day to day — the useful version, not the LinkedIn one.',
      tags: ['Elder care', 'Reforestation', 'Career guidance'],
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
