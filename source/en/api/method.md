---
category: API
title: Method
order: 1
---

AcyOrt provides some APIs for plugins to use. In plugins, you can get these APIs via the function variable `acyort`

```js
// plugins
module.exports = (acyort) => {
  console.log(acyort) // list the APIs
}
```

However, when you use AcyOrt as a [module](/api/), you can access the following APIs directly

### File Operations

You can use [fs-extra](https://github.com/jprichardson/node-fs-extra)

```js
const { fs } = acyort
const { copySync, removeSync } = fs
```

### Version

Get AcyOrt version

```js
const { version } = acyort
```

### Config

Get the configuration information from `config.yml`, and get some extra path information, etc

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

### Log

Display information, use [logger](https://github.com/acyortjs/logger)

```js
const { logger } = acyort
logger.info('info')
logger.error('error')
```

### Renderer

Built-in support for `swig`, `markdown`, `yaml` renderer engines, supports custom renderers, check [renderer](https://github.com/acyortjs/renderer)

```js
const { renderer } = acyort
renderer.render('swig', { title: 'swig' })
renderer.renderFile('swig', 'html path', { title: 'swig' })
```

### Command-line interface

For customize CLI commands, check [cli](/api/cli/)

```js
const { cli } = acyort
```

### Store

Use for data sharing, check [store](/api/store/)

```js
const { store } = acyort
```

### Workflow

You can freely control the entire running process, check [wordflow](api/workflow/)

```js
const { workflow } = acyort
```

### Helper

Built-in multi-language, time and path functions, can be easily used in templates, and you can customize helper functions for template using

- Built-in functions, check [here](/docs/helper/)
- Custom helper function, check [here](/api/helper/)

```js
const { helper } = acyort
```

### Output HTML

Built-in function for quickly generating HTML files based on template and data, check [output](/api/output/)

```js
const { outputHTML } = acyort
```

### Source

This function is used to copy source files to the website root directory

```js
const { copySource } = acyort
copySource() // copy static files synchronously
```

### Process register

This function is use to executes the running process, and can only be accessed from the `action` function context in the command line registration, check [process](/api/process/)

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
