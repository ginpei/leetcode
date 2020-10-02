/**
 * 72. Edit Distance
 *
 * @see https://leetcode.com/problems/edit-distance/
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
function minDistance(word1, word2) {
  /** @type {number[][]} */
  const distances = [];
  for (let i = 0; i < word1.length + 1; i++) {
    distances[i] = [i];
  }
  for (let j = 0; j < word2.length + 1; j++) {
    distances[0][j] = j;
  }

  for (let i = 1; i < word1.length + 1; i++) {
    for (let j = 1; j < word2.length + 1; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        distances[i][j] = distances[i - 1][j - 1]; // same end
      } else {
        distances[i][j] = Math.min(
          distances[i - 1][j] + 1, // delete
          distances[i][j - 1] + 1, // insert
          distances[i - 1][j - 1] + 1 // replace
        );
      }
    }
  }

  return distances[word1.length][word2.length];
}

module.exports.minDistance = minDistance;
