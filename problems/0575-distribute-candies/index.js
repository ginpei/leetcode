/**
 * 575. Distribute Candies
 * @see https://leetcode.com/problems/0575-distribute-candies
 */

/**
 * @param {number[]} candyType length is even, and "2 <= length <= 104"
 * @return {number}
 */
function distributeCandies(candyType) {
  /** @type {Record<string, true>} */
  const chosen = {};
  let numChosen = 0;

  // eslint-disable-next-line no-restricted-syntax
  for (const type of candyType) {
    if (!chosen[type]) {
      chosen[type] = true;
      numChosen += 1;
    }
    if (numChosen >= candyType.length / 2) {
      return numChosen;
    }
  }

  return numChosen;
}

module.exports.distributeCandies = distributeCandies;
