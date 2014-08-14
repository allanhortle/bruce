module.exports = function (grunt) {

    function generateFiles() {
        var ret = [],
            dir = grunt.file.readJSON('config.json').copyDirs;

        for (var i = dir.length - 1; i >= 0; i--) {
            ret.push({
                expand: true, 
                src: ['tunic.scss'], 
                dest: dir[i]
            });
        };
        return ret;
    }

    // Project configuration.
    grunt.initConfig({
        config: grunt.file.readJSON('config.json'),
        concat: {
            dist: {
                files: {
                    'tunic.scss': [
                        'src/_vars.scss',
                        'src/**/*.scss'
                    ]
                }
            }
        },
        copy: {
            dist: {
                files: '<%= files %>'
            }
        },

        sass: {
            dist: {
                files: {
                    'tests/test.css': 'tests/test.scss'
                }
            }
        },
        watch: {
            sass: {
                files: 'src/**/*.scss',
                tasks: ['default']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', function () {
        grunt.config('files', generateFiles());
        grunt.task.run([
            'concat', 
            'copy'
        ]);
    });

    grunt.registerTask('test', function(){
        grunt.task.run([
            'concat', 
            'sass'
        ]);
    });



};