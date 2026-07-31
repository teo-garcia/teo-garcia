import { ArrowRight, ArrowUpRight } from 'lucide-react'

import { assets, hero } from '../home-page/content'

export function HeroSection() {
  return (
    <header
      className='relative isolate flex min-h-svh items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-12'
      data-section='start'
      id='start'
    >
      <img
        alt={assets.mountainHero.alt}
        className='pointer-events-none absolute bottom-0 right-[-34rem] top-24 z-[-2] h-[74svh] min-h-[34rem] w-[72rem] max-w-none object-cover object-center opacity-45 mix-blend-multiply dark:opacity-28 dark:mix-blend-screen sm:right-[-24rem] lg:right-[-10rem] xl:right-0'
        data-hero-image
        src={assets.mountainHero.src}
      />
      <div
        className='absolute inset-0 z-[-1] bg-[linear-gradient(90deg,rgb(247_246_241)_0%,rgb(247_246_241_/_0.96)_32%,rgb(247_246_241_/_0.62)_66%,rgb(247_246_241_/_0.18)_100%)] dark:bg-[linear-gradient(90deg,rgb(9_9_8)_0%,rgb(9_9_8_/_0.94)_38%,rgb(9_9_8_/_0.68)_72%,rgb(9_9_8_/_0.22)_100%)]'
        aria-hidden='true'
      />
      <div className='mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(22rem,0.78fr)] lg:items-center'>
        <div className='max-w-3xl' data-hero-motion>
          <p className='text-xs font-semibold uppercase tracking-[0.2em] text-accent'>
            {hero.eyebrow}
          </p>
          <h1
            className='mt-6 max-w-3xl text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl'
            data-title-mask
          >
            I build the part that makes the rest{' '}
            <span className='font-medium italic text-accent'>easier</span> to
            reason about.
          </h1>
          <p className='mt-7 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg'>
            {hero.body}
          </p>
          <div
            className='mt-8 h-px w-24 origin-left bg-accent/80'
            data-written-rule
          />
          <div className='mt-9 flex flex-col gap-4 sm:flex-row sm:items-center'>
            <a
              className='inline-flex min-h-12 items-center justify-center gap-3 bg-accent px-5 text-sm font-semibold text-accent-foreground transition hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background'
              href={hero.links[0].href}
            >
              {hero.links[0].label}
              <ArrowRight className='size-4' aria-hidden='true' />
            </a>
            <a
              className='inline-flex min-h-12 items-center justify-center gap-3 border-b border-foreground/45 px-1 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background'
              href={hero.links[1].href}
            >
              {hero.links[1].label}
              <ArrowUpRight className='size-4' aria-hidden='true' />
            </a>
          </div>
        </div>

        <div className='hidden min-h-[34rem] items-end justify-end lg:flex'>
          <div className='mb-24 mr-8 space-y-8 text-right text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground/80'>
            <p>6.2518 N</p>
            <p>75.5636 W</p>
          </div>
        </div>

        <div
          className='grid max-w-3xl gap-6 sm:grid-cols-3 lg:col-span-2 lg:max-w-2xl'
          data-hero-ledger
        >
          {hero.ledger.map((item, index) => (
            <div className='border-t border-border/75 pt-5' key={item}>
              <span className='block text-lg font-semibold text-accent'>
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className='mt-3 max-w-40 text-sm leading-6 text-foreground/82'>
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}
