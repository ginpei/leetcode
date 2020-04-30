/**
 * Check If a String Is a Valid Sequence from Root to Leaves Path in a Binary Tree
 * @see https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/532/week-5/3315/
 */

/**
 * @param {TreeNode<number> | null} root
 * @param {number[]} arr
 * @return {boolean}
 */
function isValidSequence(root, arr) {
  if (!root || root.val !== arr[0]) {
    return false;
  }

  let candidates = [root];
  for (let i = 1; i < arr.length; i++) {
    const n = arr[i];

    candidates = candidates.reduce((acc, node) => {
      if (node.left && node.left.val === n) {
        acc.push(node.left);
      }

      if (node.right && node.right.val === n) {
        acc.push(node.right);
      }
      return acc;
    }, /** @type {typeof candidates} */ ([]));

    if (candidates.length < 1) {
      return false;
    }
  }

  const isLeaf = !candidates.some((node) => node.left || node.right);
  return isLeaf;
}

module.exports.isValidSequence = isValidSequence;
