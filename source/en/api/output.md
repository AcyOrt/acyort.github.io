---
category: API
---

This function is used to generate HTML file quickly and synchronously by specify template and data

```js
acyort.outputHTML({
  template: 'doc', // specify which template used, must be in the `layout` directory of `template`
  path: 'doc/index.html', // specify the output directory, which is the base directory of  website
  data: { title: 'acyort' }, // specify template data
  engine: 'swig', // optional, defaults `swig`, if you set another renderer, you must register it firstly
})
```

**custom helper function context**

Base on above example, when you register the helper function in the plugin, the function context `this` can access the specified template data

```js
acyort.helper.register('_test', function () {
  console.log(this) // output { title: 'acyort' }
})
```

**specify rendering engine**

If you want to use another template engine, like `ejs`, must register it in `renderer` firstly

```js
const ejs = require('ejs')

acyort.renderer.register('ejs', {
  render: ejs.render,
  renderFile: (file, data) => {
    const text = fs.readFileSync(file).toString()
    return ejs.render(text, data)
  }
})
```
