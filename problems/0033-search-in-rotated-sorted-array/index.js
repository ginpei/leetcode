/**
 * 33. Search in Rotated Sorted Array
 * @see https://leetcode.com/problems/search-in-rotated-sorted-array/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const center = left + Math.floor((right - left) / 2);
    const vc = nums[center];
    if (vc === target) {
      return center;
    }

    const vl = nums[left];
    const vr = nums[right];
    if (
      (vc > vr && vl <= target && target < vc)
      || (vc < vr && !(vc < target && target <= vr))
    ) {
      right = center - 1;
    } else {
      left = center + 1;
    }
  }

  return -1;
}

module.exports.search = search;
