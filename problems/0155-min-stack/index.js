// @ts-nocheck

/* eslint-disable no-underscore-dangle */

/**
 * 155. Min Stack
 * @see https://leetcode.com/problems/min-stack/
 */

/**
 * @extends Array<number>
 */
class MinStack {
  _length = 0;

  /** @type {number | null} */
  _min = null;

  get length() {
    return this._length;
  }

  // /**
  //  * initialize your data structure here.
  //  */
  // constructor() {
  // }

  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    const index = this.length;
    this[index] = x;
    this._length += 1;

    if (this._min !== null && x < this._min) {
      this._min = x;
    }
  }

  /**
   * @return {void}
   */
  pop() {
    this._length -= 1;
    const n = this[this._length];
    delete this[this._length];

    if (n === this._min) {
      this._min = null;
    }
  }

  /**
   * @return {number}
   */
  top() {
    return this[this.length - 1];
  }

  /**
   * @return {number}
   */
  getMin() {
    if (this.length < 1) {
      return NaN;
    }

    if (this._min === null) {
      let min = this[0];
      for (let i = 1; i < this.length; i++) {
        const n = this[i];
        if (n < min) {
          min = n;
        }
      }
      this._min = min;
    }

    /** @type {number} */
    const curMin = (this._min);
    return curMin;
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

module.exports.MinStack = MinStack;
