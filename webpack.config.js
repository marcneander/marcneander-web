const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/js/app.js',
    name: 'app',
    target: 'web',
    output: {
        path: path.resolve(__dirname, './docs'),
        filename: 'js/app.[hash:8].js',
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        {
            test: /\.less$/,
            use: ExtractTextWebpackPlugin.extract({
                use: ['css-loader', 'less-loader'],
                fallback: 'style-loader'
            })
        },
        {
            test: /\.(png|jpg|gif|svg|xml|json|ico)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    context: path.resolve(__dirname, 'src')
                }
            }]
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['docs']),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: false
        }),
        new ExtractTextWebpackPlugin({
            filename: 'css/style.[contenthash:8].css'
        }),
        new webpack.optimize.UglifyJsPlugin()
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './docs'),
        historyApiFallback: true,
        inline: true,
        open: true
    }
};
