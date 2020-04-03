const { maxSubArray } = require('./index');

describe('53. Maximum Subarray', () => {
  it('example', () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });

  it('WA 1', () => {
    expect(maxSubArray([1, 2])).toBe(3);
  });

  it('WA 2', () => {
    expect(maxSubArray([-2, 1])).toBe(1);
  });
});
