const path = require('path');

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
  //loaders
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
