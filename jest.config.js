module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  snapshotSerializers: ["jest-serializer-vue"],
  setupFiles: ["<rootDir>/tests/unit/index.js"],
  testResultsProcessor: "jest-junit"
};
