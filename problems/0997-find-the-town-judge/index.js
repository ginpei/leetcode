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

  /** @type {number[]} */
  const trustCounts = [];

  for (let i = 0; i < trust.length; i++) {
    const [from, to] = trust[i];
    const count = trustCounts[to] || 0;
    trustCounts[to] = count + 1;

    trustCounts[from] = -N;
  }

  for (let id = 1; id < trustCounts.length; id++) {
    const count = trustCounts[id];
    if (count === N - 1) {
      return id;
    }
  }

  return -1;
}

module.exports.findJudge = findJudge;
