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
        test: /\.css$/,
        use: [
          /*{
            loader: MiniCssExtractPlugin.loader,
          },*/
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    /*new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),*/
    new HtmlWebpackPlugin({
      filename: 'index.html',
    }),
  ],
};
