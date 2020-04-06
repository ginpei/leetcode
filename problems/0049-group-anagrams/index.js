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
    const sorted = [...str].sort().join('');
    if (!anagrams.has(sorted)) {
      anagrams.set(sorted, []);
    }

    /** @type {string[]} */
    const arr = (anagrams.get(sorted));
    arr.push(str);
  });

  return [...anagrams.values()].map((v) => [...v.values()]);
}

module.exports.groupAnagrams = groupAnagrams;
