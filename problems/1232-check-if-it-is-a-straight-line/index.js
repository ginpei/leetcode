/**
 * 1232. Check If It Is a Straight Line
 * @see https://leetcode.com/problems/check-if-it-is-a-straight-line/
 */

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
function checkStraightLine(coordinates) {
  const [c0] = coordinates;
  const tilt = [coordinates[1][0] - c0[0], coordinates[1][1] - c0[1]];

  const a = tilt[1] / tilt[0];
  const b = c0[1] - a * c0[0];
  /** @type {(x: number) => number} */
  const f = (x) => a * x + b;

  for (let i = 2; i < coordinates.length; i++) {
    const c = coordinates[i];
    if (
      (Number.isFinite(a) && c[1] !== f(c[0])) ||
      (!Number.isFinite(a) && c[0] !== c0[0])
    ) {
      return false;
    }
  }

  return true;
}

module.exports.checkStraightLine = checkStraightLine;
