---
category: API
title: Store
order: 2
---

AcyOrt provides a store function for data storage, can be used for data sharing during runtime

```js
const { store } = acyort
```

store provides 4 methods

```js
store.set('key', { a: 1 }) // store a key named `key` with a value of { a: 1 }
store.get('key') // get the value named `key` with the result { a: 1 }
store.get('data key', 'plugin name') // get other plugin data, each plugin/script has its own namespace
store.reset() // clear values
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
      this.process() // run AcyOrt process
    },
  })

  acyort.workflow.register(function () {
    const argv = acyort.store.get('cli') // get `cli` values
  })
}
```
