# Contributing

> Contributing guidelines for `quinto`.

This document is a work-in-progress (WIP).

## Getting Started

### Prerequisites

[node](https://nodejs.org/en/)(version >=10) and [yarn](https://yarnpkg.com/en/docs/install#mac-stable) are required to install and run this project.

### Install

Clone the repo to your local machine and install its dependencies.

```bash
git clone git@github.com:IBM/quinto.git
cd quinto
yarn install
```

### Develop

```bash
yarn develop
```

### Test

```bash
yarn test:tdd
```

## Coding style

This project uses prettier, TSLint and commitlint to enforce a uniform coding style.

Code formatting and linting are automatically run in husky git hooks (`pre-commit`, `pre-push`, `commit-msg`).
