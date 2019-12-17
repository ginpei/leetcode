const { isValid } = require('./index');

describe('20. Valid Parentheses', () => {
  it('example 1', () => {
    expect(isValid('()')).toBe(true);
  });

  it('example 2', () => {
    expect(isValid('()[]{}')).toBe(true);
  });

  it('example 3', () => {
    expect(isValid('(]')).toBe(false);
  });

  it('example 4', () => {
    expect(isValid('([)]')).toBe(false);
  });

  it('example 5', () => {
    expect(isValid('{[]}')).toBe(true);
  });

  it('only open', () => {
    expect(isValid('(')).toBe(false);
  });

  it('more close parens', () => {
    expect(isValid('[])')).toBe(false);
  });
});
