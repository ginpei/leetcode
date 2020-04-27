const { imageSmoother } = require('./index');

describe('661. Image Smoother', () => {
  it('example', () => {
    expect(imageSmoother([
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ])).toEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  });
});
