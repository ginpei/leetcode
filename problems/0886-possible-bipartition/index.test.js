const { possibleBipartition } = require('./index');

describe('886. Possible Bipartition', () => {
  it('example 1', () => {
    expect(possibleBipartition(4, [[1, 2], [1, 3], [2, 4]])).toBeTruthy();
  });

  it('example 2', () => {
    expect(possibleBipartition(3, [[1, 2], [1, 3], [2, 3]])).toBeFalsy();
  });

  it('example 3', () => {
    expect(
      possibleBipartition(5, [[1, 2], [2, 3], [3, 4], [4, 5], [1, 5]]),
    ).toBeFalsy();
  });

  it('empty', () => {
    expect(
      possibleBipartition(5, []),
    ).toBeTruthy();
  });

  it('two hate each other', () => {
    expect(
      possibleBipartition(2, [[1, 2], [2, 1]]),
    ).toBeTruthy();
  });

  it('three hate each other', () => {
    expect(
      possibleBipartition(
        10,
        [
          [4, 7], [4, 8], [2, 8], [8, 9], [1, 6], [5, 8], [1, 2], [6, 7],
          [3, 10], [8, 10], [1, 5], [7, 10], [1, 10], [3, 5], [3, 6], [1, 4],
          [3, 9], [2, 3], [1, 9], [7, 9], [2, 7], [6, 8], [5, 7], [3, 4],
        ],
      ),
    ).toBeTruthy();
  });
});
