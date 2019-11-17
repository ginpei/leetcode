// @ts-nocheck

const lib = require('./binaryTree');

describe('lib/binaryTree', () => {
  describe('buildBinaryTree', () => {
    describe('for basic binary tree', () => {
      const input = [1, 2, 3];

      /** @type {TreeNode<number> | null} */
      let root;

      beforeEach(() => {
        root = lib.buildBinaryTree([...input]);
      });

      it('sets the root', () => {
        expect(root).not.toBeNull();
        expect(root.val).toBe(1);
      });

      it('sets the children of the root', () => {
        expect(root.left.val).toBe(2);
        expect(root.right.val).toBe(3);
      });

      it('leaves null if no inputs', () => {
        expect(root.left.left).toBeNull();
        expect(root.left.right).toBeNull();
        expect(root.right.left).toBeNull();
        expect(root.right.right).toBeNull();
      });
    });

    describe('for leaf nodes', () => {
      const input = [1, 2, 3, null, null, 6, 7, 8];

      /** @type {TreeNode<number> | null} */
      let root;

      beforeEach(() => {
        root = lib.buildBinaryTree([...input]);
      });

      it('leave null if inputs are null', () => {
        expect(root.left.left).toBeNull();
        expect(root.left.right).toBeNull();
      });
    });
  });
});
