const { intervalIntersection } = require('./index');

describe('986. Interval List Intersections', () => {
  it('example 1', () => {
    const A = [[0, 2], [5, 10], [13, 23], [24, 25]];
    const B = [[1, 5], [8, 12], [15, 24], [25, 26]];
    expect(intervalIntersection(A, B)).toEqual([
      [1, 2],
      [5, 5],
      [8, 10],
      [15, 23],
      [24, 24],
      [25, 25],
    ]);
  });

  it('range1 followed by range2', () => {
    const A = [[1, 3]];
    const B = [[2, 4]];
    expect(intervalIntersection(A, B)).toEqual([
      [2, 3],
    ]);
  });
});
