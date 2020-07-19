const path = require('path');

const config = {
  mode: process.env.NODE_ENV && 'production' || 'develop',
  entry: process.env.npm_package_config_entry,
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist'),
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  optimization: {
    minimize: process.env.NODE_ENV === 'production'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        loader: ['babel-loader']
      }
    ]
  }
};
module.exports = config;
