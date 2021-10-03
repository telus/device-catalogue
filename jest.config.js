const path = require("path");

module.exports = {
  collectCoverage: true,
  coverageDirectory: "<rootDir>/../coverage",
  setupFiles: [path.resolve("jest/setupEnzyme.js")],
  transform: {
    "\\.png$": "jest-file-loader",
    "\\.jpg$": "jest-file-loader",
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleDirectories: ["node_modules", "src"],
  modulePaths: ["<rootDir>"],
  moduleNameMapper: {
    "^react(.*)$": "<rootDir>/node_modules/react$1",
  },
};
