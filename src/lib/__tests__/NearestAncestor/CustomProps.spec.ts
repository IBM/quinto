// tslint:disable:object-literal-sort-keys
import { setup } from './setup';

describe('Custom Props', () => {
  it('returns the correct result', () => {
    setup({
      html,
      props: { dataAttribute: 'sig', threshold: 10 },
      selector: '#root',
      result: {
        data: {},
        depth: 4,
        element: html.trim()
      },
      cache: 'root'
    });
  });

  it('returns null if the threshold is too low', () => {
    setup({
      html,
      props: { dataAttribute: 'sig', threshold: 2 },
      selector: '#root',
      result: {
        data: null,
        depth: 2,
        element: `<div><div><div id='root'></div></div></div>`
      },
      cache: null
    });
  });
});

const html = `
  <div data-sig='{}'>
    <div><div><div><div id='root'></div></div></div></div>
  </div>
`;
