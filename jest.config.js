const path = require('path');

// reference: https://github.com/vuejs/vue-cli/issues/1584#issuecomment-404550108
module.exports = {
  verbose: true,
  rootDir: './src',
  setupFiles: [path.resolve('jest/setupEnzyme.js')],
  setupFilesAfterEnv: [path.resolve('jest/setup.js')],
  transform: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
