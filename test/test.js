'use strict'
var test = require('tape')
var commandLineCommands = require('../')

test('parse: simple', function (t) {
  var commands = [ 'eat', 'sleep' ]

  var clc = commandLineCommands.parse(commands, [ 'eat', '--food', 'peas' ])
  t.deepEqual(clc.command, 'eat')
  t.deepEqual(clc.argv, [ '--food', 'peas' ])

  clc = commandLineCommands.parse(commands, [ 'sleep', '--hours', '2' ])
  t.deepEqual(clc.command, 'sleep')
  t.deepEqual(clc.argv, [ '--hours', '2' ])

  t.end()
})

test('parse: no commands defined', function (t) {
  t.plan(5)
  t.throws(function () {
    commandLineCommands.parse([], [ 'eat' ])
  })
  t.throws(function () {
    commandLineCommands.parse(undefined, [ 'eat' ])
  })
  t.throws(function () {
    commandLineCommands.parse([])
  })
  t.throws(function () {
    commandLineCommands.parse([], [ 'eat' ])
  })
  t.throws(function () {
    commandLineCommands.parse()
  })
})

test.skip('parse: no definitions, but options passed', function (t) {
  var commands = [ { name: 'eat' } ]
  var cli = commandLineCommands(commands)
  t.throws(function () {
    cli.parse([ 'eat', '--food', 'peas' ])
  })
  t.end()
})

test('parse: no command specified')

test.skip('parse: unknown command', function (t) {
  var commands = [ { name: 'eat' } ]
  var cli = commandLineCommands(commands)
  var command = cli.parse([ 'sleep' ])
  t.deepEqual(command, {
    error: 'Unknown command',
    command: 'sleep'
  })
  t.end()
})
