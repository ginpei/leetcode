/**
 * 703. Kth Largest Element in a Stream
 * @see https://leetcode.com/problems/kth-largest-element-in-a-stream/
 */

class KthLargest {
  /**
   * @param {number} k
   * @param {number[]} nums
   */
  constructor(k, nums) {
    this.k = k;
    this.nums = nums.sort((v, w) => w - v);
  }

  /**
   * @param {number} val
   * @return {number}
   */
  add(val) {
    const index = this.findInsertPosition(val);
    this.nums.splice(index, 0, val);
    const result = this.nums[this.k - 1];
    return result;
  }

  /**
   * @param {number} val
   */
  findInsertPosition(val) {
    let i;
    for (i = 0; i < this.nums.length; i++) {
      const n = this.nums[i];
      if (val > n) {
        break;
      }
    }
    return i;
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

module.exports.KthLargest = KthLargest;
