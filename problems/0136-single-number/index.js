/* eslint-disable no-bitwise */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/**
 * 136. Single Number
 * @see https://leetcode.com/problems/single-number/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
  return nums.reduce((a, v) => a ^= v);
}

module.exports.singleNumber = singleNumber;
