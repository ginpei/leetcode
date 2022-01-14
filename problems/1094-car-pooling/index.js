/**
 * 1094. Car Pooling
 * @see https://leetcode.com/problems/1094-car-pooling
 */

/**
 * @param {number[][]} trips `[numPassengers, from, to][]`
 * @param {number} capacity
 * @return {boolean}
 */
function carPooling(trips, capacity) {
  /** @type {number[]} */
  const countDiffs = [];

  for (const [num, from, to] of trips) {
    countDiffs[from] = (countDiffs[from] || 0) + num;
    countDiffs[to] = (countDiffs[to] || 0) - num;
  }

  let curCapacity = 0;
  for (const diff of countDiffs) {
    curCapacity += diff || 0;
    if (curCapacity > capacity) {
      return false;
    }
  }

  return true;
}

module.exports.carPooling = carPooling;
