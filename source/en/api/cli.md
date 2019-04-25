---
category: API
---

AcyOrt provides an interface for registering command line interfaces, you can register commands or options

```js
const { cli } = acyort
```

**Register Command**

```js
// after registering the following command, you can run the `acyort config` command
acyort.cli.register('commands', {
    name: 'config', // command name
    fullName: 'configs', // full name of the command, for display
    description: 'Show config', // description
    action(argv) { // register action function
      // `argv` is the command line argument
      console.log('CLI arguments: ', argv, '\n')
    },
})
```

**Register Option**

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

You can view the currently registered commands or options by running `acyort` or `acyort -h` directly.

**important**

The APIs of context `this` variable can access `process` only

Detailed function definitions can be seen [method](/api/method/)
