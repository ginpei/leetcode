// @ts-check

/**
 * @template T
 * @param {(T | null)[]} input Gets destructed internally.
 * @returns {TreeNode<T> | null} Root node
 */
function buildBinaryTree(input) {
  const root = createBinaryNode(input.shift());

  const nodes = [root];
  for (let node = nodes.shift(); node || nodes.length > 0; node = nodes.shift()) {
    if (node) {
      node.left = createBinaryNode(input.shift());
      if (node.left) {
        nodes.push(node.left);
      }

      node.right = createBinaryNode(input.shift());
      if (node.right) {
        nodes.push(node.right);
      }
    }
  }

  return root;

  // const node = buildBinaryNode(input.pop());
  // if (node) {
  //   node.left = buildBinaryNode(input.pop());
  //   node.right = buildBinaryNode(input.pop());
  // }
  // return node;
}
module.exports.buildBinaryTree = buildBinaryTree;

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
