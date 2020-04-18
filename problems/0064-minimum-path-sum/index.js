/* eslint-disable no-continue */

/**
 * 64. Minimum Path Sum
 * @see https://leetcode.com/problems/minimum-path-sum/
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
function minPathSum(grid) {
  for (let i = 0; i < grid.length; i++) {
    const line = grid[i];

    if (i === 0) {
      for (let j = 1; j < line.length; j++) {
        line[j] += line[j - 1];
      }
      continue;
    }

    const aboveLine = grid[i - 1];
    for (let j = 0; j < line.length; j++) {
      const above = aboveLine[j];

      if (j === 0) {
        line[j] += above;
        continue;
      }

      const left = line[j - 1];
      line[j] += Math.min(above, left);
    }
  }

  return grid[grid.length - 1][grid[0].length - 1];
}

module.exports.minPathSum = minPathSum;
