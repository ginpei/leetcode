const { KthLargest } = require('./index');

describe('703. Kth Largest Element in a Stream', () => {
  /** @type {KthLargest} */
  let kthLargest;

  it('example', () => {
    const arr = [4, 5, 8, 2];
    kthLargest = new KthLargest(3, arr);

    let result;

    result = kthLargest.add(3);
    expect(result).toBe(4);

    result = kthLargest.add(5);
    expect(result).toBe(5);

    result = kthLargest.add(10);
    expect(result).toBe(5);

    result = kthLargest.add(9);
    expect(result).toBe(8);

    result = kthLargest.add(4);
    expect(result).toBe(8);
  });
});
