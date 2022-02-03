/**
 * 1514. Path with Maximum Probability
 * @see https://leetcode.com/problems/1514-path-with-maximum-probability
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
function maxProbability(n, edges, succProb, start, end) {
  return getNodeWeight(n, edges, succProb, start, end);
}

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @param {Map<number, number>} weights
 * @return {number}
 */
function getNodeWeight(n, edges, succProb, start, end, weights = new Map()) {
  // finish if reached goal
  if (end === start) {
    return 1;
  }

  const calculatedWeight = weights.get(end);
  if (calculatedWeight !== undefined) {
    return calculatedWeight;
  }

  // mark as visited
  weights.set(end, -1);

  let max = 0;
  for (let at = 0; at < edges.length; at++) {
    const [from, to] = edges[at];
    const edgeWeight = succProb[at];

    // find relating edge
    if (end !== from && end !== to) {
      continue;
    }

    // find other node
    const prev = end === from ? to : from;

    const prevWeight = getNodeWeight(n, edges, succProb, start, prev, weights);
    const nodeWeight = prevWeight * edgeWeight;
    if (nodeWeight > max) {
      max = nodeWeight;
    }
  }

  weights.set(end, max);
  return max;
}

module.exports.maxProbability = maxProbability;
