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
  /**
   * - Key: sum of the all numbers from 0 to i
   * - Value: index of the first location of the sum
   * @type {Map<number, number>}
   */
  const balances = new Map([[0, -1]]);

  let balance = 0;
  let maxStroke = 0;
  for (let index = 0; index < nums.length; index++) {
    const n = nums[index];

    balance += n === 0 ? -1 : 1;

    // find the flat position
    const iPair = balances.get(balance);

    if (iPair === undefined) {
      balances.set(balance, index);
    } else {
      maxStroke = Math.max(maxStroke, index - iPair);
    }
  }

  return maxStroke;
}

module.exports.findMaxLength = findMaxLength;
