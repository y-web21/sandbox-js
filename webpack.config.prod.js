const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    main: "./src/js/main.js",
    test: "./src/js/test.js",
  },
  output: {
    path: path.resolve(__dirname, 'docs/js/'),
    filename: "./[name].js",
  }
}
