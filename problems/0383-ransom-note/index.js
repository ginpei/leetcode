/**
 * 383. Ransom Note
 * @see https://leetcode.com/problems/ransom-note/
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
function canConstruct(ransomNote, magazine) {
  if (ransomNote.length > magazine.length) {
    return false;
  }

  /** @type {Map<string, number>} */
  const counts = new Map();
  [...magazine].forEach((c) => {
    const count = counts.get(c) || 0;
    counts.set(c, count + 1);
  });

  return [...ransomNote].every((c) => {
    const count = counts.get(c);
    if (count === undefined || count === 0) {
      return false;
    }

    counts.set(c, count - 1);
    return true;
  });
}

module.exports.canConstruct = canConstruct;
