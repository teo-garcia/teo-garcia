import { Mail } from 'lucide-react'

export function ContactSection() {
  return (
    <footer className='border-t border-border py-14' data-reveal>
      <p className='text-sm font-semibold uppercase tracking-[0.16em] text-teal-600 dark:text-teal-300'>
        Contact
      </p>
      <h2 className='mt-4 text-balance font-["Space_Grotesk"] text-4xl font-semibold tracking-[-0.04em]'>
        Bring the messy version.
      </h2>
      <p className='mt-4 max-w-xl leading-7 text-muted-foreground'>
        A clear brief is nice. The real one is usually more useful.
      </p>
      <a
        className='mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-foreground px-5 text-sm font-semibold text-background transition hover:-translate-y-0.5'
        href='mailto:juanmateogarcia96@gmail.com'
      >
        <Mail className='size-4' aria-hidden='true' />
        Email Mateo
      </a>
    </footer>
  )
}
