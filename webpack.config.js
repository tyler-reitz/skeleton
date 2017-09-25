const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'client/entry.js'),
  output: {
    path: path.resolve(__dirname, 'client/public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: /client/,
        loaders: 'babel-loader'
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'client/public'),
    proxy: {
      '/api': 'http://localhost:8081'
    }
  }
}
