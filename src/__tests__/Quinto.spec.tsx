import * as listeners from '../lib/set-listeners';
import Quinto from '../Quinto';

describe('Quinto', () => {
  it('renders without crashing', () => {
    const quinto = new Quinto({
      dataAttribute: 'q',
      onClick: jest.fn(),
      paused: false,
      threshold: 100
    });
    global.checkEventListeners(1, 0);
    expect(quinto.props.dataAttribute).toEqual('q');
    expect(quinto.props.threshold).toEqual(100);
    expect(quinto.props.paused).toEqual(false);
    expect(quinto.props.onClick).toEqual(expect.any(Function));
  });

  it('sets the debounce value correctly', () => {
    const quinto = new Quinto({ debounce: 5000 });
    expect(quinto.props.debounce).toEqual(2000);
  });

  test('the `paused` prop has the correct behavior', () => {
    jest.spyOn(listeners, 'setListeners');

    document.body.innerHTML = `
        <div data-q="{}">
          <div id="root"></div>
        </div>
      `;

    const onClick = jest.fn();
    const onMouseOver = jest.fn();

    const quinto = new Quinto({ paused: false, onClick, onMouseOver });

    expect(onClick).not.toHaveBeenCalled();
    expect(onMouseOver).not.toHaveBeenCalled();

    const e = { target: document.getElementById('root') };
    // @ts-ignore
    quinto.targetElement(e, 'onClick');
    expect(onClick).toHaveBeenCalledTimes(1);

    expect((listeners.setListeners as any).mock.calls.length).toEqual(1);

    global.checkEventListeners(2, 0);
    quinto.pause(true);

    // @ts-ignore
    quinto.targetElement(e, 'onClick');
    expect(onClick).toHaveBeenCalledTimes(1);

    quinto.pause(false);

    // @ts-ignore
    quinto.targetElement(e, 'onClick');
    expect(onClick).toHaveBeenCalledTimes(2);

    quinto.destroy();
    expect((listeners.setListeners as any).mock.calls.length).toEqual(2);
    global.checkEventListeners(2, 2);
  });

  [
    {
      event: 'onClick'
    },
    {
      event: 'onMouseOver'
    }
  ].forEach(useCase => {
    test(`targetElement method – ${useCase.event}`, () => {
      document.body.innerHTML = `
        <div data-q="{}">
          <div id="root"></div>
        </div>
      `;

      const mockFn = jest.fn();
      const props = {
        [useCase.event]: mockFn
      };

      const quinto = new Quinto(props);

      // @ts-ignore
      jest.spyOn(quinto, 'targetElement');

      const e = { target: document.getElementById('root') };
      // @ts-ignore
      quinto.targetElement(e, useCase.event);
      // @ts-ignore
      expect(quinto.targetElement).toHaveBeenCalledTimes(1);
      expect(mockFn).toHaveBeenCalledTimes(1);
      expect(mockFn.mock.calls[0][0]).toEqual({
        data: expect.any(Object),
        depth: expect.any(Number),
        element: expect.any(HTMLElement)
      });
    });
  });
});
