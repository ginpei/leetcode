/**
 * 8. String to Integer (atoi)
 * @see https://leetcode.com/problems/0008-string-to-integer-atoi
 */

const emptyChars = [" ", "\t", "\n", "\r"];
const numberChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const MAX_INT = 2 ** 31 - 1;
const MIN_INT = -(2 ** 31);

/**
 * @param {string} s
 * @return {number}
 */
function myAtoi(s) {
  let n = 0;
  let sign = 1;
  let started = false;
  // eslint-disable-next-line no-restricted-syntax
  for (const c of s) {
    if (!started && emptyChars.includes(c)) {
      continue;
    }

    if (!started && c === "+") {
      started = true;
      continue;
    }

    if (!started && c === "-") {
      started = true;
      sign = -1;
      continue;
    }

    if (!numberChars.includes(c)) {
      break;
    }

    const m = Number(c);
    n = n * 10 + m;
    started = true;
  }

  const result = n * sign;

  if (result > MAX_INT) {
    return MAX_INT;
  }

  if (result < MIN_INT) {
    return MIN_INT;
  }

  return result;
}

module.exports.myAtoi = myAtoi;
