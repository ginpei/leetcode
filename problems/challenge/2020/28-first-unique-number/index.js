/**
 * First Unique Number
 * @see https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/531/week-4/3313/
 */

/**
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */
class FirstUnique {
  /**
   * @param {number[]} nums
   */
  constructor(nums) {
    this.nums = nums;

    /** @type {Set<number>} */
    this.uniques = new Set();
    /** @type {Set<number>} */
    this.existences = new Set();
    nums.forEach((n) => this.add(n));
  }

  /**
   * @return {number}
   */
  showFirstUnique() {
    const { value } = this.uniques.values().next();
    return value === undefined ? -1 : value;
  }

  /**
   * @param {number} value
   * @return {void}
   */
  add(value) {
    if (this.existences.has(value)) {
      this.uniques.delete(value);
    } else {
      this.uniques.add(value);
    }
    this.existences.add(value);
  }
}

module.exports.FirstUnique = FirstUnique;
