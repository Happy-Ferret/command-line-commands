[![view on npm](http://img.shields.io/npm/v/command-line-commands.svg)](https://www.npmjs.org/package/command-line-commands)
[![npm module downloads](http://img.shields.io/npm/dt/command-line-commands.svg)](https://www.npmjs.org/package/command-line-commands)
[![Build Status](https://travis-ci.org/75lb/command-line-commands.svg?branch=master)](https://travis-ci.org/75lb/command-line-commands)
[![Dependency Status](https://david-dm.org/75lb/command-line-commands.svg)](https://david-dm.org/75lb/command-line-commands)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

# command-line-commands
A lightweight module to help build a git-like command interface for your app.

## Synopsis

Create a list of valid commands (`null` represents "no command"). Supply it to `commandLineCommands()`, receiving back an object with two properties: `command` (the supplied command) and `argv` (the remainder of the command line args):
```js
const commandLineCommands = require('command-line-commands')

const validCommands = [ null, 'clean', 'update', 'install' ]
const { command, argv } = commandLineCommands(validCommands)

console.log('command: %s', command)
console.log('argv:    %s', JSON.stringify(argv))
```

Assuming the above script is installed as `example`:
```
$ example
command: null
argv:    []

$ example --verbose
command: null
argv:    ["--verbose"]

$ example install --save something
command: install
argv:    ["--save","something"]
```

From here, you can make a decision how to proceed based on the `command` and `argv` received.

## Usage Examples

Both examples use [command-line-args](https://github.com/75lb/command-line-args) for option-parsing.

- [Simple](https://github.com/75lb/command-line-commands/blob/next/example/simple.js): A basic app with a couple of commands.
- [Advanced](https://github.com/75lb/command-line-commands/blob/next/example/advanced/git.js): A more complete example, implementing part of the git command interface.

# API Reference
**Example**  
```js
const commandLineCommands = require('command-line-commands')
```
<a name="exp_module_command-line-commands--commandLineCommands"></a>

### commandLineCommands(commands, [argv]) ⇒ <code>Object</code> ⏏
Parses the `argv` value supplied (or `process.argv` by default), extracting and returning the `command` and remainder of `argv`. The command will be the first value in the `argv` array unless it is an option (e.g. `--help`).

**Kind**: Exported function  
**Throws**:

- `INVALID_COMMAND` - user supplied a command not specified in `commands`.


| Param | Type | Description |
| --- | --- | --- |
| commands | <code>string</code> &#124; <code>Array.&lt;string&gt;</code> | One or more command strings, one of which the user must supply. Include `null` to represent "no command" (effectively making a command optional). |
| [argv] | <code>Array.&lt;string&gt;</code> | An argv array, defaults to the global `process.argv` if not supplied. |


* * *

&copy; 2015-16 Lloyd Brookes \<75pound@gmail.com\>. Documented by [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).
