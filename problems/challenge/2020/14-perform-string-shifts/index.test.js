const { stringShift } = require('./index');

describe('challenge/2020/14/Perform String Shifts', () => {
  it('example 1', () => {
    expect(stringShift('abc', [[0, 1], [1, 2]])).toBe('cab');
  });

  it('example 2', () => {
    expect(stringShift('abcdefg', [[1, 1], [1, 1], [0, 2], [1, 3]]))
      .toBe('efgabcd');
  });
});
