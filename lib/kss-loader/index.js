"use strict";
var kss = require('kss');

module.exports = function(content, sourceMap) {
    var callback = this.async();
    kss.parse(content, {markdown: false}, function (bool, css) {
        callback(null, css.data);
    });
    // var paths = resolve(this.resourcePath, content).filter(function(path) {
    //     return fs.existsSync(path);
    // });
    
    // vfs.src(paths)
    //     .pipe(sassdoc.parse('', { verbose: true }))
    //     .on('data', function (data) {
    //         var exp = "module.exports = " + JSON.stringify(data, undefined, "\t") + ";";
    //         callback(null, exp);
    //     });
    //     
    
};