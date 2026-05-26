import type { RefObject } from 'react'
import { useEffect } from 'react'

export function usePageMotion(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (import.meta.env.MODE === 'test') {
      return
    }

    let cleanup = () => {}

    async function runMotion() {
      if (!rootRef.current) {
        return
      }

      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ])

      gsap.registerPlugin(ScrollTrigger)

      const ctx = gsap.context(() => {
        const media = gsap.matchMedia()

        media.add('(prefers-reduced-motion: no-preference)', () => {
          gsap.from('[data-hero-motion]', {
            duration: 0.9,
            ease: 'power3.out',
            opacity: 0,
            stagger: 0.08,
            y: 24,
          })

          gsap.utils
            .toArray<HTMLElement>('[data-reveal]')
            .forEach((element) => {
              gsap.from(element, {
                duration: 0.7,
                ease: 'power3.out',
                opacity: 0,
                scrollTrigger: {
                  start: 'top 82%',
                  trigger: element,
                },
                y: 22,
              })
            })

          return () => media.revert()
        })
      }, rootRef)

      cleanup = () => ctx.revert()
    }

    void runMotion()

    return () => cleanup()
  }, [rootRef])
}
