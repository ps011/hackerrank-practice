// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
    const max = Math.max(...ar);
    const filteredArray = ar.filter(candle => candle === max);
    return filteredArray.length;
}

const ar = [3,3,1,2]
console.log(birthdayCakeCandles(ar))