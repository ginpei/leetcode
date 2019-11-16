const { mincostTickets } = require('./index');

describe('983. Minimum Cost For Tickets', () => {
  it('example 1', () => {
    const days = [1, 4, 6, 7, 8, 20];
    const costs = [2, 7, 15];
    expect(mincostTickets(days, costs)).toBe(11);
  });

  it('example 2', () => {
    const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31];
    const costs = [2, 7, 15];
    expect(mincostTickets(days, costs)).toBe(17);
  });
});
