/* eslint-disable no-bitwise */

/**
 * 89. Gray Code
 *
 * The gray code is a binary numeral system where two successive values differ
 * in only one bit.
 *
 * Given a non-negative integer n representing the total number of bits in the
 * code, print the sequence of gray code. A gray code sequence must begin with
 * 0.
 *
 * @see https://leetcode.com/problems/gray-code/
 */

/**
 * @param {number} n
 * @return {number[]}
 */
function grayCode(n) {
  if (n === 0) {
    return [0];
  }

  /** @type {number[]} */
  const numbers = [];
  const max = 2 << (n - 1);
  for (let i = 0; i < max; i += 1) {
    const gray = binaryToGray(i);
    numbers.push(gray);
  }
  return numbers;
}

/**
 * @param {number} num
 */
function binaryToGray(num) {
  return num ^ (num >> 1);
}

module.exports.grayCode = grayCode;
