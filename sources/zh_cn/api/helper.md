---
category: API
title: 模板渲染函数
order: 5
---

AcyOrt 提供一个 `helper` 方法，除了能够访问内置的辅助渲染函数外，还可以注册一些自定义的函数

内置函数可以查看 [helper](/docs/helper/) 说明

### 注册函数

```js
// 注册一个自定义函数 `_test`
acyort.helper.register('_test', function test() {
  return `<p>${acyort.version}</p>`
})
```

当使用 [工具/辅助类](/api/util/) 下的 `outputHTML` 方法生成页面时候，可以直接访问函数

```html
<!-- 模板页面使用 -->
<div>{{ _test() }}</div>
```

### 设置语言

设置当前使用的语言，包括时间函数 [Moment.js](http://momentjs.com/) 的语言

```js
acyort.helper.language = 'zh-cn'
```

### 获取语言

```js
console.log(acyort.helper.language) // 'en'
```
