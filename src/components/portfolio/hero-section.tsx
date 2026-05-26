import { ArrowUpRight, Mail } from 'lucide-react'

import { hero } from './content'

export function HeroSection() {
  return (
    <header className='pt-8 sm:pt-12' data-hero-motion>
      <div className='max-w-2xl py-16 sm:py-24'>
        <p className='text-sm font-semibold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300'>
          {hero.eyebrow}
        </p>
        <h1 className='mt-5 text-balance font-["Space_Grotesk"] text-4xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-6xl'>
          {hero.title}
        </h1>
        <p className='mt-6 max-w-xl text-lg leading-8 text-muted-foreground'>
          {hero.body}
        </p>
        <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
          <a
            className='inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-foreground px-5 text-sm font-semibold text-background transition hover:-translate-y-0.5'
            href={hero.links[0].href}
          >
            <Mail className='size-4' aria-hidden='true' />
            {hero.links[0].label}
          </a>
          <a
            className='inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-border bg-background/60 px-5 text-sm font-semibold backdrop-blur transition hover:-translate-y-0.5 hover:border-teal-500'
            href={hero.links[1].href}
          >
            <ArrowUpRight className='size-4' aria-hidden='true' />
            {hero.links[1].label}
          </a>
        </div>
      </div>
    </header>
  )
}
