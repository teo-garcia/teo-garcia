import { render } from '@testing-library/react'
import { Navigation } from './Navigation'

describe('<Navigation /> tests', () => {
  test('It should render', () => {
    render(<Navigation />)
    expect(1 + 1).toBe(2)
  })
})
