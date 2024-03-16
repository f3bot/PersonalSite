const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Specify the directory to serve static files
    },
    hot: true, // Enable hot module replacement
  },
};