---
category: Getting Started
title: Configuration
order: 2
---

The configuration file `config.yml` contains the following main configuration, you can customize some configuration if needs

```js
// example
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

**basic**

Settings | Description
--- | ---
language | Website language, requires theme support, default is `en`
timezone | Website time zone. Default is current time zone. Examples: `America/New_Yourk`, `Japan`, `UTC`
template | Website template, default is `ccc45`
url | Website URL, format like `http://<domain>/<path>` or `https://<domain>`. It will generate the current root directory based on the URL

**extension**

The definition of the use of the plugin, see [plugin](/docs/plugin/) for more detail

Settings | Description
--- | ---
plugins | npm module name or script name (script should be placed in scripts folder)
