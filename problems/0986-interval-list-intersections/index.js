/**
 * 986. Interval List Intersections
 * @see https://leetcode.com/problems/interval-list-intersections/
 */

/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
function intervalIntersection(A, B) {
  /** @type {number[][]} */
  const intersections = [];

  let p1 = 0;
  let p2 = 0;
  while (p1 < A.length && p2 < B.length) {
    const [l1, r1] = A[p1];
    const [l2, r2] = B[p2];

    // //         l1     r1     l1     r1
    // // range 1  [-----]     / [-----]
    // // crossing     |||     / |||
    // // range 2      [-----] / [-]
    // //             l2        l2
    // const isFollowed = l1 <= l2 && l2 <= r1;

    // //             l1        l1
    // // range 1      [-----] / [-]
    // // crossing     |||     / |||
    // // range 2  [-----]     / [-----]
    // //         l2     r2     l2     r2
    // const isFollowing = l2 <= l1 && l1 <= r2;

    const left = Math.max(l1, l2);
    const right = Math.min(r1, r2);
    if (left <= right) {
      intersections.push([left, right]);
    }

    if (r1 <= r2) {
      p1 += 1;
    } else if (r1 >= r2) {
      p2 += 1;
    }
  }

  return intersections;
}

module.exports.intervalIntersection = intervalIntersection;
