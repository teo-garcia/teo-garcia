import { render } from '@testing-library/react'
import { Welcome } from './Welcome'

describe('<Welcome /> tests', () => {
  test('It should render', () => {
    render(<Welcome />)
    expect(true).toBe(true)
  })
})
