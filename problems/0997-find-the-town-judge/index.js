/**
 * 997. Find the Town Judge
 * @see https://leetcode.com/problems/find-the-town-judge/
 */

/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
function findJudge(N, trust) {
  if (N === 1) {
    return 1;
  }

  /** @type {Map<number, number>} */
  const trustedCounts = new Map();
  /** @type {Set<number>} */
  const candidates = new Set();
  /** @type {Set<number>} */
  const trusters = new Set();

  trust.forEach(([from, to]) => {
    trusters.add(from);

    const c = (trustedCounts.get(to) || 0) + 1;
    trustedCounts.set(to, c);
    if (c === N - 1) {
      candidates.add(to);
    } else {
      candidates.delete(to);
    }
  });

  // eslint-disable-next-line no-restricted-syntax
  for (const id of candidates) {
    if (!trusters.has(id)) {
      return id;
    }
  }

  return -1;
}

module.exports.findJudge = findJudge;
