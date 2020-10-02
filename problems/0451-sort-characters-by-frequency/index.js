/**
 * 451. Sort Characters By Frequency
 * @see https://leetcode.com/problems/sort-characters-by-frequency/
 */

/**
 * @param {string} s
 * @return {string}
 */
function frequencySort(s) {
  /** @type {Map<string, string>} */
  const counts = new Map();
  [...s].forEach((c) => {
    const line = counts.get(c) || "";
    counts.set(c, line + c);
  });

  return [...counts.entries()]
    .sort(([, s1], [, s2]) => s2.length - s1.length)
    .map(([, v]) => v)
    .join("");
}

module.exports.frequencySort = frequencySort;
