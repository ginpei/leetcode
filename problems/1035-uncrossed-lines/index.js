/**
 * 1035. Uncrossed Lines
 * @see https://leetcode.com/problems/uncrossed-lines/
 * @see https://leetcode.com/problems/uncrossed-lines/discuss/651065/Java-or-DP
 */

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
function maxUncrossedLines(A, B) {
  if (A.length < 1 || B.length < 1) {
    return 0;
  }

  const dp = Array.from({ length: A.length + 1 })
    .fill(0)
    .map(() => Array.from({ length: B.length + 1 }).fill(0));

  for (let i = 1; i <= A.length; i++) {
    const a = A[i - 1];
    for (let j = 1; j <= B.length; j++) {
      const b = B[j - 1];
      if (a === b) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }

  return dp[A.length][B.length];
}

module.exports.maxUncrossedLines = maxUncrossedLines;
