---
category: API
title: Helper
order: 5
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

### Set language

Set the language currently in use, including the [Moment.js](http://momentjs.com/)

```js
acyort.helper.language = 'zh-cn'
```

### Get language

```js
console.log(acyort.helper.language) // 'en'
``
