// Complete the kaprekarNumbers function below.
function kaprekarNumbers(p, q) {
    const numbers = []
    for(let i = p; i <= q; i++) {
        const length = (''+i).length;
        const square = ''+i*i;
        const sumOfSquare = square.length === 1 ? square : parseInt([...square].slice(square.length - length).join('')) + parseInt([...square].slice(0, square.length - length).join(''));
        if (sumOfSquare == i) {
            numbers.push(i);
        }
    }
    numbers.length > 0 ? console.log(numbers.join(' ')) : console.log('INVALID RANGE');
}

console.log(kaprekarNumbers(1, 100)); // 1 9 45 55 99
console.log(kaprekarNumbers(400, 700)); // INVALID_RANGE





/**
 * 
 * 
 *  4*4 = 16 -> 1+6 = 7
 *  5*5 = 25 -> 2+5 = 7
 *  
 */