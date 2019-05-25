---
category: API
title: Hooks
---

AcyOrt provides `hooks` for some interaction between plugins, which is allowing plugins to provide API interfaces for other to use.

An example: a blog plugin, the user hope to add a special mark on the title of each article, follow the traditional practice, you can only make some modifications on the basis of the plugin to achieve the purpose

But with `hooks`, plugins can open provides interfaces at certain stages of the plugin, allowing external access to plugin, so that the special requirements above can be solved perfectly

Hooks consists of two parts

### Plugin provides hooks

Plugin provides hooks and run at specific times

```js
module.exports = async (acyort) => {
  const data = ... // get data progress

  // provide a hook named `special_hook_name` and pass in `data`, `other` parameter
  // support async
  await acyort.hooks.call('special_hook_name', data, other)

  // data may be modified by others
  acyort.store.set('data', data)
}
```

### Access the hooks

External can get data through hooks and do some processing

```js
module.exports = async (acyort) => {
  // Use tap to access the hook provided by the plugin. Parameters is be provided by the plugin hooks, and some data modification can be performed
  acyort.hooks.tap('special_hook_name', (data, other) => {
    data.name = 'aksdj4' // change origin data
    ...

    return new Promise(...) // Promise
  })
}
```

**important**

- Hooks cannot be accessed repeatedly and will be overwritten
- The data that is usually modified is `reference` data, and will not receive return datas, but if it is asynchronous, should return `Promise`
