const { buildBinaryTree } = require('../../../lib/binaryTree');
const { isValidSequence } = require('./index');
const { readJson } = require('../../../lib/readJson');

describe('challenge/2020/30/Check If a String Is a Valid Sequence from Root to Leaves Path in a Binary Tree', () => {
  it('example 1', () => {
    const root = buildBinaryTree([0, 1, 0, 0, 1, 0, null, null, 1, 0, 0]);
    const arr = [0, 1, 0, 1];
    expect(isValidSequence(root, arr)).toBe(true);
  });

  it('example 2', () => {
    const root = buildBinaryTree([0, 1, 0, 0, 1, 0, null, null, 1, 0, 0]);
    const arr = [0, 0, 1];
    expect(isValidSequence(root, arr)).toBe(false);
  });

  it('example 3', () => {
    const root = buildBinaryTree([0, 1, 0, 0, 1, 0, null, null, 1, 0, 0]);
    const arr = [0, 1, 1];
    expect(isValidSequence(root, arr)).toBe(false);
  });

  it('both children are same', () => {
    const root = buildBinaryTree([0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0]);
    const arr = [0, 1, 0, 1];
    expect(isValidSequence(root, arr)).toBe(true);
  });

  it('WA 1', async () => {
    const input1 = await readJson(__dirname, 'large-input-1.json');
    const input2 = await readJson(__dirname, 'large-input-2.json');
    const root = buildBinaryTree(input1);
    const arr = input2;
    expect(isValidSequence(root, arr)).toBe(true);
  });
});
