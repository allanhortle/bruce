"use strict";
var sassdoc = require('sassdoc');
var File = require('vinyl');
var path = require("path");
var resolve = require('sass-import-resolve');
var fs = require('fs');
var _ = require('lodash');

var vfs = require('vinyl-fs');

var map = require('map-stream');

module.exports = function(content, sourceMap) {
    var callback = this.async();
    var paths = resolve(this.resourcePath, content).filter(function(path) {
        return fs.existsSync(path);
    });



    vfs.src(paths)
        .pipe(sassdoc.parse('', { verbose: true }))
        .on('data', function (data) {
            var exp = "module.exports = " + JSON.stringify(data, undefined, "\t") + ";";
            callback(null, exp);
        });
};