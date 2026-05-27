import { useRef } from 'react'

import { AboutSection } from './portfolio/about-section'
import { ContactSection } from './portfolio/contact-section'
import { chapters } from './portfolio/content'
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
        className='pointer-events-none fixed inset-0 z-0 h-full w-full scale-105 object-cover opacity-[0.52] mix-blend-multiply dark:opacity-[0.28] dark:mix-blend-screen'
        data-paper-image
        src='/images/editorial-paper-field.png'
      />
      <div
        className='pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_22%_18%,rgb(168_197_184_/_0.22),transparent_28%),linear-gradient(90deg,rgb(247_246_241_/_0.96)_0%,rgb(247_246_241_/_0.72)_48%,rgb(247_246_241_/_0.9)_100%)] dark:bg-[radial-gradient(circle_at_22%_18%,rgb(141_192_173_/_0.16),transparent_30%),linear-gradient(90deg,rgb(9_9_8_/_0.96)_0%,rgb(9_9_8_/_0.74)_48%,rgb(9_9_8_/_0.92)_100%)]'
        data-paper-grade
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
