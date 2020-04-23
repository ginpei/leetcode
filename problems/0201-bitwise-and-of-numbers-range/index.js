/* eslint-disable no-bitwise */
/* eslint-disable no-param-reassign */

/**
 * 201. Bitwise AND of Numbers Range
 * @see https://leetcode.com/problems/bitwise-and-of-numbers-range/
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function rangeBitwiseAnd(m, n) {
  for (let mask = 1; m !== n; mask <<= 1) {
    m -= m & mask;
    n -= n & mask;
  }
  return m;
}

module.exports.rangeBitwiseAnd = rangeBitwiseAnd;
