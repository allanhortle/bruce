module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		config: grunt.file.readJSON('config.json'),
		concat: {
			dist: {
				files: {
				    'tunic.scss': [
				        '_tunic-main.scss',
				        '_tunic-layout.scss',
				        '_tunic-type.scss'
				    ]
				}
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
		grunt.config('concat.options.banner', generateBanner());
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

	function generateBanner(){
		var lines = [
			'',
			'/*======\\                      __              	',
			'|        \\                    |  \\          		',
			' \\$$$$$$$$|=\\   |=\\ |======\\   \\$$  /=====\\ 	',
			'   | $$   |  \\  |  \\|       \\ |  \\ /       \\	',
			'   | $$   | $$  | $$| $$$$$$$\\| $$|  $$$$$$$		',
			'   | $$   | $$  | $$| $$  | $$| $$| $$      		',
			'   | $$   | $$==/ $$| $$  | $$| $$| $$====\\ 		',
			'   | $$    \\$$    $$| $$  | $$| $$ \\$$     \\	',
			'    \\$$     \\$$$$$$  \\$$   \\$$ \\$$  \\$$$$$*/ ',
			'',
			''
		];
		return lines.join('\r\n');
	}


};