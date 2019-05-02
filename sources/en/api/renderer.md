---
category: API
title: Renderer
---

AcyOrt use [renderer](https://github.com/acyortjs/renderer) for rendering

### Defaults

Built-in supports `yaml`，`swig`，`markdown` renders

- `yaml` use [js-yaml](https://github.com/nodeca/js-yaml)
- `swig` use [swig-templates](https://github.com/node-swig/swig-templates)
- `markdown` use [@acyort/markdown](https://github.com/acyortjs/markdown)

```js
const { renderer } = acyort

// default swig, yaml and markdown
renderer.render('swig', { title: 'swig' })
renderer.renderFile('swig', 'path/to/html', { title: 'swig' })

renderer.render('yaml', 'title: yaml')
renderer.renderFile('yaml', 'path/to/yaml')

renderer.render('markdown', '# h1')
renderer.renderFile('markdown', 'path/to/markdown')

// markdown supports code highlighting and math latex, and can set if show line numbers
renderer.renderFile('markdown', 'path/to/markdown', { lineNumbers: true })
```

### Customs

Register render engine

```js
// register ejs
const ejs = require('ejs')

renderer.register('ejs', {
  render: ejs.render,
  renderFile: (file, data) => {
    const text = fs.readFileSync(file).toString()
    return ejs.render(text, data)
  }
})
```
