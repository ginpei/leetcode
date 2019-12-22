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
  let min = prices[0];
  let bestProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const price = prices[i];
    const profit = price - min;
    if (price < min) {
      min = price;
    }

    if (profit > bestProfit) {
      bestProfit = profit;
    }
  }

  return bestProfit;
}

// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// function maxProfit(prices) {
//   const [best] = getMinMaxPrice(prices);
//   return best;
// }
//
// /**
//  * @param {number[]} prices
//  * @return {number[]} `[bestProfit, min]`
//  */
// function getMinMaxPrice(prices) {
//   const price = prices.pop() || 0;
//
//   if (prices.length < 1) {
//     return [0, price];
//   }
//
//   const [bestProfit, min] = getMinMaxPrice(prices);
//   if (price < min) {
//     return [bestProfit, price];
//   }
//
//   const profit = price - min;
//   if (profit > bestProfit) {
//     return [profit, min];
//   }
//
//   return [bestProfit, min];
// }

module.exports.maxProfit = maxProfit;
