import { Mail } from 'lucide-react'

export function ContactSection() {
  return (
    <footer
      className='flex min-h-[82svh] items-center py-24'
      data-reveal
      data-section='note'
    >
      <div className='max-w-4xl'>
        <p className='text-xs font-semibold uppercase tracking-[0.22em] text-accent'>
          Note
        </p>
        <h2 className='mt-5 text-balance text-3xl font-semibold leading-tight sm:text-5xl'>
          Send the rough version.
        </h2>
        <p className='mt-7 max-w-2xl text-lg leading-8 text-muted-foreground'>
          The useful conversation usually starts before the brief is clean: the
          old system, the strange edge case, the thing people keep working
          around.
        </p>
        <a
          className='mt-9 inline-flex min-h-12 items-center gap-2 border-b border-foreground/50 px-1 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background'
          href='mailto:juanmateogarcia96@gmail.com'
        >
          <Mail className='size-4' aria-hidden='true' />
          Email Mateo
        </a>
      </div>
    </footer>
  )
}
