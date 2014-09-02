'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: require('./package.json'),

    jshint: {
      options: {
        jshintrc: true
      },
      build: [ 'Gruntfile.js' ],
      source: [ 'tasks/**/*.js' ],
      test: [ 'test/**/*.js' ]
    },

    watch: {
      jshintrc: {
        files: [ '.jshintrc' ],
        tasks: [ 'jshint' ]
      },

      build: {
        files: [ '<%= jshint.build %>' ],
        tasks: [ 'jshint:build' ]
      },

      source: {
        files: [ '<%= jshint.source %>' ],
        tasks: [ 'jshint:source', 'test' ]
      },

      test: {
        files: [ '<%= jshint.test %>' ],
        tasks: [ 'jshint:test', 'test' ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('dev',  [ 'lint', 'watch' ]);
  grunt.registerTask('lint', [ 'jshint' ]);
  grunt.registerTask('test', [ ]);

  grunt.registerTask('default', [ 'jshint', 'test' ]);
};
