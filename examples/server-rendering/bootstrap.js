'use strict';

global.SERVER_RENDING = true;

require('babel-register')({
  plugins: require('../../scripts/babel-require-ignore'),
});

require('./server');
