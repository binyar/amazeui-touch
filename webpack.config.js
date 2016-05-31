export default {
  output: {
    library: 'AMUITouch',
    libraryTarget: 'umd'
  },
  externals: [
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    },
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      }
    },
    {
      'react-addons-css-transition-group': {
        root: ['React', 'addons', 'CSSTransitionGroup'],
        commonjs2: 'react-addons-css-transition-group',
        commonjs: 'react-addons-css-transition-group',
        amd: 'react-addons-css-transition-group'
      }
    }
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        // move to package.json
        query: {
          // stage: 0,
          // loose: "all",
          // optional: ['es7.objectRestSpread'],
          // plugins: ['object-assign'],
        }
      }
    ]
  },
  watch: false,
};
