/**
 * 392. Is Subsequence
 *
 * Given a string **s** and a string **t**, check if **s** is subsequence of
 * **t**.
 *
 * You may assume that there is only lower case English letters in both **s**
 * and **t**. **t** is potentially a very long (length ~= 500,000) string, and
 * **s** is a short string (<=100).
 *
 * A subsequence of a string is a new string which is formed from the original
 * string by deleting some (can be none) of the characters without disturbing
 * the relative positions of the remaining characters. (ie, `"ace"` is a
 * subsequence of `"abcde"` while `"aec"` is not).
 *
 * @see https://leetcode.com/problems/392-is-subsequence/
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isSubsequence(s, t) {
  if (!s) {
    return true;
  }

  let pos = 0;
  for (let i = 0; i < t.length; i++) {
    if (t.charCodeAt(i) === s.charCodeAt(pos)) {
      pos++;
      if (pos >= s.length) {
        break;
      }
    }
  }

  return pos >= s.length;
}

module.exports.isSubsequence = isSubsequence;
