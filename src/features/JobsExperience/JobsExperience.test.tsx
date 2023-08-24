import { render } from '@testing-library/react'
import { JobsExperience } from './JobsExperience'

describe('<JobsExperience /> tests', () => {
  test('It should render', () => {
    render(<JobsExperience />)
    expect(1 + 1).toBe(2)
  })
})
