---
category: API
title: 渲染器
order: 1
---

渲染器使用的是 [renderer](https://github.com/acyortjs/renderer)

### 默认支持

内置支持 `yaml`，`swig`，`markdown` 渲染输出

- `yaml` 使用的是 [js-yaml](https://github.com/nodeca/js-yaml)
- `swig` 使用的是 [swig-templates](https://github.com/node-swig/swig-templates)
- `markdown` 使用的是 [@acyort/markdown](https://github.com/acyortjs/markdown)

```js
const { renderer } = acyort

// 内置支持 swig, yaml and markdown
renderer.render('swig', { title: 'swig' })
renderer.renderFile('swig', 'path/to/html', { title: 'swig' })

renderer.render('yaml', 'title: yaml')
renderer.renderFile('yaml', 'path/to/yaml')

renderer.render('markdown', '# h1')
renderer.renderFile('markdown', 'path/to/markdown')

// markdown 渲染支持 代码高亮/数学公式，同时可以设定是否显示代码行号
renderer.renderFile('markdown', 'path/to/markdown', { lineNumbers: true })
```

### 自定义

使用 `register` 自定义渲染器

```js
// 支持 ejs
const ejs = require('ejs')

renderer.register('ejs', {
  render: ejs.render,
  renderFile: (file, data) => {
    const text = fs.readFileSync(file).toString()
    return ejs.render(text, data)
  }
})
```
