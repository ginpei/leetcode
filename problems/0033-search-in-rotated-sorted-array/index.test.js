const { search } = require('./index');

describe('33. Search in Rotated Sorted Array', () => {
  it('example 1', () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
  });

  it('example 2', () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
  });

  it('even length', () => {
    expect(search([4, 5, 6, 7, 8, 0, 1, 2], 0)).toBe(5);
  });

  it('no elements', () => {
    expect(search([], 1)).toBe(-1);
  });

  it('only one element', () => {
    expect(search([1], 1)).toBe(0);
  });

  describe('only two elements', () => {
    it('the first one', () => {
      expect(search([1, 3], 1)).toBe(0);
    });

    it('the second one', () => {
      expect(search([1, 3], 3)).toBe(1);
    });
  });

  describe('only three elements', () => {
    it('the first one', () => {
      expect(search([1, 3, 8], 1)).toBe(0);
    });

    it('the second one', () => {
      expect(search([1, 3, 8], 3)).toBe(1);
    });

    it('the third one', () => {
      expect(search([1, 3, 8], 8)).toBe(2);
    });
  });
});
