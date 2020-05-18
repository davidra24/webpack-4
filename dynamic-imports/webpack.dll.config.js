const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    modules: ['react', 'react-dom'],
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/[name].js',
    library: '[name]',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(__dirname, '[name].manifest.json'),
    }),
  ],
};
