---
category: API
title: 模板渲染函数
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

### 获取辅助函数

提供一个 `get` 方法用于获取当前的辅助函数

```js
// 获取所有
acyort.helper.get()
/*
{
  __: ...
  _n: ...
  _time: ...
  _url: ...
  test:
  ...
}
*/

// 获取单个
acyort.helper.get('_time') // function _time() ...
```
