/**
 * 146. LRU Cache
 * @see https://leetcode.com/problems/lru-cache/
 */

/**
 * Your LRUCache object will be instantiated and called as such:
 * @example
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
class LRUCache {
  /**
   * @param {number} capacity
   */
  constructor(capacity) {
    this.capacity = capacity;
    /** @type {Map<number, number>} */
    this.caches = new Map();
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    const value = this.caches.get(key) || -1;
    if (value >= 0) {
      this.caches.delete(key);
      this.caches.set(key, value);
    }
    return value;
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    this.caches.delete(key);
    this.caches.set(key, value);

    if (this.caches.size > this.capacity) {
      const it = this.caches.keys();
      const firstKey = it.next().value;
      this.caches.delete(firstKey);
    }
  }
}

module.exports.LRUCache = LRUCache;
