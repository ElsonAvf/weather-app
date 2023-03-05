const {merge} = require('webpack-merge');
const common = require('./webpack.common.js);

modules.exports = merge(common, {
  mode: 'production',
});
