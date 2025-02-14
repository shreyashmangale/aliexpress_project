module.exports = {
  setupFiles: ["jest-fetch-mock", "<rootDir>/jest.setup.js"], // Ensures fetch is available in tests
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  testEnvironment: "jsdom",
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  transformIgnorePatterns: ["/node_modules/(?!lucide-react).+\\.js$"], // Allow lucide-react to be transformed
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
};
