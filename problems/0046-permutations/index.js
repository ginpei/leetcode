/**
 * 46. Permutations
 * @see https://leetcode.com/problems/permutations/
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
  if (nums.length < 1) {
    return [];
  }

  if (nums.length === 1) {
    return [nums];
  }

  /** @type {number[][]} */
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    let n = NaN;
    /** @type {number[]} */
    const rest = [];

    for (let j = 0; j < nums.length; j++) {
      const m = nums[j];
      if (j === i) {
        n = m;
      } else {
        rest.push(m);
      }
    }

    const partial = permute(rest);
    partial.forEach((list) => result.push([n, ...list]));
  }

  return result;
}

module.exports.permute = permute;
