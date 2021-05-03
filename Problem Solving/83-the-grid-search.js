/*
 * Complete the 'gridSearch' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING_ARRAY G
 *  2. STRING_ARRAY P
 */

function gridSearch(G, P) {
    let initialLineMatched = false;
    let startIndex = -1;
    let rowNumber = -1;
    for (let i = 0; i < G.length; i++) {
        if (G[i].includes(P[0]) && !initialLineMatched) {
            initialLineMatched = true;
            startIndex = G[i].indexOf(P[0])
            rowNumber = i+1;
        }
    }
    if (initialLineMatched) {
        for (let j = 1; j < P.length; j++) {
            if (G[rowNumber].indexOf(P[j]) !== startIndex) {
                return 'NO';
            }
            rowNumber++;
        }
    } else {
        return 'NO';
    }
    return 'YES';
}

// console.log(gridSearch(['7283455864',
//     '6731158619',
//     '8988242643',
//     '3830589324',
//     '2229505813',
//     '5633845374',
//     '6473530293',
//     '7053106601',
//     '0834282956',
//     '4607924137'], ['9505',
//         '3845',
//         '3530']))

console.log(gridSearch(['111111111111111',
    '111111111111111',
    '111111111111111',
    '111111011111111',
    '111111111111111',
    '111111111111111',
    '101010101010101'], ['11111',
        '11111',
        '11111',
        '11110']))