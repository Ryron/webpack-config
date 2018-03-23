const getEntries = require('./entry');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const entries = getEntries('./entry');

let htmlList = Object.keys(entries).map((entry) => {
    return new HtmlWebpackPlugin({
        template: './index.html',
        filename: `${entry}.html`,
        chunks: ['common', entry],
    });
})

module.exports = htmlList;
