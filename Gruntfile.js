module.exports = function(grunt) {

	

	// Project configuration.
	grunt.initConfig({
		config: grunt.file.readJSON('config.json'),
		concat: {
			dist: {
				src: [
					'*.scss', 
					'!tunic.scss'
				],
				dest: 'tunic.scss'
			}
		},
		copy: {
			dist: {
				files: '<%= files %>'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', function(){
		grunt.log.writeln(String('TUNIC')['magenta'].bold);
		grunt.config('files', generateFiles());
		grunt.task.run([
			'concat', 
			'copy'
		]);
	});

	function generateFiles(){
		var ret = [],
			dir = grunt.file.readJSON('config.json').copyDirs
		;
		for (var i = dir.length - 1; i >= 0; i--) {
			ret.push({
				expand: true, 
				src: ['tunic.scss'], 
				dest: dir[i]
			});
		};
		return ret;
	}


};