const { findAnagrams } = require('./index');

describe('438. Find All Anagrams in a String', () => {
  it('example 1', () => {
    expect(findAnagrams('cbaebabacd', 'abc')).toEqual([0, 6]);
  });

  it('example 2', () => {
    expect(findAnagrams('abab', 'ab')).toEqual([0, 1, 2]);
  });

  it('target is longer than source', () => {
    expect(findAnagrams('ab', 'abc')).toEqual([]);
  });
});
