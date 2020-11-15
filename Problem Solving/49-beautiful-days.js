// Complete the beautifulDays function below.
function beautifulDays(i, j, k) {
    let days = 0;
    for (let start = i; start <= j; start++ ) {
        const revStart = parseInt((''+start).split('').reverse().join(''));
        if (Math.abs(start - revStart) % k === 0) {
            days++;
        }
    }
    return days;
}

console.log(beautifulDays(20,23,6));