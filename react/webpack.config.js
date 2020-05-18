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
  resolve: {
    extensions: ['.js', '.jsx'],
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
            limit: 900000000,
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({}),
    new webpack.DllReferencePlugin({
      manifest: require('./modules.manifest.json'),
    }),
  ],
};
