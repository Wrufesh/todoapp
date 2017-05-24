let path = require('path');

const config = {
  entry: {
    index: 'index.js'
  },
  output: {
    filename: 'bundle.js',
    path: '/home/proj/public/assets'
  }
};

module.exports = config;