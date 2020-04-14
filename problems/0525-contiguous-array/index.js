/**
 * 525. Contiguous Array
 * @see https://leetcode.com/problems/contiguous-array/
 * @see https://leetcode.com/problems/contiguous-array/discuss/577799/Java-Prefix-sum-and-Hash-Map-Clean-code-Easy-to-understand
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
function findMaxLength(nums) {
  /** @type {Map<number, number>} */
  const log = new Map([[0, -1]]);

  let balance = 0;
  let max = 0;
  nums.forEach((n, i) => {
    balance += n === 0 ? -1 : 1;
    const sameBalanceAt = log.get(balance);
    if (sameBalanceAt === undefined) {
      log.set(balance, i);
    } else {
      const length = i - sameBalanceAt;
      if (length > max) {
        max = length;
      }
    }
  });
  return max;
}

module.exports.findMaxLength = findMaxLength;
