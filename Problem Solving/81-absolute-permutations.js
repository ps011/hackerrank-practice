/*
 * Complete the 'absolutePermutation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 */

function absolutePermutation(n, k) {
    const result = {};
     for (let i = 1; i <= n; i++) {
         if ( i > k && Math.abs(i-k) > 0 && Math.abs(i - k) <= n && !result[Math.abs(i - k)]) {
             result[Math.abs(i - k)] = i;
         }
         else if (k + i <= n && !result[i + k]) {
             result[k + i] = i
         } else {
             return [-1];
         }
     }
     return Object.values(result);
 }


// console.log(absolutePermutation(4, 2));
// console.log(absolutePermutation(2, 1));
// console.log(absolutePermutation(3, 0));
// console.log(absolutePermutation(3, 2));
// console.log(absolutePermutation(10, 0));
// console.log(absolutePermutation(10, 1)); // 2 1 4 3 6 5 8 7 10 9
// console.log(absolutePermutation(7, 0));
// console.log(absolutePermutation(10, 9));
// console.log(absolutePermutation(9, 0));
// console.log(absolutePermutation(10, 3));
console.log(absolutePermutation(8, 2)); // 3 4 1 2 7 8 5 6
// console.log(absolutePermutation(8, 0));
// console.log(absolutePermutation(7, 0));
