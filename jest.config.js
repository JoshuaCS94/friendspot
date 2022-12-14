// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  testMatch: ['**/*.test.[jt]s?(x)'],
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/src/mocks/setup.ts'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '^#(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*'],
  coveragePathIgnorePatterns: ['.*\\.stories\\.[jt]sx?', '/index\\.[jt]s$'],
  coverageThreshold: {
    global: {
      lines: 90,
    },
  },
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
