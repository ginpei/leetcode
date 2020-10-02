/**
 * 20. Valid Parentheses
 *
 * Given a string containing just the characters `'('`, `')'`, `'{'`, `'}'`,
 * `'['` and `']'`, determine if the input string is valid.
 *
 * An input string is valid if:
 *
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 *
 * Note that an empty string is also considered valid.
 *
 * @see https://leetcode.com/problems/valid-parentheses/
 */

const openParens = "({[";
const closeParens = ")}]";

/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  /** @type {string[]} */
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (openParens.includes(c)) {
      stack.push(c);
    } else if (closeParens.includes(c)) {
      const lastParen = stack.pop() || "";
      if (
        !lastParen ||
        openParens.indexOf(lastParen) !== closeParens.indexOf(c)
      ) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

module.exports.isValid = isValid;
