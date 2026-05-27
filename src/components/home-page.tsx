import { useRef } from 'react'

import { AboutSection } from './portfolio/about-section'
import { ContactSection } from './portfolio/contact-section'
import { assets, chapters } from './portfolio/content'
import { HeroSection } from './portfolio/hero-section'
import { ToolsSection } from './portfolio/tools-section'
import { usePageMotion } from './portfolio/use-page-motion'
import { WorkSection } from './portfolio/work-section'

export default function HomePage() {
  const rootRef = useRef<HTMLElement>(null)

  usePageMotion(rootRef)

  return (
    <div className='relative min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-accent/30'>
      <img
        alt=''
        aria-hidden='true'
        className='pointer-events-none fixed inset-0 z-0 h-full w-full scale-105 object-cover object-right opacity-[0.58] mix-blend-multiply dark:opacity-[0.26] dark:mix-blend-screen'
        data-nature-image
        src={assets.mountain.src}
      />
      <div
        className='pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(90deg,rgb(247_246_241_/_0.98)_0%,rgb(247_246_241_/_0.88)_40%,rgb(247_246_241_/_0.62)_100%),radial-gradient(circle_at_18%_28%,rgb(153_176_142_/_0.18),transparent_30%)] dark:bg-[linear-gradient(90deg,rgb(9_9_8_/_0.97)_0%,rgb(9_9_8_/_0.84)_44%,rgb(9_9_8_/_0.72)_100%),radial-gradient(circle_at_18%_28%,rgb(153_176_142_/_0.12),transparent_30%)]'
        data-nature-grade
      />
      <div
        className='pointer-events-none fixed left-[7vw] top-[10svh] z-0 h-[72svh] w-px origin-top bg-gradient-to-b from-transparent via-accent/50 to-transparent'
        data-drawn-line
      />
      <div
        className='pointer-events-none fixed right-[-12vw] top-[20svh] z-0 h-[26rem] w-[42rem] rotate-[-16deg] rounded-[50%] bg-[radial-gradient(circle,rgb(139_191_175_/_0.22),transparent_64%)] blur-3xl dark:bg-[radial-gradient(circle,rgb(175_214_202_/_0.13),transparent_64%)]'
        data-soft-breath
      />
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
      <article
        className='relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10'
        ref={rootRef}
      >
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <ToolsSection />
        <ContactSection />
      </article>
    </div>
  )
}
