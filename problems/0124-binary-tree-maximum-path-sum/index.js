/**
 * 124. Binary Tree Maximum Path Sum
 * @see https://leetcode.com/problems/binary-tree-maximum-path-sum/
 */

/**
 * @param {TreeNode<number> | null} root
 * @return {number}
 */
function maxPathSum(root) {
  let max = Number.NEGATIVE_INFINITY;
  f(root);
  return max;

  /**
   * @param {TreeNode<number> | null} node
   * @return {number}
   */
  function f(node) {
    if (!node) {
      return 0;
    }

    const { val } = node;
    const leftMax = Math.max(0, f(node.left));
    const rightMax = Math.max(0, f(node.right));
    const sum = val + leftMax + rightMax;
    max = Math.max(max, sum);
    // console.log('# node', {
    //   val, leftMax, rightMax, sum, max,
    // });
    return val + Math.max(leftMax, rightMax);
  }
}

module.exports.maxPathSum = maxPathSum;
