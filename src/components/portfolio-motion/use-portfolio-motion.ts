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
          const heroImage = document.querySelector('[data-hero-image]')
          const line = document.querySelector('[data-drawn-line]')
          const breath = document.querySelector('[data-soft-breath]')
          const markers = gsap.utils.toArray<HTMLElement>(
            '[data-chapter-marker]'
          )
          const progress = document.querySelector('[data-scroll-progress]')
          const sections = gsap.utils.toArray<HTMLElement>('[data-section]')
          const parallaxImages = gsap.utils.toArray<HTMLElement>(
            '[data-parallax-image], [data-contact-art]'
          )
          const sectionRules = gsap.utils.toArray<HTMLElement>(
            '[data-section-rule]'
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

          if (nav) {
            heroTimeline.from(nav, {
              opacity: 0,
              y: -14,
            })
          }

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

          if (heroImage) {
            gsap.fromTo(
              heroImage,
              {
                opacity: 0,
                scale: 1.04,
                xPercent: 2,
              },
              {
                duration: 1.35,
                ease: 'power3.out',
                opacity: 1,
                scale: 1,
                xPercent: 0,
              }
            )

            gsap.to(heroImage, {
              ease: 'none',
              scale: 1.08,
              xPercent: -5,
              yPercent: 5,
              scrollTrigger: {
                end: 'bottom top',
                scrub: 0.85,
                start: 'top top',
                trigger: '[data-section="start"]',
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
            .toArray<HTMLElement>('[data-work-row], [data-tool-row]')
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

          sectionRules.forEach((element) => {
            gsap.from(element, {
              duration: 0.7,
              ease: 'power3.out',
              scaleX: 0,
              scrollTrigger: {
                start: 'top 82%',
                trigger: element,
              },
            })
          })

          parallaxImages.forEach((element) => {
            gsap.from(element, {
              duration: 1.2,
              ease: 'power3.out',
              opacity: 0.16,
              scale: 1.05,
              scrollTrigger: {
                start: 'top 80%',
                trigger: element,
              },
            })

            gsap.to(element, {
              ease: 'none',
              yPercent: -8,
              scrollTrigger: {
                end: 'bottom top',
                scrub: 0.8,
                start: 'top bottom',
                trigger: element,
              },
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
