import { ArrowRight, ArrowUpRight } from 'lucide-react'

import { hero } from '../portfolio-content/portfolio-content'

export function HeroSection() {
  return (
    <header
      className='relative isolate flex min-h-svh flex-col justify-center overflow-hidden px-5 pb-14 pt-32 sm:px-8 sm:pb-20 lg:px-12'
      data-section='intro'
      id='intro'
    >
      <div
        className='layer-grid pointer-events-none absolute inset-0 z-0'
        aria-hidden='true'
      />
      <div
        className='layer-spotlight pointer-events-none absolute inset-0 z-0'
        aria-hidden='true'
      />
      <div
        className='layer-bloom pointer-events-none absolute left-1/2 top-[-20%] z-0 h-[38rem] w-[64rem] -translate-x-1/2'
        data-bloom
        aria-hidden='true'
      />

      <div className='relative z-10 mx-auto w-full max-w-6xl' data-hero-motion>
        <p className='mono-label flex items-center gap-3 text-muted-foreground'>
          <span
            className='inline-block size-1.5 rounded-full bg-foreground/70'
            data-pulse
            aria-hidden='true'
          />
          {hero.intro}
        </p>

        <h1
          className='text-sheen mt-7 max-w-5xl text-balance text-[clamp(2.75rem,8vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.045em]'
          data-title-mask
        >
          {hero.title}
        </h1>

        <p className='mt-8 max-w-2xl text-base leading-[1.75] text-muted-foreground sm:text-lg'>
          {hero.body}
        </p>

        <div className='mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4'>
          <a
            className='group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-accent px-6 text-sm font-medium text-accent-foreground transition duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background'
            href={hero.links[0].href}
          >
            {hero.links[0].label}
            <ArrowRight
              className='size-4 transition-transform duration-300 group-hover:translate-x-1'
              aria-hidden='true'
            />
          </a>
          <a
            className='group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border px-6 text-sm font-medium text-foreground transition duration-300 hover:border-border-strong hover:bg-foreground/[0.04] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background'
            href={hero.links[1].href}
          >
            {hero.links[1].label}
            <ArrowUpRight
              className='size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
              aria-hidden='true'
            />
          </a>
        </div>
      </div>

      <dl
        className='relative z-10 mx-auto mt-16 grid w-full max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:mt-20 lg:grid-cols-4'
        data-readout
      >
        {hero.readout.map((entry) => (
          <div className='bg-background px-5 py-5' key={entry.label}>
            <dt className='mono-label text-faint'>{entry.label}</dt>
            <dd className='mt-2 font-mono text-lg font-medium tracking-[-0.02em] text-foreground'>
              {entry.value}
            </dd>
          </div>
        ))}
      </dl>
    </header>
  )
}
