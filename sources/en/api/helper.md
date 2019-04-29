---
category: API
title: Helper
order: 6
---

AcyOrt provides a helper API that can registers custom functions

```js
const { helper } = acyort
```

Register custom helper function

```js
acyort.helper.register('_test', function test() {
  return `<p>${acyort.version}</p>`
})
```

Use it on template

```html
<div>{{ _test() }}</div>
```

The custom function can access the context of the [variable](/docs/variable) `page` of the current template rendering.

```js
// output HTML, the data passed is { a: 1 }
acyort.outputHTML({
  template: 'index',
  path: 'index.html',
  data: { a: 1 },
})

// register helper function
acyort.helper.register('_test', function test() {
  // here `this` is the context `page`
  return '<p>${this.a}</p>'
})
```

```html
<!-- `index` template -->
{{ _test() }}
<!-- result is <p>1</p> -->
```
