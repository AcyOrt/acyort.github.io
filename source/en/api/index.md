---
category: API
---

AcyOrt is used by default as a global CLI mode, but it is also supported as a node module. This following is a usage example

```js
const acyort = require('acyort')

const config = {
  base: __dirname, // specify the base directory
  template: 'ccc45', // specify the template name
  language: 'en', // language
  root: '/', // website root directory
  timezone: 'UTC', // time zone
  public: '/' // file output root directory (relative to the base directory)
  url: 'https://acyort.com', // website URL
}

const ctx = acyort(config) // at this point `ctx` can access the APIs provided by AcyOrt
```

So when should I use it as CLI and when can I use it as a node module?

In fact, both methods are similar. If your application already exists and you just want to borrow some of AcyOrt's capabilities, you can use it as node plugin. Others still recommend using CLI, by filling some configuration, use some plugins to generate the website.

AcyOrt built-in numbers of APIs. See [API](/api/method/) for details.
