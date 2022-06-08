const path = require('path');

module.exports = {
  mode: 'none',
  entry: [
    "./src/js/main.js",
    "./src/js/test.js"
  ],
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'docs/js/'),
    filename: "./main.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ]
  }
}
