// tslint:disable:object-literal-sort-keys
import { setup } from './setup';

describe('No Element', () => {
  it('returns null if ancestor cannot be found', () => {
    setup({
      html: `
        <div>
          <div data-root="true"></div>
          <div id="root"></div>
        </div>
      `,
      props: { dataAttribute: 'q', threshold: 20 },
      selector: '[data-root]',
      result: {
        data: null,
        depth: 4,
        element: null
      },
      cache: null
    });
  });
});
