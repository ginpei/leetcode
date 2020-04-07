const { countElements } = require('./index');

describe('challenge/2020/07/Counting Elements', () => {
  it('example 1', () => {
    expect(countElements([1, 2, 3])).toBe(2);
  });

  it('example 2', () => {
    expect(countElements([1, 1, 3, 3, 5, 5, 7, 7])).toBe(0);
  });

  it('example 3', () => {
    expect(countElements([1, 3, 2, 3, 5, 0])).toBe(3);
  });

  it('example 4', () => {
    expect(countElements([1, 1, 2, 2])).toBe(2);
  });

  it('remaining larger number', () => {
    expect(countElements([1, 2, 2])).toBe(1);
  });

  it('reversed', () => {
    expect(countElements([2, 1])).toBe(1);
  });

  it('WA 1', () => {
    expect(countElements([1, 1, 2])).toBe(2);
  });
});
