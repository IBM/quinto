# quinto

[![NPM](https://img.shields.io/npm/v/quinto.svg?color=blue)](https://npmjs.com/package/quinto)
[![Build Status](https://travis-ci.com/IBM/quinto.svg?branch=master)](https://travis-ci.com/IBM/quinto)

> Tiny utility library to capture imprecise user interactions in the DOM.

Quinto captures imprecise user interactions in the DOM by adding an event listener to the document body for `click` and `mouseover` event types. When an event is captured, the library walks the DOM until it finds the first nearest ancestor assigned as a landmark.

The purpose is to reduce the boilerplate in assigning event handlers to individual elements.

## [Docs](docs/) · [Changelog](CHANGELOG.md) · [Contributing](CONTRIBUTING.md)

## Install

```bash
yarn add quinto
```

## Usage

The library is currently implemented in React and vanilla JavaScript.

**React**

The default import is the React implementation.

```jsx
import * as React from 'react';
import Quinto from 'quinto';

class App extends React.Component {
  render() {
    return (
      <div>
        <Quinto onClick={this.handleClick} />
        <div data-q={JSON.stringify({ id: 'text' })}>
          <div>
            <div>
              <div>Text</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleClick = data => {
    // clicking on <div>Text</div>
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
  };
}
```

**Vanilla**

For the vanilla implementation, import the library as such:

```js
import { Quinto } from 'quinto';

const quinto = new Quinto({
  onClick: data => {
    console.log(data);
  }
});
```

## Example

To run the [examples](examples/), follow the steps listed in the subfolder [README](examples/README.md).

## License

[Apache 2.0](LICENSE)
