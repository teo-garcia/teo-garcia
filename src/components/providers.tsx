import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ThemeProvider } from 'better-themes'
import { useEffect, useState } from 'react'

import { ThemeSwitch } from '~/components/theme-switch/theme-switch'
import { env } from '~/lib/env'
import { createQueryClient } from '~/lib/query-client'

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(createQueryClient)

  useEffect(() => {
    async function enableMocking() {
      if (env.isDevelopment) {
        const { initializeMSW } = await import('~/lib/mocks/browser')
        await initializeMSW()
      }
    }

    enableMocking()
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        {children}
        <ThemeSwitch />
        <ReactQueryDevtools buttonPosition='bottom-left' />
      </ThemeProvider>
    </QueryClientProvider>
  )
}
