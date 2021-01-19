let calculations = 0;
function fibonacci(n) {
    calculations++;
    if (n < 2) return n;
    else {
        return fibonacci(n-1) + fibonacci(n-2)
    }
}

function memoizedFibonacci() {
    const cache = {};
    return function fibonacci(n) {
        if (n in cache) {
            return cache[n];
        } else {
            if (n < 2) return n;
            else {
                cache[n-1] = fibonacci(n-1);
                cache[n-2] =fibonacci(n-2);
                return cache[n-1] + cache[n-2] 
            }
        }
    }
}
const fib = memoizedFibonacci();
// console.log(fibonacci(7), calculations);

console.log(fib(7));
// 0 1 1 2 3 5 8 13 21 34 55