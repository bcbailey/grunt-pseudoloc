# grunt-pseudoloc v0.0.0

Simple pseudolocalization of files.

## Getting Started

This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out
the [Getting Started](http://gruntjs.com/getting-started) guide, as it
explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as
well as install and use Grunt plugins. Once you're familiar with that process,
you may install this plugin with this command:

```shell
npm install grunt-contrib-concat --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile
with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-contrib-concat');
```
## Pseudoloc Task

```js
pseudoloc: {
  options: {
    prepend: '[!!',
    append: '!!]',
    delimiter: '$$',
    startDelimiter: '{{',
    endDelimiter: '}}',
    extend: 0,
    override: undefined
  },
  target: {
    src: '',
    dest: ''
  }
}
```

### Options

## Release History
