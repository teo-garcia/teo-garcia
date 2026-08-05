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
  expect(screen.getByRole('heading', { name: 'Languages' })).toBeInTheDocument()
  expect(screen.getAllByText('Firebase')).toHaveLength(2)
  expect(screen.getByText('Playwright')).toBeInTheDocument()
  expect(container.querySelector('[data-hero-motion]')).not.toBeNull()
})

test('Portfolio describes the work with the production-specific details', () => {
  render(<Portfolio />)

  expect(
    screen.getByText(/breaking boundaries documentary/i)
  ).toBeInTheDocument()
  expect(screen.getByText(/don't look up/i)).toBeInTheDocument()
  expect(screen.getByText(/spreadsheet permutations/i)).toBeInTheDocument()
  expect(screen.getAllByText('Twig')).toHaveLength(1)
})

test('Portfolio splits the Globant and Pragma engagements', () => {
  render(<Portfolio />)

  expect(
    screen.getByRole('heading', { name: 'Grupo Santander' })
  ).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: 'Familia' })).toBeInTheDocument()
  expect(screen.getByText('via Globant')).toBeInTheDocument()
  expect(screen.getByText('via Pragma')).toBeInTheDocument()
})

test('Portfolio links out to the template ecosystem', () => {
  render(<Portfolio />)

  expect(
    screen.getByRole('link', { name: /react-template-astro/i })
  ).toHaveAttribute(
    'href',
    'https://github.com/teo-garcia/react-template-astro'
  )
  expect(
    screen.getByRole('link', { name: /browse the repos/i })
  ).toHaveAttribute('href', 'https://github.com/teo-garcia')
})

test('Portfolio renders the conversational Q&A', () => {
  const { container } = render(<Portfolio />)

  expect(screen.getByText('So what do you actually do?')).toBeInTheDocument()
  expect(screen.getByText("What's the catch?")).toBeInTheDocument()
  expect(
    screen.getByText(/shape the business requirement/i)
  ).toBeInTheDocument()
  expect(container).not.toHaveTextContent(/playwright tests/i)
  expect(container).not.toHaveTextContent(/end-to-end tests/i)
})

test('Portfolio renders the community work', () => {
  render(<Portfolio />)

  expect(
    screen.getByRole('heading', { name: 'React Medellín' })
  ).toBeInTheDocument()
  expect(
    screen.getByRole('heading', { name: 'Women Who Code' })
  ).toBeInTheDocument()
  expect(screen.getByText('2019 — 2021')).toBeInTheDocument()
  expect(screen.getByText(/planting trees/i)).toBeInTheDocument()
})

test('Portfolio has no accessibility violations', async () => {
  const { container } = render(<Portfolio />)
  const results = await axe.run(container)

  expect(results.violations).toEqual([])
})
