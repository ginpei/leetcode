/**
 * 844. Backspace String Compare
 * @see https://leetcode.com/problems/backspace-string-compare/
 */

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
function backspaceCompare(S, T) {
  let sDeletes = 0;
  let sOffset = 0;
  let tDeletes = 0;
  let tOffset = 0;

  let index = 0;
  let sIndex = S.length - 1;
  let tIndex = T.length - 1;
  while (sIndex >= 0 || tIndex >= 0) {
    sIndex = S.length - (1 + index + sDeletes + sOffset);
    tIndex = T.length - (1 + index + tDeletes + tOffset);

    const s = S[sIndex];
    const t = T[tIndex];
    // console.log(`# '${S}'[${sIndex}]=${s}, '${T}'[${tIndex}]=${t}`);

    let modified = false;

    if (s === "#") {
      sDeletes += 1;
      modified = true;
    } else if (sDeletes > 0) {
      sOffset += 2;
      sDeletes -= 1;
      modified = true;
    }

    if (t === "#") {
      tDeletes += 1;
      modified = true;
    } else if (tDeletes > 0) {
      tOffset += 2;
      tDeletes -= 1;
      modified = true;
    }

    if (modified) {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (s !== t) {
      return false;
    }

    index += 1;
  }

  return true;
}

module.exports.backspaceCompare = backspaceCompare;
