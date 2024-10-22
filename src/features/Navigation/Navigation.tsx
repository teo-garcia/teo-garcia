'use client'

import clsx from 'clsx'
import { ThemeSwitch } from 'components/ThemeSwitch/ThemeSwitch'
import { useScroller } from 'lib/hooks/useScroller'
import Link from 'next/link'

const Navigation = () => {
  const hasScrolled = useScroller()

  return (
    <nav
      className={clsx(
        'fixed left-0 top-0 z-20 w-full transition-colors',
        hasScrolled && 'bg-black dark:bg-white'
      )}
    >
      <section className="mx-auto flex h-20  items-center justify-between  px-6 lg:mx-auto lg:w-10/12 lg:px-0 xl:w-9/12">
        <Link
          href="/"
          className={clsx(
            'text-5xl font-bold',
            hasScrolled && 'text-white dark:text-black'
          )}
        >
          MG
        </Link>
        <ThemeSwitch />
      </section>
    </nav>
  )
}

export { Navigation }
