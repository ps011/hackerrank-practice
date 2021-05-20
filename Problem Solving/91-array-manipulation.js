/*
 * Complete the 'arrayManipulation' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function arrayManipulation(n, queries) {
   const result = new Array(n).fill(0);
    queries.forEach(query => {
        for (let i = query[0]-1; i<query[1]; i++) {
            result[i]+=query[2];
        }
    });
    return Math.max(...result);
}

console.log(arrayManipulation(10, [[1,5,3],[4,8,7],[6,9,1]]));