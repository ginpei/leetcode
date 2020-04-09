const { backspaceCompare } = require('./index');

describe('844. Backspace String Compare', () => {
  it('example 1', () => {
    expect(backspaceCompare('ab#c', 'ad#c')).toBe(true);
  });

  it('example 2', () => {
    expect(backspaceCompare('ab##', 'c#d#')).toBe(true);
  });

  it('example 3', () => {
    expect(backspaceCompare('a##c', '#a#c')).toBe(true);
  });

  it('example 4', () => {
    expect(backspaceCompare('a#c', 'b')).toBe(false);
  });

  it('lots of backspaces', () => {
    expect(backspaceCompare('a', 'abcdefg######')).toBe(true);
  });
});
