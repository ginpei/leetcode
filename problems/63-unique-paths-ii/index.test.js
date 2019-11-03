const { uniquePathsWithObstacles } = require('./index');

describe('63. Unique Paths II', () => {
  it('example 1', () => {
    const grid = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ];
    expect(uniquePathsWithObstacles(grid)).toBe(2);
  });

  it('only obstacles', () => {
    const grid = [
      [1],
    ];
    expect(uniquePathsWithObstacles(grid)).toBe(0);
  });

  it('obstacle on the horizontal line', () => {
    const grid = [
      [0, 1],
    ];
    expect(uniquePathsWithObstacles(grid)).toBe(0);
  });

  it('obstacle on the vertical line', () => {
    const grid = [
      [1],
      [0],
    ];
    expect(uniquePathsWithObstacles(grid)).toBe(0);
  });
});
