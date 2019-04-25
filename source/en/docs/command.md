---
category: Getting Started
---

AcyOrt has the following CLI commands, and supports custom CLI commands.

### Built-in commands

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

**Workflow Process**

```bash
$ acyort flow
```

Execute the AcyOrt script process in order, see [workflow](/api/workflow/) for more detail

**Cleanup**

```bash
$ acyort clean
```

Clear generated static files, will not delete configuration files, like `git` etc.

### CLI Registration

Support for custom CLI commands, see [CLI](/api/cli/) for more detail
