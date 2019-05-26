---
title: 其他
---

这里说明 AcyOrt 的开发方式，以及一些插件介绍

## 插件

一些插件，以及网站例子

- [acyort-server](https://github.com/acyortjs/acyort-server) **本地 LiveReload 服务器，用于模板开发**
- [acyort-toc](https://github.com/acyortjs/acyort-toc) **根据 markdown 内容生成目录**
- [pigeon](https://github.com/acyortjs/pigeon) **博客插件**
- [am0200.com](https://github.com/LoeiFy/am0200) **网站**
- [acyort-donob-plugins](https://github.com/zWingz/acyort-donob-plugins) **博客插件**
)

## 开发

克隆项目并且安装相应模块

```bash
$ git clone git@github.com:acyortjs/acyort.git
$ cd acyort && npm i
```

### 开发脚本

为了方便测试，内置以下 npm scripts

**flow**

执行函数流程，将流程注册的函数按顺序运行

```bash
$ npm run flow
```

**help**

显示所有支持的 cli 命令，包括插件注册的 cli 命令

```bash
$ npm run help
```

**version**

简单显示当前环境版本

```bash
$ npm run version
```

**clean**

清除运行生成文件

```bash
$ npm run clean
```

### 单元测试

包含代码 lint，以及一些覆盖率测试

```bash
$ npm t # lint and coverage test
$ npm run test:unit # unit test
$ npm run test:lint # code lint
$ npm run test:cover # coverage test
```
