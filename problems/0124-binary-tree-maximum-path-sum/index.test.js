const { maxPathSum } = require("./index");
const { buildBinaryTree } = require("../lib/binaryTree");

describe("124. Binary Tree Maximum Path Sum", () => {
  it("example 1", () => {
    const input = buildBinaryTree([1, 2, 3]);
    expect(maxPathSum(input)).toBe(6);
  });

  it("example 2", () => {
    const input = buildBinaryTree([-10, 9, 20, null, null, 15, 7]);
    expect(maxPathSum(input)).toBe(42);
  });

  it("WA 1", () => {
    const input = buildBinaryTree([
      5,
      4,
      8,
      11,
      null,
      13,
      4,
      7,
      2,
      null,
      null,
      null,
      1,
    ]);
    expect(maxPathSum(input)).toBe(48);
  });
});
