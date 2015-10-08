module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    sass: {
      options: {
        outputStyle: 'compressed'
      },
      dist: {
        files: {
          './theme-assets/css/patternpack-theme.css': './theme-assets/scss/patternpack-theme.scss'
        }
      }
    },

    postcss: {
      options: {
        processors: [
          require('autoprefixer-core')({browsers: 'last 2 versions'})   // add vendor prefixes to CSS
        ]
      },
      dist: {
        src: 'theme-assets/css/*.css'
      }
    },

    copy: {
      development: {
        expand: true,
        src: [
          './layouts/**',
          './partials/**',
          './theme-assets/**'
        ],
        dest: '/Users/marcelo/development/patternpack/patternpack-example-library/node_modules/patternpack/node_modules/patternpack-example-theme'
      }
    },

    watch: {
      styles: {
        files: [
          './theme-assets/scss/**/*.scss'
        ],
        tasks: ['styles', 'copy:development']
      },
      templates: {
        files: [
          '**/*.hbs'
        ],
        tasks: ['copy:development']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-postcss');

  grunt.registerTask('styles', ['sass', 'postcss']);
  grunt.registerTask('develop', ['styles', 'watch']);
  grunt.registerTask('default', ['styles']);
}
