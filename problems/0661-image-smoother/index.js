/**
 * 661. Image Smoother
 * @see https://leetcode.com/problems/image-smoother/
 */

/**
 * @param {number[][]} M
 * @return {number[][]}
 */
function imageSmoother(M) {
  /** @type {number[][]} */
  const result = [];
  M.forEach((line, row) => {
    result.push([]);
    line.forEach((cell, col) => {
      result[row][col] = Math.floor(
        average(
          ...[
            M[row][col],
            (M[row + 0] || [])[col + 1],
            (M[row + 1] || [])[col + 1],
            (M[row + 1] || [])[col + 0],
            (M[row + 1] || [])[col - 1],
            (M[row + 0] || [])[col - 1],
            (M[row - 1] || [])[col - 1],
            (M[row - 1] || [])[col + 0],
            (M[row - 1] || [])[col + 1],
          ].filter((v) => v !== undefined)
        )
      );
    });
  });
  return result;
}

/**
 * @param  {...number} nums
 * @returns {number}
 */
function average(...nums) {
  return nums.reduce((a, v) => a + v) / nums.length;
}

module.exports.imageSmoother = imageSmoother;
