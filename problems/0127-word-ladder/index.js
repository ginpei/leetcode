/**
 * 127. Word Ladder
 * @see https://leetcode.com/problems/word-ladder/
 */

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {readonly string[]} wordList
 * @return {number}
 */
function ladderLength(beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) {
    return 0;
  }

  /** @type {Map<string, number>} */
  const distances = new Map();

  let distance = 1;
  let lastWords = [endWord];
  for (; distance <= wordList.length; distance++) {
    if (lastWords.some((v) => isOneLetterDifferent(v, beginWord))) {
      return distance + 1;
    }

    /** @type {string[]} */
    const nextLastWords = [];
    // eslint-disable-next-line no-loop-func
    wordList.forEach((word) => {
      if (distances.has(word)) {
        return;
      }

      if (lastWords.some((v) => isOneLetterDifferent(word, v))) {
        distances.set(word, distance);
        nextLastWords.push(word);
      }
    });

    if (nextLastWords.length < 1) {
      return 0;
    }

    lastWords = nextLastWords;
  }

  return 0;
}

/**
 * @param {string} w1
 * @param {string} w2
 */
function isOneLetterDifferent(w1, w2) {
  let different = false;
  for (let i = 0; i < w1.length; i++) {
    if (w1[i] !== w2[i]) {
      if (different) {
        return false;
      }
      different = true;
    }
  }

  return different;
}

module.exports.ladderLength = ladderLength;
module.exports.isOneLetterDifferent = isOneLetterDifferent;
