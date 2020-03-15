const { createHeap, pop, push } = require('./priorityQueue');

describe('priorityQueue', () => {
  describe('createHeap()', () => {
    it('creates heap', () => {
      const numbers = [3, 1, 4, 1, 5, 9, 2];
      const heap = createHeap([9, 4, 5, 1, 1, 3, 2]);
      expect(createHeap(numbers)).toEqual(heap);
    });
  });

  describe('push()', () => {
    it('pushes a minimum value to the end', () => {
      const heap = createHeap([9, 4, 5, 1, 1, 3, 2]);
      push(heap, 0);
      expect(heap).toEqual(
        [undefined, 9, 4, 5, 1, 1, 3, 2, 0],
      );
    });

    it('pushes a maximum value to the top', () => {
      const heap = createHeap([9, 4, 5, 1, 1, 3, 2]);
      push(heap, 10);
      expect(heap).toEqual(
        [undefined, 10, 9, 5, 4, 1, 3, 2, 1],
      );
    });

    it('pushes a value in the middle', () => {
      const heap = createHeap([9, 4, 5, 1, 1, 3, 2]);
      push(heap, 6);
      expect(heap).toEqual(
        [undefined, 9, 6, 5, 4, 1, 3, 2, 1],
      );
    });
  });

  describe('pop()', () => {
    /** @type {number[]} */
    let heap;

    /** @type {number | undefined} */
    let popped;

    describe('with empty heap', () => {
      beforeEach(() => {
        heap = createHeap([]);
        popped = pop(heap);
      });

      it('returns undefined', () => {
        expect(popped).toBe(undefined);
      });

      it('leaves heap', () => {
        expect(heap).toEqual([undefined]);
      });
    });

    describe('without any children', () => {
      beforeEach(() => {
        heap = createHeap([3]);
        popped = pop(heap);
      });

      it('returns the top value', () => {
        expect(popped).toBe(3);
      });

      it('removes the top value', () => {
        expect(heap).toEqual([undefined]);
      });
    });

    describe('with both children', () => {
      beforeEach(() => {
        heap = createHeap([3, 2, 1]);
        popped = pop(heap);
      });

      it('returns the top value', () => {
        expect(popped).toBe(3);
      });

      it('sorts', () => {
        expect(heap).toEqual([undefined, 2, 1]);
      });
    });

    describe('with less left and greater right', () => {
      beforeEach(() => {
        heap = createHeap([3, 1, 2]);
        popped = pop(heap);
      });

      it('sorts', () => {
        expect(heap).toEqual([undefined, 2, 1]);
      });
    });

    describe('with only left child', () => {
      beforeEach(() => {
        heap = createHeap([3, 2]);
        popped = pop(heap);
      });

      it('returns the top value', () => {
        expect(popped).toBe(3);
      });

      it('sorts', () => {
        expect(heap).toEqual([undefined, 2]);
      });
    });

    describe('with full of grandchildren', () => {
      beforeEach(() => {
        heap = createHeap([7, 6, 5, 4, 3, 2, 1]);
        popped = pop(heap);
      });

      it('sorts', () => {
        expect(heap).toEqual(
          [undefined, 6, 4, 5, 1, 3, 2],
        );
      });
    });
  });
});
