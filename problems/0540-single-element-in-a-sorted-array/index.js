/**
 * 540. Single Element in a Sorted Array
 * @see https://leetcode.com/problems/single-element-in-a-sorted-array/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNonDuplicate(nums) {
  if (nums.length < 2) {
    return nums[0];
  }

  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const center = left + Math.floor((right - left) / 2);
    const even = center % 2 === 0;

    const indexN = even ? center : center - 1;
    const n = nums[indexN];
    const m = nums[indexN + 1];
    if (n === m) {
      left = center + 1;
    } else {
      const l = nums[indexN - 1];
      if (l !== n) {
        return n;
      }

      right = center - 1;
    }
  }

  throw new Error("Not found");
}

module.exports.singleNonDuplicate = singleNonDuplicate;
