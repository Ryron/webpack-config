const webpack = require('webpack');
const path = require('path');
const htmlList = require('./htmlList');
const getEntries = require('./entry');

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

const config = {
    entry: getEntries('./entry'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json', '.css'],
        alias: {
            '@': resolve('src')
        }
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['es2015', { modules: false }]
                        ],
                        plugins: ['syntax-dynamic-import']
                    }
                }]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        ...htmlList,
        new webpack.HotModuleReplacementPlugin() // 热模块替换
    ]
}

module.exports = config;
