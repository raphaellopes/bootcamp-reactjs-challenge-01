const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const rootPath = path.resolve(__dirname);
const publicPath = path.resolve(rootPath, 'public');

module.exports = {
  entry: path.resolve(rootPath, 'src', 'index.js'),
  output: {
    path: publicPath,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    contentBase: publicPath,
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    }, {
      test: /.scss$/,
      exclude: /node_modules/,
      use: [
        // { loader: 'style-loader' },
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            hmr: true,
          },
        },
        { loader: 'css-loader', options: { modules: true } },
        { loader: 'sass-loader' },
      ],
    }],
  },
};
