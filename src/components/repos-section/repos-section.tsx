import { ArrowUpRight } from 'lucide-react'

import { repos } from '../portfolio-content/portfolio-content'
import { SectionIntro } from '../section-intro/section-intro'

export function ReposSection() {
  return (
    <section
      className='relative isolate overflow-hidden px-5 py-24 sm:px-8 sm:py-32 lg:px-12'
      data-section='repos'
      id='repos'
    >
      <div
        className='rule-fade absolute inset-x-0 top-0 z-10'
        aria-hidden='true'
      />
      <div
        className='layer-bloom pointer-events-none absolute left-[-14%] top-[10%] z-0 h-[32rem] w-[46rem]'
        data-bloom
        aria-hidden='true'
      />

      <div className='relative z-10 mx-auto max-w-6xl'>
        <div className='grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.85fr)] lg:items-end lg:gap-20'>
          <SectionIntro
            eyebrow={repos.eyebrow}
            note={repos.note}
            title={repos.title}
          />
          <div>
            <p className='max-w-xl text-base leading-[1.75] text-muted-foreground'>
              {repos.body}
            </p>
            <a
              className='group mt-7 inline-flex min-h-11 items-center gap-2.5 squircle border border-border px-5 text-sm font-medium transition duration-300 hover:border-border-strong hover:bg-foreground/[0.05] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-4 focus:ring-offset-background'
              href={repos.cta.href}
              rel='noreferrer'
              target='_blank'
            >
              {repos.cta.label}
              <ArrowUpRight
                className='size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
                aria-hidden='true'
              />
            </a>
          </div>
        </div>

        <div className='mt-16 grid gap-x-10 gap-y-12 md:grid-cols-2'>
          {repos.lanes.map((lane) => (
            <section data-repo-lane key={lane.label}>
              <header className='flex items-baseline justify-between gap-4 border-b border-border pb-4'>
                <h3 className='text-sm font-medium text-foreground'>
                  {lane.label}
                </h3>
                <span className='mono-label text-faint'>
                  {String(lane.items.length).padStart(2, '0')} repos
                </span>
              </header>
              <p className='mt-4 text-sm leading-[1.7] text-muted-foreground'>
                {lane.note}
              </p>
              <ul className='mt-5'>
                {lane.items.map((item) => (
                  <li key={item}>
                    <a
                      className='group flex items-center justify-between gap-4 border-b border-border/70 py-2.5 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-4 focus:ring-offset-background'
                      href={`${repos.base}/${item}`}
                      rel='noreferrer'
                      target='_blank'
                    >
                      <span className='truncate font-mono text-xs text-muted-foreground transition-colors duration-300 group-hover:text-foreground'>
                        {item}
                      </span>
                      <ArrowUpRight
                        className='size-3.5 shrink-0 text-faint transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground'
                        aria-hidden='true'
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
