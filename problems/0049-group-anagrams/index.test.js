const { groupAnagrams } = require('./index');

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

  /**
   * @template T
   * @param {T[][]} arr
   * @returns {T[][]}
   */
  function sortSort(arr) {
    return arr.map((v) => v.sort());
  }
});
