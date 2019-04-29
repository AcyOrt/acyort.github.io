---
category: API
title: API
order: 0
---

AcyOrt 默认作为一个全局命令行模块使用，即全局 CLI 方式使用

不过也支持作为一个 node 模块使用，以下是一个使用例子

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

> 那么何时应该使用命令行方式，又何时可以作为一个 node 模块使用呢？
>
> 其实两种方式都差不多，如果你的应用已经存在，只是想借用 AcyOrt 的一些能力，那么可以 node 插件方式使用
>
> 其他的还是推荐使用全局命令行方式，填写一些配置，使用一些插件就可以生成网站

AcyOrt 内置了许多 API 方法，以下为方法列表

### 文件操作

文件操作使用的是 [fs-extra](https://github.com/jprichardson/node-fs-extra)

```js
const { fs } = acyort
const { copySync, removeSync } = fs
```

### 程序版本

获取当前 AcyOrt 版本信息

```js
const { version } = acyort
```

### 配置信息

获取网站配置信息，即配置文件 `config.yml` 的内容

同时会获得当前运行的一些额外信息，基础路径，模板路径等

```js
const { config } = acyort
/*
{
  url: 'https://acyort.com',
  template: 'ccc45',
  scripts: [ 'script.js' ],
  plugins: [],
  public: '/',
  timezone: 'Asia/Shanghai',
  language: 'en',
  root: '/',
  base: '/Users/am0200/Documents/github/acyort/assets'
}
*/
```

### 输出信息

用于终端输出内容，使用的是 [signale](https://github.com/klaussinani/signale)

```js
const { logger } = acyort
logger.info('info')
logger.error('error')

// 同时支持自定义 https://github.com/klaussinani/signale#custom-loggers
const option = { ... }
const custom = logger(option)

custom.remind('Improve documentation.')
```

### 渲染器

内置 `swig`, `markdown`, `yaml` 的渲染输出，支持自定义渲染器。具体查看 [renderer](/api/renderer/) 说明

```js
const { renderer } = acyort
renderer.render('swig', { title: 'swig' })
renderer.renderFile('swig', 'html path', { title: 'swig' })
```

### 注册命令

通过这个方法，可以自定义一些 CLI 命令，详细查看 [cli](/api/cli/) 说明

```js
const { cli } = acyort
```

### 数据共享

用于插件间的数据传递，详细查看 [store](/api/store/) 说明

```js
const { store } = acyort
```

### 流程

该方法用于注册运行流程，可以自由控制整个构建过程，详细查看 [wordflow](/api/wordflow/) 说明

```js
const { workflow } = acyort
```

### 模板渲染函数

自定义一些函数用于模板使用，详细查看 [helper](/api/helper/) 说明

```js
const { helper } = acyort
```

### 工具/辅助类

提供一些工具/辅助类函数用于插件使用，详细查看 [util](/api/util) 说明

```js
const { util } = acyort
```
