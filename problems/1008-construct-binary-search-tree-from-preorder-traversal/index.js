/**
 * 1008. Construct Binary Search Tree from Preorder Traversal
 * @see https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/
 */

/**
 * @param {number[]} preorder
 * @return {TreeNode<number> | null}
 */
function bstFromPreorder(preorder) {
  return buildBinarySearchTree(preorder);
}

/**
 * @template T
 * @param {T[]} input Gets destructed internally.
 * @returns {TreeNode<T> | null} Root node
 */
function buildBinarySearchTree(input) {
  const root = createBinaryNode(input[0]);

  if (!root) {
    return root;
  }

  for (let i = 1; i < input.length; i++) {
    const node = createBinaryNode(input[i]);
    if (!node) {
      throw new Error("Empty node is not allowed");
    }
    appendBinarySearchTreeNode(root, node);
  }

  return root;
}

/**
 * @template T
 * @param {TreeNode<T>} root
 * @param {TreeNode<T>} node
 */
function appendBinarySearchTreeNode(root, node) {
  const dir = node.val < root.val ? "left" : "right";
  const next = root[dir];
  if (!next) {
    // eslint-disable-next-line no-param-reassign
    root[dir] = node;
    return;
  }

  appendBinarySearchTreeNode(next, node);
}

/**
 * @template T
 * @param {T | undefined | null} val
 * @returns {TreeNode<T> | null} Root node
 */
function createBinaryNode(val) {
  if (val === undefined || val === null) {
    return null;
  }

  const node = {
    left: null,
    right: null,
    val,
  };

  return node;
}

module.exports.bstFromPreorder = bstFromPreorder;
