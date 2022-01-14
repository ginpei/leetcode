/**
 * 567. Permutation in String
 * @see https://leetcode.com/problems/permutation-in-string/
 */

/**
 * @typedef {Map<string, number>} CountMap
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function checkInclusion(s1, s2) {
  const target = countLetters(s1);

  const range = countLetters(s2.slice(0, s1.length));
  if (isCountMatched(range, target)) {
    return true;
  }

  for (let i = 1; i < s2.length - s1.length + 1; i++) {
    const last = s2[i - 1];
    addCount(range, last, -1);

    const tail = s2[i + s1.length - 1];
    addCount(range, tail, 1);

    if (isCountMatched(range, target)) {
      return true;
    }
  }

  return false;
}

/**
 * @param {string} s
 * @returns {CountMap}
 */
function countLetters(s) {
  /** @type {CountMap} */
  const counts = new Map();
  const strs = [...s];
  strs.forEach((c) => {
    addCount(counts, c, 1);
  });
  return counts;
}

/**
 * @param {CountMap} counts
 * @param {string} c
 * @param {number} diff
 */
function addCount(counts, c, diff) {
  const count = counts.get(c) || 0;
  const newCount = count + diff;
  if (newCount === 0) {
    counts.delete(c);
  } else {
    counts.set(c, newCount);
  }
}

/**
 * @param {CountMap} c1
 * @param {CountMap} c2
 * @returns {boolean}
 */
function isCountMatched(c1, c2) {
  if (c1.size !== c2.size) {
    return false;
  }

  for (const [c, count] of c1) {
    if (count !== c2.get(c)) {
      return false;
    }
  }
  return true;
}

module.exports.checkInclusion = checkInclusion;
