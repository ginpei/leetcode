/**
 * 49. Group Anagrams
 * @see https://leetcode.com/problems/group-anagrams/
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
  /** @type {Map<string, string[]>} */
  const anagrams = new Map();

  strs.forEach((str) => {
    const key = createKey(str);
    if (!anagrams.has(key)) {
      anagrams.set(key, []);
    }

    /** @type {string[]} */
    const arr = anagrams.get(key);
    arr.push(str);
  });

  return [...anagrams.values()];
}

/**
 * @param {string} s
 * @returns {string}
 */
function createKey(s) {
  /** @type {number[]} */
  const counts = [];

  [...s].forEach((v) => {
    const p = v.charCodeAt(0);
    counts[p] = (counts[p] || 0) + 1;
  });

  const key = counts.join();
  return key;
}

module.exports.createKey = createKey;
module.exports.groupAnagrams = groupAnagrams;
