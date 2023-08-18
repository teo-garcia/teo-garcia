import { render } from '@testing-library/react'
import { ParticlesBackground } from './ParticlesBackground'

describe('<ParticleBackground /> tests', () => {
  test('It should render', () => {
    render(<ParticlesBackground />)
    expect(1 + 1).toBe(2)
  })
})
