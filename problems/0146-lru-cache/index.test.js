const { LRUCache } = require('./index');

describe('146. LRU Cache', () => {
  it('example', () => {
    const cache = new LRUCache(2 /* capacity */);

    cache.put(1, 1);
    cache.put(2, 2);
    expect(cache.get(1)).toBe(1); // returns 1
    cache.put(3, 3); // evicts key 2
    expect(cache.get(2)).toBe(-1); // returns -1 (not found)
    cache.put(4, 4); // evicts key 1
    expect(cache.get(1)).toBe(-1); // returns -1 (not found)
    expect(cache.get(3)).toBe(3); // returns 3
    expect(cache.get(4)).toBe(4); // returns 4
  });

  it('WA', () => {
    // ["LRUCache", "put", "get", "put", "get", "get"]
    // [[1],        [2,1], [2],   [3,2], [2],   [3]]

    const cache = new LRUCache(1);
    cache.put(2, 1);
    expect(cache.get(2)).toBe(1);
    cache.put(3, 2);
    expect(cache.get(2)).toBe(-1);
    expect(cache.get(3)).toBe(2);
  });
});
