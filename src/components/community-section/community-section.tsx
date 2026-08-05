import { ArrowUpRight } from 'lucide-react'
import type { MouseEvent } from 'react'

import { community } from '../portfolio-content/portfolio-content'
import { SectionIntro } from '../section-intro/section-intro'

// Feeds the .card-glow halo the cursor position, in card-local coordinates.
function trackGlow(event: MouseEvent<HTMLLIElement>) {
  const rect = event.currentTarget.getBoundingClientRect()
  event.currentTarget.style.setProperty(
    '--mx',
    `${((event.clientX - rect.left) / rect.width) * 100}%`
  )
  event.currentTarget.style.setProperty(
    '--my',
    `${((event.clientY - rect.top) / rect.height) * 100}%`
  )
}

export function CommunitySection() {
  return (
    <section
      className='relative isolate overflow-hidden px-5 py-24 sm:px-8 sm:py-32 lg:px-12'
      data-section='community'
      id='community'
    >
      <div
        className='rule-fade absolute inset-x-0 top-0 z-10'
        aria-hidden='true'
      />
      <div
        className='layer-bloom pointer-events-none absolute right-[-10%] top-[6%] z-0 h-[30rem] w-[42rem]'
        data-bloom
        aria-hidden='true'
      />

      <div className='relative z-10 mx-auto max-w-6xl'>
        <div className='grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.85fr)] lg:items-end lg:gap-20'>
          <SectionIntro
            eyebrow={community.eyebrow}
            note={community.note}
            title={community.title}
          />
          <div>
            <p className='max-w-xl text-base leading-[1.75] text-muted-foreground'>
              {community.body}
            </p>
            <a
              className='cta group squircle mt-7 inline-flex min-h-11 items-center gap-2.5 border border-border px-5 text-sm font-medium transition duration-300 hover:border-border-strong focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-4 focus:ring-offset-background'
              href={community.cta.href}
              rel='noreferrer'
              target='_blank'
            >
              {community.cta.label}
              <ArrowUpRight
                className='size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
                aria-hidden='true'
              />
            </a>
          </div>
        </div>

        {/*
          items-stretch + h-full + a flex-1 body is what keeps every footer on
          the same baseline regardless of how long the summary runs.
        */}
        <ol className='mt-16 grid items-stretch gap-4 lg:grid-cols-3'>
          {community.items.map((item, index) => (
            <li
              className='panel card-glow squircle-lg group relative flex h-full flex-col overflow-hidden p-7 transition-colors duration-500 hover:border-border-strong'
              data-community-card
              key={item.title}
              onMouseMove={trackGlow}
            >
              {/* Accent hairline that draws itself across the top on hover. */}
              <span
                className='absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-foreground/45 to-transparent transition-transform duration-700 group-hover:scale-x-100'
                aria-hidden='true'
              />

              <span
                className='display pointer-events-none absolute -right-2 -top-5 text-[6rem] font-bold leading-none text-foreground/[0.04] transition-colors duration-500 group-hover:text-foreground/[0.07]'
                aria-hidden='true'
              >
                {String(index + 1).padStart(2, '0')}
              </span>

              <p className='mono-label relative text-faint'>{item.period}</p>

              <h3 className='relative mt-7 text-xl font-medium tracking-[-0.025em] text-foreground'>
                {item.title}
              </h3>
              <p className='mono-label relative mt-2 text-faint'>{item.role}</p>

              <p className='relative mt-5 flex-1 text-sm leading-[1.75] text-muted-foreground transition-colors duration-500 group-hover:text-foreground/85'>
                {item.summary}
              </p>

              <ul className='relative mt-7 flex flex-wrap gap-2 border-t border-border pt-5'>
                {item.tags.map((tag) => (
                  <li
                    className='squircle-sm border border-border px-2.5 py-1 font-mono text-[0.6875rem] tracking-[0.02em] text-muted-foreground transition-colors duration-500 group-hover:border-border-strong group-hover:text-foreground'
                    key={tag}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
