const { majorityElement } = require('./index');

describe('169. Majority Element', () => {
  it('example 1', () => {
    expect(majorityElement([3, 2, 3])).toBe(3);
  });

  it('example 2', () => {
    expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2);
  });
});
