/**
 * 121. Best Time to Buy and Sell Stock
 *
 * Say you have an array for which the i-th element is the price of a given
 * stock on day i.
 *
 * If you were only permitted to complete at most one transaction (i.e., buy
 * one and sell one share of the stock), design an algorithm to find the
 * maximum profit.
 *
 * Note that you cannot sell a stock before you buy one.
 *
 * @see https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let profit = 0;

  let min = prices[0];
  for (let i = 1; i < prices.length; i++) {
    const price = prices[i];
    if (price < min) {
      min = price;
    } else {
      const curProfit = price - min;
      if (curProfit > profit) {
        profit = curProfit;
      }
    }
  }

  return profit;
}

module.exports.maxProfit = maxProfit;
