---
category: API
title: 输出 HTML
order: 7
---

这个函数用于指定模板，数据快速生成 HTML 文件，生成方式为同步方式

```js
acyort.outputHTML({
  template: 'doc', // 指定当前使用哪个模板，该模板必须在 `template` 的 `layout` 目录下
  path: 'doc/index.html', // 指定输出目录，此目录为相对网站的基础目录
  data: { title: 'acyort' }, // 指定模板数据
  engine: 'swig', // 可选，默认为 swig，如果设置其他渲染器，必须先注册
})
```

**自定义辅助函数说明**

按照上面例子输出 HTML 文件时候，当你在插件中注册辅助函数的时候，辅助函数的上下文 `this` 能访问到指定的模板数据

```js
acyort.helper.register('_test', function () {
  console.log(this) // 输出 { title: 'acyort' }，即指定的模板数据
})
```

**指定其他渲染引擎**

如果想使用 `ejs` 之类的模板引擎，那必须在 `renderer` 先注册

```js
const ejs = require('ejs')

acyort.renderer.register('ejs', {
  render: ejs.render,
  renderFile: (file, data) => {
    const text = fs.readFileSync(file).toString()
    return ejs.render(text, data)
  }
})
```
