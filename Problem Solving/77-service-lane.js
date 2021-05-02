/*
 * Complete the 'serviceLane' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY n
 *  2. 2D_INTEGER_ARRAY cases
 */

function serviceLane(n, cases) {
    const result = [];
    for (let i = 0; i < cases.length; i++) {
        result.push(Math.min(...n.slice(cases[i][0], cases[i][1]+1)))
    }
    return result;
}

console.log(serviceLane([2,3,2,1], [[1,2], [2,4]]))