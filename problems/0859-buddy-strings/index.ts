/**
 * 859. Buddy Strings
 * @see https://leetcode.com/problems/buddy-strings/
 */
export function buddyStrings(A: string, B: string): boolean {
  if (A.length < 2 || B.length < 2 || A.length !== B.length) {
    return false;
  }

  if (A === B) {
    const s = new Set<string>();
    for (let i = 0; i < A.length; i++) {
      const c = A[i];

      if (s.has(c)) {
        return true;
      }

      s.add(c);
    }

    return false;
  }

  const s1 = new Set<string>();
  const s2 = new Set<string>();
  for (let i = 0; i < A.length; i++) {
    const c1 = A[i];
    const c2 = B[i];

    if (c1 !== c2) {
      if (s1.size > 1) {
        return false;
      }

      s1.add(c1);
      s2.add(c2);
    }
  }

  const same = [...s1].every((v) => s2.has(v));
  return same;
}
