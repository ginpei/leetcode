/**
 * 55. Jump Game
 * @see https://leetcode.com/problems/jump-game/
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canJump(nums) {
  let furthest = 0;
  for (let i = 0; i < nums.length && i <= furthest; i++) {
    furthest = Math.max(furthest, i + nums[i]);
  }
  return furthest >= nums.length - 1;
}

module.exports.canJump = canJump;
