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
   * @param {number} x Top
   * @param {number} y Left
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

  let left = width - 1;
  let top = 0;
  let found = false;
  while (left >= 0 && top < height) {
    const v = binaryMatrix.get(top, left);
    if (v === 1) {
      found = true;
      left -= 1;
    } else {
      top += 1;
    }
  }

  return found ? left + 1 : -1;
}

module.exports.leftMostColumnWithOne = leftMostColumnWithOne;
module.exports.BinaryMatrix = BinaryMatrix;
