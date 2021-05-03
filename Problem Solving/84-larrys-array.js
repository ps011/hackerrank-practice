/*
 * Complete the 'larrysArray' function below.
 *
 * The function is expected to return a STRING. YES or NO
 * The function accepts INTEGER_ARRAY A as parameter.
 */

function larrysArray(A) {
    let count = 0;
    for (let i=1; i<A.length; i++) {
        for (let j=0; j<i; j++) {
            if (A[j]>A[i]) count++;            
        }
    }
    return (count%2==0)?'YES':'NO';
}

console.log(larrysArray([1,6,5,2,4,3]))
console.log(larrysArray([1,6,5,2,3,4])) // 0 4 2 -2 -2 -2
console.log(larrysArray([1,2 ,3, 5, 4]))