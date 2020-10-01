// Complete the birthday function below.
function birthday(s, d, m) {
    let result = 0;
    for(let i = 0; i < (s.length - m) + 1; i++) {
        let currentChunk = s.slice(i, i+m);
        let chunkSum = currentChunk.reduce((a,b) => a+b);
        if (d === chunkSum) {
            result++;
        }
    }
return result;
}

console.log(birthday([1,2,1,3,2], 3, 2)); //2
console.log(birthday([4], 4, 1)); //2