import { ThemeSwitch } from 'components/ThemeSwitch/ThemeSwitch'
import Link from 'next/link'

const Navigation = () => {
  return (
    <nav className="h-24">
      <section className="mx-auto flex size-full items-center justify-between px-6 lg:mx-auto lg:w-10/12 lg:px-0 xl:w-9/12">
        <Link href="/" className="text-5xl font-bold">
          MG
        </Link>
        <ThemeSwitch />
      </section>
    </nav>
  )
}

export { Navigation }
