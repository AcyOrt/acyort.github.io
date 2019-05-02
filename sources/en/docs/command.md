---
category: Getting Started
title: Command
---

AcyOrt has the following CLI commands, and supports custom CLI commands.

### Built-in

Built in basic commands, as well as some options

**initialization**

```bash
$ acyort init <folder>
```

Initialize a new website folder. You can initialize the current folder without entering the directory.

**Version**

```bash
$ acyort version
```

Display AcyOrt version, and current system information

**Workflow Runing**

```bash
$ acyort flow
```

Execute the registed scripts in order, see [workflow](/api/workflow/) for more detail

**Cleanup**

```bash
$ acyort clean
```

Clear generated static files, will not delete configuration files, like `git` etc.

```js
// Paths or files that will not be deleted
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

### Registration

Support for custom CLI commands, see [CLI](/api/cli/) for more detail
