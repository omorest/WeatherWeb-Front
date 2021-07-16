const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
      },
    ]
  },

  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
    }),
    
    new CopyPlugin({
      patterns: [
        {from: 'src/images/', to: 'images/'},
      ],
  }),
  ],
};