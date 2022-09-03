/* eslint-disable @typescript-eslint/no-var-requires */
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/src/cypress'],
}

module.exports = createJestConfig(customJestConfig)
