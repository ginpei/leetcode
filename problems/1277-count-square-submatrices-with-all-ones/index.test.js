const { countSquares } = require('./index');

describe('1277. Count Square Submatrices with All Ones', () => {
  it('example 1', () => {
    const input = [
      [0, 1, 1, 1],
      [1, 1, 1, 1],
      [0, 1, 1, 1],
    ];
    expect(countSquares(input)).toBe(15);
  });

  it('example 2', () => {
    const input = [
      [1, 0, 1],
      [1, 1, 0],
      [1, 1, 0],
    ];
    expect(countSquares(input)).toBe(7);
  });

  it('lack of right bottom corner', () => {
    const input = [
      [0, 1, 1, 1],
      [1, 1, 0, 1],
      [1, 1, 1, 1],
      [1, 0, 1, 0],
    ];
    expect(countSquares(input)).toBe(13);
  });
});
