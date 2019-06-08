import { debounce } from '../debounce';

jest.useFakeTimers();

describe('debounce', () => {
  afterEach(() => {
    jest.clearAllTimers();
  });

  it('does not call the debounced function', () => {
    const fn = jest.fn();
    debounce(fn, 0);

    jest.advanceTimersByTime(100);
    expect(fn).toHaveBeenCalledTimes(0);
  });

  it('calls the debounced function once', () => {
    const fn = jest.fn();
    const result = debounce(fn, 0) as $Unknown;

    result();
    jest.advanceTimersByTime(100);
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
