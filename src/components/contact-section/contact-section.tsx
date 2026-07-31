import {
  ArrowUpRight,
  type LucideIcon,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'

import { contact, hero } from '../portfolio-content/portfolio-content'

const details = [
  {
    href: `mailto:${contact.email}`,
    icon: Mail,
    label: 'Email',
    value: contact.email,
  },
  {
    href: `tel:${contact.phone.replace(/\s/g, '')}`,
    icon: Phone,
    label: 'Phone',
    value: contact.phone,
  },
  {
    href: 'https://linkedin.com/in/teogarcia0',
    icon: ArrowUpRight,
    label: 'LinkedIn',
    value: contact.social,
  },
] as const

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
        className='layer-spotlight pointer-events-none absolute inset-0 z-0 rotate-180'
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
              className='text-sheen mt-6 max-w-2xl text-balance text-[clamp(2.25rem,6vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.04em]'
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
              className='group mt-10 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-accent px-6 text-sm font-medium text-accent-foreground transition duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background'
              href={`mailto:${contact.email}`}
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
              {details.map((detail) => (
                <ContactRow
                  href={detail.href}
                  icon={detail.icon}
                  key={detail.label}
                  label={detail.label}
                  value={detail.value}
                />
              ))}
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
          <p className='mono-label text-faint'>
            {hero.name} — {hero.role}
          </p>
          <p className='mono-label text-faint'>
            Built by hand · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}

function ContactRow({
  href,
  icon: Icon,
  label,
  value,
}: {
  href: string
  icon: LucideIcon
  label: string
  value: string
}) {
  return (
    <li className='border-b border-border'>
      <a
        className='group flex items-center gap-4 py-4 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background'
        href={href}
      >
        <Icon
          className='size-4 shrink-0 text-faint transition-colors duration-300 group-hover:text-foreground'
          aria-hidden='true'
        />
        <span className='mono-label w-20 shrink-0 text-faint'>{label}</span>
        <span className='truncate text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground'>
          {value}
        </span>
      </a>
    </li>
  )
}
