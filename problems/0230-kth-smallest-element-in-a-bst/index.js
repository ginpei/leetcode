/**
 * 230. Kth Smallest Element in a BST
 * @see https://leetcode.com/problems/kth-smallest-element-in-a-bst/
 */

/**
 * @param {TreeNode<number>} root
 * @param {number} k
 * @return {number}
 */
function kthSmallest(root, k) {
  /** @type {number[]} */
  const numbers = [];
  traverse(numbers, root);
  return numbers[k - 1];

  /**
   * @param {number[]} arr
   * @param {typeof root | null} node
   */
  function traverse(arr, node) {
    if (!node) {
      return;
    }

    traverse(arr, node.left);
    arr.push(node.val);
    traverse(arr, node.right);
  }
}

module.exports.kthSmallest = kthSmallest;
