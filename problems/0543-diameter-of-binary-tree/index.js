/**
 * 543. Diameter of Binary Tree
 * @see https://leetcode.com/problems/diameter-of-binary-tree/
 */

/**
 * @typedef {{
 *   maxLength: number;
 * }} Context
 */

/**
 * @template T
 * @param {TreeNode<T>} root
 * @returns {number}
 */
function diameterOfBinaryTree(root) {
  /** @type {Context} */
  const context = { maxLength: 0 };
  const longestLength = getFurtherLength(root, context) - 1;
  return Math.max(longestLength, context.maxLength);
}

/**
 * @template T
 * @param {TreeNode<T> | null} node
 * @param {Context} context
 */
function getFurtherLength(node, context) {
  if (!node) {
    return 0;
  }

  const leftLength = getFurtherLength(node.left, context);
  const rightLength = getFurtherLength(node.right, context);

  const bothLength = leftLength + rightLength;
  if (bothLength > context.maxLength) {
    // eslint-disable-next-line no-param-reassign
    context.maxLength = bothLength;
  }

  const longestLength = Math.max(leftLength, rightLength);

  return longestLength + 1;
}

module.exports.diameterOfBinaryTree = diameterOfBinaryTree;
