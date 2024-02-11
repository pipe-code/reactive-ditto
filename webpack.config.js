const path = require('path');
const webpack = require("webpack");
require('dotenv').config();

module.exports = {
    entry: ['./src/app.js'],
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',
        publicPath: 'auto'
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(process.env)
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.module\.s(a|c)ss$/,
                exclude: /node_modules/,
                use: [
                    "style-loader", 
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: "[name]__[local]___[hash:base64:5]",
                            }
                        }
                    }, 
                    "sass-loader"
                ]
            },
            {
                test: /\.(css|scss|sass)$/,
                exclude: /\.module.(s(a|c)ss)$/,
                use: ["style-loader", 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)$/i,
                type: "asset"
            }
        ]
    }
}