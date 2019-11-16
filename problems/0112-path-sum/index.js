/**
 * 112. Path Sum
 *
 * Given a binary tree and a sum, determine if the tree has a root-to-leaf path
 * such that adding up all the values along the path equals the given sum.
 *
 * @see https://leetcode.com/problems/path-sum/
 */

/**
 * @param {import("../../types/types").TreeNode<number> | null} root
 * @param {number} sum
 * @param {number} stack
 * @return {boolean}
 */
function hasPathSum(root, sum, stack = 0) {
  if (!root) {
    return false;
  }

  const curStack = root.val + stack;
  if (!root.left && !root.right) {
    return curStack === sum;
  }

  return hasPathSum(root.left, sum, curStack)
    || hasPathSum(root.right, sum, curStack);
}

module.exports.hasPathSum = hasPathSum;
