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

按顺序执行 AcyOrt 脚本流程，相关自定义流程看 [这里](/api/workflow/)

**文件清理**

```bash
$ acyort clean
```

清除生成的一些静态文件，不会删除配置文件，git 之类的文件

### 注册 CLI 命令

支持自定义控制命令，运行在插件上使用。具体查看 [这里](/api/cli/)
