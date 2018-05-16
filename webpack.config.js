
var path = require('path');
var webpack = require("webpack");

var plugins = [];
var devPlugins = [];

var prodPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: true
    }
  })
];

plugins = plugins.concat(
  process.env.NODE_ENV === 'production' ? prodPlugins : devPlugins
);


module.exports = {
  context: __dirname,
  entry: "./frontend/index.jsx",
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
  },
  watch: true,
  plugins: plugins,
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/, /\.gif$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
      }
    ],
    // rules:[
    //   {
    //     test: /\.(png|svg|jpg|gif)$/,
    //     use: [
    //       'file-loader'
    //     ]
    //   }
    // ]

  },

  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
