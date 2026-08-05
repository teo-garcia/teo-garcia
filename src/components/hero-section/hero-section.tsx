import { ArrowRight, ArrowUpRight } from 'lucide-react'

import { HeroCanvas } from '../hero-canvas/hero-canvas'
import { hero } from '../portfolio-content/portfolio-content'

// Split for the per-line clip reveal. Each line animates out of its own mask.
// Hairlines drawn per cell so they stay correct in both the 2-col mobile
// grid and the 4-col desktop one, without a gap-and-background hack.
const DIVIDERS = [
  'border-b border-r border-border lg:border-b-0',
  'border-b border-border lg:border-b-0 lg:border-r',
  'border-r border-border',
  '',
]

const titleLines = ['I make complicated', 'software feel obvious.']

export function HeroSection() {
  return (
    <header
      className='relative isolate flex min-h-svh flex-col justify-center overflow-hidden px-5 pb-10 pt-24 sm:px-8 sm:pb-20 sm:pt-32 lg:px-12'
      data-section='intro'
      id='intro'
    >
      {/*
        Fallback stack. The shader canvas paints opaquely over these, so they
        are only ever seen when WebGL is unavailable.
      */}
      <div
        className='layer-spotlight pointer-events-none absolute inset-0 z-0'
        aria-hidden='true'
      />
      <div
        className='layer-horizon pointer-events-none absolute inset-x-0 bottom-0 top-1/3 z-0'
        aria-hidden='true'
      />

      <HeroCanvas />

      <div
        className='relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center'
        data-hero-motion
      >
        <p
          className='glass-chip mono-label squircle inline-flex items-center gap-2.5 px-4 py-2 text-foreground/80'
          data-hero-eyebrow
        >
          <span
            className='inline-block size-1.5 rounded-full bg-foreground/80'
            data-pulse
            aria-hidden='true'
          />
          {hero.eyebrow}
        </p>

        <h1
          className='display text-sheen mt-7 text-[clamp(2.15rem,7.2vw,5.25rem)] font-bold leading-[0.92] sm:mt-9'
          data-title
        >
          {titleLines.map((line) => (
            <span className='line-clip' key={line}>
              <span className='block' data-title-line>
                {line}
              </span>
            </span>
          ))}
        </h1>

        <p
          className='mt-6 max-w-2xl text-balance text-sm leading-[1.7] text-muted-foreground sm:mt-8 sm:text-lg sm:leading-[1.75]'
          data-hero-copy
        >
          {hero.body}
        </p>

        <div
          className='mt-8 flex w-full flex-col items-center justify-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4'
          data-hero-actions
        >
          <a
            className='cta group inline-flex min-h-12 w-full items-center justify-center gap-3 squircle bg-accent px-7 text-sm font-medium text-accent-foreground transition duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-4 focus:ring-offset-background sm:w-auto'
            href={hero.links[0].href}
          >
            {hero.links[0].label}
            <ArrowRight
              className='size-4 transition-transform duration-300 group-hover:translate-x-1'
              aria-hidden='true'
            />
          </a>
          <a
            className='cta group inline-flex min-h-12 w-full items-center justify-center gap-2 squircle border border-border px-7 text-sm font-medium text-foreground transition duration-300 hover:border-border-strong hover:bg-foreground/[0.05] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-4 focus:ring-offset-background sm:w-auto'
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
        className='glass squircle-lg relative z-10 mx-auto mt-10 grid w-full max-w-4xl grid-cols-2 overflow-hidden sm:mt-16 lg:grid-cols-4'
        data-readout
      >
        {hero.readout.map((entry, index) => (
          <div
            className={`flex flex-col items-center justify-center gap-2.5 px-4 py-6 text-center sm:gap-3 sm:px-8 sm:py-9 ${DIVIDERS[index] ?? ''}`}
            key={entry.label}
          >
            <dt className='mono-label text-faint'>{entry.label}</dt>
            <dd className='display text-2xl font-semibold tracking-[-0.03em] text-foreground sm:text-3xl'>
              {entry.value}
            </dd>
          </div>
        ))}
      </dl>
    </header>
  )
}
