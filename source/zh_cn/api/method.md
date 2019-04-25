---
category: API
title: 内置方法
order: 1
---

AcyOrt 提供一些 API 方便插件使用，在插件中，你可以通过函数变量 `acyort` 获取这些 API

```js
// 插件代码
module.exports = (acyort) => {
  console.log(acyort) // 列出所有方法
}
```

不过，当你将 AcyOrt 作为一个 node [模块](/api/) 使用，那么你可以直接访问以下方法

### 文件操作

文件操作使用的是 `fs` 的 “加强版” [fs-extra](https://github.com/jprichardson/node-fs-extra)

```js
const { fs } = acyort
const { copySync, removeSync } = fs
```

### 程序版本

获取当前 AcyOrt 版本

```js
const { version } = acyort
```

### 配置信息

获取网站配置信息，即网站配置文件 `config.yml` 内容，同时会获得当前运行的一些额外路径信息等

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

### 终端输出

用于输出内容显示，使用的是 [logger](https://github.com/acyortjs/logger)

```js
const { logger } = acyort
logger.info('info')
logger.error('error')
```

### 渲染器

内置支持 `swig`, `markdown`, `yaml` 的渲染，还支持自定义渲染器。具体查看 [renderer](https://github.com/acyortjs/renderer)

```js
const { renderer } = acyort
renderer.render('swig', { title: 'swig' })
renderer.renderFile('swig', 'html path', { title: 'swig' })
```

### 命令行注册

通过这个方法，你可以自定义一些 cli 命令行，具体使用方式查看 [cli](/api/cli/)

```js
const { cli } = acyort
```

### 数据存储

用于插件间的数据传递，具体使用方式查看 [store](/api/store/)

```js
const { store } = acyort
```

### 流程注册

该方法用于注册这个运行流程，你可以自由控制整个运行流程，具体使用查看 [wordflow](/api/workflow/)

```js
const { workflow } = acyort
```

### 辅助函数

内置一些多语言，时间，路径函数，可以方便在模板中使用，同时可以自定义一些函数用于模板使用

- 内置函数使用可以查看 [这里](/docs/helper/)
- 自定义辅助函数看 [这里](/api/helper/)

```js
const { helper } = acyort
```

### 输出 HTML

内置一个用于根据模板，数据快速生成 HTML 文件函数，具体使用方式可以查看 [output](/api/output/)

```js
const { outputHTML } = acyort
```

### 静态文件处理

此函数用于复制模板中的 source 文件里面的资源文件到网站根目录

```js
const { copySource } = acyort
copySource() // 同步方式复制所以资源文件到网站根目录
```

### 流程运行

此函数用执行插件注册的函数，只能在命令行注册中的 action 函数上下文访问到，具体查看 [process](/api/process/)

```js
acyort.cli.register('options', {
  name: '--process',
  alias: '-p',
  description: 'processing',
  action(argv) {
    const { process } = this
  },
})
```
