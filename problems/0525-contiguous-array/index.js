/**
 * 525. Contiguous Array
 * @see https://leetcode.com/problems/contiguous-array/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
function findMaxLength(nums) {
  let max = 0;
  for (let left = 0; left < nums.length - 1; left++) {
    const n = nums[left];
    let c0 = n === 0 ? 1 : 0;
    let c1 = n === 1 ? 1 : 0;

    // no more possibility
    if (nums.length - left <= max) {
      break;
    }

    for (let right = left + 1; right < nums.length; right++) {
      const m = nums[right];
      if (m === 0) { c0 += 1; }
      if (m === 1) { c1 += 1; }
      if (c0 === c1) {
        const length = right - left + 1;
        if (length > max) {
          max = length;
        }
      }
    }
  }
  return max;
}

module.exports.findMaxLength = findMaxLength;
