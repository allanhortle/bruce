var jsonfile = require('jsonfile');
var file = './docs/data.json';
var sassdoc = require('sassdoc');

sassdoc.parse('./src', { verbose: true })
    .then(function (data) {
        jsonfile.writeFile(file, data, function (err) {
  			console.error(err)
		})
    });