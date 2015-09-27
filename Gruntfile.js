module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-cssnano');

    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'web/assets/css/styles.css': 'sass/styles.scss'
                }
            }
        },
        autoprefixer:{
            dist:{
                files:{
                    'web/assets/css/styles.css':'web/assets/css/styles.css'
                }
            }
        },
        cssnano: {
            dist: {
                files: {
                    'web/assets/css/styles.css':'web/assets/css/styles.css'
                }
            }
        },
        watch: {
            scripts: {
                files: '**/*.scss',
                tasks: ['sass', 'autoprefixer', 'cssnano']
            }
        }
    });

    grunt.registerTask('default', ['sass']);
};
