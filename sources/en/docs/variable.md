---
category: Customization
title: Variable
order: 5
---

Templates can use variables, including helper functions

### Variable

Built-in variables, which are variables `config`, `page` that can be accessed directly in the template

**Configuration**

Variable | Description
-- | --
config.url | URL
config.timezone | time zone
config.language | language
config.template | template

And other variables set in `config.yml` that can be accessed directly

**Template data**

The variable is derived from the `data` field set when the template is rendered, check [output](/api/output/)

example:

```js
// set the data variable { a: 1 }
acyort.outputHTML({
  template: 'category',
  path: 'category.html',
  data: { a: 1 },
})
```

Then the template can access the variable like this

```html
<!-- category.html -->
<p>{{ page.a }}</p>
<!-- result is <p>1</p>  -->
```

### Helper function

Template can access [helper](/docs/helper/) functions, also can access [custom](/api/helper/) functions

```html
<p>{{ _time(Date.now(), 'YYYY') }}</p>
```
