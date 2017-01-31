// webpack.config.js
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
var data = require('./docs/data');
var webpack = require('webpack');

var path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: {
        main: './docs/docs.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, "docs"),
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ["", ".js", ".jsx"],
    },
    resolveLoader: {
        modulesDirectories: ['lib', 'node_modules'],
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: [
                    path.resolve(__dirname, "docs")
                ]
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }
        ]
    },
    plugins: [
        new StaticSiteGeneratorPlugin('main.bundle.js', data.routes, data),
        new webpack.NoErrorsPlugin()
    ]
}
