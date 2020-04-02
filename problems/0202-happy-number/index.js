/* eslint-disable no-param-reassign */

/**
 * 202. Happy Number
 * @see https://leetcode.com/problems/happy-number/
 */

/**
 * @param {number} n
 * @return {boolean}
 */
function isHappy(n) {
  /** @type {Set<number>} */
  const history = new Set();

  while (n !== 1) {
    if (history.has(n)) {
      return false;
    }
    history.add(n);

    let sum = 0;
    while (n > 0) {
      const d = n % 10;
      sum += d ** 2;
      n = Math.floor(n / 10);
    }

    n = sum;
  }

  return true;
}

module.exports.isHappy = isHappy;
