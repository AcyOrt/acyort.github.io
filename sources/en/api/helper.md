---
category: API
title: Helper
---

AcyOrt provides a helper API that can registers custom functions, and access built-in helpers

Built-in helpers see [helper](/docs/helper/) for more

### Register

```js
// register a `_test` helper
acyort.helper.register('_test', function test() {
  return `<p>${acyort.version}</p>`
})
```

When use the `outputHTML` method under [util](/api/util/) to generate a page, you can access the function directly

```html
<!-- use it on template -->
<div>{{ _test() }}</div>
```

### Get

Provides `get` method to get the helper

```js
// get all
acyort.helper.get()
/*
{
  __: ...
  _n: ...
  _time: ...
  _url: ...
  test:
  ...
}
*/

// get one
acyort.helper.get('_time') // function _time() ...
```
