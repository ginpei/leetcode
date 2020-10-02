/**
 * 209. Minimum Size Subarray Sum
 * @see https://leetcode.com/problems/minimum-size-subarray-sum/
 */

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
function minSubArrayLen(s, nums) {
  let min = 0;
  let iStart = 0;
  let sum = 0;

  for (let iEnd = 0; iEnd < nums.length; iEnd++) {
    sum += nums[iEnd];

    for (iStart; sum >= s && iStart < nums.length; iStart++) {
      const length = iEnd + 1 - iStart;
      if (sum >= s && (min === 0 || length < min)) {
        min = length;
      }

      sum -= nums[iStart];
    }
  }

  return min;
}

module.exports.minSubArrayLen = minSubArrayLen;
