/**
 * 678. Valid Parenthesis String
 * @see https://leetcode.com/problems/valid-parenthesis-string/
 */

/**
 * @param {string} s
 * @return {boolean}
 */
function checkValidString(s) {
  /** @type {number[]} */
  const opens = [];
  /** @type {number[]} */
  const wilds = [];

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === '*') {
      wilds.push(i);
    } else if (c === '(') {
      opens.push(i);
    } else {
      // eslint-disable-next-line no-lonely-if
      if (opens.length > 0) {
        opens.pop();
      } else if (wilds.length > 0) {
        wilds.pop();
      } else {
        return false;
      }
    }
  }

  let openAt = -1;
  while (opens.length > 0) {
    /** @type {typeof opens[number]} */
    openAt = (opens.pop());

    const lastWildAt = wilds.pop();
    if (lastWildAt === undefined || lastWildAt < openAt) {
      return false;
    }
  }

  return true;
}

module.exports.checkValidString = checkValidString;
