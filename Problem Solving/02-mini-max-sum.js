// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    const max = Math.max(...arr)
    const min = Math.min(...arr)
    const sum = arr.reduce((currentValue, sum) => sum+=currentValue, 0)
    console.log(`${sum-max} ${sum-min}`)
}

const arr = [1, 2, 3, 4, 5];