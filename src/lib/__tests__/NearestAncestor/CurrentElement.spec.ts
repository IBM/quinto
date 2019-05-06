// tslint:disable:object-literal-sort-keys
import { setup } from './setup';

describe('Current Element', () => {
  it('returns the correct result', () => {
    setup({
      html,
      props: { dataAttribute: 'q', threshold: 20 },
      selector: '#root',
      result: {
        data: {},
        depth: 0,
        element: html
      },
      cache: 'root'
    });
  });
});

const html = `<div id='root' data-q='{}'></div>`;
