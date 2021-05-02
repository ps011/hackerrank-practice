/*
 * Complete the 'beautifulTriplets' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

function beautifulTriplets(d, arr) {
    const tracking = new Map();
    let result = 0
    arr.forEach(num => {
        tracking.set(num, (tracking.get(num) || 0) + 1)
    });
    for (let [key, value] of tracking) {
        if (tracking.has(key+d) && tracking.has(key+d+d)) {
            result = result + (value * tracking.get(key+d) * tracking.get(key+d+d))
        }
      }
      return result;
}

console.log(beautifulTriplets(1, [2,2,3,4,5]))