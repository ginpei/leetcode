/**
 * 678. Valid Parenthesis String
 * @see https://leetcode.com/problems/valid-parenthesis-string/
 * @see https://leetcode.com/problems/valid-parenthesis-string/discuss/582134/C%2B%2B-2-Pointer-Approach-Explained-O(1)-Space-O(N)-Time
 */

/**
 * @param {string} s
 * @return {boolean}
 */
function checkValidString(s) {
  let numOpen = 0;
  let numClose = 0;
  for (let i = 0; i < s.length; i++) {
    const left = s[i];
    numOpen += (left === '(' || left === '*') ? 1 : -1;

    const right = s[s.length - 1 - i];
    numClose += (right === ')' || right === '*') ? 1 : -1;

    if (numOpen < 0 || numClose < 0) {
      return false;
    }
  }

  return true;
}

module.exports.checkValidString = checkValidString;
