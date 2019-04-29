---
category: API
title: API
order: 0
---

AcyOrt is used by default as a global CLI mode

But it is also supported as a node module. This following is a usage example

```js
const acyort = require('acyort')

const config = {
  base: __dirname, // specify the base directory
  template: 'ccc45', // specify the template name
  language: 'en', // language
  root: '/', // website root directory
  timezone: 'UTC', // time zone
  public: '/' // file output root directory (relative to the base directory)
  url: 'https://acyort.com', // website URL
}

const ctx = acyort(config) // at this point `ctx` can access the APIs provided by AcyOrt
```

> So when should I use it as CLI and when can I use it as a node module?
>
> In fact, both methods are similar. If your application already exists and you just want to borrow some of AcyOrt's capabilities, you can use it as node plugin
>
> Others still recommend using CLI, by filling some configuration, use some plugins to generate the website.

AcyOrt built-in numbers of APIs

### File Operations

Use [fs-extra](https://github.com/jprichardson/node-fs-extra)

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

Get the configuration information from config.yml, and get some extra path information, etc

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

Display information, use [signale](https://github.com/klaussinani/signale)

```js
const { logger } = acyort
logger.info('info')
logger.error('error')

// custom supports https://github.com/klaussinani/signale#custom-loggers
const option = { ... }
const custom = logger(option)

custom.remind('Improve documentation.')
```

### Renderer

Built-in support for `swig`, `markdown`, `yaml` renders, supports custom renderers, check [renderer](/api/renderer/) for more

```js
const { renderer } = acyort
renderer.render('swig', { title: 'swig' })
renderer.renderFile('swig', 'html path', { title: 'swig' })
```

### Command-line interface

For customize CLI commands, check [cli](/api/cli/) for more

```js
const { cli } = acyort
```

### Store

Use for data sharing, check [store](/api/store/) for more

```js
const { store } = acyort
```

### Workflow

You can freely control the running, check [wordflow](/api/wordflow/) for more

```js
const { workflow } = acyort
```

### Helper

Helper functions can be easily used in templates, and you can customize helper functions for template using, check [helper](/api/helper/) for more

```js
const { helper } = acyort
```

### Util

Provides some tool/util functions for plugin use, check [util](/api/util) for more

```js
const { util } = acyort
```
