// tslint:disable:object-literal-sort-keys
import { setup } from './setup';

describe('Cache', () => {
  it('does not cache element that does not have an id', () => {
    const html = `
      <div data-q='{}'>
        <div data-root='true'></div>
        <div id='root'></div>
      </div>
    `;

    setup({
      html,
      props: { dataAttribute: 'q', threshold: 20 },
      selector: '[data-root]',
      result: {
        data: {},
        depth: 1,
        element: html.trim()
      },
      cache: null
    });
  });

  it('does not cache element if its id is not unique', () => {
    const html = `
      <div data-q='{}'>
        <div id='root' data-root='true'></div>
        <div id='root'></div>
      </div>
    `;

    setup({
      html,
      props: { dataAttribute: 'q', threshold: 20 },
      selector: '[data-root]',
      result: {
        data: {},
        depth: 1,
        element: html.trim()
      },
      cache: null
    });
  });
});
