---
category: API
title: Workflow
order: 5
---

The operation of AcyOrt is to execute the function registered in the workflow, so if there is no registered functions, the running will have no results

```js
const { workflow } = acyort
```

The workflow function only provides `register` function, which can register multiple functions

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

The running process are strictly in order, and the default `scripts` registered functions are higher priority than the functions registered by `plugins`

```js
// support Promise
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
