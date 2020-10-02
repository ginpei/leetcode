const { buildBinaryTree } = require("../lib/binaryTree");
const { sumNumbers } = require("./index");

describe("129. Sum Root to Leaf Numbers", () => {
  it("example 1", () => {
    const input = [1, 2, 3];
    expect(sumNumbers(buildBinaryTree(input))).toBe(25);
  });

  it("example 2", () => {
    const input = [4, 9, 0, 5, 1];
    expect(sumNumbers(buildBinaryTree(input))).toBe(1026);
  });

  it("null root", () => {
    /** @type {number[]} */
    const input = [];
    expect(sumNumbers(buildBinaryTree(input))).toBe(0);
  });
});
