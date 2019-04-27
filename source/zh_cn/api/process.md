---
category: API
title: 运行流程
order: 5
---

运行流程函数 `process` 用于顺序执行插件注册的函数

```js
acyort.cli.register('options', {
  name: '--run',
  alias: '-r',
  description: 'Run the process',
  action(argv) {
    this.process() // 执行运行流程
  },
})
```

**顺序执行**

函数的执行顺序是根据插件注册函数的先后顺序，支持 Promise

```js
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

/*
** 执行 process 结果:
输出 b
等待 1000ms
输出 a
*/
```

**注意**

这个函数只能在注册 cli 时候的 action 函数中使用
