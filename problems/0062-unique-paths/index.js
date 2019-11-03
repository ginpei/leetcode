/**
 * 62. Unique Paths
 *
 * A robot is located at the top-left corner of a *m* x *n* grid (marked
 * 'Start' in the diagram below).
 *
 * The robot can only move either down or right at any point in time. The
 * robot is trying to reach the bottom-right corner of the grid (marked
 * 'Finish' in the diagram below).
 *
 * How many possible unique paths are there?
 *
 * Note: *m* and *n* will be at most 100.
 *
 * @see https://leetcode.com/problems/unique-paths/
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function uniquePaths(m, n) {
  /** @type {number[] | null} */
  let lastLine = null;

  for (let y = 1; y < n; y += 1) {
    const line = [1];
    for (let x = 1; x < m; x += 1) {
      const above = lastLine ? lastLine[x] : 1;
      const left = line[x - 1];
      const count = above + left;
      line.push(count);
    }

    lastLine = line;
  }

  return lastLine ? lastLine[m - 1] : 1;
}

module.exports.uniquePaths = uniquePaths;
