/**
 * 438. Find All Anagrams in a String
 * @see https://leetcode.com/problems/find-all-anagrams-in-a-string/
 */

/**
 * @typedef {Map<string, number>} CountMap
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
function findAnagrams(s, p) {
  /** @type {ReturnType<typeof findAnagrams>} */
  const results = [];

  const target = countLetters(p);

  const range = countLetters(s.slice(0, p.length));
  if (isCountMatched(range, target)) {
    results.push(0);
  }

  for (let i = 1; i < s.length - p.length + 1; i++) {
    const last = s[i - 1];
    addCount(range, last, -1);

    const tail = s[i + p.length - 1];
    addCount(range, tail, 1);

    if (isCountMatched(range, target)) {
      results.push(i);
    }
  }

  return results;
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

module.exports.findAnagrams = findAnagrams;
