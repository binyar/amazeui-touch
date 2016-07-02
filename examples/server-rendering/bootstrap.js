'use strict';

global.SERVER_RENDING = true;

require('babel-register')({
  plugins: [
    [
      // ignore scss require when running in Node env
      'transform-require-ignore',
      {
        extensions: ['.scss']
      }
    ]
  ]
});

require('./server');
