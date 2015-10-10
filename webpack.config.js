// webpack.config.js
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
var data = require('./docs/data');


var path = require('path');

module.exports = {
    entry: './docs/docs.js',
    output: {
        filename: 'bundle.js',
        path: __dirname,
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loader: 'babel-loader' },
            { test: /\.json$/, loader: 'json-loader' }

        ]
    },

    plugins: [
        new StaticSiteGeneratorPlugin('bundle.js', data.routes, data)
    ]
}