/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
    let result = 0;
    for(let i = 0; i < Math.max(...b)+1; i++) {
        if (a.every(aNum => i%aNum === 0)) {
            if (b.every(bNum => bNum%i === 0)) {
            result++;
            }
        }
    }
    return result;
}

console.log(getTotalX([1], [100]))