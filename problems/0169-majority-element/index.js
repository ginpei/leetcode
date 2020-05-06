/**
 * 169. Majority Element
 * @see https://leetcode.com/problems/majority-element/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
  /** @type {Map<number, number>} */
  const counts = new Map();

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];

    const count = (counts.get(n) || 0) + 1;
    if (count > nums.length / 2) {
      return n;
    }

    counts.set(n, count);
  }

  return NaN;
}

module.exports.majorityElement = majorityElement;
