/**
 * 993. Cousins in Binary Tree
 * @see https://leetcode.com/problems/cousins-in-binary-tree/
 */

/**
 * @param {TreeNode<number> | null} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
function isCousins(root, x, y) {
  if (!root) {
    return false;
  }

  let parents = [root];
  while (parents.length > 0) {
    /** @type {typeof parents} */
    const nodes = [];
    /** @type {typeof parents[]} */
    const xNodes = [];
    /** @type {typeof parents[]} */
    const yNodes = [];

    parents.forEach((parent) => {
      const { left, right } = parent;
      if (left) {
        nodes.push(left);
        if (left.val === x) {
          xNodes.push([parent, left]);
        }
        if (left.val === y) {
          yNodes.push([parent, left]);
        }
      }
      if (right) {
        nodes.push(right);
        if (right.val === x) {
          xNodes.push([parent, right]);
        }
        if (right.val === y) {
          yNodes.push([parent, right]);
        }
      }
    });

    if (xNodes.length > 0 && yNodes.length > 0) {
      if (xNodes.some(([p1]) => yNodes.some(([p2]) => p1 !== p2))) {
        return true;
      }
    }

    parents = nodes;
  }

  return false;
}


module.exports.isCousins = isCousins;
