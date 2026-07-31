import { ArrowUpRight } from 'lucide-react'
import { useRef } from 'react'

import { ContactSection } from '../contact-section/contact-section'
import { HeroSection } from '../hero-section/hero-section'
import {
  chapters,
  hero,
  navItems,
} from '../portfolio-content/portfolio-content'
import { usePortfolioMotion } from '../portfolio-motion/use-portfolio-motion'
import { QuestionsSection } from '../questions-section/questions-section'
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
      <ScrollProgress />

      <article className='relative z-10 w-full' ref={rootRef}>
        <HeroSection />
        <QuestionsSection />
        <WorkSection />
        <StackSection />
        <ContactSection />
      </article>
    </div>
  )
}

function SiteHeader() {
  return (
    <header
      className='fixed inset-x-0 top-0 z-40 border-b border-border/70 bg-background/70 px-5 py-3.5 backdrop-blur-xl sm:px-8 lg:px-12'
      data-site-nav
    >
      <div className='mx-auto flex max-w-6xl items-center justify-between gap-6'>
        <a
          className='flex items-center gap-3 rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-4 focus:ring-offset-background'
          href='#intro'
          aria-label={`${hero.name}, back to top`}
        >
          <span className='grid size-8 place-items-center rounded-md border border-border bg-foreground/[0.04] font-mono text-xs font-medium tracking-[-0.02em]'>
            MG
          </span>
          <span className='hidden leading-tight sm:block'>
            <span className='block text-sm font-medium tracking-[-0.01em]'>
              {hero.name}
            </span>
            <span className='mono-label text-faint'>{hero.role}</span>
          </span>
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
          className='group inline-flex min-h-9 items-center gap-2 rounded-full border border-border px-4 text-xs font-medium transition duration-300 hover:border-border-strong hover:bg-foreground/[0.05] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-4 focus:ring-offset-background'
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

function ChapterRail() {
  return (
    <nav
      aria-label='Section navigation'
      className='fixed right-6 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-end gap-5 lg:flex'
    >
      {chapters.map((chapter) => (
        <a
          className='mono-label group flex items-center gap-3 text-faint transition-colors duration-500 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-4 focus:ring-offset-background'
          data-chapter={chapter.id}
          data-chapter-marker
          href={chapter.href}
          key={chapter.id}
        >
          <span className='opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-data-[active]:opacity-100'>
            {chapter.label}
          </span>
          <span
            className='block h-px w-4 bg-current transition-all duration-500 group-hover:w-7 group-data-[active]:w-7'
            aria-hidden='true'
          />
        </a>
      ))}
    </nav>
  )
}

function ScrollProgress() {
  return (
    <div
      className='pointer-events-none fixed inset-y-0 left-0 z-30 hidden w-px bg-border sm:block'
      aria-hidden='true'
    >
      <div
        className='h-full w-full origin-top scale-y-0 bg-foreground/60'
        data-scroll-progress
      />
    </div>
  )
}
