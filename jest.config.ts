export default {
    transform: {
      "^.+\\.tsx?$": "ts-jest",
    },
    extensionsToTreatAsEsm: [".ts", ".tsx"],
    testMatch: ["**/*.jest.test.ts"],
    globals: {
      "ts-jest": {
        useESM: true,
      },
    },
  };
