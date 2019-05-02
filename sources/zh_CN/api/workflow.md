---
category: API
title: 流程
---

AcyOrt 的运行过程就是执行注册到流程里的函数，所以如果没有注册流程函数，那么运行过程会没有任何结果

### 注册流程

提供一个 `register` 方法，可以同时注册多个流程函数

```js
function a() {
  console.log(acyort.version)
}
function b() {
  acyort.store.set('a', 1)
}
acyort.workflow.register(a, b)
// 运行 acyort flow，就会执行注册的 a，b 函数
```

**注意**

这个函数不能在注册 cli 时候的 action 函数中使用

### 运行流程

运行流程函数 `start` 用于顺序执行插件注册的函数

```js
acyort.cli.register('command', {
  name: '--run',
  alias: '-r',
  description: 'Run the process',
  action(argv) {
    this.workflow.start() // 执行运行流程
      .catch(e => console.log(e)) // Promise
  },
})
```

**顺序执行**

函数的执行顺序是根据插件注册函数的先后顺序，支持 Promise

```js
// 以下函数注册过程
function a() { console.log('a') }

function b() {
  console.log('b')
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
}

acyort.workflow.register(b, a)

// 执行 `start`

/*
输出 b
等待 1000ms
输出 a
*/
```

**注意**

这个函数只能在注册 cli 时候的 action 函数中的 `this` 上下文使用
