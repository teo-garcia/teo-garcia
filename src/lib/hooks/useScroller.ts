import { useEffect, useState } from 'react'

export type UseScrollerProps = {
  scrollThreshold?: number
}

const useScroller = (
  props: UseScrollerProps = {
    scrollThreshold: 50,
  }
) => {
  const { scrollThreshold } = props
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setHasScrolled(scrollPosition > scrollThreshold)
    }

    window.addEventListener('scroll', handleScroll)

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollThreshold])

  return hasScrolled
}

export { useScroller }
