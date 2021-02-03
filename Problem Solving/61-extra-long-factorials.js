// Complete the extraLongFactorials function below.
function extraLongFactorials(n) {
    let memoization = [BigInt(0), BigInt(1)];
    const factorial = num => (typeof memoization[num] !== 'number')
        ? ((num - BigInt(1)) > 0
            ? (num * factorial(num - BigInt(1)))
            : BigInt(1)
        )
        : memoization[num]

    return String(factorial(BigInt(n)));
}

console.log(extraLongFactorials(25));