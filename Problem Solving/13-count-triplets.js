// Complete the countTriplets function below.
function countTriplets(arr, r) {
    let map2 = {};
    let map3 = {};
    let count = 0;
    for (let i = 0; i < arr.length; ++i) {
        let n = arr[i];
        if (map3[n]) {
            count += map3[n];
        }
        if (map2[n]) {
            map3[n * r] = map3[n * r] ? map3[n * r] + map2[n] : map2[n];
        }
        map2[n * r] = map2[n * r] ? map2[n * r] + 1 : 1;
    }
    return count;
}

console.log(countTriplets([1,5,5,25,125], 5));

