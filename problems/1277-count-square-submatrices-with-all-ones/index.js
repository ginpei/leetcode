/**
 * 1277. Count Square Submatrices with All Ones
 * @see https://leetcode.com/problems/count-square-submatrices-with-all-ones/
 */

/**
 * @param {number[][]} matrix
 * @return {number}
 */
function countSquares(matrix) {
  let count = 0;
  matrix.forEach((line, row) => {
    line.forEach((cell, col) => {
      if (cell !== 1) {
        return;
      }

      // ok here is a 1x1 square
      count += 1;

      const max = Math.min(line.length - col, matrix.length - row);
      let ok = true;
      for (let i = 1; i < max && ok; i++) {
        for (let j = 0; j < i && ok; j++) {
          // (row    , col) (row    , col + 1), (row    , col + 2)
          // (row + 1, col) (row + 1, col + 1), (row + 1, col + 2)
          // (row + 2, col) (row + 2, col + 1), (row + 2, col + 2)

          ok = ok && matrix[row + j][col + i] === 1; // right side
          ok = ok && matrix[row + i][col + j] === 1; // bottom side
        }
        ok = ok && matrix[row + i][col + i] === 1; // corner
        if (ok) {
          count += 1;
        }
      }
    });
  });

  return count;
}

module.exports.countSquares = countSquares;
