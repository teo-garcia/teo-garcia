import type { RefObject } from 'react'
import { useEffect } from 'react'

export function usePortfolioMotion(rootRef: RefObject<HTMLElement | null>) {
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
          const nav = document.querySelector('[data-site-nav]')
          const rail = document.querySelector('[data-rail]')
          const railProgress = document.querySelector('[data-rail-progress]')
          const pulse = document.querySelector('[data-pulse]')
          // The rail lives outside rootRef, so it has to be queried from the
          // document — gsap.context() scopes selector strings to the ref.
          const markers = Array.from(
            document.querySelectorAll<HTMLElement>('[data-chapter-marker]')
          )
          const blooms = gsap.utils.toArray<HTMLElement>('[data-bloom]')
          const sections = gsap.utils.toArray<HTMLElement>('[data-section]')

          function activateChapter(sectionName: string) {
            markers.forEach((marker) => {
              if (marker.dataset.chapter === sectionName) {
                marker.dataset.active = 'true'
              } else {
                delete marker.dataset.active
              }
            })
          }

          activateChapter('intro')

          // Start states are set explicitly rather than with .from(), so a
          // ScrollTrigger refresh can never re-render a half-finished tween
          // and leave hero elements stranded at opacity 0.
          const heroBits = [
            '[data-hero-eyebrow]',
            '[data-hero-copy]',
            '[data-hero-actions] > a',
          ].join(', ')
          const readoutCells = '[data-readout] > div'

          if (nav) {
            gsap.set(nav, { opacity: 0, y: -16 })
          }

          gsap.set('[data-title-line]', { yPercent: 112 })
          gsap.set(heroBits, { filter: 'blur(6px)', opacity: 0, y: 22 })
          gsap.set(readoutCells, { opacity: 0, y: 20 })

          if (rail) {
            gsap.set(rail, { opacity: 0, x: 18 })
          }

          const intro = gsap.timeline({
            defaults: { duration: 1.15, ease: 'power4.out' },
          })

          if (nav) {
            intro.to(nav, { opacity: 1, y: 0 })
          }

          intro
            // Headline lines rise out of their own clip masks, one after the
            // other — the single most load-bearing moment on the page.
            .to(
              '[data-title-line]',
              { duration: 1.35, ease: 'expo.out', stagger: 0.11, yPercent: 0 },
              '-=0.95'
            )
            .to(
              heroBits,
              { filter: 'blur(0px)', opacity: 1, stagger: 0.08, y: 0 },
              '-=0.95'
            )
            .to(readoutCells, { opacity: 1, stagger: 0.07, y: 0 }, '-=0.75')

          if (rail) {
            intro.to(rail, { duration: 0.9, opacity: 1, x: 0 }, '-=0.6')
          }

          if (pulse) {
            gsap.to(pulse, {
              duration: 1.8,
              ease: 'sine.inOut',
              opacity: 0.25,
              repeat: -1,
              yoyo: true,
            })
          }

          if (railProgress) {
            gsap.to(railProgress, {
              ease: 'none',
              scaleY: 1,
              scrollTrigger: {
                end: 'bottom bottom',
                scrub: 0.3,
                start: 'top top',
                trigger: rootRef.current,
              },
            })
          }

          blooms.forEach((bloom, index) => {
            gsap.to(bloom, {
              duration: 9 + index * 2,
              ease: 'sine.inOut',
              repeat: -1,
              scale: 1.14,
              xPercent: index % 2 === 0 ? 5 : -5,
              yoyo: true,
            })

            gsap.to(bloom, {
              ease: 'none',
              yPercent: -14,
              scrollTrigger: {
                end: 'bottom top',
                scrub: 1,
                start: 'top bottom',
                trigger: bloom.parentElement ?? bloom,
              },
            })
          })

          sections.forEach((section) => {
            const sectionName = section.dataset.section ?? ''

            ScrollTrigger.create({
              end: 'bottom 45%',
              onEnter: () => activateChapter(sectionName),
              onEnterBack: () => activateChapter(sectionName),
              start: 'top 55%',
              trigger: section,
            })

            // Not every section has both, and GSAP warns on empty targets.
            const reveals = section.querySelectorAll('[data-line-reveal]')
            const rules = section.querySelectorAll('[data-section-rule]')

            if (reveals.length > 0) {
              gsap.from(reveals, {
                duration: 1,
                ease: 'power4.out',
                filter: 'blur(8px)',
                opacity: 0,
                scrollTrigger: { start: 'top 72%', trigger: section },
                stagger: 0.12,
                y: 32,
              })
            }

            if (rules.length > 0) {
              gsap.from(rules, {
                duration: 0.8,
                ease: 'power3.out',
                scaleX: 0,
                scrollTrigger: { start: 'top 72%', trigger: section },
              })
            }
          })

          gsap.utils
            .toArray<HTMLElement>(
              '[data-qa-row], [data-work-row], [data-tool-row]'
            )
            .forEach((element) => {
              gsap.from(element, {
                duration: 0.9,
                ease: 'power4.out',
                opacity: 0,
                scrollTrigger: { start: 'top 90%', trigger: element },
                y: 26,
              })
            })

          gsap.utils
            .toArray<HTMLElement>('[data-repo-lane]')
            .forEach((lane) => {
              gsap.from(lane.querySelectorAll('li, header, p'), {
                duration: 0.7,
                ease: 'power3.out',
                opacity: 0,
                scrollTrigger: { start: 'top 88%', trigger: lane },
                stagger: 0.035,
                y: 16,
              })
            })

          return () => intro.kill()
        })

        return () => media.revert()
      }, rootRef)

      cleanup = () => ctx.revert()
    }

    void runMotion()

    return () => cleanup()
  }, [rootRef])
}
