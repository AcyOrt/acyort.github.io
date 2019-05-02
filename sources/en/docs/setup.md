---
category: Getting Started
title: Setup
---

When AcyOrt is installed, you can use the following command to initialize new website

```bash
$ acyort init <folder>

# or
$ cd  <folder>
$ acyort init
```

When initialization is complete, the website folder is the following structure

```
.
├─ config.yml
├─ templates/
|   └─ ccc45/
├─ scripts/
```

**config.yml**

Website configuration file, see [configuration](/docs/configuration/) for more instructions

**templates**

Template folder, see [template](/docs/template/) for more instructions

**scripts**

Custom script directory, see [plugin](/docs/plugin/) for more instructions
