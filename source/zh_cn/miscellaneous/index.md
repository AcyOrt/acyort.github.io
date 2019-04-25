---
title: 其他
---

这里说明一下 AcyOrt 的开发方式，以及当前存在的一些插件介绍

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

## 插件/工具

这里列出一些插件，以及一些助手 npm 模块

- LiveReload（插件） 本地服务器，用于模板开发 [acyort-server](https://github.com/acyortjs/acyort-server)
- Toc Helper（插件） 根据 markdown 内容生成目录 [acyort-toc](https://github.com/acyortjs/acyort-toc)
- Pagination utilities（工具） 分页工具 [paginator](https://github.com/acyortjs/paginator)
