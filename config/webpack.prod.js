const paths = require('./paths')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const target = process.env.OUTPUT_TARGET || 'web'
module.exports = merge(common, {
  mode: 'production',
  target: target,
  devtool: false,
  output: {
    path: paths.build + '/' + target,
    filename: 'csb.js',
    library: 'CSB',
    libraryTarget: 'umd'
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
})
