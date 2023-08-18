'use client'

import { useCallback } from 'react'
import Particles from 'react-particles'
import type { RecursivePartial, Engine, IOptions } from 'tsparticles-engine'
import { loadLinksPreset } from 'tsparticles-preset-links'

const particlesOptions: RecursivePartial<IOptions> = {
  preset: 'links',
  background: {
    opacity: 0,
  },
  particles: {
    links: {
      color: {
        value: '#94a3b8',
      },
      distance: 150,
      width: 1.5,
      opacity: 0.25,
    },
    move: {
      speed: 1.5,
    },
  },
  responsive: [
    {
      maxWidth: 768,
      options: {
        particles: {
          move: {
            speed: 1,
          },
          links: {
            distance: 100,
          },
        },
      },
    },
  ],
}

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadLinksPreset(engine)
  }, [])

  return (
    <Particles
      className="pointer-events-none fixed h-full w-full"
      id="tsparticles"
      options={particlesOptions}
      init={particlesInit}
    />
  )
}

export { ParticlesBackground }
