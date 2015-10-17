"use strict";
var sassdoc = require('sassdoc');
var File = require('vinyl');
var path = require("path");
var resolve = require('sass-import-resolve');
var fs = require('fs');
var _ = require('lodash');

var vfs = require('vinyl-fs');

var map = require('map-stream');

var log = function(file, cb) {
  console.log(file.path);
  cb(null, file);
};


module.exports = function(content, sourceMap) {

    var resourceDir = path.dirname(this.resourcePath);
    var callback = this.async();
    var paths = resolve(this.resourcePath, content, {
        resolveScss: true,
        resolveSass: false
    }).filter(function(path) {
        return fs.existsSync(path);
    });



    vfs.src(paths)
        .pipe(sassdoc.parse())
        .pipe(map(log))
        .on('data', function (data) {
            var exp = "module.exports = " + JSON.stringify(data, undefined, "\t") + ";";
            callback(null, exp);
        });
};