/**
 * 1005. Maximize Sum Of Array After K Negations
 * @see https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/
 */

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
function largestSumAfterKNegations(A, K) {
  let sum = A[0];

  for (let i = 0; i < K; i++) {
    let min = A[0];
    let minIndex = 0;
    for (let j = 1; j < A.length; j++) {
      const n = A[j];

      if (i === 0) {
        sum += n;
      }

      if (n < min) {
        min = n;
        minIndex = j;
      }
    }

    // eslint-disable-next-line no-param-reassign
    A[minIndex] = -min;

    sum -= 2 * min;
  }

  return sum;
}

module.exports.largestSumAfterKNegations = largestSumAfterKNegations;
