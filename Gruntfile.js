module.exports = function (grunt) {

    function generateFiles() {
        var config = grunt.file.readJSON('config.json');
        if(config) {
            var ret = [],
                dir = config.copyDirs;

            for (var i = dir.length - 1; i >= 0; i--) {
                ret.push({
                    expand: true, 
                    src: ['tunic.scss'], 
                    dest: dir[i]
                });
            }
            return ret;            
        }
    }

    require('jit-grunt')(grunt);

    // Project configuration.
    grunt.initConfig({
        // config: grunt.file.readJSON('config.json'),
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
                    'tunic-theme/assets/css/main.css' : 'tunic-theme/scss/main.scss'
                }
            }
        },
        
        postcss: {
            options: {
                // map: true,
                processors: [
                    require('autoprefixer-core')({browsers: ['last 2 version', 'ie 9']}).postcss,
                    require('css-mqpacker').postcss,
                    require('csswring').postcss
                ]
            },
            dist: {
                src: 'tunic-theme/assets/css/*.css'
            }
        },



        watch: {
            sass: {
                files: ['src/**/*.scss', 'node_modules/tunic-theme/assets/**/*'],
                tasks: ['default']
            }
        },
        sassdoc: {
            docs: {
                src: 'src',
                dest: 'docs',
                options: {
                    force: true,
                    theme: 'tunic-theme'
                }
            }
        }
    });

    grunt.registerTask('default', function () {
        grunt.config('files', generateFiles());
        grunt.task.run([
            'concat', 
            'sassdoc',
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