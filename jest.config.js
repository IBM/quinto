module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>src/setupTests.ts'],
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>src/**/*.(spec|test).{ts,tsx}']
};
