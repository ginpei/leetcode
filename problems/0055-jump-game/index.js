/**
 * 55. Jump Game
 * @see https://leetcode.com/problems/jump-game/
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canJump(nums) {
  let p = 0;
  // let count = 0;
  while (p < nums.length - 1) {
    // if (count++ > 1000) { throw new Error('infinite'); }

    // console.log(`# nums[${p}]=${nums[p]}`);
    if (nums[p] === 0) {
      for (let q = p - 1; q >= 0; q--) {
        // console.log('#', nums, `nums[${q}]=${nums[q]}`, p - q);
        if (nums[q] > p - q) {
          p = q;
          break;
        }
      }

      if (nums[p] === 0) {
        return false;
      }
    }

    p += nums[p];
  }

  return true;
}

module.exports.canJump = canJump;
