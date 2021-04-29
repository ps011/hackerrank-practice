/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
    const result = [];
    const tempResult = []
    let i = 0; 
    let j = 0;
    while (i < n) {
        if (tempResult.join('') === target.join('')) {
            break;
        }
        tempResult.push(i + 1);
        result.push('Push')
        if (target[j] !== tempResult[j]) {
            tempResult.pop();
            result.push('Pop')
            i++;
        } else {
            i++;
            j++;
        }
    }
    return result;
};

console.log(buildArray([2, 3, 4], 4))
