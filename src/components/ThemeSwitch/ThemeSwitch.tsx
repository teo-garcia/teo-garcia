'use client'

import clsx from 'clsx'
import { useScroller } from 'lib/hooks/useScroller'
import type { ThemeMode } from 'lib/misc/types'
import { useEffect, useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

const ThemeSwitch = () => {
  const hasScrolled = useScroller()
  const [theme, setTheme] = useState<ThemeMode>(
    typeof window !== 'undefined'
      ? (window.localStorage.getItem('theme') as ThemeMode) || 'light'
      : 'light'
  )
  const nextTheme = theme === 'light' ? 'dark' : 'light'

  useEffect(() => {
    document.body.classList.remove(nextTheme)
    document.body.classList.add(theme)
    window.localStorage.setItem('theme', theme)
  }, [theme, nextTheme])

  const handleClick = () => {
    setTheme(nextTheme)
  }

  return (
    <button
      className={clsx(
        'rounded-lg border p-2 md:right-8 md:top-8',
        hasScrolled
          ? 'border-white dark:border-black'
          : 'border-black dark:border-white'
      )}
      onClick={handleClick}
      aria-label={`Theme switcher, current mode: ${theme}`}
    >
      {theme === 'light' ? (
        <FaMoon
          className={clsx('size-7', hasScrolled ? 'text-white' : 'text-black')}
        />
      ) : (
        <FaSun
          className={clsx('size-7', hasScrolled ? 'text-black' : 'text-white')}
        />
      )}
    </button>
  )
}

export { ThemeSwitch }
