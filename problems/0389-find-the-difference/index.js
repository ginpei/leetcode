/**
 * 389. Find the Difference
 * @see https://leetcode.com/problems/find-the-difference/
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function findTheDifference(s, t) {
  /** @type {Map<string, number>} */
  const counts = new Map();

  for (const cs of s) {
    counts.set(cs, (counts.get(cs) || 0) + 1);
  }

  for (const ct of t) {
    const numRest = counts.get(ct);
    if (numRest === undefined || numRest < 1) {
      return ct;
    }

    counts.set(ct, numRest - 1);
  }

  throw new Error("Not found");
}

module.exports.findTheDifference = findTheDifference;
