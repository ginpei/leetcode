const lib = require('./grid');

describe('grid', () => {
  describe('floodFill()', () => {
    describe('with basic grid', () => {
      const grid = [
        [1, 1, 1],
        [1, 1, 0],
        [1, 0, 1],
      ];

      const output = [
        [2, 2, 2],
        [2, 2, 0],
        [2, 0, 1],
      ];

      /** @type {number[][]} */
      let result;

      beforeAll(() => {
        result = lib.floodFill(grid, 1, 1, 2);
      });

      it('fills connected areas', () => {
        expect(result).toEqual(output);
      });

      it('returns the given instance itself', () => {
        expect(result).toBe(grid);
      });
    });

    describe('returns the original if the specified color already', () => {
      const grid = [
        [1, 1, 1],
        [1, 1, 0],
        [1, 0, 1],
      ];
      expect(lib.floodFill(grid, 1, 1, 1)).toBe(grid);
    });
  });

  describe('fillGridCells()', () => {
    it('fills connected areas', () => {
      const grid = [
        [1, 1, 1],
        [1, 1, 0],
        [1, 0, 1],
      ];
      const output = [
        [2, 2, 2],
        [2, 2, 0],
        [2, 0, 1],
      ];
      expect(lib.fillGridCells(grid, 1, 1, 2, 1)).toEqual(output);
    });

    it('fills 1x1 grid', () => {
      const grid = [
        [1],
      ];
      const output = [
        [2],
      ];
      expect(lib.fillGridCells(grid, 0, 0, 2, 1)).toEqual(output);
    });

    it('does nothing if the location is not the target', () => {
      const grid = [
        [1, 1, 1],
        [1, 1, 0],
        [1, 0, 1],
      ];
      const output = [
        [1, 1, 1],
        [1, 1, 0],
        [1, 0, 1],
      ];
      expect(lib.fillGridCells(grid, 1, 1, 2, 9)).toEqual(output);
    });

    describe('throws if the specified color already', () => {
      const grid = [
        [1, 1, 1],
        [1, 1, 0],
        [1, 0, 1],
      ];
      expect(() => lib.fillGridCells(grid, 1, 1, 1, 1)).toThrow();
    });
  });
});
