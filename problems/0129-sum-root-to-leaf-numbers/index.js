/**
 * 129. Sum Root to Leaf Numbers
 *
 * @see https://leetcode.com/problems/sum-root-to-leaf-numbers/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode<number> | null} root
 * @return {number}
 */
function sumNumbers(root) {
  const sum = root ? buildNumbers(root).reduce((v, s) => s + v) : 0;
  return sum;
}

/**
 * @param {TreeNode<number>} node
 * @param {number} stack
 * @returns {number[]}
 */
function buildNumbers(node, stack = 0) {
  /** @type {number[]} */
  const numbers = [];
  const cur = stack * 10 + node.val;

  if (!node.left && !node.right) {
    numbers.push(Number(cur));
  }

  if (node.left) {
    buildNumbers(node.left, cur).forEach((v) => numbers.push(v));
  }
  if (node.right) {
    buildNumbers(node.right, cur).forEach((v) => numbers.push(v));
  }

  return numbers;
}

module.exports.sumNumbers = sumNumbers;
