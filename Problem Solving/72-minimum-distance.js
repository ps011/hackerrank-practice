/*
 * Complete the 'minimumDistances' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function minimumDistances(a) {
    const tracker = new Map();
    let min = -1
    a.forEach((num, index) => {
        if (tracker.has(num)) {
            // calculate difference, compare with currentMin
            if (index - tracker.get(num) < min || min === -1) {
                min = index - tracker.get(num);
            } 
        }
        tracker.set(num, index)
    })
    return min;
}

console.log(minimumDistances([3,2,1,2,3,4]))


/**
 * 
 * {
 *  3: [0, 4],
 *  2: [1, 2]
 * }
 * 
 * 
 */