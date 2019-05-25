---
category: API
title: 钩子函数
---

AcyOrt 提供钩子函数 `hooks` 用于插件间的一些交互，相当于说允许插件提供 API 接口供其他插件使用

假设场景：一个博客网站插件，使用者有个特殊需求，希望在每篇文章标题上加同一个特殊标记，如果按照传统做法，只能在插件基础上做一些修改达到目的

但是有了 `hooks`，插件开发者可以在插件的某些阶段开放一些接口，允许外部访问插件数据，那么就可以完美解决上面的特殊需求问题了

钩子 `hooks` 由两部分构成

### 插件提供钩子

插件在某些特定时候提供钩子运行

```js
module.exports = async (acyort) => {
  const data = ... // 数据的一些获取过程

  // 提供一个名为 `special_hook_name` 的钩子，并传入 `data`, `other` 参数调用
  // hooks 是支持 async 的
  await acyort.hooks.call('special_hook_name', data, other)

  // 这时候 data 可能被外部做一些修改了
  acyort.store.set('data', data)
}
```

### 通过钩子访问

外部可以通过钩子获取数据并做一些处理

```js
module.exports = async (acyort) => {
  // 通过 tap 来访问插件提供的 hook，函数参数为插件提供的数据，可以进行一些数据修改
  acyort.hooks.tap('special_hook_name', (data, other) => {
    data.name = 'aksdj4' // 修改数据
    ...

    return new Promise(...) // 支持 Promise
  })
}
```

**注意点**

- 钩子不能重复访问，会覆盖
- 通常修改的数据是 `引用` 数据，不会接收返回数据，但如果是异步，要返回 Promise
