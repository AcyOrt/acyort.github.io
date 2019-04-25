---
category: API
title: 数据存储
order: 1
---

AcyOrt 提供一个 store 函数用于数据存储，可以在运行过程中用于数据传递

```js
const { store } = acyort
```

store 函数提供 4 个方法

```js
store.set('key', { a: 1 }) // 存储一个名为 key，值为 { a: 1 }
store.get('key') // 获取名为 key 的值，结果为 { a: 1 }
store.get('字段名', '插件名') // 获取其他插件的数据，默认情况下，每个插件有自己的命名空间，存储数据不会混乱
store.reset() // 清空所有值
```

**例子**

用于 cli 与 workflow 之间的通信

```js
module.exports = (acyort) => {
  acyort.cli.register('options', {
    name: '--config',
    alias: '-c',
    description: 'Show config',
    action(argv) {
      acyort.store.set('cli', argv) // 存储 cli 参数
      this.process() // 执行 AcyOrt 的运行流程
    },
  })

  acyort.workflow.register(function () {
    const argv = acyort.store.get('cli') // 这里获取 cli 运行参数
  })
}
```
