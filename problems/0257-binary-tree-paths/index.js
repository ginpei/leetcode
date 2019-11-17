/**
 * 257. Binary Tree Paths
 *
 * Given a binary tree, return all root-to-leaf paths.
 *
 * @see https://leetcode.com/problems/binary-tree-paths/
 */

/**
 * @param {TreeNode<number> | null} root
 * @param {string} stack
 * @return {string[]}
 */
function binaryTreePaths(root, stack = '') {
  if (!root) {
    return [];
  }

  const curStack = stack ? `${stack}->${root.val}` : `${root.val}`;

  if (!root.left && !root.right) {
    return [curStack];
  }

  return [
    ...binaryTreePaths(root.left, curStack),
    ...binaryTreePaths(root.right, curStack),
  ].filter((v) => v);
}

module.exports.binaryTreePaths = binaryTreePaths;
