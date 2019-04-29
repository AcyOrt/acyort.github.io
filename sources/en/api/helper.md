---
category: API
title: Helper
order: 5
---

AcyOrt provides a helper API that can registers custom functions, and access built-in helpers

Built-in helpers see [helper](/docs/helper/) for more

**Register helper**

```js
// register a `_test` helper
acyort.helper.register('_test', function test() {
  return `<p>${acyort.version}</p>`
})
```


```html
<!-- use it on template -->
<div>{{ _test() }}</div>
```
