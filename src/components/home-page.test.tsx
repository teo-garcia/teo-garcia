import { screen } from '@testing-library/react'
import axe from 'axe-core'

import { render } from '~/lib/test/render'

import HomePage from './home-page'

test('HomePage renders portfolio content', () => {
  const { container } = render(<HomePage />)

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
  expect(screen.getByText(/Apollo Federation/i)).toBeInTheDocument()
  expect(container.querySelector('[data-hero-motion]')).not.toBeNull()
})

test('HomePage has no accessibility violations', async () => {
  const { container } = render(<HomePage />)
  const results = await axe.run(container)

  expect(results.violations).toEqual([])
})
