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
          const image = document.querySelector('[data-nature-image]')
          const grade = document.querySelector('[data-nature-grade]')
          const line = document.querySelector('[data-drawn-line]')
          const breath = document.querySelector('[data-soft-breath]')
          const markers = gsap.utils.toArray<HTMLElement>(
            '[data-chapter-marker]'
          )
          const progress = document.querySelector('[data-scroll-progress]')
          const sections = gsap.utils.toArray<HTMLElement>('[data-section]')
          const sectionImages = gsap.utils.toArray<HTMLElement>(
            '[data-section-image]'
          )

          function activateMarker(sectionName: string) {
            markers.forEach((marker) => {
              gsap.to(marker, {
                color:
                  marker.textContent?.toLowerCase() === sectionName
                    ? 'var(--accent)'
                    : 'var(--muted-foreground)',
                duration: 0.45,
                opacity:
                  marker.textContent?.toLowerCase() === sectionName ? 1 : 0.62,
              })
            })
          }

          activateMarker('start')

          const heroTimeline = gsap.timeline({
            defaults: {
              duration: 1.08,
              ease: 'power4.out',
            },
          })

          heroTimeline
            .from('[data-title-mask]', {
              clipPath: 'inset(0 100% 0 0)',
              filter: 'blur(10px)',
              y: 22,
            })
            .from(
              '[data-hero-motion] > p, [data-hero-motion] a',
              {
                opacity: 0,
                stagger: 0.08,
                y: 24,
              },
              '-=0.62'
            )
            .from(
              '[data-written-rule]',
              {
                scaleX: 0,
                transformOrigin: 'center',
              },
              '-=0.6'
            )
            .from(
              '[data-hero-ledger] > *',
              {
                opacity: 0,
                stagger: 0.08,
                y: 22,
              },
              '-=0.38'
            )

          if (progress) {
            gsap.to(progress, {
              ease: 'none',
              scaleY: 1,
              scrollTrigger: {
                end: 'bottom bottom',
                scrub: 0.25,
                start: 'top top',
                trigger: rootRef.current,
              },
            })
          }

          if (image) {
            gsap.to(image, {
              ease: 'none',
              scale: 1.16,
              xPercent: -4,
              yPercent: 3,
              scrollTrigger: {
                end: 'bottom bottom',
                scrub: 0.85,
                start: 'top top',
                trigger: rootRef.current,
              },
            })
          }

          if (grade) {
            gsap.to(grade, {
              ease: 'none',
              opacity: 0.88,
              scrollTrigger: {
                end: 'bottom bottom',
                scrub: 0.8,
                start: 'top top',
                trigger: rootRef.current,
              },
            })
          }

          if (line) {
            gsap.fromTo(
              line,
              { scaleY: 0.22, yPercent: -8 },
              {
                ease: 'none',
                scaleY: 1,
                scrollTrigger: {
                  end: 'bottom bottom',
                  scrub: 0.5,
                  start: 'top top',
                  trigger: rootRef.current,
                },
                yPercent: 16,
              }
            )
          }

          if (breath) {
            gsap.to(breath, {
              duration: 6,
              ease: 'sine.inOut',
              opacity: 0.72,
              repeat: -1,
              scale: 1.08,
              yoyo: true,
            })
          }

          sections.forEach((section) => {
            const sectionName = section.dataset.section ?? ''

            ScrollTrigger.create({
              end: 'bottom 45%',
              onEnter: () => activateMarker(sectionName),
              onEnterBack: () => activateMarker(sectionName),
              start: 'top 55%',
              trigger: section,
            })

            gsap.from(section.querySelectorAll('[data-line-reveal]'), {
              clipPath: 'inset(0 0 100% 0)',
              duration: 0.92,
              ease: 'power4.out',
              opacity: 0,
              scrollTrigger: {
                start: 'top 70%',
                trigger: section,
              },
              stagger: 0.14,
              y: 36,
            })
          })

          gsap.utils
            .toArray<HTMLElement>('[data-work-item], [data-tool-group]')
            .forEach((element, index) => {
              gsap.from(element, {
                duration: 0.92,
                ease: 'power4.out',
                opacity: 0,
                scrollTrigger: {
                  start: 'top 86%',
                  trigger: element,
                },
                x: index % 2 === 0 ? -18 : 18,
                y: 24,
              })
            })

          sectionImages.forEach((element) => {
            gsap.from(element, {
              duration: 1,
              ease: 'power3.out',
              opacity: 0,
              rotate: -1.5,
              scale: 0.96,
              scrollTrigger: {
                start: 'top 80%',
                trigger: element,
              },
              y: 28,
            })
          })

          return () => heroTimeline.kill()
        })

        return () => media.revert()
      }, rootRef)

      cleanup = () => ctx.revert()
    }

    void runMotion()

    return () => cleanup()
  }, [rootRef])
}
