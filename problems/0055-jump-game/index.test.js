const { canJump } = require('./index');

describe('55. Jump Game', () => {
  it('example 1', () => {
    expect(canJump([2, 3, 1, 1, 4])).toBe(true);
  });

  it('example 2', () => {
    expect(canJump([3, 2, 1, 0, 4])).toBe(false);
  });

  it('only one item', () => {
    expect(canJump([0])).toBe(true);
  });

  it('ends with zero', () => {
    expect(canJump([1, 0])).toBe(true);
  });

  it('super jump over 0', () => {
    expect(canJump([3, 0, 9, 2, 1, 0, 9])).toBe(true);
  });
});
