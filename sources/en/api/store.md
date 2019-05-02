---
category: API
title: Store
---

AcyOrt provides a store function for data storage, can be used for plugins data sharing

```js
const { store } = acyort

store.set('key', { a: 1 }) // store a key named `key` with a value of { a: 1 }
store.get('key') // get the value named `key` with the result { a: 1 }
store.get('data key', 'plugin name') // get other plugin data, each plugin/script has its own namespace
store.reset() // clear current plugin values
```

**example**

Used for communication between `CLI` and `Workflow`

```js
module.exports = (acyort) => {
  acyort.cli.register('options', {
    name: '--config',
    alias: '-c',
    description: 'Show config',
    action(argv) {
      acyort.store.set('cli', argv) // store `cli`
      this.workflow.start() // run AcyOrt process
    },
  })

  acyort.workflow.register(function () {
    const argv = acyort.store.get('cli') // get `cli` values
  })
}
```
