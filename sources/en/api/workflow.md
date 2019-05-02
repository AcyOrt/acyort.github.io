---
category: API
title: Workflow
---

The running of AcyOrt is to execute the function registered in the workflow, so if there is no registered functions, the running will have no results

### Register

The `workflow` provides `register` method, which can register multiple functions

```js
function a() {
  console.log(acyort.version)
}
function b() {
  acyort.store.set('a', 1)
}
acyort.workflow.register(a, b)
// run acyort flow to execute the registered `a` and `b` function
```

**important**

This function cannot be used in the `action` function when registering `cli`

### Run Flow

Run the `workflow` method `start` function to execute the functions registing in plugins sequentially

```js
acyort.cli.register('command', {
  name: '--run',
  alias: '-r',
  description: 'Run the process',
  action(argv) {
    this.workflow.start() // start the flow
      .catch(e => console.log(e)) // Promise
  },
})
```

The running are strictly in order

```js
// workflow register
function a() {
  console.log('a')
  return new Promise((resolve) => {
    setTimeout(() => {
        resolve()
      }, 300)
    })
}

function b() {
  console.log('b')
}
acyort.workflow.register(a, b)
// run acyort flow, first output `a`, then output `b` after 300 ms
```

**important**

This function can only be used in the `this` context of the `action` function when registering `cli`
