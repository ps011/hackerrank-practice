/*
 * Complete the 'rotateLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

function rotateLeft(d, arr) {
    const before = [];
    const after = [];
    
    arr.forEach((num, index) => {
        if (index >= d) {
            before.push(num);
        } else {
            after.push(num);
        }
    });
    return [...before, ...after];

}

console.log(rotateLeft([1,2,3,4,5], 2));