import { boundValue } from '../bound-value';

describe('Bound Value', () => {
  it('returns the original value', () => {
    const result = boundValue(500, 1000, 0);
    expect(result).toEqual(500);
  });

  it('returns the ceiling', () => {
    const result = boundValue(1001, 1000, 0);
    expect(result).toEqual(1000);
  });

  it('returns the floor', () => {
    const result = boundValue(-1, 1000, -1);
    expect(result).toEqual(-1);
  });

  it('returns the default floor 0', () => {
    const result = boundValue(-50, 1000);
    expect(result).toEqual(0);
  });
});
