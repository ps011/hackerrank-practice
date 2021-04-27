/*
 * Complete the 'equalizeArray' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function equalizeArray(arr) {
    let maxCount = 1
    const trackingMap = new Map()
    arr.forEach(num => {
    if (trackingMap.has(num)) {
        let temp = trackingMap.get(num)
        temp+=1;
        trackingMap.set(num, temp)
        if (trackingMap.get(num) > maxCount) {
            maxCount = trackingMap.get(num)
        }
    } else {
        trackingMap.set(num, 1)
    }
    });
    return arr.length - maxCount;
}

console.log(equalizeArray([1,3,2,2]));
console.log(equalizeArray([3, 3, 2, 1, 3]));