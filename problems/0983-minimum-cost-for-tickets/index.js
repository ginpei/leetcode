/**
 * 983. Minimum Cost For Tickets
 *
 * In a country popular for train travel, you have planned some train
 * travelling one year in advance.  The days of the year that you will travel
 * is given as an array days.  Each day is an integer from 1 to 365.
 *
 * Train tickets are sold in 3 different ways:
 *
 * - a 1-day pass is sold for `costs[0]` dollars;
 * - a 7-day pass is sold for `costs[1]` dollars;
 * - a 30-day pass is sold for `costs[2]` dollars.
 *
 * The passes allow that many days of consecutive travel.  For example, if we
 * get a 7-day pass on day 2, then we can travel for 7 days: day 2, 3, 4, 5, 6,
 * 7, and 8.
 *
 * Return the minimum number of dollars you need to travel every day in the
 * given list of days.
 *
 * @see https://leetcode.com/problems/983-minimum-cost-for-tickets/
 */

/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
function mincostTickets(days, costs) {
  const durations = [1, 7, 30];
  /** @type {{ [index: number]: number }} */
  const memo = {};
  return dp(0);

  /**
   * @param {number} i
   * @returns {number}
   */
  function dp(i) {
    if (i >= days.length) {
      return 0;
    }

    if (!memo[i]) {
      const min = findMin(i);
      memo[i] = min;
    }

    return memo[i];
  }

  /**
   * @param {number} i
   */
  function findMin(i) {
    let min = Number.MAX_SAFE_INTEGER;
    let j = i;
    for (let k = 0; k < durations.length; k++) {
      const duration = durations[k];
      const cost = costs[k];

      // find the last date index of this duration
      while (j < days.length && days[j] < days[i] + duration) {
        j += 1;
      }

      const curCost = dp(j) + cost;
      if (curCost < min) {
        min = curCost;
      }
    }

    return min;
  }
}

module.exports.mincostTickets = mincostTickets;
