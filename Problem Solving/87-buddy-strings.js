/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
 var buddyStrings = function(a, b) {
    let aArr = a.split('');
    let bArr = b.split('');
    const diff = [];
     if (a.length !== b.length) {
         return false;
     }
    if (a === b && new Set(a.split('')).size < a.length) {
        return true;
    } 
           for (let i =0; i < aArr.length; i++) {
            if (aArr[i] !== bArr[i]) {
               diff.push(i);
            }    
        }
    return diff.length === 2 && aArr[diff[0]] === bArr[diff[1]] && aArr[diff[1]] === bArr[diff[0]];
};

console.log(buddyStrings('aa', 'aa')); // true
console.log(buddyStrings('aaaaaaabc', 'aaaaaaacb')); //true
console.log(buddyStrings('ab', 'ab')); // false
console.log(buddyStrings('ab', 'ba')); // true
console.log(buddyStrings('abcaa', 'abcbb')); // false
console.log(buddyStrings('abcd', 'badc')); // false
console.log(buddyStrings('ab', 'ca')); // false
console.log(buddyStrings('abab', 'abab')); // false