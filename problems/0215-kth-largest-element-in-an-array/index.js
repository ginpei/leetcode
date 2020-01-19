/**
 * 215. Kth Largest Element in an Array
 * @see https://leetcode.com/problems/kth-largest-element-in-an-array/
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums, k) {
  return nums.sort((v, w) => w - v)[k - 1];
}

module.exports.findKthLargest = findKthLargest;
