/**
 * 886. Possible Bipartition
 * @see https://leetcode.com/problems/possible-bipartition/
 */

/**
 * @typedef {Map<number, boolean>} Team
 */

/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */
function possibleBipartition(N, dislikes) {
  /** @type {Map<number, Team>} */
  const belongings = new Map();

  const result = dislikes.every(([p1, p2]) => {
    const t1 = belongings.get(p1);
    const t2 = belongings.get(p2);

    if (t1 && t2) {
      if (t1 === t2) {
        return t1.get(p1) !== t2.get(p2);
      }

      merge(p1, t1, p2, t2);
      return true;
    }

    if (!t1 && !t2) {
      prepareNewTeam(p1, p2);
      return true;
    }

    addToTeam(p1, t1, p2, t2);
    return true;
  });
  return result;

  /**
   * @param {number} p1
   * @param {Team} t1
   * @param {number} p2
   * @param {Team} t2
   */
  function merge(p1, t1, p2, t2) {
    const [from, to] = t1.size < t2.size ? [t1, t2] : [t2, t1];
    const modifier = t1.get(p1) === t2.get(p2);

    for (const [p, b] of from) {
      to.set(p, b !== modifier);
    }
  }

  /**
   * @param {number} p1
   * @param {number} p2
   */
  function prepareNewTeam(p1, p2) {
    const t = createTeamGroup();
    t.set(p1, true);
    belongings.set(p1, t);
    t.set(p2, false);
    belongings.set(p2, t);
  }

  /**
   * @param {number} p1
   * @param {Team | undefined} t1
   * @param {number} p2
   * @param {Team | undefined} t2
   */
  function addToTeam(p1, t1, p2, t2) {
    if (t1) {
      t1.set(p2, !t1.get(p1));
      belongings.set(p2, t1);
    } else if (t2) {
      t2.set(p1, !t2.get(p2));
      belongings.set(p1, t2);
    } else {
      throw new Error("!");
    }
  }
}

/**
 * @returns {Team}
 */
function createTeamGroup() {
  return new Map();
}

module.exports.possibleBipartition = possibleBipartition;
