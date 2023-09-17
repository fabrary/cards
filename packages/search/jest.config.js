module.exports = {
  expand: true,
  // silent: true,
  testEnvironment: "node",
  testMatch: ["<rootDir>/src/**test.ts"],
  transform: {
    "^.+\\.tsx?$": "esbuild-jest",
  },
};
