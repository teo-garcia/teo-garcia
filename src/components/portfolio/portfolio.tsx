import { ArrowUpRight } from 'lucide-react'
import { useRef } from 'react'

import { ContactSection } from '../contact-section/contact-section'
import { HeroSection } from '../hero-section/hero-section'
import {
  chapters,
  hero,
  identity,
  navItems,
} from '../portfolio-content/portfolio-content'
import { usePortfolioMotion } from '../portfolio-motion/use-portfolio-motion'
import { QuestionsSection } from '../questions-section/questions-section'
import { ReposSection } from '../repos-section/repos-section'
import { StackSection } from '../stack-section/stack-section'
import { WorkSection } from '../work-section/work-section'

export default function Portfolio() {
  const rootRef = useRef<HTMLElement>(null)

  usePortfolioMotion(rootRef)

  return (
    <div className='relative min-h-screen overflow-x-hidden bg-background text-foreground'>
      <div
        className='layer-grain pointer-events-none fixed inset-0 z-50 mix-blend-overlay'
        aria-hidden='true'
      />

      <SiteHeader />
      <ChapterRail />

      <article className='relative z-10 w-full' ref={rootRef}>
        <HeroSection />
        <QuestionsSection />
        <WorkSection />
        <ReposSection />
        <StackSection />
        <ContactSection />
      </article>
    </div>
  )
}

function SiteHeader() {
  return (
    <header
      className='fixed inset-x-0 top-0 z-40 border-b border-border/70 bg-background/70 px-5 py-4 backdrop-blur-xl sm:px-8 lg:px-12'
      data-site-nav
    >
      <div className='mx-auto flex max-w-6xl items-center justify-between gap-6'>
        <a
          className='rounded-md text-sm font-semibold tracking-[-0.02em] transition-opacity duration-300 hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-4 focus:ring-offset-background'
          href='#intro'
        >
          {identity.name}
        </a>

        <nav
          aria-label='Primary navigation'
          className='mono-label hidden items-center gap-7 text-muted-foreground lg:flex'
        >
          {navItems.map((item) => (
            <a
              className='rounded-sm transition-colors duration-300 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-4 focus:ring-offset-background'
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className='group inline-flex min-h-9 items-center gap-2 squircle border border-border px-4 text-xs font-medium transition duration-300 hover:border-border-strong hover:bg-foreground/[0.05] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-4 focus:ring-offset-background'
          href={hero.links[0].href}
        >
          Say hi
          <ArrowUpRight
            className='size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
            aria-hidden='true'
          />
        </a>
      </div>
    </header>
  )
}

/*
 * The rail: a track with a lit segment that travels with scroll progress,
 * plus per-chapter ticks that grow and label themselves when active.
 */
function ChapterRail() {
  return (
    <nav
      aria-label='Section navigation'
      className='fixed right-5 top-1/2 z-30 hidden -translate-y-1/2 lg:block xl:right-8'
      data-rail
    >
      <div className='relative flex flex-col items-end gap-6'>
        <span
          className='absolute right-[3px] top-0 h-full w-px bg-border'
          aria-hidden='true'
        >
          <span
            className='block h-full w-full origin-top scale-y-0 bg-foreground/70'
            data-rail-progress
          />
        </span>

        {chapters.map((chapter, index) => (
          <a
            className='group relative flex items-center gap-3 rounded-sm py-0.5 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-4 focus:ring-offset-background'
            data-chapter={chapter.id}
            data-chapter-marker
            href={chapter.href}
            key={chapter.id}
          >
            {/* Labels stay legible at rest and only brighten on hover/active. */}
            <span className='mono-label text-faint/60 transition-all duration-500 group-hover:text-foreground group-data-[active]:text-foreground'>
              {String(index + 1).padStart(2, '0')} {chapter.label}
            </span>
            <span
              className='block size-[7px] shrink-0 rounded-full border border-border-strong bg-background transition-all duration-500 group-hover:border-foreground group-data-[active]:scale-125 group-data-[active]:border-foreground group-data-[active]:bg-foreground'
              aria-hidden='true'
            />
          </a>
        ))}
      </div>
    </nav>
  )
}
