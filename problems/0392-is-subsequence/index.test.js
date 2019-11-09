const { isSubsequence } = require('./index');

describe('392. Is Subsequence', () => {
  it('example 1', () => {
    expect(isSubsequence('abc', 'ahbgdc')).toBeTruthy();
  });

  it('example 2', () => {
    expect(isSubsequence('axc', 'ahbgdc')).toBeFalsy();
  });

  it('example from the description 1', () => {
    expect(isSubsequence('ace', 'abcde')).toBeTruthy();
  });

  it('example from the description 2', () => {
    expect(isSubsequence('aec', 'abcde')).toBeFalsy();
  });

  it('returns false for empty subsequence', () => {
    expect(isSubsequence('', 'ahbgdc')).toBeTruthy();
  });
});
