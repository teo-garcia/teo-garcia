import { screen } from '@testing-library/react'
import axe from 'axe-core'

import { render } from '~/lib/test/render'

import HomePage from './home-page'

test('HomePage renders portfolio content', () => {
  const { container } = render(<HomePage />)

  expect(
    screen.getByRole('heading', {
      name: /making the problem less blurry/i,
    })
  ).toBeInTheDocument()
  expect(
    screen.getByRole('heading', { name: 'AdCellerant' })
  ).toBeInTheDocument()
  expect(screen.getByText(/Tools I have used/i)).toBeInTheDocument()
  expect(container.querySelector('[data-hero-motion]')).not.toBeNull()
})

test('HomePage has no accessibility violations', async () => {
  const { container } = render(<HomePage />)
  const results = await axe.run(container)

  expect(results.violations).toEqual([])
})
