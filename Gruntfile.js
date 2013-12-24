module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: [
          '*.scss', 
          '!tunic.scss'
        ],
        dest: 'tunic.scss'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');

  // Tasks
  grunt.registerTask('default', ['concat']);

};