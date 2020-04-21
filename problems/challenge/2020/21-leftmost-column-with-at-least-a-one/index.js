/**
 * Leftmost Column with at Least a One
 * @see https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/530/week-3/3306/
 */

// /**
//  * // This is the BinaryMatrix's API interface.
//  * // You should not implement it, or speculate about its implementation
//  * function BinaryMatrix() {
//  *     @param {integer} x, y
//  *     @return {integer}
//  *     this.get = function(x, y) {
//  *         ...
//  *     };
//  *
//  *     @return {[integer, integer]}
//  *     this.dimensions = function() {
//  *         ...
//  *     };
//  * };
//  */

class BinaryMatrix {
  /**
   * @param {number[][]} values
   */
  constructor(values) {
    this.values = values;
    this.getCount = 0;
  }

  /**
   * @param {number} x
   * @param {number} y
   * @returns {number}
   */
  get(x, y) {
    if (this.getCount > 1000) {
      throw new Error('You made too many calls to BinaryMatrix.get().');
    }
    this.getCount += 1;
    return this.values[x][y];
  }

  /**
   * @returns {[number, number]}
   */
  dimensions() {
    return [this.values[0].length, this.values.length];
  }
}

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
function leftMostColumnWithOne(binaryMatrix) {
  const [height, width] = binaryMatrix.dimensions();

  let veryRight = width - 1;
  let found = false;
  for (let top = 0; top < height; top++) {
    let left = 0;
    let right = veryRight;
    while (left <= right) {
      const center = left + Math.floor((right - left) / 2);
      const v = binaryMatrix.get(top, center);
      if (v === 0) {
        left = center + 1;
      } else {
        found = true;
        right = center - 1;
      }
    }
    veryRight = Math.min(veryRight, left);
  }

  return found ? veryRight : -1;
}

module.exports.leftMostColumnWithOne = leftMostColumnWithOne;
module.exports.BinaryMatrix = BinaryMatrix;
