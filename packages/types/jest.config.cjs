module.exports = {
  expand: true,
  // silent: true,
  testEnvironment: "node",
  testMatch: ["<rootDir>/tests/**.test.ts"],
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  transform: {
    "^.+\\.tsx?$": "esbuild-jest",
  },
};
