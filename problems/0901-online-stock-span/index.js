/**
 * 901. Online Stock Span
 * @see https://leetcode.com/problems/online-stock-span/
 */

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
class StockSpanner {
  constructor() {
    /** @type {number[]} */
    this.priceMemo = [];

    /** @type {number[]} */
    this.daysMemo = [];
  }

  /**
   * @param {number} price
   * @return {number}
   */
  next(price) {
    let days = 1;
    while (days <= this.priceMemo.length) {
      const day = this.priceMemo.length - days;
      const pastPrice = this.priceMemo[day];
      if (pastPrice > price) {
        break;
      }

      days += this.daysMemo[day];
    }

    this.priceMemo.push(price);
    this.daysMemo.push(days);
    return days;
  }
}

module.exports.StockSpanner = StockSpanner;
