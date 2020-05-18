const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  //Archivo inicial
  entry: path.resolve(__dirname, 'src/js/index.js'),
  //Modo -> Development -> Production
  mode: 'development',
  //Directorio de bundle final
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/bundle.js',
  },
  devServer: {
    hot: true,
    open: true,
    port: 1234,
  },
  //loaders
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 99999999,
          },
        },
      },
      {
        //POSTCSS
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.styl$/,
        use: ['style-loader', 'css-loader', 'stylus-loader'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    /*new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),*/
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      filename: 'index.html',
    }),
  ],
};
