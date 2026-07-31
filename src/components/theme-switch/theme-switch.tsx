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

  const activeTheme: ThemeMode = (theme ?? 'system') as ThemeMode

  const getNextTheme = (): ThemeMode => {
    switch (activeTheme) {
      case 'light': {
        return 'dark'
      }
      case 'dark': {
        return 'system'
      }
      default: {
        return 'light'
      }
    }
  }

  const getCurrentIcon = () => {
    switch (activeTheme) {
      case 'light': {
        return <Sun className='size-5' aria-hidden='true' />
      }
      case 'dark': {
        return <Moon className='size-5' aria-hidden='true' />
      }
      default: {
        return <Laptop className='size-5' aria-hidden='true' />
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
      className='fixed bottom-4 right-4 z-40 grid size-11 place-items-center border border-border bg-background/75 text-foreground shadow-sm backdrop-blur-xl transition-colors duration-200 hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background md:bottom-8 md:right-8'
      title={
        mounted
          ? `Current theme: ${activeTheme}. Click to switch to ${getNextTheme()}`
          : 'Theme switcher'
      }
    >
      {mounted ? (
        getCurrentIcon()
      ) : (
        <Laptop className='size-5' aria-hidden='true' />
      )}
    </button>
  )
}
