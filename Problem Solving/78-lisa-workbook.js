/*
 * Complete the 'workbook' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n - Number of chapters
 *  2. INTEGER k - Problems on each page
 *  3. INTEGER_ARRAY arr - Number of problem in a chapter
 */

function workbook(n, k, arr) {
    let count = 0;
    let currentPage = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 1; j <= arr[i]; j++) {
            if (k === 1 || j%k == 1) {
                currentPage++;
            }
            if (j === currentPage) {
                console.log(j)
                count++;
            }
        }
    }
    return count;
}

console.log(workbook(5,3, [4,2,6,1,10]))