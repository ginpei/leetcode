/**
 * B - Up and Down
 * @see https://atcoder.jp/contests/past201912-open/tasks/past201912_b
 */

import { readFileSync } from 'fs';

const input = readFileSync('/dev/stdin', 'utf8');

const inputs = input.split('\n');
const [sLength, ...sales] = inputs;
const length = Number(sLength);

let last = Number(sales[0]);
for (let i = 1; i < length; i++) {
  const n = Number(sales[i]);
  const diff = n - last;
  let report = '';
  if (diff === 0) {
    report = 'stay';
  } else if (diff > 0) {
    report = `up ${diff}`;
  } else {
    report = `down ${-diff}`;
  }

  process.stdout.write(report);
  process.stdout.write('\n');

  last = n;
}
