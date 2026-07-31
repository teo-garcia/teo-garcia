import { screen } from '@testing-library/react'
import axe from 'axe-core'

import { render } from '~/lib/test/render'

import Portfolio from './portfolio'

test('Portfolio renders the hero, work and stack content', () => {
  const { container } = render(<Portfolio />)

  expect(
    screen.getByRole('heading', {
      name: /i make complicated software feel obvious/i,
    })
  ).toBeInTheDocument()
  expect(
    screen.getByRole('heading', { name: 'AdCellerant' })
  ).toBeInTheDocument()
  expect(
    screen.getByRole('heading', { name: 'Every single day' })
  ).toBeInTheDocument()
  expect(screen.getAllByText('Apollo Federation')).toHaveLength(2)
  expect(container.querySelector('[data-hero-motion]')).not.toBeNull()
})

test('Portfolio renders the conversational Q&A', () => {
  render(<Portfolio />)

  expect(screen.getByText('So what do you actually do?')).toBeInTheDocument()
  expect(screen.getByText("What's the catch?")).toBeInTheDocument()
})

test('Portfolio has no accessibility violations', async () => {
  const { container } = render(<Portfolio />)
  const results = await axe.run(container)

  expect(results.violations).toEqual([])
})
