 const merge = require('webpack-merge');
 const base = require('./webpack.base.js');

 module.exports = merge(base, {
     devtool: 'cheap-module-eval-source-map', // 打包速度快， 原始源代码
     devServer: {
         contentBase: './dist'
     }
 });
