import {
  ArrowRight,
  Globe2,
  Link2,
  type LucideIcon,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'
import type { ReactNode } from 'react'

import { assets, contact } from '../portfolio-content/portfolio-content'

export function ContactSection() {
  return (
    <footer
      className='relative isolate overflow-hidden px-5 py-20 sm:px-8 sm:py-24 lg:px-12'
      data-reveal
      data-section='note'
      id='about'
    >
      <img
        alt={assets.lighthouseContact.alt}
        className='pointer-events-none absolute bottom-0 left-0 z-[-2] h-full w-full object-cover object-left-bottom opacity-[0.42] mix-blend-multiply dark:opacity-20 dark:mix-blend-screen'
        data-contact-art
        src={assets.lighthouseContact.src}
      />
      <div
        className='absolute inset-0 z-[-1] bg-[linear-gradient(90deg,rgb(247_246_241_/_0.8)_0%,rgb(247_246_241_/_0.88)_42%,rgb(247_246_241)_78%),linear-gradient(0deg,rgb(247_246_241)_0%,rgb(247_246_241_/_0.42)_44%,rgb(247_246_241_/_0.96)_100%)] dark:bg-[linear-gradient(90deg,rgb(9_9_8_/_0.78)_0%,rgb(9_9_8_/_0.86)_42%,rgb(9_9_8)_78%),linear-gradient(0deg,rgb(9_9_8)_0%,rgb(9_9_8_/_0.48)_44%,rgb(9_9_8_/_0.96)_100%)]'
        aria-hidden='true'
      />
      <div className='mx-auto grid min-h-[60svh] max-w-7xl gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(18rem,0.55fr)] lg:items-center'>
        <div className='max-w-2xl'>
          <p className='text-xs font-semibold uppercase tracking-[0.22em] text-accent'>
            Let&apos;s connect
          </p>
          <h2 className='mt-5 text-balance text-4xl font-semibold leading-[1.04] tracking-[-0.04em] sm:text-5xl'>
            Send me the rough version.
          </h2>
          <p className='mt-6 max-w-lg text-base leading-8 text-muted-foreground'>
            The unclear scope, the half-formed idea, the system nobody wants to
            touch. That is usually where I can help.
          </p>
          <a
            className='mt-8 inline-flex min-h-12 items-center justify-center gap-3 bg-accent px-5 text-sm font-semibold text-accent-foreground transition hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background'
            href={`mailto:${contact.email}`}
          >
            Let&apos;s talk
            <ArrowRight className='size-4' aria-hidden='true' />
          </a>
        </div>

        <address className='grid gap-5 text-sm not-italic text-foreground/86'>
          <ContactLink href={`mailto:${contact.email}`} icon={Mail}>
            {contact.email}
          </ContactLink>
          <ContactLink
            href={`tel:${contact.phone.replace(/\s/g, '')}`}
            icon={Phone}
          >
            {contact.phone}
          </ContactLink>
          <ContactLink href='https://linkedin.com/in/teogarcia0' icon={Link2}>
            {contact.social}
          </ContactLink>
          <ContactLink href='https://teo-garcia.vercel.app' icon={Globe2}>
            {contact.site}
          </ContactLink>
          <p className='flex items-start gap-4'>
            <MapPin className='mt-0.5 size-5 text-accent' aria-hidden='true' />
            <span>{contact.location}</span>
          </p>
        </address>
      </div>
    </footer>
  )
}

function ContactLink({
  children,
  href,
  icon: Icon,
}: {
  children: ReactNode
  href: string
  icon: LucideIcon
}) {
  return (
    <a
      className='flex items-start gap-4 transition hover:text-accent focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background'
      href={href}
    >
      <Icon className='mt-0.5 size-5 text-accent' aria-hidden='true' />
      <span>{children}</span>
    </a>
  )
}
