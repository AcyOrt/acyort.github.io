---
category: API
title: API
---

AcyOrt 默认作为一个全局命令行模块使用，即 cli 方式使用，不过也支持作为一个 node 模块使用，以下是一个使用例子

```js
const acyort = require('acyort')

const config = {
  base: __dirname, // 指定模版，输出基础目录
  template: 'ccc45', // 指定模板名字
  language: 'en', // 语言
  root: '/', // 网站根目录
  timezone: 'UTC', // 时区
  public: '/' // 文件输出根目录（相对于基础目录）
  url: 'https://acyort.com', // 网站 URL
}

const ctx = acyort(config) // 此时 ctx 就能访问到所以 AcyOrt 提供的方法
```

那么何时应该使用命令行方式，又何时可以作为一个 node 模块使用呢？

其实两种方式都差不多，如果你的应用已经存在，只是想借用 AcyOrt 的一些能力，那么可以 node 插件方式使用。其他的还是推荐使用全局命令行方式，填写一些配置，使用一些插件就可以生成网站

AcyOrt 内置了许多 API 方法，具体查看 [API](/api/method/)
