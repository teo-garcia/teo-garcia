import '@lib/styles/globals.css'
import { Inter } from 'next/font/google'
import Providers from '@components/Providers/Providers'
import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'
import { Navigation } from '@features/Navigation/Navigation'
import clsx from 'clsx'
import { ParticlesBackground } from '@components/ParticlesBackground/ParticlesBackground'

const metadata: Metadata = {
  title: {
    default: 'Home | MG',
    template: '%s | MG',
  },
}

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const Layout = (props: PropsWithChildren) => {
  const { children } = props
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.className,
          'scroll-smooth bg-slate-200 dark:bg-slate-900'
        )}
      >
        <Providers>
          <ParticlesBackground />
          <div className="bg-slate-200 text-slate-900 transition-colors duration-500  dark:bg-slate-900 dark:text-slate-200">
            <Navigation />
            <main className="relative z-10 ">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  )
}

export { metadata }
export default Layout
