import path from 'path';
import webpack from 'webpack';

export default {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],

  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/static/'
  },

  module: {
    loaders: [
      {
        test: /\.sass$/,
        loaders: ['style', 'css', 'sass?indentedSyntax=sass'],
        include: path.join(__dirname, 'src')
      },

      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      }
    ]
  },

  resolve: {
    modulesDirectories: [
      'node_modules',
      'src'
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    port: 3000
  },
};
