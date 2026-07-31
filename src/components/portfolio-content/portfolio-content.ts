export const hero = {
  name: 'Mateo Garcia',
  role: 'Senior Software Engineer',
  intro: "Hi — I'm Mateo.",
  title: 'I make complicated software feel obvious.',
  body: "Seven years shipping the unglamorous parts: auth, permissions, integrations, the legacy service nobody wants to open. Turns out that's exactly where products get stuck.",
  readout: [
    { label: 'Experience', value: '7 yrs' },
    { label: 'Stops', value: '05' },
    { label: 'Base', value: 'Medellín · GMT-5' },
    { label: 'Status', value: 'Open to talk' },
  ],
  links: [
    {
      href: 'mailto:juanmateogarcia96@gmail.com',
      label: 'Start a conversation',
    },
    { href: 'https://linkedin.com/in/teogarcia0', label: 'LinkedIn' },
  ],
} as const

export const navItems = [
  { href: '#questions', label: 'Q&A' },
  { href: '#work', label: 'Work' },
  { href: '#stack', label: 'Stack' },
  { href: '#contact', label: 'Contact' },
] as const

export const chapters = [
  { href: '#intro', id: 'intro', label: 'Intro' },
  { href: '#questions', id: 'q&a', label: 'Q&A' },
  { href: '#work', id: 'work', label: 'Work' },
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
      question: 'Why should I care?',
      answer:
        "If you're still reading, something in your product is probably harder to change than it should be. I'm good at fixing that specific problem.",
    },
  ],
} as const

export const work = {
  eyebrow: 'Track record',
  title: "Where I've been",
  note: 'Five stops. Same job title, wildly different flavors of chaos.',
  items: [
    {
      years: "'24 — Now",
      company: 'AdCellerant',
      via: 'via Gorilla Logic',
      title: 'Global ad tech platform',
      summary:
        "Identity, permissions, orders, line items, reporting. On a platform like this, “who can see what” isn't a settings page — it's the product. So I stopped treating access as plumbing and started treating it as a feature with opinions.",
      stack: ['FusionAuth', 'Apollo Federation', 'GraphQL', 'React', 'Node'],
    },
    {
      years: "'22 — '24",
      company: 'Evolve',
      via: 'via Gorilla Logic',
      title: 'Vacation rental marketplace',
      summary:
        'Search, discovery, booking, and a fifteen-year-old CMS wired to Salesforce behind a curtain. Most of the value there was not new features — it was making the invisible sync behavior something a human could trust.',
      stack: ['WordPress', 'Salesforce', 'React', 'Node', 'REST'],
    },
    {
      years: "'21 — '22",
      company: 'Netflix',
      via: 'via Matter Supply',
      title: 'Promotional launch sites',
      summary:
        'Two launch sites, six languages, four timezones, and zero appetite for surprises. The entire job was keeping the build boring enough that launch day stayed uneventful. It did.',
      stack: ['React', 'Next.js', 'i18n', 'Contentful'],
    },
    {
      years: "'20 — '21",
      company: 'Stellantis',
      via: 'via Huge',
      title: 'Campaign automation',
      summary:
        'The team was hand-assembling hundreds of ad banners, by hand, every campaign. I helped replace the dragging-things-around with a rendering pipeline that takes data in and puts assets out. Nobody misses the old way.',
      stack: ['Preact', 'Node', 'Build tooling', 'Automation'],
    },
    {
      years: "'19 — '20",
      company: 'Pragma',
      via: 'via Globant',
      title: 'Digital banking & campaigns',
      summary:
        'Banking SPAs living inside Drupal, authenticated campaign games, and a team learning React in real time. A great place to find out which of your habits were actually just opinions.',
      stack: ['React', 'Drupal', 'JavaScript', 'PHP'],
    },
  ],
} as const

export const stack = {
  eyebrow: 'The toolkit',
  title: 'The stuff in the bag',
  note: 'Sorted by how often I actually open it, not by how it reads on a résumé.',
  groups: [
    {
      label: 'Every single day',
      weight: 4,
      note: 'Wake me up at 3am and this is what I reach for without thinking.',
      tools: [
        'TypeScript',
        'React',
        'Next.js',
        'Node.js',
        'PostgreSQL',
        'GraphQL',
      ],
    },
    {
      label: 'Most weeks',
      weight: 3,
      note: 'Comfortable and current. Not showing off, just getting it done.',
      tools: [
        'Python',
        'NestJS',
        'Express',
        'Redis',
        'Docker',
        'Playwright',
        'Storybook',
      ],
    },
    {
      label: 'Identity & contracts',
      weight: 4,
      note: 'Where product language has to become an enforceable rule. Consistently underestimated.',
      tools: ['OAuth 2.0', 'FusionAuth', 'Apollo Federation', 'REST', 'Zod'],
    },
    {
      label: 'Ship & watch',
      weight: 3,
      note: "Shipping isn't a separate phase, and neither is knowing whether it worked.",
      tools: ['AWS', 'GCloud', 'Cloudflare', 'Datadog', 'GitHub Actions'],
    },
    {
      label: 'When the problem asks',
      weight: 2,
      note: "Shipped real things with all of these. I don't pretend they're my personality.",
      tools: [
        'FastAPI',
        'BullMQ',
        'Elasticsearch',
        'MongoDB',
        'MySQL',
        'React Native',
      ],
    },
    {
      label: "Legacy I don't flinch at",
      weight: 2,
      note: 'Somebody has to talk to these systems. Usually it pays for the rest of the roadmap.',
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
  body: "Not the polished spec. The half-formed idea, the ticket that's been in the backlog for a year, the service everyone routes around. That's the interesting part, and it's usually the cheap part to fix.",
  cta: 'Email me',
  email: 'juanmateogarcia96@gmail.com',
  location: 'Medellín, Colombia · Remote friendly',
  phone: '+57 350 793 0191',
  site: 'teo-garcia.vercel.app',
  social: 'linkedin.com/in/teogarcia0',
} as const
