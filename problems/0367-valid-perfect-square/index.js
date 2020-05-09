/**
 * 367. Valid Perfect Square
 * Note: Do not use any built-in library function such as sqrt.
 * @see https://leetcode.com/problems/valid-perfect-square/
 */

/**
 * @param {number} num Positive integer
 * @return {boolean}
 */
function isPerfectSquare(num) {
  let left = 0;
  let right = num;
  while (left <= right) {
    const center = left + Math.floor((right - left) / 2);
    const double = center ** 2;
    if (double === num) {
      return true;
    }

    if (double > num) {
      right = center - 1;
    } else {
      left = center + 1;
    }
  }

  return false;
}

module.exports.isPerfectSquare = isPerfectSquare;
