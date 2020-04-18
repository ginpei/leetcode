const { minPathSum } = require('./index');

describe('64. Minimum Path Sum', () => {
  it('example', () => {
    expect(minPathSum([
      [1, 3, 1],
      [1, 5, 1],
      [4, 2, 1],
    ])).toBe(7);
  });

  it('WA', () => {
    expect(minPathSum([
      [1, 2],
      [1, 1],
    ])).toBe(3);
  });
});
