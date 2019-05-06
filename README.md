# quinto

[![npm version](https://img.shields.io/npm/v/quinto.svg)](https://www.npmjs.com/package/quinto)
[![Build Status](https://travis-ci.com/IBM/quinto.svg?branch=master)](https://travis-ci.com/IBM/quinto)
[![dependencies Status](https://david-dm.org/ibm/quinto/status.svg)](https://david-dm.org/ibm/quinto)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> React utility library to capture imprecise user interactions in the DOM

## Motivation

`quinto` captures imprecise user interactions in the DOM. This library – currently implemented in React but portable to any framework – adds a single event listener to the document body for click and hover events. When an event is captured, the library walks the DOM until it finds a nearest ancestor assigned as a landmark, and associates it with the initially interacted element.

## Documentation

[API documentation](documentation/)

## Install

```bash
yarn add quinto
```

## Usage

```jsx
import Quinto from 'quinto';

render() {
  return <div>
    <Quinto onClick={this.handleClick} />

    <div data-q={JSON.stringify({ id: 'text' })}>
      <div><div><div>Text</div></div></div>
    </div>
  </div>
}

handleClick = (data) => {
  console.log(data);
  /**
   * {
   *  data: {
   *    id: 'text'
   *  },
   *  depth: 3,
   *  element: <div>Text</div>
   * }
   * */
}

```

## Example

To run the [example](example/), follow the steps listed in the subfolder [README](example/README.md).

## Running locally

**Install**

Clone the repo and run the following command:

```bash
yarn install
```

**Develop**

```bash
yarn start
```

**Build**

```bash
yarn build
```

## License

[Apache 2.0](LICENSE)
