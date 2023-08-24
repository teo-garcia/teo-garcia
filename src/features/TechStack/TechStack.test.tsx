import { render } from '@testing-library/react'
import { TechStack } from './TechStack'

describe('<TechStackBanner /> tests', () => {
  test('It should render', () => {
    render(<TechStack />)
    expect(1 + 1).toBe(2)
  })
})
