---
category: Getting Started
title: 创建
order: 1
---

当安装好 AcyOrt，可以使用下面命令初始化一个网站

```bash
$ acyort init <folder>

# 或者
$ cd  <folder>
$ acyort init
```

初始化完成，网站文件夹为以下结构

```
.
├─ config.yml
├─ templates/
|   └─ ccc45/
├─ scripts/
```

**config.yml**

网站配置文件，查看 [配置](/docs/configuration/) 获取更多说明

**templates**

模板文件夹，网站所需要的 [模板](/docs/template/)

**scripts**

自定义脚本目录，用于存放 [插件](/docs/plugin/)
