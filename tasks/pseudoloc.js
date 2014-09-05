'use strict';

var pseudoloc = require('pseudoloc');
var chalk = require('chalk');

module.exports = function(grunt) {
  grunt.registerMultiTask('pseudoloc', function() {
    var options = this.options();

    // reset pseudoloc and set the options
    pseudoloc.reset();
    for (var opt in options) {
      pseudoloc.option[opt] = options[opt];
    }

    this.files.forEach(function(file) {
      var src = file.src[0];
      var dest = file.dest;

      // make sure file exists
      if (!grunt.file.exists(src)) {
        grunt.log.warn('Source file "' + src + '" not found.');
        return false;
      }

      // read file and convert
      var data = grunt.file.readJSON(src);
      for (var key in data) {
        data[key] = pseudoloc.str(data[key]);
      }

      // write dest file
      grunt.file.write(file.dest, JSON.stringify(data, null, 2));
      grunt.log.writeln('File ' + chalk.cyan(dest) + ' created.');
    });
  });
};
