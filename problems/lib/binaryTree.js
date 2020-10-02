// @ts-check

/**
 * @template T
 * @param {(T | null)[]} input Gets destructed internally.
 * @returns {TreeNode<T> | null} Root node
 */
function buildBinaryTree(input) {
  const root = createBinaryNode(input.shift());

  const nodes = [root];
  for (
    let node = nodes.shift();
    node || nodes.length > 0;
    node = nodes.shift()
  ) {
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
module.exports.buildBinarySearchTree = buildBinarySearchTree;

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
 * @param {(T | null)[]} arr Ordered in breadth first search
 * @returns {TreeNode<T> | null}
 */
function bfsToTree(arr) {
  const root = createBinaryNode(arr[0]);

  const queue = [root];
  for (let i = 1; i < arr.length; i += 2) {
    const parent = queue.shift();
    if (!parent) {
      throw new Error("Inconsistent data: parent must be exist");
    }

    parent.left = createBinaryNode(arr[i]);
    queue.push(parent.left);

    parent.right = createBinaryNode(arr[i + 1]);
    queue.push(parent.right);
  }

  return root;
}
module.exports.bfsToTree = bfsToTree;

/**
 * @template T
 * @param {TreeNode<T> | null} root
 * @returns {(T | null)[]}
 */
function treeToBfs(root) {
  const arr = [];
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift() || null;
    arr.push(node ? node.val : null);

    if (node && (node.left || node.right)) {
      queue.push(node.left, node.right);
    }
  }
  return arr;
}
module.exports.treeToBfs = treeToBfs;

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
