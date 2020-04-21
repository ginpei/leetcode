const lib = require('./binaryTree');

describe('lib/binaryTree', () => {
  describe('buildBinaryTree()', () => {
    describe('for basic binary tree', () => {
      const input = [1, 2, 3];

      /** @type {TreeNode<number> | null} */
      let root;

      beforeEach(() => {
        root = lib.buildBinaryTree([...input]);
      });

      it('sets the root', () => {
        if (!root) {
          throw new Error('root must not be null');
        }
        expect(root.val).toBe(1);
      });

      it('sets the children of the root', () => {
        if (!root || !root.left || !root.right) {
          throw new Error('Target nodes must not be null');
        }

        expect(root.left.val).toBe(2);
        expect(root.right.val).toBe(3);
      });

      it('leaves null if no inputs', () => {
        if (!root || !root.left || !root.right) {
          throw new Error('Target nodes must not be null');
        }

        expect(root.left.left).toBeNull();
        expect(root.left.right).toBeNull();
        expect(root.right.left).toBeNull();
        expect(root.right.right).toBeNull();
      });
    });

    describe('for ones having left child', () => {
      const input = [1, 2];

      /** @type {TreeNode<number> | null} */
      let root;

      beforeEach(() => {
        root = lib.buildBinaryTree([...input]);
      });

      it('sets the children of the root', () => {
        if (!root || !root.left) {
          throw new Error('Target nodes must not be null');
        }

        expect(root.left.val).toBe(2);
        expect(root.right).toBeNull();
      });
    });

    describe('for ones having right child', () => {
      const input = [1, null, 3];

      /** @type {TreeNode<number> | null} */
      let root;

      beforeEach(() => {
        root = lib.buildBinaryTree([...input]);
      });

      it('sets the children of the root', () => {
        if (!root || !root.right) {
          throw new Error('Target nodes must not be null');
        }

        expect(root.left).toBeNull();
        expect(root.right.val).toBe(3);
      });
    });

    describe('for leaf nodes in between', () => {
      const input = [1, 2, 3, null, null, 6, 7];

      /** @type {TreeNode<number> | null} */
      let root;

      beforeEach(() => {
        root = lib.buildBinaryTree([...input]);
      });

      it('leave null if inputs are null', () => {
        if (!root || !root.left) {
          throw new Error('Target nodes must not be null');
        }

        expect(root.left.val).toBe(2);
        expect(root.left.left).toBeNull();
        expect(root.left.right).toBeNull();
      });

      it('sets values after null slots', () => {
        if (!root || !root.right || !root.right.left || !root.right.right) {
          throw new Error('Target nodes must not be null');
        }

        expect(root.right.val).toBe(3);
        expect(root.right.left.val).toBe(6);
        expect(root.right.right.val).toBe(7);
      });
    });
  });

  describe('buildBinarySearchTree()', () => {
    it('simple', () => {
      const input = [2, 1, 3];
      /** @type {TreeNode<number>} */
      const expected = {
        left: { left: null, right: null, val: 1 },
        right: { left: null, right: null, val: 3 },
        val: 2,
      };
      expect(lib.buildBinarySearchTree(input)).toEqual(expected);
    });

    it('appends to proper parent node', () => {
      const input = [2, 1, 3, 4];
      /** @type {TreeNode<number>} */
      const expected = {
        left: { left: null, right: null, val: 1 },
        right: {
          left: null,
          right: { left: null, right: null, val: 4 },
          val: 3,
        },
        val: 2,
      };
      expect(lib.buildBinarySearchTree(input)).toEqual(expected);
    });
  });

  describe('bfsToTree()', () => {
    it('creates full of 2 levels', () => {
      const arr = [1, 2, 3];
      /** @type {TreeNode<number>} */
      const expected = {
        left: {
          left: null,
          right: null,
          val: 2,
        },
        right: {
          left: null,
          right: null,
          val: 3,
        },
        val: 1,
      };
      expect(lib.bfsToTree(arr)).toEqual(expected);
    });

    it('appends null', () => {
      const arr = [1, 2, 3, null, null, null, 7];
      /** @type {TreeNode<number>} */
      const expected = {
        left: {
          left: null,
          right: null,
          val: 2,
        },
        right: {
          left: null,
          right: { left: null, right: null, val: 7 },
          val: 3,
        },
        val: 1,
      };
      expect(lib.bfsToTree(arr)).toEqual(expected);
    });
  });

  describe('treeToBfs()', () => {
    it('returns empty if null', () => {
      expect(lib.treeToBfs(null)).toEqual([]);
    });

    it('simple 2 levels', () => {
      expect(lib.treeToBfs({
        left: { left: null, right: null, val: 2 },
        right: { left: null, right: null, val: 3 },
        val: 1,
      })).toEqual([1, 2, 3]);
    });

    it.only('2 levels without left arm', () => {
      expect(lib.treeToBfs({
        left: null,
        right: { left: null, right: null, val: 3 },
        val: 1,
      })).toEqual([1, null, 3]);
    });

    it('3 levels without any left arms', () => {
      expect(lib.treeToBfs({
        left: null,
        right: {
          left: null,
          right: {
            left: null,
            right: null,
            val: 7,
          },
          val: 3,
        },
        val: 1,
      })).toEqual([1, null, 3, null, 7]);
    });
  });
});
