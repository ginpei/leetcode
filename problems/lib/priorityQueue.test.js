const { createHeap, pop, push } = require('./priorityQueue');

describe('priorityQueue', () => {
  describe('createHeap()', () => {
    it('creates heap', () => {
      const numbers = [3, 1, 4, 1, 5, 9, 2];
      const heap = [null, 9, 4, 5, 1, 1, 3, 2];
      expect(createHeap(numbers)).toEqual(heap);
    });
  });

  describe('push()', () => {
    it('pushes a minimum value to the end', () => {
      const heap = [null, 9, 4, 5, 1, 1, 3, 2];
      push(heap, 0);
      expect(heap).toEqual(
        [null, 9, 4, 5, 1, 1, 3, 2, 0],
      );
    });

    it('pushes a maximum value to the top', () => {
      const heap = [null, 9, 4, 5, 1, 1, 3, 2];
      push(heap, 10);
      expect(heap).toEqual(
        [null, 10, 9, 5, 4, 1, 3, 2, 1],
      );
    });

    it('pushes a value in the middle', () => {
      const heap = [null, 9, 4, 5, 1, 1, 3, 2];
      push(heap, 6);
      expect(heap).toEqual(
        [null, 9, 6, 5, 4, 1, 3, 2, 1],
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
        heap = [null];
        popped = pop(heap);
      });

      it('returns null', () => {
        expect(popped).toBe(Number.null);
      });

      it('leaves heap', () => {
        expect(heap).toEqual([null]);
      });
    });

    describe('without any children', () => {
      beforeEach(() => {
        heap = [null, 3];
        popped = pop(heap);
      });

      it('returns the top value', () => {
        expect(popped).toBe(3);
      });

      it('removes the top value', () => {
        expect(heap).toEqual([null]);
      });
    });

    describe('with both children', () => {
      beforeEach(() => {
        heap = [null, 3, 2, 1];
        popped = pop(heap);
      });

      it('returns the top value', () => {
        expect(popped).toBe(3);
      });

      it('sorts', () => {
        expect(heap).toEqual([null, 2, 1]);
      });
    });

    describe('with less left and greater right', () => {
      beforeEach(() => {
        heap = [null, 3, 1, 2];
        popped = pop(heap);
      });

      it('sorts', () => {
        expect(heap).toEqual([null, 2, 1]);
      });
    });

    describe('with only left child', () => {
      beforeEach(() => {
        heap = [null, 3, 2];
        popped = pop(heap);
      });

      it('returns the top value', () => {
        expect(popped).toBe(3);
      });

      it('sorts', () => {
        expect(heap).toEqual([null, 2]);
      });
    });

    describe('with full of grandchildren', () => {
      beforeEach(() => {
        heap = [null, 7, 6, 5, 4, 3, 2, 1];
        popped = pop(heap);
      });

      it('sorts', () => {
        expect(heap).toEqual(
          [null, 6, 4, 5, 1, 3, 2],
        );
      });
    });
  });
});
