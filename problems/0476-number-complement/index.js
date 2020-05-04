/* eslint-disable no-bitwise */

/**
 * 476. Number Complement
 * @see https://leetcode.com/problems/number-complement/
 */

/**
 * @param {number} num
 * @return {number}
 */
function findComplement(num) {
  const maskDigits = Math.floor(Math.log2(num)) + 1;
  const mask = (1 << maskDigits) - 1;
  const complement = mask ^ num;
  return complement;
}

module.exports.findComplement = findComplement;
