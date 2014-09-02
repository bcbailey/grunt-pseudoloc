var assert = require('chai').assert;
var grunt = require('grunt');

// global suite
// global test
suite('grunt-pseudoloc', function() {
  suite('defaults', function() {
    var actual;
    suiteSetup(function() {
      actual = grunt.file.readJSON('tmp/default.json');
    });

    test('should be an object with 2 keys', function() {
      assert.isObject(actual);
      assert.equal(Object.keys(actual).length, 2);
    });

    test('should have pseudolocalized title', function() {
      assert.isString(actual['title']);
      assert.match(actual['title'], /^\[!!.*!!\]$/);
      assert.equal(actual['title'].length, 13);
      assert.notEqual(actual['title'], '[!!Example!!]');
    });

    test('should have pseudolocalized greeting', function() {
      assert.isString(actual['greeting']);
      assert.match(actual['greeting'], /^\[!!.*!!\]$/);
      assert.equal(actual['greeting'].length, 11);
      assert.notEqual(actual['greeting'], '[!!Hello!!]');
    });
  });

  suite('prepend/append', function() {
    var actual;
    suiteSetup(function() {
      actual = grunt.file.readJSON('tmp/prepend.json');
    });

    test('should be an object with 2 keys', function() {
      assert.isObject(actual);
      assert.equal(Object.keys(actual).length, 2);
    });

    test('should have pseudolocalized title', function() {
      assert.isString(actual['title']);
      assert.match(actual['title'], /^\{!.*!\}$/);
      assert.equal(actual['title'].length, 11);
      assert.notEqual(actual['title'], '{!Example!}');
    });

    test('should have pseudolocalized greeting', function() {
      assert.isString(actual['greeting']);
      assert.match(actual['greeting'], /^\{!.*!\}$/);
      assert.equal(actual['greeting'].length, 9);
      assert.notEqual(actual['greeting'], '{!Hello!}');
    });
  });

  suite('extend', function() {
    var actual;
    suiteSetup(function() {
      actual = grunt.file.readJSON('tmp/extend.json');
    });

    test('should be an object with 2 keys', function() {
      assert.isObject(actual);
      assert.equal(Object.keys(actual).length, 2);
    });

    test('should have pseudolocalized title', function() {
      assert.isString(actual['title']);
      assert.match(actual['title'], /^\[!!.* +!!\]$/);
      assert.equal(actual['title'].length, 15);
      assert.notEqual(actual['title'], '[!!Example  !!]');
    });

    test('should have pseudolocalized greeting', function() {
      assert.isString(actual['greeting']);
      assert.match(actual['greeting'], /^\[!!.* +!!\]$/);
      assert.equal(actual['greeting'].length, 12);
      assert.notEqual(actual['greeting'], '[!!Hello !!]');
    });
  });

  suite('override', function() {
    var actual;
    suiteSetup(function() {
      actual = grunt.file.readJSON('tmp/override.json');
    });

    test('should be an object with 2 keys', function() {
      assert.isObject(actual);
      assert.equal(Object.keys(actual).length, 2);
    });

    test('should have pseudolocalized title', function() {
      assert.isString(actual['title']);
      assert.equal(actual['title'], '[!!_______!!]');
    });

    test('should have pseudolocalized greeting', function() {
      assert.isString(actual['greeting']);
      assert.equal(actual['greeting'], '[!!_____!!]');
    });
  });
});
