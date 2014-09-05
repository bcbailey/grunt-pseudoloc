# grunt-pseudoloc v0.0.2

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

In your project's Gruntfile, add a section named `pseudoloc` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
pseudoloc: {
  options: {
    // Task specific options go here
  },

  // A simple example of a one-to-one mapping of an english file
  english: {
    src: 'i18n/en.json',
    dest: 'i18n/qa.json'
  },

  // More advanced example that does dynamic mapping of all resource files
  // to *-pseudo.json
  all: {
    options: {
      // Target specific options go here
    },
    expand: true,
    cwd: 'i18n/',
    src: [ '*.json', '!*-pseudo.json' ],
    dest: 'i18n',
    ext: '-pseudo.json'
  }
});
```

### Options

This module uses the [pseudoloc](https://github.com/bunkat/pseudoloc) node
module. Reference it for more details on the options.

#### options.prepend
Type: `String`
Default value: `[!!`

Specifies the string that should be prepended to the beginning of
pseudolocalized strings. The prepended and appended strings help to locate
strings that have been cut off or improperly concatenated together.

#### options.append
Type: `String`
Default value: `!!]`

Specifies the string that should be appended to the end of pseudolocalized
strings. The prepended and appended strings help to locate strings that have
been cut off or improperly concatenated together.

#### options.delimiter
#### options.startDelimiter
#### options.endDelimiter
Type: `String`
Default value: `%`

Specifies the token delimiter. Any characters between token delimiters will not
be pseudolocalized. Tokens are used to replace data within localized strings.
You can either specify a single delimiter or use startDelimiter and endDelimiter
to specify the delimiters seperately.

#### options.extend
Type: `Number`
Default value: `0`

Extends the width of the string by the specified percentage. Useful if you will
be localizing into languages such as German which can be 30% longer than
English.

#### options.override
Type: `String`
Default value: `undefined`

Specifies an override character that all characters in the string will be
replaced with. Used to easily spot unlocalized strings.


## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code
using [Grunt](http://gruntjs.com/).


## Release History

 * 2014-09-05   v0.0.2   Updated logging output
 * 2014-09-02   v0.0.1   Initial release
