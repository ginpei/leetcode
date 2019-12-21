/**
 * 70. Climbing Stairs
 *
 * You are climbing a stair case. It takes *n* steps to reach to the top.
 *
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can
 * you climb to the top?
 *
 * @see https://leetcode.com/problems/climbing-stairs/
 */

/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  const memo = [0, 1, 2];

  for (let i = 3; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }

  return memo[n];
}

// /**
//  * @param {number} n
//  * @param {number[]} memo
//  * @return {number}
//  */
// function climbStairs(n, memo = []) {
//   if (n in memo) {
//     return memo[n];
//   }
//
//   if (n === 2) {
//     return 2;
//   }
//
//   if (n === 1) {
//     return 1;
//   }
//
//   const result = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
//   // eslint-disable-next-line no-param-reassign
//   memo[n] = result;
//   return result;
// }

module.exports.climbStairs = climbStairs;
