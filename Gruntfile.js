module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
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
				files: [
					{expand: true, src: ['tunic.scss'], dest: '<%= config.dir1 %>'},
					{expand: true, src: ['tunic.scss'], dest: '<%= config.dir2 %>'}
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');

	// Tasks
	grunt.registerTask('default', ['concat', 'copy']);

};