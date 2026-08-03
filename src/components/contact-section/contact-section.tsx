import { ArrowUpRight, GitBranch, Link2, Mail, MapPin } from 'lucide-react'

import { contact, identity } from '../portfolio-content/portfolio-content'

// lucide v1 dropped brand marks, so these stand in for GitHub and LinkedIn.
const icons = { Email: Mail, GitHub: GitBranch, LinkedIn: Link2 } as const

export function ContactSection() {
  return (
    <footer
      className='surface-tail relative isolate overflow-hidden px-5 pb-14 pt-24 sm:px-8 sm:pb-16 sm:pt-32 lg:px-12'
      data-section='talk'
      id='contact'
    >
      <div
        className='rule-fade absolute inset-x-0 top-0 z-10'
        aria-hidden='true'
      />
      <div
        className='layer-horizon pointer-events-none absolute inset-x-0 bottom-0 top-0 z-0'
        aria-hidden='true'
      />
      <div
        className='layer-bloom pointer-events-none absolute bottom-[-24%] left-1/2 z-0 h-[36rem] w-[58rem] -translate-x-1/2'
        data-bloom
        aria-hidden='true'
      />

      <div className='relative z-10 mx-auto max-w-6xl'>
        <div className='grid gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.75fr)] lg:gap-20'>
          <div>
            <p className='mono-label text-faint'>{contact.eyebrow}</p>
            <h2
              className='display text-sheen mt-6 max-w-2xl text-balance text-[clamp(2.4rem,6.5vw,5rem)] font-bold leading-[0.96]'
              data-line-reveal
            >
              {contact.title}
            </h2>
            <p
              className='mt-8 max-w-xl text-base leading-[1.75] text-muted-foreground'
              data-line-reveal
            >
              {contact.body}
            </p>
            <a
              className='group mt-10 inline-flex min-h-12 items-center justify-center gap-3 squircle bg-accent px-7 text-sm font-medium text-accent-foreground transition duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-4 focus:ring-offset-background'
              href={`mailto:${identity.email}`}
            >
              {contact.cta}
              <ArrowUpRight
                className='size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
                aria-hidden='true'
              />
            </a>
          </div>

          <address className='not-italic'>
            <ul className='border-t border-border'>
              {contact.details.map((detail) => {
                const Icon = icons[detail.label as keyof typeof icons]

                return (
                  <li className='border-b border-border' key={detail.label}>
                    <a
                      className='group flex items-center gap-4 py-4 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-4 focus:ring-offset-background'
                      href={detail.href}
                    >
                      <Icon
                        className='size-4 shrink-0 text-faint transition-colors duration-300 group-hover:text-foreground'
                        aria-hidden='true'
                      />
                      <span className='mono-label w-20 shrink-0 text-faint'>
                        {detail.label}
                      </span>
                      <span className='truncate text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground'>
                        {detail.value}
                      </span>
                    </a>
                  </li>
                )
              })}
              <li className='flex items-center gap-4 border-b border-border py-4'>
                <MapPin
                  className='size-4 shrink-0 text-faint'
                  aria-hidden='true'
                />
                <span className='mono-label w-20 shrink-0 text-faint'>
                  Based
                </span>
                <span className='text-sm text-muted-foreground'>
                  {contact.location}
                </span>
              </li>
            </ul>
          </address>
        </div>

        <div className='mt-20 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between'>
          <p className='mono-label text-faint'>{identity.role}</p>
          <p className='mono-label text-faint'>
            Built by hand · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
