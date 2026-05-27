import {
  BriefcaseBusiness,
  GitBranch,
  KeyRound,
  Languages,
  Wrench,
} from 'lucide-react'

import { assets, work } from './content'

const workIcons = [KeyRound, Wrench, Languages, GitBranch, BriefcaseBusiness]

export function WorkSection() {
  return (
    <section className='py-24 sm:py-32' data-reveal data-section='work'>
      <div>
        <div className='grid gap-10 lg:grid-cols-[1fr_18rem] lg:items-end'>
          <div className='max-w-3xl'>
            <p className='text-xs font-semibold uppercase tracking-[0.22em] text-accent'>
              Work
            </p>
            <h2 className='mt-5 text-balance text-3xl font-semibold leading-tight sm:text-5xl'>
              Work, told the way I remember it.
            </h2>
            <p className='mt-6 max-w-2xl text-base leading-7 text-muted-foreground'>
              Not a trophy case. These are the kinds of problems I kept getting
              pulled into, and what I tried to make less painful.
            </p>
          </div>
          <img
            alt={assets.leafSystem.alt}
            className='hidden aspect-[3/2] w-full rounded-sm border border-border/60 object-cover opacity-70 mix-blend-multiply grayscale dark:mix-blend-screen lg:block'
            data-section-image
            src={assets.leafSystem.src}
          />
        </div>
        <div className='mt-12 space-y-10 border-l border-border/70 pl-5 sm:pl-8'>
          {work.map((item, index) => (
            <article
              className='relative grid gap-4 pb-10 transition-colors hover:text-foreground lg:grid-cols-[12rem_1fr] lg:gap-10'
              data-work-item
              key={item.title}
            >
              <div className='absolute -left-[2.05rem] top-0 grid size-8 place-items-center rounded-full border border-border bg-background text-accent sm:-left-[3.05rem]'>
                {(() => {
                  const Icon = workIcons[index] ?? BriefcaseBusiness
                  return <Icon className='size-4' aria-hidden='true' />
                })()}
              </div>
              <div className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'>
                <p>{item.company}</p>
                <p className='mt-1'>{item.dates}</p>
              </div>
              <div className='max-w-3xl'>
                <h3 className='text-balance text-2xl font-semibold leading-tight sm:text-3xl'>
                  {item.title}
                </h3>
                <p className='mt-4 max-w-3xl text-base leading-7 text-muted-foreground'>
                  {item.summary}
                </p>
                <ul className='mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm leading-6 text-foreground/82'>
                  {item.proof.map((proof) => (
                    <li className='border-l border-accent/50 pl-3' key={proof}>
                      {proof}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
