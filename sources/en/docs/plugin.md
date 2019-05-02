---
category: Customization
title: Plugin
---

It is easy to make AcyOrt plugin, plugin usage needs to be registered in the configuration file `config.yml`

### Types

There are two plugin types, `NPM` module and `script`

**script**

If the plugin is simple, you can put it in the `scripts` folder and register it in `config.yml`

```yml
plugins:
 - scriptA.js
 - scriptB.js
```

**NPM**

The NPM plugin is the same as the normal node module and also needs to be registered in `config.yml`

```yml
plugins:
 - moduleA
 - moduleB
```

### Registration

The plugin needs `export` a function with `acyort` variable

```js
module.exports = (acyort) => {
  const { store, version } = acyort
  //...
}
```

The specific APIs you can check [API](/api/)
