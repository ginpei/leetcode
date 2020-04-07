/**
 * Counting Elements
 * @see https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/528/week-1/3289/
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
function countElements(arr) {
  /** @type {Set<number>} */
  const set = new Set(arr);

  const matched = arr.reduce((sum, n) => sum + (set.has(n + 1) ? 1 : 0), 0);
  return matched;
}

module.exports.countElements = countElements;
