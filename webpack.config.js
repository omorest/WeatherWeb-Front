const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'build.js',
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
    
    new Dotenv()   ,
    
    new CopyPlugin({
      patterns: [
        {from: 'src/images/', to: 'images/'},
      ],
  }),
  ],
};