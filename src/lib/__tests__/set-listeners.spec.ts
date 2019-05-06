import { setListeners } from '../set-listeners';

let map: $Override;

jest.useFakeTimers();

describe('Listeners', () => {
  beforeEach(() => {
    map = {};

    document.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  test('creates event listeners correctly', () => {
    const mockInstance = setup();

    setListeners.apply(mockInstance, [{ type: 'create' }]);
    expect(document.addEventListener).toHaveBeenCalledTimes(2);
    expect(mockInstance.targetElement).toHaveBeenCalledTimes(0);

    map.click({ target: document.createElement('div') }, 'onClick');
    expect(mockInstance.targetElement).toHaveBeenCalledTimes(1);

    map.click({ target: document.createElement('div') }, 'onMouseOver');
    jest.advanceTimersByTime(501);

    expect(mockInstance.targetElement).toHaveBeenCalledTimes(2);
  });

  test('destroys event listeners correctly', () => {
    const mockInstance = setup();

    setListeners.apply(mockInstance, [{ type: 'destroy' }]);
    expect(document.removeEventListener).toHaveBeenCalledTimes(2);
  });
});

function setup() {
  const mockInstance = {
    mounted: true,
    onScroll: jest.fn(),
    props: {
      debounce: 500,
      onClick: jest.fn(),
      onMouseOver: jest.fn()
    },
    targetElement: jest.fn()
  };

  return mockInstance;
}
