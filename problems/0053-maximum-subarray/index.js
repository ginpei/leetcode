/**
 * 53. Maximum Subarray
 * @see https://leetcode.com/problems/maximum-subarray/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
  let sum = nums[0];
  return nums.reduce((max, n) => {
    sum = Math.max(n, sum + n);
    return Math.max(max, sum);
  });
}

module.exports.maxSubArray = maxSubArray;
