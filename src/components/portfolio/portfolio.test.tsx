import { screen } from '@testing-library/react'
import axe from 'axe-core'

import { render } from '~/lib/test/render'

import Portfolio from './portfolio'

test('Portfolio renders portfolio content', () => {
  const { container } = render(<Portfolio />)

  expect(
    screen.getByRole('heading', {
      name: /i build the part that makes the rest easier to reason about/i,
    })
  ).toBeInTheDocument()
  expect(
    screen.getByRole('heading', {
      name: 'Global ad tech platform',
    })
  ).toBeInTheDocument()
  expect(screen.getAllByText(/Apollo Federation/i)).toHaveLength(2)
  expect(container.querySelector('[data-hero-motion]')).not.toBeNull()
})

test('Portfolio has no accessibility violations', async () => {
  const { container } = render(<Portfolio />)
  const results = await axe.run(container)

  expect(results.violations).toEqual([])
})
