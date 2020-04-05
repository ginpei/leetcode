/**
 * 122. Best Time to Buy and Sell Stock II
 *
 * @see https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let profits = 0;
  for (let i = 1; i < prices.length; i++) {
    const cur = prices[i];
    const last = prices[i - 1];
    const diff = cur - last;
    if (diff > 0) {
      profits += diff;
    }
  }
  return profits;
}

module.exports.maxProfit = maxProfit;
