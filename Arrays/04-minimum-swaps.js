// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
let swaps = 0;
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] !== i+1) {
            arr[arr.lastIndexOf(i+1)] = arr[i];
            swaps++;
        }
    }
    return swaps;
}

// const arra = [2,31,1,38,29,5,44,6,12,18,39,9,48,49,13,11,7,27,14,33,50,21,46,23,15,26,8,47,40,3,32,22,34,42,16,41,24,10,4,28,36,30,37,35,20,17,45,43,25,19]
const arra = [2,1,3]
console.log(minimumSwaps(arra))