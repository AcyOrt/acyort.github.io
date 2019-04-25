---
category: API
---

Process function use for execute the functions sequentially that be registered in `plugins`

```js
acyort.cli.register('options', {
  name: '--config',
  alias: '-c',
  description: 'Show config',
  action(argv) {
    this.process() // execute AcyOrt process
  },
})
```

**Sequential**

The functions are executed sequentially which is based on the scripts register order, supports `Promise`

```js
function a() { console.log(a) }

function b() {
  console.log(b)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
}

acyort.workflow.register(b, a)

/*
** results:
output `b`
waiting for 1000ms
output `a`
*/
```

**important**

The `process` function can only be accessed in the `action` function in CLI registering
