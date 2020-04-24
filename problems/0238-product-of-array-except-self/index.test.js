const { readFile } = require('fs');
const path = require('path');
const { productExceptSelf } = require('./index');

describe('238. Product of Array Except Self', () => {
  it('example', () => {
    expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
  });

  it('3', () => {
    expect(productExceptSelf([1, 2, 3])).toEqual([6, 3, 2]);
  });

  it('5', () => {
    expect(productExceptSelf([1, 2, 3, 4, 5])).toEqual([120, 60, 40, 30, 24]);
  });

  it('WA 1', () => {
    expect(productExceptSelf([0, 0])).toEqual([0, 0]);
  });

  it('WA 2', () => {
    expect(productExceptSelf([0, 1])).toEqual([1, 0]);
  });

  it('time limit exceeded', (done) => {
    // console.time('time limit exceeded case');
    const caseFilePath = path.join(__dirname, 'time-limit-exceeded-case.json');
    const answerFilePath = path.join(__dirname, 'time-limit-exceeded-answer.json');
    readFile(caseFilePath, 'utf8', (err, json) => {
      expect(err).toBe(null);
      const caseData = JSON.parse(json);

      readFile(answerFilePath, 'utf8', (err2, json2) => {
        expect(err2).toBe(null);
        const answerData = JSON.parse(json2);

        expect(productExceptSelf(caseData)).toEqual(answerData);
        done();
        // console.timeEnd('time limit exceeded case');
      });
    });
  });
});
