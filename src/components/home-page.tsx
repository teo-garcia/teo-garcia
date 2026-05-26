import { useRef } from 'react'

import { AboutSection } from './portfolio/about-section'
import { ContactSection } from './portfolio/contact-section'
import { HeroSection } from './portfolio/hero-section'
import { ToolsSection } from './portfolio/tools-section'
import { usePageMotion } from './portfolio/use-page-motion'
import { WorkSection } from './portfolio/work-section'

export default function HomePage() {
  const rootRef = useRef<HTMLElement>(null)

  usePageMotion(rootRef)

  return (
    <div className='relative min-h-screen overflow-hidden'>
      <img
        alt=''
        aria-hidden='true'
        className='pointer-events-none fixed inset-0 z-0 h-full w-full object-cover object-right opacity-100 mix-blend-multiply contrast-[1.3] saturate-[1.12] dark:opacity-[0.86] dark:mix-blend-screen dark:contrast-[1.16] dark:saturate-[1.08]'
        src='/images/forest-system-background.png'
      />
      <div className='pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(90deg,var(--background)_0%,color-mix(in_srgb,var(--background)_58%,transparent)_42%,color-mix(in_srgb,var(--background)_4%,transparent)_100%),linear-gradient(180deg,color-mix(in_srgb,var(--background)_14%,transparent)_0%,var(--background)_100%)] dark:bg-[linear-gradient(90deg,var(--background)_0%,color-mix(in_srgb,var(--background)_56%,transparent)_42%,color-mix(in_srgb,var(--background)_6%,transparent)_100%),linear-gradient(180deg,color-mix(in_srgb,var(--background)_16%,transparent)_0%,var(--background)_100%)]' />
      <article
        className='relative z-10 mx-auto w-full max-w-3xl px-5 sm:px-8'
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
