/**
 * 454. 4Sum II
 * @see https://leetcode.com/problems/4sum-ii/
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
function fourSumCount(nums1, nums2, nums3, nums4) {
  // https://leetcode.com/problems/4sum-ii/discuss/1740529/C%2B%2B-100-Fast-and-Easy-Solution-or-Commented-Philosophy

  let count = 0;
  /** @type {Map<number, number>} */
  const map = new Map();

  for (const num1 of nums1) {
    for (const num2 of nums2) {
      map.set(num1 + num2, (map.get(num1 + num2) || 0) + 1);
    }
  }

  for (const num3 of nums3) {
    for (const num4 of nums4) {
      const partial = map.get(0 - num3 - num4);
      if (partial !== undefined) {
        count += partial;
      }
    }
  }

  return count;
}

module.exports.fourSumCount = fourSumCount;
