/**
 * 918. Maximum Sum Circular Subarray
 * @see https://leetcode.com/problems/maximum-sum-circular-subarray/
 * @see https://leetcode.com/problems/maximum-sum-circular-subarray/discuss/633058/Java-or-C%2B%2B-or-Python3-or-With-detailed-explanation-or-O(N)-time-or-O(1)
 */

/**
 * @param {number[]} A
 * @return {number}
 */
function maxSubarraySumCircular(A) {
  let sum = A[0];
  let max = A[0];
  let maxTotal = A[0];
  let min = A[0];
  let minTotal = A[0];

  for (let i = 1; i < A.length; i++) {
    const n = A[i];
    max = Math.max(n, max + n);
    maxTotal = Math.max(maxTotal, max);

    min = Math.min(n, min + n);
    minTotal = Math.min(minTotal, min);

    sum += n;
  }

  const result =
    sum === minTotal ? maxTotal : Math.max(sum - minTotal, maxTotal);
  return result;
}

module.exports.maxSubarraySumCircular = maxSubarraySumCircular;
