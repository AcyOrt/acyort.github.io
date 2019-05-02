---
category: Customization
title: 模板
---

使用 [swig](https://github.com/node-swig/swig-templates) 作为默认模版引擎

支持自定义模版引擎，详细查看 [renderer](/api/renderer/) 说明

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

### 模板注册

模板可以直接放在 `templates` 目录，或者使用 npm 包

默认会使用当前 `templates` 目录下的模板，如果找不到，就会寻找当前目录下的 npm 包

**npm 模板**

npm 模板也必须放到模块目录的 `templates` 下，然后 npm 的入口文件要指定 `template` 名字

以下为典型的 npm 模板例子

```
# 目录结构
.
├─ package.json # 包配置
├─ index.js # 主入口文件
└─ templates
    └─ ccc45 # 模板目录
```

```js
// package.json 定义
{
  "name": "npmTemplate",
  "version": "0.1.0",
  "main": "index.js"
}
```

```js
// 入口 index.js
module.exports.template = 'ccc45' // 不指定 template，这时候 template 会使用 npm 包名
module.exports = () => {
  // [可选] 其他插件逻辑
}
```
