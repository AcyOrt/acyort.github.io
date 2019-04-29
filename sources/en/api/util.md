---
category: API
title: Util
order: 6
---

Provides some utility methods for quickly building pages, which can be obtained by accessing `util`

```js
const { util } = acyort
```

### Source

This function is used to copy the resource files in the `source` folder in the template to the website root directory

```js
util.copySource() // sync
```

### output HTML

This function is used to specify the template, and the data, generates HTML files

```js
util.outputHTML({
  template: 'doc', // specify which template used, must be in the `layout` directory of `template`
  path: 'doc/index.html', // specify the output directory, which is the base directory of website
  data: { title: 'acyort' }, // specify template data
  engine: 'swig', // optional, defaults `swig`, if set another renderer, should register it firstly
})
```

Use this method to generate HTML, the variable that the template can access is

- `config`: website config `config.yml` detail, see [Configuration](/docs/configuration/) for more
- `page`: is the `data` variable passed by `outputHTML`
- helper functions: Specifically [Built-in](/docs/helper/) helper, and [Custom](/api/helper/) helper

The custom helper function can quickly access the `data` passed by `outputHTML` via the `this` context

```js
acyort.helper.register('_test', function () {
  console.log(this) // { title: 'acyort' }, the specified template data `data`
  return `<p>${this.title}</p>`
})
```

Template use example

```html
<!-- template -->
<div class="content">
  <h1>{{ page.title }}</h1>
  <a href="{{ config.url }}">index</a>
  {{ _test() }}
  <p>{{ _time(Date.now(), 'YYYY') }}</p>
</div>

<!-- result -->
<div class="content">
  <h1>acyort</h1>
  <a href="/">index</a>
  <p>acyort</p>
  <p>2019</p>
</div>
```
