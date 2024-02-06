import 'lib/styles/globals.css'
import { Inter } from 'next/font/google'
import Providers from 'components/Providers/Providers'
import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'
import { Navigation } from 'features/Navigation/Navigation'
import { ParticlesBackground } from 'components/ParticlesBackground/ParticlesBackground'

const metadata: Metadata = {
  title: {
    default: 'Home',
    template: '%s | RTN',
  },
}

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

const Layout = async (props: PropsWithChildren) => {
  const { children } = props
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="text-balance bg-white text-black transition-colors duration-300 ease-in-out dark:bg-black dark:text-white">
          <Providers>
            <Navigation />
            <main>{children}</main>
            <ParticlesBackground />
          </Providers>
        </div>
      </body>
    </html>
  )
}

export { metadata }
export default Layout
