const path = require('path');

module.exports = {
  mode:'production',
  entry: {
    main: './src/js/main.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  } 
};
