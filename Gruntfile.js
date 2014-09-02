'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: require('./package.json'),

    clean: {
      tmp: [ 'tmp' ]
    },

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
    },

    bump: {
      options: {
        updateConfigs: [ 'pkg' ],
        commit: true,
        createTag: true,
        push: true,
        pushTo: 'origin'
      }
    }
  });

  // Load grunt plugins
  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bump');

  // Alias tasks
  grunt.registerTask('dev',  [ 'lint', 'watch' ]);
  grunt.registerTask('lint', [ 'jshint' ]);
  grunt.registerTask('test', [ ]);

  // Default task
  grunt.registerTask('default', [ 'clean', 'jshint', 'test' ]);
};
