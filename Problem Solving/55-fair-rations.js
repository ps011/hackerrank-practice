// Complete the fairRations function below.
function fairRations(B) {
    let count = 0;
    let sum = B.reduce((acc, cv) => {
        return acc+=cv;
    }, 0);
    if (sum%2!==0) {
        return 'NO';
    } else {
    for(let i = 0; i < B.length; i++) {
        if (B[i]%2 !== 0) {
            if (i>0 && B[i-1]%2!==0) {
                B[i]++;
                B[i-1]++;
                count+=2
            } else {
                B[i]++;
                B[i+1]++;
                count+=2;
            }
        }
    }
    }
    return count;
}

console.log(fairRations([1,2]));
console.log(fairRations([2,3,4,5,6]));