export default {
    transform: {
      "^.+\\.tsx?$": "ts-jest",
    },
    extensionsToTreatAsEsm: [".ts", ".tsx"],
    globals: {
      "ts-jest": {
        useESM: true,
      },
    },
  };
