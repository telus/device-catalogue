const path = require('path');

module.exports = {
  rootDir: './src',
  setupFiles: [
    path.resolve('jest/setupEnzyme.js')
  ]
}
