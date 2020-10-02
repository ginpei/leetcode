/**
 * 714. Best Time to Buy and Sell Stock with Transaction Fee
 *
 * @see https://leetcode.com/problems/0714-best-time-to-buy-and-sell-stock-with-transaction-fee
 */

/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
function maxProfit(prices, fee) {
  let profit = 0;
  let min = prices[0];
  let max = min;

  // console.log('# prices, fee', prices, fee);
  for (let i = 1; i < prices.length; i++) {
    const cur = prices[i];
    // console.log(`# [${i}:${cur}] --------`);
    if (cur > max) {
      max = cur;
    } else if (cur < min || cur < max - fee) {
      // console.log(`# [${i}:${cur}] dealt`, Math.max(0, (max - fee) - min));
      profit += Math.max(0, max - fee - min);
      min = cur;
      max = cur;
    }

    const last = i + 1 === prices.length;
    if (last) {
      const curProfit = Math.max(0, max - min - fee);
      if (curProfit > 0) {
        profit += curProfit;
      }
    }
    // console.log(`# [${i}:${cur}] ->`, [min, max], profit);
  }

  return profit;
}

module.exports.maxProfit = maxProfit;
