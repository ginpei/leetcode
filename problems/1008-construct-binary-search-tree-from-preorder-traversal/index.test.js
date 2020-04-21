const { bstFromPreorder } = require('./index');
const { bfsToTree } = require('../lib/binaryTree');

describe('1008. Construct Binary Search Tree from Preorder Traversal', () => {
  it('example 1', () => {
    const input = [8, 5, 1, 7, 10, 12];
    const output = [8, 5, 10, 1, 7, null, 12];
    expect(bstFromPreorder(input)).toEqual(bfsToTree(output));
  });

  it('heavy right', () => {
    const input = [8, 5, 10, 12];
    const output = [8, 5, 10, null, null, null, 12];
    expect(bstFromPreorder(input)).toEqual(bfsToTree(output));
  });
});
