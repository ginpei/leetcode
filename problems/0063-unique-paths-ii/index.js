/**
 * 63. Unique Paths II
 *
 * A robot is located at the top-left corner of a *m* x *n* grid (marked
 * 'Start' in the diagram below).
 *
 * The robot can only move either down or right at any point in time. The
 * robot is trying to reach the bottom-right corner of the grid (marked
 * 'Finish' in the diagram below).
 *
 * Now consider if some obstacles are added to the grids. How many unique
 * paths would there be?
 *
 * @see https://leetcode.com/problems/63-unique-paths-ii/
 */

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
function uniquePathsWithObstacles(obstacleGrid) {
  const n = obstacleGrid.length;
  const m = obstacleGrid[0].length;

  /** @type {number[]} */
  let lastLine = [];
  for (let x = 0; x < m; x += 1) {
    const obstacle = obstacleGrid[0][x];
    if (obstacle) {
      lastLine.push(0);
    } else {
      lastLine.push(x < 1 ? 1 : lastLine[x - 1]);
    }
  }

  for (let y = 1; y < n; y += 1) {
    const line = seekLine(m, y, lastLine, obstacleGrid);
    lastLine = line;
  }

  return lastLine[m - 1];
}

/**
 * @param {number} m
 * @param {number} y
 * @param {number[]} lastLine
 * @param {number[][]} obstacleGrid
 */
function seekLine(m, y, lastLine, obstacleGrid) {
  const line = [lastLine[0] === 0 || obstacleGrid[y][0] ? 0 : 1];

  for (let x = 1; x < m; x += 1) {
    if (obstacleGrid[y][x]) {
      line.push(0);
    } else {
      const above = lastLine ? lastLine[x] : 0;
      const left = line[x - 1];
      const count = above + left;
      line.push(count);
    }
  }

  return line;
}

module.exports.uniquePathsWithObstacles = uniquePathsWithObstacles;
