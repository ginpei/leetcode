/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
/**
 * 402. Remove K Digits
 * @see https://leetcode.com/problems/remove-k-digits/
 */

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
function removeKdigits(num, k) {
  /** @type {number[]} */
  const S = [];

  const nDigits = num.split('').map(Number);
  for (const x of nDigits) {
    // greedily remove up to k values greater-than x from the stack
    while (k && S.length && x < S[S.length - 1]) {
      S.pop();
      k -= 1;
    }
    S.push(x);
  }

  const first = S.findIndex((x) => x > 0);
  const last = S.length - k;
  const result = !S.length || first === -1 || first === last
    ? '0'
    : S.slice(first, last).join('').toString();

  return result;
}

module.exports.removeKdigits = removeKdigits;
