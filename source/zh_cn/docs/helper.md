---
category: Customization
title: 辅助函数
---

AcyOrt 内置一些辅助函数用于渲染模版使用，同时你可以自定义一些辅助函数用于模版渲染使用

### 内置函数

内置函数有 4 个，不能被自定义函数覆盖

**URL 函数**

返回带根目录的 URL 路径

```html
{{ _url(path) }}

<!-- 例子 -->
<p>{{ _url('path') }}</p> <!-- <p>/root/path</p> -->
<a href="{{ _url() }}">link</a> <!-- <a href="/">link</a> -->
```

**时间函数**

时间格式化， 时间参数可以是 unix time, ISO string, date object，会根据时区，语言设置变化。使用 [Moment.js](http://momentjs.com/)

```html
{{ _time(date, format) }}

<!-- 例子 -->
<p>{{ _time(Date.now(), 'YYYY') }}</p> <!-- <p>2018</p> -->
```

**多语言函数**

在模版中使用 `__` 或者 `_n` 用于翻译多语言文本，使用的是 [i18n](https://github.com/acyortjs/i18n)

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

自定义辅助函数可以参考 [helper](/api/helper/)
