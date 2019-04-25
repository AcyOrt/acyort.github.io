---
category: Customization
---

It is easy to make AcyOrt plugin, plugin usage needs to be registered in the configuration file `config.yml`

### Plugin type

There are two plugin types, `npm module` and `script`

**Script**

If the plugin is simple, you can put it in the `scripts` folder and register it in `config.yml`

```yml
plugins:
 - scriptA.js
 - scriptB.js
```

**Plugin**

The NPM plugin is the same as the normal node module and also needs to be registered in `config.yml`

```yml
plugins:
 - moduleA
 - moduleB
```

### Plugin registration

The plugin needs `export` a function with `acyort` variable

```js
module.exports = (acyort) => {
  const { store, version } = acyort
  ...
}
```

The specific APIs you can check [method](/api/method/)
