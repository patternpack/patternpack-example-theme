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
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-postcss');

  grunt.registerTask('default', ['sass', 'postcss']);
}
