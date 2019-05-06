import * as React from 'react';
import { mount } from 'enzyme';
import Quinto, { IQuintoState } from '../Quinto';
import * as listeners from '../lib/set-listeners';

describe('Quinto', () => {
  beforeEach(() => {
    jest.spyOn(listeners, 'setListeners');
  });

  it('renders without crashing', () => {
    const wrapper = mount(<Quinto onClick={jest.fn()} />);

    global.checkEventListeners(1, 0);
    expect(wrapper.isEmptyRender()).toEqual(true);
  });

  it('sets the debounce value correctly', () => {
    const wrapper = mount(<Quinto debounce={5000} />);

    const state = wrapper.state() as IQuintoState;
    expect(state.debounce).toEqual(2000);
  });

  test('the `paused` prop has the correct behavior', () => {
    const wrapper = mount(
      <Quinto paused={false} onClick={jest.fn()} onMouseOver={jest.fn()} />
    );

    expect((listeners.setListeners as any).mock.calls.length).toEqual(1);

    global.checkEventListeners(2, 0);
    wrapper.setProps({ paused: true });

    wrapper.setProps({ paused: false });

    wrapper.unmount();
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

      const wrapper = mount(<Quinto {...props} />);
      const instance = wrapper.instance() as Quinto;

      // @ts-ignore
      jest.spyOn(instance, 'targetElement');

      const e: $Override = { target: document.getElementById('root') };
      // @ts-ignore
      instance.targetElement(e, useCase.event);
      // @ts-ignore
      expect(instance.targetElement).toHaveBeenCalledTimes(1);
      expect(mockFn).toHaveBeenCalledTimes(1);
      expect(mockFn.mock.calls[0][0]).toEqual({
        data: expect.any(Object),
        depth: expect.any(Number),
        element: expect.any(HTMLElement)
      });
    });
  });
});
