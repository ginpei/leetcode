/**
 * 221. Maximal Square
 * @see https://leetcode.com/problems/maximal-square/
 */

/**
 * @param {string[][]} matrix
 * @return {number}
 */
function maximalSquare(matrix) {
  /** @type {number[][]} */
  const history = Array.from({ length: matrix.length }, () => []);
  let max = 0;
  matrix.forEach((line, row) =>
    line.forEach((c, col) => {
      if (c === "1") {
        history[row][col] =
          1 +
          Math.min(
            (history[row - 1] || [])[col - 1] || 0, // left above
            (history[row - 1] || [])[col] || 0, // above
            (history[row] || [])[col - 1] || 0 // left
          );
        max = Math.max(max, history[row][col]);
      } else {
        history[row][col] = 0;
      }
    })
  );
  // console.log('# \n', history);
  return max ** 2;
}

module.exports.maximalSquare = maximalSquare;
