module.exports = {
  preset: "ts-jest",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverage: true,
  resetMocks: false,
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/setupTests.ts",
    "!src/jest.config.ts",
  ],
  coverageDirectory: "coverage",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  moduleNameMapper: {
    "^.+\\.(css|less|scss|svg|gif)$": "babel-jest",
    "^quill$": "<rootDir>/__mocks__/quill.ts",
  },
  ttransformIgnorePatterns: ["/node_modules/(?!quill).+\\.js$"],
  transform: {
    "^.+\\.(css|less|scss|sass)$": "jest-transform-stub",
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleDirectories: ["node_modules", "src"],
  setupFiles: ["@testing-library/react/dont-cleanup-after-each"],
};
