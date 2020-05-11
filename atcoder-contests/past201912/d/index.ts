/**
 * D - Duplicated?
 * @see https://atcoder.jp/contests/past201912-open/tasks/past201912_d
 */

import { readFileSync } from 'fs';

const input = readFileSync('/dev/stdin', 'utf8');

const inputs = input.split('\n');
const [sLength, ...sNums] = inputs;
const length = Number(sLength);

const expected = new Set<string>();
const existing = new Set<string>();
let dup = '';

for (let i = 0; i < length; i++) {
  expected.add(String(i + 1));
}

sNums.forEach((s) => {
  if (existing.has(s)) {
    dup = s;
  }
  existing.add(s);
  expected.delete(s);
});

if (dup) {
  const lack = expected.values().next().value;
  process.stdout.write(`${dup} ${lack}`);
} else {
  process.stdout.write('Correct');
}
