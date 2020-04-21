const path = require('path');
const { readFile } = require('fs');
const { BinaryMatrix, leftMostColumnWithOne } = require('./index');

describe('challenge/2020/21/Leftmost Column with at Least a One', () => {
  it('example 1', () => {
    expect(leftMostColumnWithOne(new BinaryMatrix([[0, 0], [1, 1]]))).toBe(0);
  });

  it('example 2', () => {
    expect(leftMostColumnWithOne(new BinaryMatrix([[0, 0], [0, 1]]))).toBe(1);
  });

  it('example 3', () => {
    expect(leftMostColumnWithOne(new BinaryMatrix([[0, 0], [0, 0]]))).toBe(-1);
  });

  it('get limit exceeded', async () => {
    const caseFileName = 'api-limit-exceeded-case.json';
    const input = await readJson(caseFileName);
    expect(leftMostColumnWithOne(new BinaryMatrix(input))).toBe(39);
  });

  /**
   * @param {string} fileName
   * @returns {Promise<any>}
   */
  function readJson(fileName) {
    return new Promise((resolve, reject) => {
      readFile(path.join(__dirname, fileName), 'utf8', (fileError, json) => {
        if (fileError) {
          reject(fileError);
          return;
        }

        try {
          const input = JSON.parse(json);
          resolve(input);
        } catch (jsonError) {
          reject(jsonError);
        }
      });
    });
  }
});
