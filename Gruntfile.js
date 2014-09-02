'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: true
      },
      build: [ 'Gruntfile.js' ],
      source: [ 'tasks/**/*.js' ],
      test: [ 'test/**/*.js' ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('lint', [ 'jshint' ]);
  grunt.registerTask('test', [ ]);

  grunt.registerTask('default', [ 'jshint', 'test' ]);
};
