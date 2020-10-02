const { diameterOfBinaryTree } = require("./index");
const { buildBinaryTree } = require("../lib/binaryTree");

describe("diameterOfBinaryTree()", () => {
  it("example 1", () => {
    expect(exec([1, 2, 3, 4, 5])).toBe(3);
  });

  it("no descendants", () => {
    expect(exec([1])).toBe(0);
  });

  it("long arm not including root", () => {
    expect(
      exec([1, 2, 3, 4, 5, null, null, 8, null, null, 11, 16, null, null, 19])
    ).toBe(6);
  });

  /**
   * @param {(number | null)[]} input
   * @returns {ReturnType<typeof diameterOfBinaryTree>}
   */
  function exec(input) {
    const root = buildBinaryTree(input);
    if (!root) {
      throw new Error("Node must not be null");
    }
    const result = diameterOfBinaryTree(root);
    return result;
  }
});
