'use strict';

import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';
import markedOptions from './docs/utils/markeqOptions';
import pkg from './package.json';

const prod = process.env.NODE_ENV === 'production';

const hotEntry =  [
  'webpack/hot/dev-server',
  'webpack-hot-middleware/client?reload=true',
];
const docsEntry = './docs/js/app.js';
const ksEntry = './kitchen-sink/entry.js';

let minify = prod ? {
  removeComments: true,
  collapseWhitespace: true,
  minifyCSS: true,
} : false;

let plugins = [
  new HtmlWebpackPlugin({
    template: 'docs/index.html',
    prod,
    chunks: ['docs'],
    minify,
  }),
  new HtmlWebpackPlugin({
    filename: 'kitchen-sink/index.html',
    template: 'kitchen-sink/index.html',
    chunks: ['ks'],
    minify,
  }),
  new webpack.DefinePlugin({
    __VERSION__: JSON.stringify(pkg.version),
    SERVER_RENDING: false,
    'process.env': {
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    },
  }),
];

plugins = prod ? plugins.concat([
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  new ExtractTextPlugin('[name].[hash:5].min.css'),
  new webpack.BannerPlugin(`build: ${new Date().toString()}`),
]) : plugins.concat([
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
]);

export default {
  devtool: prod ? null : 'eval',
  entry: {
    docs: prod ? docsEntry : [].concat(hotEntry).concat(docsEntry),
    ks: prod ? ksEntry : [].concat(hotEntry).concat(ksEntry),
  },
  output: {
    filename: `[name].[hash:5]${prod ? '.min' : ''}.js`,
    path: `${__dirname}/www`,
    // publicPath: '',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: [
          'transform/cacheable?brfs',
          'babel',
        ]
      },
      {
        test: /\.md$/,
        loader: 'html!markdown'
      },
      {
        test: /\.scss$/,
        loader: prod ? ExtractTextPlugin.extract(
          'style',
          'css?minimize!postcss!sass',
        ) : 'style!css?sourceMap!postcss!sass?sourceMap',
      },
      /*{
        test: /\.(ttf|svg|woff)$/,
        loader: 'file?name=[path][name].[ext]&context=src'
      },*/
      // @see https://shellmonger.com/2016/01/22/working-with-fonts-with-webpack/
      {
        test: /\.svg$/,
        loader: 'url?mimetype=image/svg+xml&name=[name].[ext]'
      },
      {
        test: /\.woff$/,
        loader: 'url?mimetype=application/font-woff&name=[name].[ext]'
      },
      {
        test: /\.[ot]tf$/,
        loader: 'url?mimetype=application/octet-stream&name=[name].[ext]'
      },
    ]
  },

  resolve: {
    alias: {
      'amazeui-touch': path.resolve(__dirname, 'kitchen-sink/amazeui-touch.js'),
    }
  },

  plugins: plugins,

  node: {
    fs: 'empty'
  },

  markdownLoader: markedOptions,

  postcss: [autoprefixer({browsers: ['> 1%', 'last 2 versions', 'ie 10']})],
};
