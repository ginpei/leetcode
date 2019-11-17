const { hasPathSum } = require('./index');
const { buildBinaryTree } = require('../lib/binaryTree');

describe('112. Path Sum', () => {
  it('example 1', () => {
    const tree = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1];
    const rootNode = buildBinaryTree(tree);
    const sum = 22;
    expect(hasPathSum(rootNode, sum)).toBe(true);
  });

  it('test 1', () => {
    const tree = [1];
    const rootNode = buildBinaryTree(tree);
    const sum = 1;
    expect(hasPathSum(rootNode, sum)).toBe(true);
  });

  it('test 2', () => {
    const tree = [1, 2];
    const rootNode = buildBinaryTree(tree);
    const sum = 1;
    expect(hasPathSum(rootNode, sum)).toBe(false);
  });

  it('works -1 for [1, -2, -3, 1, 3, -2, null, -1]', () => {
    const tree = [1, -2, -3, 1, 3, -2, null, -1];
    const rootNode = buildBinaryTree(tree);
    const sum = -1;
    expect(hasPathSum(rootNode, sum)).toBe(true);
  });
});
