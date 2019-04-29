const path = require('path');

const rootPath = path.resolve(__dirname);
const publicPath = path.resolve(rootPath, 'public');

module.exports = {
  entry: path.resolve(rootPath, 'src', 'index.js'),
  output: {
    path: publicPath,
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: publicPath,
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    }],
  },
};
