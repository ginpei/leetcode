/**
 * Counting Elements
 * @see https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/528/week-1/3289/
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
function countElements(arr) {
  arr.sort((n, m) => m - n);

  /** @type {Set<number>} */
  const set = new Set();

  let matched = 0;
  arr.forEach((n) => {
    set.add(n);
    if (set.has(n + 1)) {
      matched += 1;
    }
  });

  return matched;
}

module.exports.countElements = countElements;
