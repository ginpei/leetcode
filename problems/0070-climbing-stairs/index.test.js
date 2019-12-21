const { climbStairs } = require('./index');

describe('70. Climbing Stairs', () => {
  it('example 1', () => {
    expect(climbStairs(2)).toBe(2);
  });

  it('example 2', () => {
    expect(climbStairs(3)).toBe(3);
  });
});
