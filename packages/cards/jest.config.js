module.exports = {
  expand: true,
  // silent: true,
  testEnvironment: "node",
  testMatch: ["<rootDir>/tests/**.test.ts"],
  transform: {
    "^.+\\.tsx?$": "esbuild-jest",
  },
};
