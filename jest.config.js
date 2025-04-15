export default {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverage: true,
  coverageProvider: "v8", // or 'babel' if you prefer
  collectCoverageFrom: ["src/Fetcher.ts"], // Only collect coverage for Fetcher.ts
};
