import { useTheme } from 'better-themes'
import { Laptop, Moon, Sun } from 'lucide-react'
import { useSyncExternalStore } from 'react'

type ThemeMode = 'light' | 'dark' | 'system'

const noop = () => {}
const subscribe = () => noop
const getClientSnapshot = () => true
const getServerSnapshot = () => false
const useIsMounted = () =>
  useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot)

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme()
  const mounted = useIsMounted()

  const activeTheme: ThemeMode = (theme ?? 'dark') as ThemeMode

  const getNextTheme = (): ThemeMode => {
    switch (activeTheme) {
      case 'dark': {
        return 'light'
      }
      case 'light': {
        return 'system'
      }
      default: {
        return 'dark'
      }
    }
  }

  const getCurrentIcon = () => {
    switch (activeTheme) {
      case 'light': {
        return <Sun className='size-4' aria-hidden='true' />
      }
      case 'dark': {
        return <Moon className='size-4' aria-hidden='true' />
      }
      default: {
        return <Laptop className='size-4' aria-hidden='true' />
      }
    }
  }

  return (
    <button
      onClick={() => setTheme(getNextTheme())}
      aria-label={
        mounted
          ? `Theme switcher, current mode: ${activeTheme}`
          : 'Theme switcher'
      }
      className='fixed bottom-4 right-4 z-50 grid size-10 place-items-center squircle border border-border bg-background/70 text-muted-foreground backdrop-blur-xl transition duration-300 hover:border-border-strong hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-4 focus:ring-offset-background md:bottom-6 md:right-6'
      title={
        mounted
          ? `Current theme: ${activeTheme}. Click to switch to ${getNextTheme()}`
          : 'Theme switcher'
      }
    >
      {mounted ? (
        getCurrentIcon()
      ) : (
        <Moon className='size-4' aria-hidden='true' />
      )}
    </button>
  )
}
