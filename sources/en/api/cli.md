---
category: API
title: CLI
---

AcyOrt provides an interface for registering command line interfaces, you can register commands or options

Built-in commands, check [Command](/docs/command/) for more

Get the currently registered commands or options by running `acyort` or `acyort -h`

### Commands

```js
// after registering the following command, you can run the `acyort config`
acyort.cli.register('commands', {
    name: 'config', // command name
    fullName: 'configs', // full name of the command, for display
    description: 'Show config', // description
    action(argv) { // register action function
      // `argv` is the command line argument
      console.log('CLI arguments: ', argv, '\n')
      console.log(acyort.config)
    },
})
```

### Options

```js
// after registering the following options, you can run `acyort -c` or `acyort --config`
acyort.cli.register('options', {
  name: '--config', // full name
  alias: '-c', // alias
  description: 'Show config', // description
  action(argv) { // action
    acyort.logger.log('CLI arguments: ', argv, '\n')
  },
})
```

**important**

The `cli` APIs of context `this` variable can only access `workflow`, and the method is `start`

Detailed function definitions can be seen [API](/api/)
