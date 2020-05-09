const { isPerfectSquare } = require('./index');

describe('367. Valid Perfect Square', () => {
  it('example 1', () => {
    expect(isPerfectSquare(16)).toBe(true);
  });

  it('example 2', () => {
    expect(isPerfectSquare(14)).toBe(false);
  });
});
