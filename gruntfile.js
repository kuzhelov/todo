module.exports = function (grunt) {
    grunt.initConfig({
        concat: {
            css: {
                files: [{
                    src: ['resources/**/*.css', '!resources/css/style.css'],
                    dest: 'resources/css/style.css'
                }]
            }
        },
        autoprefixer: {
            dist: {
                src: "resources/css/style.css"
            }
        },
        watch: {
            concatStyles: {
                options: {
                    debounceDelay: 5000
                },
                files: ['resources/**/*.css', '!resources/css/style.css'],
                tasks: ['concat']
            },
            prefixStyles: {
                files: ['resources/css/style.css'],
                tasks: ['autoprefixer'],
                options: {
                    debounceDelay: 5000
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    
    grunt.registerTask('default', ['watch']);
};
