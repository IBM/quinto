import * as React from 'react';
import { render } from 'react-dom';
import { injectGlobal } from 'emotion';
import App from './App';

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

render(<App />, document.getElementById('root'));
