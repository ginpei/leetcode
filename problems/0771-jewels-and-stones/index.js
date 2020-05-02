/**
 * 771. Jewels and Stones
 * @see https://leetcode.com/problems/jewels-and-stones/
 */

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
function numJewelsInStones(J, S) {
  const jewels = new Set([...J]);
  return [...S].filter((v) => jewels.has(v)).length;
}

module.exports.numJewelsInStones = numJewelsInStones;
