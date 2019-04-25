---
category: API
title: 自定义函数
---

AcyOrt 提供一个 helper 方法，除了能够访问内置的辅助函数外，还可以注册一些自定义的函数

```js
const { helper } = acyort
```

自定义模板渲染复制函数的注册也很简单

```js
acyort.helper.register('_test', function test() {
  return `<p>${acyort.version}</p>`
})
```

然后就可以在模板页面使用了

```html
<div>{{ _test() }}</div>
```

同时自定义函数能够访问到当前模板渲染的 [变量](/docs/variable/) `page` 的上下文

```js
// 输出页面，传递的数据 data 为 { a: 1 }
acyort.outputHTML({
  template: 'index',
  path: 'index.html',
  data: { a: 1 },
})

// 注册辅助函数
acyort.helper.register('_test', function test() {
  // 这里的 this 就是上下文变量 page
  return '<p>${this.a}</p>'
})
```

```html
<!-- index 模板，直接输出辅助函数返回内容 -->
{{ _test() }}
<!-- 结果为 <p>1</p> -->
```
