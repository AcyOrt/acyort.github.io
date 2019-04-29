---
category: Customization
title: Template
order: 4
---

AcyOrt uses [swig](https://github.com/node-swig/swig-templates) as the default template engine

You can customize the template engine by registering [renderer](https://github.com/acyortjs/renderer)

### Template structure

Template usually have the following file structure

```
.
├─ layout
├─ i18n
└─ source
```

**layout**

Template file, file suffix is `.html`

**i18n**

Language file. YAML configuration files

**source**

Put the website resource files (such as CSS, JavaScript) here

### Template introduction

Templates can be placed directly in the `templates` directory, or using the npm package. AcyOrt will use the template in the current `templates` directory by default. If not found, it will look for the npm package

**npm template development**

The template must be placed under `templates` in the directory, and the npm entry should specify the `template` name

npm template directory structure

```
.
├─ package.json # npm config
├─ index.js # main entry
└─ templates
    └─ ccc45 # template
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
// entry: index.js
module.exports.template = 'ccc45' // if no set `template` value, `template` will use npm package name
```
