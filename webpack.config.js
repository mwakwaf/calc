const debug = process.env.NODE_ENV !== "production"
const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  // common
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
  ],

  // dev
  devServer: {
    // root
    static: {
      directory: './dist',
      watch: true
    },
    port: 3000,
    // launch
    open: false,
    // other
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        pathRewrite: {'^/api': ''}
      }
    },
  },

  // ts
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      // use ts
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {loader: 'ts-loader'}
        ]
      }
    ]
  }
}
