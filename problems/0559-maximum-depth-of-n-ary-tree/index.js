/**
 * 559. Maximum Depth of N-ary Tree
 *
 * Given a n-ary tree, find its maximum depth.
 *
 * The maximum depth is the number of nodes along the longest path from the
 * root node down to the farthest leaf node.
 *
 * Nary-Tree input serialization is represented in their level order traversal,
 * each group of children is separated by the null value (See examples).
 *
 * @see https://leetcode.com/problems/maximum-depth-of-n-ary-tree/
 */

/**
 * @template T
 * @typedef {{
 *    val: T;
 *    children: Node<T>[];
 * }} Node
 */

/**
 * @param {Node<number>} root
 * @param {number} curDepth
 * @param {number} max
 * @return {number}
 */
function maxDepth(root, curDepth = 0, max = -Number.MAX_VALUE) {
  // return root
  //   ? Math.max(0, ...root.children.map((v) => maxDepth(v))) + 1
  //   : 0;

  if (!root) {
    return curDepth;
  }

  const nextDepth = curDepth + 1;
  for (let i = 0; i < root.children.length; i++) {
    const node = root.children[i];
    const newMax = maxDepth(node, nextDepth, max);
    if (newMax > max) {
      // eslint-disable-next-line no-param-reassign
      max = newMax;
    }
  }

  return nextDepth > max ? nextDepth : max;
}

module.exports.maxDepth = maxDepth;
