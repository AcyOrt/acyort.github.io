---
category: Getting Started
title: 命令
order: 3
---

AcyOrt 内置以下控制台命令可以使用，同时支持自定义控制台命令

### 内置命令

内置一些基础命令，以及一些选项

**初始化**

```bash
$ acyort init <folder>
```

初始化一个新的网站文件夹. 你也可以初始化在当前文件夹，不输入目录即可

**版本信息**

```bash
$ acyort version
```

显示当前 AcyOrt，系统的一些版本信息

**构建流程**

```bash
$ acyort flow
```

按顺序执行 AcyOrt 插件注册函数流程，详细查看 [流程](/api/workflow/) 说明

**文件清理**

```bash
$ acyort clean
```

清除生成的一些静态文件，不会删除配置文件，git 之类的配置文件

```js
// 不会删除的路径或者文件
[
  'templates',
  'scripts',
  'config.yml',
  'CNAME',
  'README.md',
  'LICENSE',
  '.gitignore',
  'package.json',
  'package-lock.json',
  'node_modules',
  '.git',
]
```

### 注册 CLI 命令

支持自定义命令，详细查看 [CLI](/api/cli/) 说明
