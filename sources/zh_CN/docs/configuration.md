---
category: Getting Started
title: 配置
---

配置文件 `config.yml` 包含以下主要配置，你可以自定义加上一些额外配置

```js
// 典型例子
{
  url: 'https://acyort.com',
  template: 'ccc45',
  plugins: [ 'script.js' ],
  public: '/',
  timezone: 'Asia/Shanghai',
  language: 'en',
  base: '/Users/am0200/Documents/github/acyort/assets',
  root: '/',
  templatePath: '/Users/am0200/Documents/github/acyort/assets/templates/ccc45'
}
```

**基础**

设置 | 描述
--- | ---
language | 网站语言，需要主题支持，默认是 `en`
timezone | 网站时区。默认使用当前时区。可用例子：`America/New_Yourk`, `Japan`, `UTC`
template | 网站主题，默认 `ccc45`
url | 网站 URL，格式 `http://<domain>/<path>` 或者 `https://<domain>`，会根据 URL 生成当前的根目录

**扩展**

插件的使用定义，详细查看 [插件](/docs/plugin/) 说明

设置 | 描述
--- | ---
plugins | npm 模块名称，或者 script 名字（script 需要把文件放入 scripts 文件夹）
