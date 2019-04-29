---
title: Miscellaneous
---

This is about the development, and some plugins introduction of AcyOrt

## Development

Fork and Install modules

```bash
$ git clone git@github.com:acyortjs/acyort.git
$ cd acyort && npm i
```

### npm Scripts

For testing, the following scripts are built in

**flow**

Run the functions in order that registered in the workflow

```bash
$ npm run flow
```

**help**

Display all built in cli commands, including registered

```bash
$ npm run help
```

**version**

Display the environment

```bash
$ npm run version
```

**clean**

Clean generated files.

```bash
$ npm run clean
```

### test

Including test cases, coverage and code lint

```bash
$ npm t # lint and coverage test
$ npm run test:unit # unit test
$ npm run test:lint # code lint
$ npm run test:cover # coverage test
```

## Plugins/Utilities

Here are some plugins and utilities

- acyort-server (plugin) local LiveReload  server, for template development [acyort-server](https://github.com/acyortjs/acyort-server)
- acyort-toc (plugin) Markdown TOC helper [acyort-toc](https://github.com/acyortjs/acyort-toc)
- paginator (utility) Pagination [paginator](https://github.com/acyortjs/paginator)
