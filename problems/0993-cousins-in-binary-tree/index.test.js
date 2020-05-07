const { isCousins } = require('./index');
const { buildBinaryTree } = require('../lib/binaryTree');

describe('993. Cousins in Binary Tree', () => {
  it('example 1', () => {
    const root = buildBinaryTree([1, 2, 3, 4]);
    expect(isCousins(root, 4, 3)).toBe(false);
  });

  it('example 2', () => {
    const root = buildBinaryTree([1, 2, 3, null, 4, null, 5]);
    expect(isCousins(root, 5, 4)).toBe(true);
  });

  it('example 3', () => {
    const root = buildBinaryTree([1, 2, 3, null, 4]);
    expect(isCousins(root, 2, 3)).toBe(false);
  });

  it('same parent', () => {
    const root = buildBinaryTree([1, 2, 3, null, null, 4, 5]);
    expect(isCousins(root, 4, 5)).toBe(false);
  });

  it('same level but different grandparent', () => {
    // const root = buildBinaryTree([
    //   1, 2, 4, 3, 19, 10, 5, 15, 8, null, null, 13, 14, null, 6, null, 17, null,
    //   null, null, null, 18, null, 7, 11, null, null, null, null, null, 9, 16,
    //   12, null, null, 20,
    // ]);
    const root = buildBinaryTree([1, 2, 3, 4, null, 6, null, 8, null, 12]);
    expect(isCousins(root, 8, 12)).toBe(true);
  });
});
