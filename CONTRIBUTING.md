# Contributing

## Prerequisites

For MacOS, prerequisites include [homebrew](https://docs.brew.sh/Installation), [node](https://nodejs.org/en/download/package-manager/#macos) and [yarn](https://yarnpkg.com/en/docs/install#mac-stable).

```bash
# installs homebrew
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

# installs both yarn and node (if node is not already installed)
brew install yarn
```

---

## Getting Started

### Install

Fork the repository and clone your fork:

```bash
git clone git@github.com:<USER_ID>/quinto.git
cd quinto/
```

Set the original repo as the upstream:

```bash
git remote add upstream git@github.com:IBM/quinto.git
# verify that the upstream is set
git remote -v
```

Install the project dependencies:

```
yarn install
```

Create a local branch:

```bash
git checkout -b feature
```

### Develop

```
yarn develop
```

### Test

Run the tests in Test-driven Development (TDD) mode:

```
yarn test:tdd
```

### Coding Style

This project uses prettier, TSLint and commitlint to enforce a uniform coding style.

Code formatting and linting are automatically run in husky git hooks (`pre-commit`, `pre-push`, `commit-msg`).

## Submitting a Pull Request

### Sync Your Fork

Before submitting a pull request, make sure your fork is up to date with the latest upstream changes.

```bash
git fetch upstream
git checkout master
git merge upstream/master
```

### Submit a PR

After you've pushed your changes to remote, submit your PR. Make sure you are comparing `<YOUR_USER_ID>/feature` to `origin/master`.
