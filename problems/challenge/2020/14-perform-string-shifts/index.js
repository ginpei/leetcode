/**
 * Perform String Shifts
 * @see https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/529/week-2/3299/
 */

/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
function stringShift(s, shift) {
  const destination = shift.reduce(
    (acc, [direction, amount]) => acc + amount * (direction === 0 ? 1 : -1),
    0
  );

  const l = s.length;
  const pos = ((destination % l) + l) % l;
  const shifted = s.repeat(2).slice(pos, pos + l);
  return shifted;
}

module.exports.stringShift = stringShift;
