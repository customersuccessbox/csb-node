const paths = require('./paths')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const TerserJSPlugin = require('terser-webpack-plugin')

const target = process.env.OUTPUT_TARGET || 'web'
const environment = process.env.NODE_ENV || 'development'
console.log(environment);
module.exports = merge(common, {
  mode: environment,
  target: target,
  devtool: environment === 'production' ? false : 'cheap-module-eval-source-map',
  output: {
    path: paths.build + '/' + target,
    filename: environment === 'production' ? 'csb.min.js' : 'csb.js',
    library: 'CSB',
    libraryTarget: 'umd'
  },
  optimization: {
    minimize: environment === 'production',
    minimizer: [
      new TerserJSPlugin({
        sourceMap: true,
      }),
    ],
  }
})
