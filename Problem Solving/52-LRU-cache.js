/**
 * @param {number} capacity
 */
let length = 0
const map = new Map();
const usedKeys = [];
var LRUCache = function(capacity) {
    length = capacity;
};


/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (map.has(key)) {
         const temp = map.get(key);
         map.delete(key);
         map.set(key, temp);
         return temp;
    } else {
        return -1;
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (map.size === length) {
        map.delete(Array.from(map.keys())[0])
    }
     map.set(key, value);
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

var obj = new LRUCache(2)
obj.put(1,0)
obj.put(2,2)
console.log(obj.get(1))
obj.put(3,3)
console.log(obj.get(2))
obj.put(4,4)
console.log(obj.get(1))
console.log(obj.get(3))
console.log(obj.get(4))
