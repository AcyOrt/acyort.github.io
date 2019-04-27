---
category: API
title: 注册流程
order: 4
---

AcyOrt 的运行过程就是执行注册到流程里的函数，所以如果没有注册流程函数，那么运行过程会没有任何结果

```js
const { workflow } = acyort
```

workflow 函数只提供一个 register 方法，可以同时注册多个流程函数

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

流程函数是严格按照注册顺序执行的

```js
// 支持 Promise
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
// 运行 acyort flow，先输出内容为 a，然后 300 毫秒后输出 b
```
