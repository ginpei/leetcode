const {
  lastStoneWeight, createHeap, push, pop,
} = require('./index');

describe('1046. Last Stone Weight', () => {
  it('example 1', () => {
    expect(lastStoneWeight([2, 7, 4, 1, 8, 1])).toBe(1);
  });

  it('wa 1: returns 0 if nothing remains', () => {
    expect(lastStoneWeight([2, 2])).toBe(0);
  });

  it('wa 2', () => {
    expect(lastStoneWeight([10, 10, 7, 2])).toBe(5);
  });

  describe('heap', () => {
    describe('createHeap()', () => {
      it('creates heap', () => {
        const numbers = [3, 1, 4, 1, 5, 9, 2];
        const heap = [NaN, 9, 4, 5, 1, 1, 3, 2];
        expect(createHeap(numbers)).toEqual(heap);
      });
    });

    describe('push()', () => {
      it('pushes a minimum value to the end', () => {
        const heap = [NaN, 9, 4, 5, 1, 1, 3, 2];
        push(heap, 0);
        expect(heap).toEqual(
          [NaN, 9, 4, 5, 1, 1, 3, 2, 0],
        );
      });

      it('pushes a maximum value to the top', () => {
        const heap = [NaN, 9, 4, 5, 1, 1, 3, 2];
        push(heap, 10);
        expect(heap).toEqual(
          [NaN, 10, 9, 5, 4, 1, 3, 2, 1],
        );
      });

      it('pushes a value in the middle', () => {
        const heap = [NaN, 9, 4, 5, 1, 1, 3, 2];
        push(heap, 6);
        expect(heap).toEqual(
          [NaN, 9, 6, 5, 4, 1, 3, 2, 1],
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
          heap = [NaN];
          popped = pop(heap);
        });

        it('returns NaN', () => {
          expect(popped).toBe(Number.NaN);
        });

        it('leaves heap', () => {
          expect(heap).toEqual([NaN]);
        });
      });

      describe('without any children', () => {
        beforeEach(() => {
          heap = [NaN, 3];
          popped = pop(heap);
        });

        it('returns the top value', () => {
          expect(popped).toBe(3);
        });

        it('removes the top value', () => {
          expect(heap).toEqual([NaN]);
        });
      });

      describe('with both children', () => {
        beforeEach(() => {
          heap = [NaN, 3, 2, 1];
          popped = pop(heap);
        });

        it('returns the top value', () => {
          expect(popped).toBe(3);
        });

        it('sorts', () => {
          expect(heap).toEqual([NaN, 2, 1]);
        });
      });

      describe('with less left and greater right', () => {
        beforeEach(() => {
          heap = [NaN, 3, 1, 2];
          popped = pop(heap);
        });

        it('sorts', () => {
          expect(heap).toEqual([NaN, 2, 1]);
        });
      });

      describe('with only left child', () => {
        beforeEach(() => {
          heap = [NaN, 3, 2];
          popped = pop(heap);
        });

        it('returns the top value', () => {
          expect(popped).toBe(3);
        });

        it('sorts', () => {
          expect(heap).toEqual([NaN, 2]);
        });
      });

      describe('with full of grandchildren', () => {
        beforeEach(() => {
          heap = [NaN, 7, 6, 5, 4, 3, 2, 1];
          popped = pop(heap);
        });

        it('sorts', () => {
          expect(heap).toEqual(
            [NaN, 6, 4, 5, 1, 3, 2],
          );
        });
      });
    });
  });
});
