const { longestCommonSubsequence } = require('./index');

describe('1143. Longest Common Subsequence', () => {
  it('example 1', () => {
    expect(longestCommonSubsequence('abcde', 'ace')).toBe(3);
  });

  it('example 2', () => {
    expect(longestCommonSubsequence('abc', 'abc')).toBe(3);
  });

  it('example 3', () => {
    expect(longestCommonSubsequence('abc', 'def')).toBe(0);
  });

  it('ignoring head is the best', () => {
    expect(longestCommonSubsequence('abcd', 'dbcd')).toBe(3);
  });

  it('paddings', () => {
    expect(longestCommonSubsequence('axbxc', 'aybyc')).toBe(3); // a-b-c
  });

  it('later letter appears earlier', () => {
    expect(longestCommonSubsequence('abcdef', 'afcdeb')).toBe(4); // not a-f, but a-c-d-e
  });

  it('duplicated letters', () => {
    expect(longestCommonSubsequence('abb', 'ab')).toBe(2);
  });

  it('WA', () => {
    expect(longestCommonSubsequence('bsbininm', 'jmjkbkjkv')).toBe(1);
  });
});
