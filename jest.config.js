const path = require("path");

module.exports = {
  rootDir: "./src",
  setupFiles: [path.resolve("jest/setupEnzyme.js")],
  transform: {
    "\\.png$": "jest-file-loader",
    "\\.jpg$": "jest-file-loader",
    "^.+\\.jsx?$": "babel-jest",
  },
};
