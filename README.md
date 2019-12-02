# quinto

[![NPM][npm]][npm-url]
[![Build][build]][build-badge]
[![Coverage][codecov-shield]][codecov]

> Utility to capture imprecise user interactions in the DOM.

Quinto adds an event listener to the document body for `click` and `mouseover` event types. When an event is captured, the library walks the DOM until it finds the first nearest ancestor assigned as a landmark.

The purpose is to reduce boilerplate in assigning event handlers to individual elements.

## Install

```bash
yarn add quinto
```

## Usage

The library is currently implemented in React and vanilla JavaScript.

### React

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

### Vanilla

```js
import { Quinto } from 'quinto';

const quinto = new Quinto({
  onClick: data => {
    console.log(data);
  }
});
```

## Documentation

See [docs](docs/) for API documentation.

## [Examples](examples/)

## [Changelog](CHANGELOG.md)

## Contributing

See the [contributing guidelines](CONTRIBUTING.md).

## License

[Apache 2.0](LICENSE)

[npm]: https://img.shields.io/npm/v/quinto.svg?color=blue
[npm-url]: https://npmjs.com/package/quinto
[build]: https://travis-ci.com/ibm/quinto.svg?branch=master
[build-badge]: https://travis-ci.com/ibm/quinto
[codecov]: https://codecov.io/gh/ibm/quinto
[codecov-shield]: https://img.shields.io/codecov/c/github/ibm/quinto.svg
