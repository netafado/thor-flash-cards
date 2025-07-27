// eslint-disable-next-line import/no-anonymous-default-export
export default {
  displayName: '@thor-commerce/dashboard',
  preset: '../../jest.preset.js',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/next/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: 'test-output/jest/coverage',
  transformIgnorePatterns: [
    'node_modules/(?!@uiw|react-md-editor|next-intl|next-auth|@auth/core|jose|@uiw/react-md-editor|@uiw/react-markdown-preview)',
  ],
  moduleNameMapper: {
    '^@dash/(.*)$': '<rootDir>/src/$1',
    '^@uiw/react-md-editor$':
      '<rootDir>/src/testUtils/mock/nextAuth/editor.tsx',
  },
  setupFilesAfterEnv: ['<rootDir>/src/testUtils/setupTests.ts'],
};
