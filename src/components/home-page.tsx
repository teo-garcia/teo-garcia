import { ArrowUpRight } from 'lucide-react'
import { useRef } from 'react'

import { AboutSection } from './portfolio/about-section'
import { ContactSection } from './portfolio/contact-section'
import { chapters, hero, navItems } from './portfolio/content'
import { HeroSection } from './portfolio/hero-section'
import { ToolsSection } from './portfolio/tools-section'
import { usePageMotion } from './portfolio/use-page-motion'
import { WorkSection } from './portfolio/work-section'

export default function HomePage() {
  const rootRef = useRef<HTMLElement>(null)

  usePageMotion(rootRef)

  return (
    <div className='relative min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-accent/30'>
      <div
        className='pointer-events-none fixed inset-0 z-0 opacity-[0.32] [background-image:radial-gradient(rgb(17_17_15_/_0.18)_0.6px,transparent_0.6px)] [background-size:18px_18px] dark:opacity-[0.18] dark:[background-image:radial-gradient(rgb(245_242_234_/_0.18)_0.6px,transparent_0.6px)]'
        aria-hidden='true'
      />
      <div
        className='pointer-events-none fixed left-[7vw] top-[12svh] z-0 h-[72svh] w-px origin-top bg-gradient-to-b from-transparent via-accent/50 to-transparent'
        data-drawn-line
      />
      <div
        className='pointer-events-none fixed right-[-14vw] top-[22svh] z-0 h-[26rem] w-[42rem] rotate-[-16deg] rounded-[50%] bg-[radial-gradient(circle,rgb(63_117_99_/_0.2),transparent_64%)] blur-3xl dark:bg-[radial-gradient(circle,rgb(166_207_192_/_0.14),transparent_64%)]'
        data-soft-breath
      />
      <SiteHeader />
      <div className='pointer-events-none fixed right-5 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-end gap-4 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground/70 lg:flex'>
        {chapters.map((chapter) => (
          <span data-chapter-marker key={chapter}>
            {chapter}
          </span>
        ))}
      </div>
      <div
        className='pointer-events-none fixed left-5 top-5 z-20 hidden h-[calc(100svh-2.5rem)] w-px overflow-hidden bg-border sm:block'
        aria-hidden='true'
      >
        <div
          className='h-full w-full origin-top scale-y-0 bg-accent'
          data-scroll-progress
        />
      </div>
      <article className='relative z-10 w-full' ref={rootRef}>
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <ToolsSection />
        <ContactSection />
      </article>
    </div>
  )
}

function SiteHeader() {
  return (
    <header
      className='fixed left-0 right-0 top-0 z-30 border-b border-border/50 bg-background/78 px-4 py-4 backdrop-blur-xl sm:px-8 lg:px-12'
      data-site-nav
    >
      <div className='mx-auto flex max-w-7xl items-center justify-between gap-5'>
        <a
          className='group flex items-center gap-4 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background'
          href='#start'
          aria-label='Mateo Garcia home'
        >
          <span className='grid size-11 place-items-center border-r border-border pr-4 text-2xl font-semibold tracking-[-0.04em] text-accent'>
            MG
          </span>
          <span className='hidden leading-tight sm:block'>
            <span className='block text-sm font-semibold'>{hero.name}</span>
            <span className='text-xs text-muted-foreground'>{hero.role}</span>
          </span>
        </a>

        <nav
          aria-label='Primary navigation'
          className='hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.08em] lg:flex'
        >
          {navItems.map((item) => (
            <a
              className='transition hover:text-accent focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background'
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className='inline-flex min-h-11 items-center gap-3 bg-primary px-4 text-xs font-semibold uppercase tracking-[0.08em] text-primary-foreground transition hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background sm:px-5'
          href={hero.links[0].href}
        >
          {hero.links[0].label}
          <ArrowUpRight className='size-4' aria-hidden='true' />
        </a>
      </div>
    </header>
  )
}
