---
category: API
title: 命令行
order: 2
---

此接口用于注册命令行，可以注册命令或者选项

AcyOrt 已经内置一些基础命令，具体查看 [命令](/docs/command/) 说明

可以通过直接运行 `acyort` 或者 `acyort -h` 获取当前注册的命令或者选项

### 注册命令

```js
// 注册以下命令后，可以运行 acyort config 命令
acyort.cli.register('commands', {
  name: 'config', // 命令名称
  fullName: 'configs', // 命令全名，用于展示
  description: 'Show config', // 描述
  action(argv) { // 注册执行函数
    // argv 为命令行参数
    console.log('CLI arguments: ', argv, '\n')
    console.log(acyort.config)
  },
})
```

### 注册选项

```js
// 注册以下选项后，可以运行 acyort -c 或者 acyort --config
acyort.cli.register('options', {
  name: '--config', // 全名
  alias: '-c', // 简写
  description: 'Show config', // 描述
  action(argv) {
    console.log(this) // 只能访问到 process 方法
    acyort.logger.log('CLI arguments: ', argv, '\n')
    acyort.logger.info(acyort.config)
  },
})
```

**注意**

cli 注册函数中 `this` 上下文变量能访问的方法只有 `process`

详细 API 函数可以查看 [API](/api/) 说明
