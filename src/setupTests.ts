import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

declare global {
  namespace NodeJS {
    // tslint:disable-next-line: interface-name
    interface Global {
      checkEventListeners: (
        addEventListenerCalled: number,
        removeEventListenerCalled: number
      ) => void;
    }
  }
}

configure({ adapter: new Adapter() });

global.checkEventListeners = (add, remove) => {
  expect(document.addEventListener).toHaveBeenCalledTimes(add);
  expect(document.removeEventListener).toHaveBeenCalledTimes(remove);
};

beforeEach(() => {
  document.addEventListener = jest.fn();
  document.removeEventListener = jest.fn();
  global.checkEventListeners(0, 0);
});

afterEach(() => {
  jest.clearAllMocks();
});
