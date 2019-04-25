---
category: Customization
title: 模板
---

AcyOrt 使用 [Swig](https://github.com/node-swig/swig-templates) 作为默认模版引擎.

你可以自定义模版引擎通过注册 [renderer](https://github.com/acyortjs/renderer)

### 模板结构

模板通常有如下文件结构

```
.
├─ layout
├─ i18n
└─ source
```

**layout**

模板文件, 文件后缀为 `.html`

**i18n**

语言文件. 为 YAML 配置文件.

**source**

将网站需要的资源文件 (例如 CSS，JavaScript) 放到这里

### 模板引入

模板可以直接放在 `templates` 目录，或者使用 npm 包，AcyOrt 默认会使用当前 `templates` 目录下的模板，如果找不到，就会寻找当前的 npm 包

**npm 模板开发**

模板必须放到目录的 `templates` 下，然后 npm 的入口文件要指定 `template` 名字

npm 模板的目录结构

```
.
├─ package.json # 包配置
├─ index.js # 主入口文件
└─ templates
    └─ ccc45 # 模板目录
```

```js
// package.json
{
  "name": "npmTemplate",
  "version": "0.1.0",
  "main": "index.js"
}
```

```js
// 入口 index.js
module.exports.template = 'ccc45' // 不指定 template，这时候 template 会使用 npm 包名
```
