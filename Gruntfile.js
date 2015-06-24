module.exports = function (grunt) {

    function generateFiles() {
        var config = grunt.file.readJSON('config.json');
        if(config) {
            var ret = [],
                dir = config.copyDirs;

            for (var i = dir.length - 1; i >= 0; i--) {
                ret.push({
                    expand: true, 
                    src: ['bruce.scss'], 
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
                    'bruceOld.scss': [
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
                    'bruce-theme/assets/css/main.css' : 'bruce-theme/scss/main.scss'
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
                src: 'bruce-theme/assets/css/*.css'
            }
        },



        watch: {
            sass: {
                files: ['src/**/*.scss', 'node_modules/bruce-theme/assets/**/*'],
                tasks: ['default']
            }
        },
        sassdoc: {
            docs: {
                src: 'src',
                options: {
                    dest: 'docs',
                    force: true,
                    theme: 'bruce'
                }
            }
        }
    });

    grunt.registerTask('default', function () {
        grunt.config('files', generateFiles());
        grunt.task.run([
            'concat', 
            'sassdoc'
        ]);
    });

    grunt.registerTask('test', function(){
        grunt.task.run([
            'concat', 
            'sass'
        ]);
    });

};