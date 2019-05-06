# quinto

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> React utility library to capture imprecise user interactions in the DOM

## Motivation

Capturing user interactions with a webpage is a foundational aspect of usage analytics. A common approach to recording click and hover events is to assign identifiers to HTML elements in the Document Object Model (DOM). When the element is interacted with, metadata associated with the identifier is retrieved. However, with multiple layers of nested elements, capturing an event on the exact HTML element is imprecise because a child element of a landmark element that is clicked would not match the identifier. To avoid attaching an event listener to every node – which negatively impacts performance – the solution is to traverse the DOM tree until an ancestor element containing an identifier is reached.

This library – currently implemented in React but portable to any framework – adds a single event listener to the document body for click and hover events. When an event is captured, the library walks the DOM until it finds a nearest ancestor assigned as a landmark, and associates it with the initially interacted element.

## Usage

[API documentation](documentation/)

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

Apache 2.0
