'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: require('./package.json'),

    bump: {
      options: {
        updateConfigs: [ 'pkg' ],
        commit: true,
        createTag: true,
        push: true,
        pushTo: 'origin'
      }
    },

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

    mochaTest: {
      options: {
        ui: 'tdd',
        reporter: 'spec'
      },
      test: {
        src: [ '<%= jshint.test %>' ]
      }
    },

    pseudoloc: {
      default: {
        src: 'test/fixtures/en.json',
        dest: 'tmp/default.json'
      },
      prepend: {
        options: {
          prepend: '{!',
          append: '!}'
        },
        src: 'test/fixtures/en.json',
        dest: 'tmp/prepend.json'
      },
      extend: {
        options: {
          extend: 0.3
        },
        src: 'test/fixtures/en.json',
        dest: 'tmp/extend.json'
      },
      override: {
        options: {
          override: '_'
        },
        src: 'test/fixtures/en.json',
        dest: 'tmp/override.json'
      }
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
        tasks: [ 'jshint:test', 'mochaTest:test' ]
      }
    }
  });

  // Load grunt plugins
  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bump');
  grunt.loadNpmTasks('grunt-mocha-test');

  // Alias tasks
  grunt.registerTask('dev',  [ 'lint', 'watch' ]);
  grunt.registerTask('lint', [ 'jshint' ]);
  grunt.registerTask('test', [ 'pseudoloc', 'mochaTest:test' ]);

  // Default task
  grunt.registerTask('default', [ 'clean', 'jshint', 'test' ]);
};
