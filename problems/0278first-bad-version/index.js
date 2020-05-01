/**
 * 278. First Bad Version
 * @see https://leetcode.com/problems/first-bad-version/
 */

// Definition for isBadVersion()
//
// @param {integer} version number
// @return {boolean} whether the version is bad
// isBadVersion = function(version) {
//     ...
// };

/**
 * @param {(version: number) => boolean} isBadVersion()
 * @return {(n: number) => number}
 */
function solution(isBadVersion) {
  /**
   * @param {number} n Total versions
   * @return {number} The first bad version
   */
  return (n) => {
    let left = 1;
    let right = n;
    while (left <= right) {
      const center = Math.floor(left + (right - left) / 2);
      if (isFirstBadVersion(center)) {
        return center;
      }
      if (isBadVersion(center)) {
        right = center - 1;
      } else {
        left = center + 1;
      }
    }

    return n;
  };

  function isFirstBadVersion(n) {
    return isBadVersion(n) && !isBadVersion(n - 1);
  }
}

module.exports.solution = solution;
