var webpack = require("webpack");
var config = require("./webpack.config.js");

config.plugins = config.plugins.concat([
    new webpack.optimize.UglifyJsPlugin({
        output: {
            comments: false
        }
    }),
    new webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: JSON.stringify("production")
        }
    })
]);
// ...
module.exports = config;