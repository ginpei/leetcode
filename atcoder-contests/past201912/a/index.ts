/**
 * A - Is It a Number?
 * @see https://atcoder.jp/contests/past201912-open/tasks/past201912_a
 */

process.stdin.on('data', (v) => {
  const S = String(v);
  const n = Number(S);
  const output = S.startsWith('0x') || Number.isNaN(n)
    ? 'error'
    : String(n * 2);
  process.stdout.write(output);
});
