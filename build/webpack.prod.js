const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const base = require('./webpack.base.js');
const webpack = require('webpack');

module.exports = merge(base, {
    devtool: 'source-map', // 打包速度慢，原始源代码
    performance: {
      hints: "error",
      maxEntrypointSize: 250000, // z
      maxAssetSize: 250000
    },
    plugins: [
        // 清空dist
        new CleanWebpackPlugin(['dist']),
        // 代码压缩
        new UglifyJSPlugin({
            sourceMap: true // 必须
        }),
        // 公用代码分离
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common' // 指定公共 bundle 的名称。
        })
    ]
});
