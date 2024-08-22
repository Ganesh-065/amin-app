module.exports = {
  collectCoverage: true,
  resetMocks: false,
  collectCoverageFrom: [
    "src/*.{js,jsx, ts,tsx}",
    // "!src/setupTests.js",
    // "!src/jest.config.js",
  ],
  coverageDirectory: "coverage",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  moduleNameMapper: {
    "^.+\\.(css|less|scss|svg|gif)$": "babel-jest",
  },
  transformIgnorePatterns: ["node_modules/?!(msw)"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleDirectories: ["node_modules", "tests/testUtils.tsx", "src"],
  setupFiles: ["@testing-library/react/dont-cleanup-after-each"],
};
