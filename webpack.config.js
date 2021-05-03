const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackDynamicPublicPathPlugin = require("webpack-dynamic-public-path");
const webpack = require("webpack");

const appVersion = '1.0.0';

module.exports = {
    entry: ['@babel/polyfill/noConflict', 'whatwg-fetch', './src/app.js'],
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',
        publicPath: "publicPathPlaceholder",
        chunkFilename: `[id].app.bundle.js?v=${appVersion}`
    },
    devtool: false,
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'app.bundle.css',
            chunkFilename: `[id].app.bundle.css?v=${appVersion}`
        }),
        new WebpackDynamicPublicPathPlugin({
            externalPublicPath: "window.externalPublicPath"
        }),
        new webpack.EvalSourceMapDevToolPlugin({})
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: "[name]__[local]___[hash:base64:5]",
                            }
                        }
                    }
                ],
                include: /\.module\.css$/
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ],
                exclude: /\.module\.css$/
            },
            {
                test: /\.module\.s(a|c)ss$/,
                loader: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: "[name]__[local]___[hash:base64:5]",
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                    }
                ]
            },
            {
                test: /\.s(a|c)ss$/,
                exclude: /\.module.(s(a|c)ss)$/,
                loader: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    }
}