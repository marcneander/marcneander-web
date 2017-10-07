const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
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
            exclude: /node_modules(?!\/webpack-dev-server)/,
            loader: 'babel-loader'
        },
        {
            test: /\.less$/,
            use: ExtractTextWebpackPlugin.extract({
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ],
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
            filename: 'css/style.[contenthash:8].css',
            allChunks: true
        }),
        new CopyWebpackPlugin([
            { from: './src/favicon.ico' },
            { from: './src/CNAME' },
            { from: './src/mstile-150x150.png' },
            { from: './src/android-chrome-192x192.png' },
            { from: './src/android-chrome-256x256.png' },
            { from: './src/browserconfig.xml' }
        ]),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            DEBUG: process.env.NODE_ENV !== 'production'
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './docs'),
        historyApiFallback: true,
        open: true
    },
    devtool: 'source-map'
};

module.exports = config;
