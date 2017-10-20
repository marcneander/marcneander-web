const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = merge(common, {
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: false
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './docs'),
        historyApiFallback: true,
        host: '0.0.0.0',
        port: 8000
    }
});

module.exports = config;
