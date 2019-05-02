---
category: Customization
title: 插件
---

插件的使用都需要在配置文件 `config.yml` 注册，同时插件的开发也很方便

### 插件类型

有两种插件类型 `NPM 模块` 和 `script`

**script**

如果插件比较简单，可以将它放入 `scripts` 文件夹并且在 `config.yml` 注册

```yml
plugins:
 - scriptA.js
 - scriptB.js
```

**NPM 插件**

NPM 插件跟普通 node 模块一样，同样需要在 `config.yml` 注册

```yml
plugins:
 - moduleA
 - moduleB
```

### 插件写法

插件需要 `export` 一个函数，函数的变量为 `acyort`，你可以在函数里使用

```js
module.exports = (acyort) => {
  const { store, version, ... } = acyort
  // ...
}
```

插件有着丰富的 API 可以使用，具体 API 可以查看 [API](/api/) 说明
