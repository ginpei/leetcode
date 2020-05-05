/**
 * 387. First Unique Character in a String
 * @see https://leetcode.com/problems/first-unique-character-in-a-string/
 */

/**
 * @param {string} s
 * @return {number}
 */
function firstUniqChar(s) {
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (s.indexOf(c) === s.lastIndexOf(c)) {
      return i;
    }
  }

  return -1;
}

module.exports.firstUniqChar = firstUniqChar;
