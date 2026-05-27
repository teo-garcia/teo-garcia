import { ArrowUpRight, Mail, Mountain } from 'lucide-react'

import { hero } from './content'

export function HeroSection() {
  return (
    <header
      className='flex min-h-[94svh] items-center py-16 sm:py-20'
      data-section='start'
    >
      <div className='w-full'>
        <div className='max-w-3xl' data-hero-motion>
          <p className='inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent'>
            <Mountain className='size-4' aria-hidden='true' />
            {hero.eyebrow}
          </p>
          <h1
            className='mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.02] text-foreground sm:text-5xl lg:text-6xl'
            data-title-mask
          >
            {hero.title}
          </h1>
          <p className='mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg'>
            {hero.body}
          </p>
          <div
            className='mt-8 h-px w-28 origin-left bg-accent/80'
            data-written-rule
          />
          <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
            <a
              className='inline-flex min-h-12 items-center gap-2 border-b border-foreground/50 px-1 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background'
              href={hero.links[0].href}
            >
              <Mail className='size-4' aria-hidden='true' />
              {hero.links[0].label}
            </a>
            <a
              className='inline-flex min-h-12 items-center gap-2 border-b border-foreground/50 px-1 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background'
              href={hero.links[1].href}
            >
              <ArrowUpRight className='size-4' aria-hidden='true' />
              {hero.links[1].label}
            </a>
          </div>
        </div>

        <div className='mt-14 max-w-3xl space-y-4' data-hero-ledger>
          {hero.ledger.map((item, index) => (
            <div
              className='flex gap-4 border-t border-border/70 pt-4'
              key={item}
            >
              <span className='text-sm font-semibold text-accent'>
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className='text-sm leading-6 text-muted-foreground'>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}
