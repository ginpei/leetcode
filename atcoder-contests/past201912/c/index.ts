/**
 * C - The Third
 * @see https://atcoder.jp/contests/past201912-open/tasks/past201912_c
 */

process.stdin.on('data', (buffer) => {
  const inputs = String(buffer).split(' ')
    .sort((s1, s2) => Number(s2) - Number(s1));
  process.stdout.write(inputs[2]);
});
