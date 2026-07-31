import {
  ArrowRight,
  BriefcaseBusiness,
  GitBranch,
  KeyRound,
  Languages,
  Wrench,
} from 'lucide-react'

import { work } from '../home-page/content'

const workIcons = [KeyRound, Wrench, Languages, GitBranch, BriefcaseBusiness]

export function WorkSection() {
  return (
    <section
      className='px-5 py-20 sm:px-8 sm:py-24 lg:px-12'
      data-reveal
      data-section='work'
      id='work'
    >
      <div className='mx-auto grid max-w-7xl gap-12 lg:grid-cols-[13rem_minmax(0,1fr)]'>
        <aside className='lg:sticky lg:top-28 lg:self-start'>
          <div className='max-w-48'>
            <p className='text-xs font-semibold uppercase tracking-[0.22em] text-accent'>
              Selected work
            </p>
            <div
              className='mt-5 h-px w-8 origin-left bg-accent'
              data-section-rule
            />
            <p className='mt-8 text-sm leading-7 text-muted-foreground'>
              A few places I have helped move forward.
            </p>
            <a
              className='mt-8 inline-flex items-center gap-3 text-sm font-semibold text-accent transition hover:gap-4 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background'
              href='mailto:juanmateogarcia96@gmail.com'
            >
              Talk through work
              <ArrowRight className='size-4' aria-hidden='true' />
            </a>
          </div>
        </aside>

        <div className='border-t border-border/80'>
          {work.map((item, index) => (
            <article
              className='group grid gap-5 border-b border-border/80 py-8 transition-colors sm:grid-cols-[4rem_minmax(0,1fr)] lg:grid-cols-[4rem_minmax(12rem,0.48fr)_minmax(0,1fr)_8rem]'
              data-work-row
              key={item.title}
            >
              <div className='grid size-11 place-items-center rounded-full border border-accent/45 text-accent transition group-hover:-translate-y-0.5 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground'>
                {(() => {
                  const Icon = workIcons[index] ?? BriefcaseBusiness
                  return <Icon className='size-5' aria-hidden='true' />
                })()}
              </div>
              <div>
                <h2 className='text-balance text-xl font-semibold leading-tight tracking-[-0.02em] sm:text-2xl'>
                  {item.title}
                </h2>
                <p className='mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground'>
                  {item.company}
                </p>
              </div>
              <div className='max-w-3xl'>
                <p className='text-sm leading-7 text-muted-foreground sm:text-base'>
                  {item.summary}
                </p>
                <p className='mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-foreground/70'>
                  {item.proof}
                </p>
              </div>
              <div className='flex items-start justify-between gap-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground lg:justify-end lg:text-right'>
                <span>{item.dates}</span>
                <ArrowRight
                  className='size-4 shrink-0 transition group-hover:translate-x-1 group-hover:text-accent'
                  aria-hidden='true'
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
