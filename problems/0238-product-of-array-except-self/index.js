/**
 * 238. Product of Array Except Self
 * @see https://leetcode.com/problems/product-of-array-except-self/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
  /** @type {number[]} */
  const out = [1, nums[0]];

  for (let i = 1; i < nums.length - 1; i++) {
    const left = nums[i];
    out[i + 1] = out[i] * left;
  }

  let prodRight = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    const right = nums[i];
    out[i] *= prodRight;
    prodRight *= right;
  }

  return out;
}

module.exports.productExceptSelf = productExceptSelf;
