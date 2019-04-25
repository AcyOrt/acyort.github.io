---
category: Customization
title: 变量
order: 5
---

网站模版可以使用一些变量，包括一些辅助函数

### 变量

内置变量，指能直接在模版里访问的变量 `config`, `page`

**网站配置**

变量 | 描述
-- | --
config.url | URL
config.timezone | 时区
config.language | 语言
config.template | 模板

还有其他设置在 `config.yml` 的变量都可以直接访问

**模板数据**

这个变量来源于渲染模板时候设置的 `data` 字段，详细方法查看 [这里](/api/output/)

例子：

```js
// 这里设置 data 变量为 { a: 1 }
acyort.outputHTML({
  template: 'category',
  path: 'category.html',
  data: { a: 1 },
})
```

那么，模板可以这样访问变量

```html
<!-- category.html -->
<p>{{ page.a }}</p>
<!-- 结果为 <p>1</p>  -->
```

### 辅助函数

模板可以访问 [辅助函数](/docs/helper/)，同时也可以访问 [自定义](/api/helper/) 函数

```html
<p>{{ _time(Date.now(), 'YYYY') }}</p>
```
