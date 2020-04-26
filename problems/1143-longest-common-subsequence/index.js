/**
 * 1143. Longest Common Subsequence
 * @see https://leetcode.com/problems/longest-common-subsequence/
 */

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
function longestCommonSubsequence(text1, text2) {
  /** @type {number[]} */
  let lastLine = [];
  [...text1].forEach((c1, i1) => {
    /** @type {number[]} */
    const line = [];
    [...text2].forEach((c2, i2) => {
      const matched = c2 === c1;
      if (matched) {
        const leftAbove = i1 === 0 || i2 === 0 ? 0 : lastLine[i2 - 1];
        line[i2] = leftAbove + 1;
      } else {
        const above = i1 === 0 ? 0 : lastLine[i2];
        const left = i2 === 0 ? 0 : line[i2 - 1];
        line[i2] = Math.max(above, left);
      }
    });
    lastLine = line;
  });

  return lastLine[text2.length - 1];
}

module.exports.longestCommonSubsequence = longestCommonSubsequence;
