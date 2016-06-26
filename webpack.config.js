var path = require('path');

module.exports = {
  devtool: '#inline-source-map',
  entry: __dirname + '/index.js',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        exclude: path.resolve(__dirname, 'node_modules'),
        include: [
          path.resolve(__dirname, '.'),
          path.resolve(__dirname, 'src')
        ]
      }
    ]
  }
}
