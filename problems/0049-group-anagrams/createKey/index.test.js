const { createKey, groupAnagrams } = require('./index');

describe('49. Group Anagrams', () => {
  it('example', () => {
    expect(sortSort(groupAnagrams(
      ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'],
    ))).toEqual([
      ['ate', 'eat', 'tea'],
      ['nat', 'tan'],
      ['bat'],
    ]);
  });

  it('empty', () => {
    expect(sortSort(groupAnagrams([]))).toEqual([]);
  });

  it('WA 1: same words', () => {
    expect(sortSort(groupAnagrams(['', '']))).toEqual([['', '']]);
  });

  describe('createKey()', () => {
    it('returns same key for same anagrams', () => {
      expect(createKey('ate')).toBe(createKey('tea'));
    });

    it('returns different keys for different anagrams', () => {
      expect(createKey('teaa')).not.toBe(createKey('tea'));
    });
  });

  /**
   * @template T
   * @param {T[][]} arr
   * @returns {T[][]}
   */
  function sortSort(arr) {
    return arr.map((v) => v.sort());
  }
});
