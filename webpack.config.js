let path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
  entry: {
    index: './index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'static')
  },
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.css$/, use: ['style-loader', 'css-loader']}, // inline css include in bundle
      {
        test: /\.scss$/, use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: ['css-loader', 'sass-loader']
      })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: (getPath) => {
        return getPath('css/style.css');
      }
    })
  ],
  devtool: 'source-map'

};

module.exports = config;