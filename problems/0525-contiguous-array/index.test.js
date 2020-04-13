const { readFile } = require('fs');
const path = require('path');
const { findMaxLength } = require('./index');

describe('525. Contiguous Array', () => {
  it('example 1', () => {
    expect(findMaxLength([0, 1])).toBe(2);
  });

  it('example 2', () => {
    expect(findMaxLength([0, 1, 0])).toBe(2);
  });

  it('?', () => {
    expect(findMaxLength([0, 0, 1, 0, 0, 0])).toBe(2);
    expect(findMaxLength([0, 0, 1, 0, 0, 0, 1])).toBe(2);
    expect(findMaxLength([0, 0, 1, 0, 0, 0, 1, 1])).toBe(6);
    expect(findMaxLength([0, 1, 0, 0, 0, 1, 1])).toBe(6);
    expect(findMaxLength([1, 0, 0, 0, 1, 1])).toBe(6);
    expect(findMaxLength([0, 0, 0, 1, 1])).toBe(4);
  });

  it('WA 1', () => {
    expect(findMaxLength([0, 0, 0, 1, 1, 1, 0])).toBe(6);
  });

  it('WA 2', () => {
    expect(findMaxLength([0, 0, 1, 0, 0, 0, 1, 1])).toBe(6);
  });

  it('time limit exceeded', (done) => {
    console.time('time limit exceeded case');
    const fname = path.join(__dirname, 'time-limit-exceeded-case.json');
    readFile(fname, 'utf8', (err, json) => {
      expect(err).toBe(null);
      const data = JSON.parse(json);
      expect(findMaxLength(data)).toBe(17698);
      done();
      console.timeEnd('time limit exceeded case');
    });
  });
});
