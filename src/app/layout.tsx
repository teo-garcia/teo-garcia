import '@lib/styles/globals.css'
import { Inter } from 'next/font/google'
import Providers from '@components/Providers/Providers'
import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'
import { ThemeSwitch } from '@components/ThemeSwitch/ThemeSwitch'

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
      <body className={inter.className}>
        <Providers>
          <main>
            <ThemeSwitch />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}

export { metadata }
export default Layout
