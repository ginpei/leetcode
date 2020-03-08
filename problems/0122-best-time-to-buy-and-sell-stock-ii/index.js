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
  let profit = 0;
  let min = prices[0];
  let max = Number.NEGATIVE_INFINITY;

  for (let i = 1; i < prices.length; i++) {
    const cur = prices[i];

    if (cur < min || cur < max) {
      profit += Math.max(0, max - min);
      min = cur;
      max = Number.NEGATIVE_INFINITY;
    } else if (cur > max) {
      max = cur;
    }

    const last = i + 1 === prices.length;
    if (last) {
      profit += Math.max(0, max - min);
    }
  }

  return profit;
}

module.exports.maxProfit = maxProfit;
