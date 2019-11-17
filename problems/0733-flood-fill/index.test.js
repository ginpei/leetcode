const { floodFill } = require('./index');

describe.only('733. Flood Fill', () => {
  it('example 1', () => {
    const image = [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ];
    const output = [
      [2, 2, 2],
      [2, 2, 0],
      [2, 0, 1],
    ];
    expect(floodFill(image, 1, 1, 2)).toEqual(output);
  });
});
