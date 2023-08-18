import { render } from '@testing-library/react'
import { TechStackBanner } from './TechStackBanner'

describe('<TechStackBanner /> tests', () => {
  test('It should render', () => {
    render(<TechStackBanner />)
    expect(1 + 1).toBe(2)
  })
})
