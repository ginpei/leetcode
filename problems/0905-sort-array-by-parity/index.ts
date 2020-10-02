/* eslint-disable no-param-reassign */

/**
 * 905. Sort Array By Parity
 * @see https://leetcode.com/problems/sort-array-by-parity/
 */

export function sortArrayByParity(A: number[]): number[] {
  let j = 0;
  for (let i = 0; i < A.length; i++) {
    const value = A[i];
    if (value % 2 === 0) {
      A[i] = A[j];
      A[j] = value;
      j += 1;
    }
  }
  return A;
}
