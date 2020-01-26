/**
 * 46. Permutations
 * @see https://leetcode.com/problems/permutations/
 */

/**
 * @param {number[]} nums
 * @param {number[][]} result
 * @param {number[]} picked
 * @return {number[][]}
 */
function permute(nums, result = [], picked = []) {
  if (nums.length === picked.length) {
    result.push([...picked]);
    return result;
  }

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (!picked.includes(n)) {
      picked.push(n);
      permute(nums, result, picked);
      picked.pop();
    }
  }

  return result;
}

module.exports.permute = permute;
