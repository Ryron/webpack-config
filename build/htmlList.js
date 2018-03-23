const path = require('path');
const getEntries = require('./entry');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const entries = getEntries(path.join(__dirname, '..', 'entry/'));

let htmlList = Object.keys(entries).map((entry) => {
    return new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../index.html'),
        filename: `${entry}.html`,
        chunks: ['common', entry],
    });
})

module.exports = htmlList;
