const { kthSmallest } = require("./index");
const { buildBinarySearchTree } = require("../lib/binaryTree");

describe("230. Kth Smallest Element in a BST", () => {
  it("example 1", () => {
    const root = buildTree([3, 1, 4, null, 2]);
    expect(kthSmallest(root, 1)).toBe(1);
  });

  /**
   * @param {(number | null)[]} input
   * @returns {TreeNode<number>}
   */
  function buildTree(input) {
    const root = buildBinarySearchTree(input);
    if (!root) {
      throw new Error("It must not be empty");
    }
    // @ts-ignore
    return root;
  }
});
