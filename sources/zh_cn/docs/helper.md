---
category: Customization
title: 辅助函数
order: 6
---

内置一些辅助函数用于模版渲染，同时支持自定义辅助函数

### 内置函数

内置 4 个不能被自定义覆盖的辅助函数

> 以下辅助函数都是在 [工具/辅助类](/api/util/) 下的 `outputHTML` 中直接使用的
>
> 如果不使用 `outputHTML` 函数，访问这些辅助函数，需要通过 helper 的 `getHelper` 方法

```js
const { helper } = acyort
const _time = helper.getHelper('_time') // 参数为 helper 函数名字

_time(Date.now(), 'YYYY') // 2019
```

**URL 函数**

返回带根目录的 URL 路径

```html
{{ _url(path) }}

<!-- 例子, 假设当前根目录为 root -->
<p>{{ _url('path/to') }}</p> <!-- <p>/root/path/to</p> -->
<a href="{{ _url() }}">link</a> <!-- <a href="/root">link</a> -->
```

**时间函数**

时间格式化，根据时区，语言设置返回不同格式。详细查看 [Moment.js](http://momentjs.com/) 说明

```html
{{ _time(date, format) }}

<!-- 例子 -->
<p>{{ _time(Date.now(), 'YYYY') }}</p> <!-- <p>2019</p> -->
```

**多语言函数**

在模版中使用 `__` 或者 `_n` 用于多语言渲染，详细查看 [i18n](https://github.com/acyortjs/i18n) 说明

```html
{{ __(page.title) }}
{{ _n(page.posts) }}

<!-- 例子 -->

<!--
语言文件为以下 yaml

# i18n config yml
index:
  title: Home
posts:
  zero: No posts
  one: One post
  other: %d posts

-->

<p>{{ __('index.title') }}</p> <!-- <p>Home</p> -->
<p>{{ _n('posts', 3) }}</p> <!-- 3 posts -->
```

### 自定义函数

自定义辅助函数查看 [helper](/api/helper/) 说明
