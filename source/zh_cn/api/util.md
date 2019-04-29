---
category: API
title: 辅助/工具类
order: 6
---

提供一些实用函数方法用于快速构建页面，可以通过访问 `util` 获取

```js
const { util } = acyort
```

### 静态文件处理

此函数用于将模板中的 `source` 文件夹里面的资源文件复制到网站根目录

```js
util.copySource() // 同步方式
```

### 输出 HTML

这个函数用于指定模板，数据同步方式生成 HTML 文件

```js
util.outputHTML({
  template: 'doc', // 指定当前使用哪个模板，该模板必须在 `template` 的 `layout` 目录下
  path: 'doc/index.html', // 指定输出目录，此目录为相对网站的基础目录
  data: { title: 'acyort' }, // 指定模板数据
  engine: 'swig', // 默认为 swig，如果设置其他渲染器，必须先注册
})
```

使用此方式生成 HTML，模版能访问到的变量为以下

- `config` 变量：为网站配置文件 `config.yml` 里面的设置内容，详细查看 [配置](/docs/configuration/) 说明
- `page` 变量：此变量为 `outputHTML` 传递的 `data` 变量
- 辅助函数：具体为 [内置](/docs/helper/) 辅助函数，以及 [自定义](/api/helper/) 辅助函数

其中自定义辅助函数可以通过 `this` 上下文快速访问到 `outputHTML` 传递的 `data` 变量

```js
acyort.helper.register('_test', function () {
  console.log(this) // 输出 { title: 'acyort' }，即指定的模板数据 `data`
  return `<p>${this.title}</p>`
})
```

以下为一个模板使用例子

```html
<!-- 模板内容 -->
<div class="content">
  <h1>{{ page.title }}</h1>
  <a href="{{ config.url }}">index</a>
  {{ _test() }}
  <p>{{ _time(Date.now(), 'YYYY') }}</p>
</div>

<!-- 输出结果 -->
<div class="content">
  <h1>acyort</h1>
  <a href="/">index</a>
  <p>acyort</p>
  <p>2019</p>
</div>
```
