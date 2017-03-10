const path = require('path');
const webpack = require('webpack');

module.exports = function (env) {
  const config = {
    entry: './src/js/index.js',

    output: {
      library: 'snapsheet-react-dd-menu',
      libraryTarget: 'umd'
    },

    module: {
      rules: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: 'babel-loader'
      }]
    },
    externals: {
      classnames: {
        root: 'classnames',
        commonjs2: 'classnames',
        commonjs: 'classnames',
        amd: 'classnames'
      },
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      },
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      },
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      },
      'react-addons-css-transition-group': {
        root: 'ReactCSSTransitionGroup',
        commonjs2: 'react-addons-css-transition-group',
        commonjs: 'react-addons-css-transition-group',
        amd: 'react-addons-css-transition-group'
      }
    },

    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(env)
      })
    ]
  };

  if (env === 'production') {
    config.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          warnings: false
        },
        output: {
          comments: false
        },
        sourceMap: false
      })
    );
  }

  return config;
};